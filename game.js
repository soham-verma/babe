(() => {
  const $ = (id) => document.getElementById(id);
  const state = {
    name: "babe",
    mission: MISSIONS[0],
    hearts: 72,
    sanity: 78,
    eventI: 0,
    flags: {},
    stats: { chipsLost: 0, timesMad: 0, texts: 0, paused: 0, score: 0 },
    muted: false,
    typing: false,
    mini: { running: false, x: 40, y: 120, vy: 0, on: true, t: 0, slimes: [], dead: 0 }
  };

  const audio = {
    ctx: null,
    ensure() {
      if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.ctx.state === "suspended") this.ctx.resume();
      return this.ctx;
    },
    tone(freq, dur = 0.12, type = "sine", gain = 0.04) {
      if (state.muted) return;
      const ctx = this.ensure();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.value = gain;
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur);
    },
    blip() { this.tone(640, 0.07, "triangle", 0.03); },
    ping() { this.tone(880, 0.1, "square", 0.025); this.tone(1320, 0.08, "sine", 0.02); },
    good() { this.tone(523, 0.1); setTimeout(() => this.tone(784, 0.14), 80); },
    bad() { this.tone(220, 0.18, "sawtooth", 0.03); },
    tap() { this.tone(180, 0.05, "square", 0.02); }
  };

  function mountNori() {
    const tpl = $("nori-svg");
    document.querySelectorAll("[data-nori]").forEach((el, i) => {
      el.innerHTML = "";
      const node = tpl.content.cloneNode(true);
      node.querySelectorAll("[id]").forEach((tagged) => {
        const old = tagged.id;
        const next = `${old}-${i}`;
        tagged.id = next;
        node.querySelectorAll(`[fill="url(#${old})"]`).forEach((use) => {
          use.setAttribute("fill", `url(#${next})`);
        });
      });
      el.appendChild(node);
    });
  }

  function setNori(mood, pose) {
    document.querySelectorAll("[data-nori]").forEach((el) => {
      el.className = `nori pose-${pose || "idle"} mood-${mood || "smile"}`;
      if (el.id === "nori-portrait") el.classList.add("pose-bust");
    });
  }

  function setMeters() {
    state.hearts = clamp(state.hearts, 0, 100);
    state.sanity = clamp(state.sanity, 0, 100);
    $("hearts-bar").style.width = state.hearts + "%";
    $("sanity-bar").style.width = state.sanity + "%";
    $("hearts-val").textContent = Math.round(state.hearts);
    $("sanity-val").textContent = Math.round(state.sanity);
    $("hearts-bar").style.filter = state.hearts < 28 ? "grayscale(.4)" : "none";
  }

  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

  function fmtTime(h, m) {
    const ampm = h >= 12 && h < 24 ? "PM" : "AM";
    const hr = ((h + 11) % 12) + 1;
    return `${hr}:${String(m).padStart(2, "0")} ${ampm}`;
  }

  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $(id).classList.add("active");
  }

  function typeText(el, text, speed = 12) {
    state.typing = true;
    state.fullText = text;
    state.typeEl = el;
    el.textContent = "";
    return new Promise((resolve) => {
      state.typeDone = resolve;
      let i = 0;
      const tick = () => {
        if (!state.typing) return;
        if (i >= text.length) {
          finishTyping();
          return;
        }
        el.textContent += text[i];
        if (text[i] !== " ") audio.blip();
        i += 1;
        state.typeTimer = setTimeout(tick, speed);
      };
      tick();
    });
  }

  function finishTyping() {
    if (!state.typing) return;
    state.typing = false;
    clearTimeout(state.typeTimer);
    if (state.typeEl) state.typeEl.textContent = state.fullText || state.typeEl.textContent;
    const done = state.typeDone;
    state.typeDone = null;
    if (done) done();
  }

  function fillName(s) {
    return (s || "").replaceAll("{name}", state.name);
  }

  function floatFx(emoji) {
    const stage = document.querySelector(".room");
    const n = document.createElement("div");
    n.className = "float-fx";
    n.textContent = emoji;
    n.style.left = 50 + Math.random() * 30 + "%";
    n.style.top = "40%";
    stage.appendChild(n);
    setTimeout(() => n.remove(), 900);
  }

  async function playEvent() {
    if (state.hearts <= 0) return end("dumped");
    if (state.sanity <= 0) return end("snapped");
    if (state.eventI >= state.mission.events.length) return finishNight();

    const ev = state.mission.events[state.eventI];
    $("clock").textContent = fmtTime(ev.time[0], ev.time[1]);
    setNori(ev.mood, ev.pose);
    $("tv").classList.add("paused");
    state.mini.running = false;
    state.stats.paused += 1;

    if (ev.pose === "block" || ev.pose === "lap") $("game-screen").classList.add("shake");
    setTimeout(() => $("game-screen").classList.remove("shake"), 420);

    $("choices").innerHTML = "";
    $("stage-dir").textContent = fillName(ev.dir || "");

    if (ev.type === "phone") {
      await runPhone(ev);
      return;
    }

    showScreen("game-screen");
    $("phone-screen").classList.add("hidden");
    await typeText($("speech-text"), fillName(ev.text));
    renderChoices(ev.choices);
  }

  function renderChoices(choices, into = "choices") {
    const box = $(into);
    box.innerHTML = "";
    choices.forEach((c) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = fillName(c.t);
      b.addEventListener("click", () => onChoice(c));
      box.appendChild(b);
    });
  }

  async function onChoice(c) {
    if (state.typing) return;
    audio.tap();
    $("choices").innerHTML = "";
    $("phone-choices").innerHTML = "";
    $("phone-screen").classList.add("hidden");

    state.hearts += c.h;
    state.sanity += c.s;
    if (c.h < 0) { audio.bad(); floatFx("💔"); }
    else { audio.good(); floatFx(c.h >= 12 ? "💞" : "♡"); }
    if (c.s < 0) floatFx("🫠");
    if (c.flag) state.flags[c.flag] = true;
    if (c.snack === "gone") {
      $("snack").classList.add("gone");
      state.stats.chipsLost += 1;
    }
    if (c.h <= -12) state.stats.timesMad += 1;
    setMeters();

    setNori(c.h >= 8 ? "love" : c.h <= -10 ? "mad" : c.h < 0 ? "pout" : "smile", "idle");
    await typeText($("speech-text"), fillName(c.r), 14);
    const lines = state.mission.lines;
    $("stage-dir").textContent = c.h <= -12 ? lines.cold : c.h >= 12 ? lines.warm : lines.neutral;

    const next = document.createElement("button");
    next.className = "choice";
    next.textContent = state.hearts <= 0 || state.sanity <= 0 ? "uh oh." : "continue →";
    next.addEventListener("click", advance);
    $("choices").appendChild(next);
  }

  async function advance() {
    state.eventI += 1;
    if (state.hearts <= 0) return end("dumped");
    if (state.sanity <= 0) return end("snapped");
    if (state.eventI >= state.mission.events.length) return finishNight();
    await playWindow();
    playEvent();
  }

  function playWindow() {
    return new Promise((resolve) => {
      setNori("smile", "idle");
      $("tv").classList.remove("paused");
      $("speech-text").textContent = state.mission.lines.quiet;
      $("stage-dir").textContent = state.mission.lines.quietDir;
      $("choices").innerHTML = "";
      const skip = document.createElement("button");
      skip.className = "choice";
      skip.textContent = "enjoy it while it lasts →";
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        $("tv").classList.add("paused");
        resolve();
      };
      skip.addEventListener("click", done);
      $("choices").appendChild(skip);
      const timer = setTimeout(done, 4200);
    });
  }

  async function runPhone(ev) {
    showScreen("game-screen");
    $("phone-screen").classList.remove("hidden");
    const contact = ev.contact || { name: "nori ♡", status: "active now · obviously" };
    $("phone-name").textContent = contact.name;
    $("phone-status").textContent = contact.status;
    const thread = $("thread");
    thread.innerHTML = "";
    $("phone-choices").innerHTML = "";
    await typeText($("speech-text"), fillName(ev.text));
    for (const m of ev.messages) {
      await wait(420 + Math.random() * 280);
      const b = document.createElement("div");
      b.className = `bubble ${m.who === "her" ? "her" : m.who === "you" ? "you" : "sys"}`;
      b.textContent = fillName(m.text);
      thread.appendChild(b);
      thread.scrollTop = thread.scrollHeight;
      if (m.who === "her") { audio.ping(); state.stats.texts += 1; }
    }
    renderChoices(ev.choices, "phone-choices");
  }

  function wait(ms) { return new Promise((r) => setTimeout(r, ms)); }

  function finishNight() {
    const f = state.flags;
    const m = state.mission;
    const chaos = m.chaos ? m.chaos(f, state) : f.sassy;
    if (state.hearts <= 0) return end("dumped");
    if (state.sanity <= 0) return end("snapped");
    if (state.hearts >= 88 && state.sanity < 40) return end("simp");
    if (m.golden(f, state)) return end("golden");
    if (chaos && state.hearts >= 40 && state.sanity >= 40) return end("chaos");
    return end("survived");
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem("babe.endings") || "{}"); }
    catch { return {}; }
  }

  function saveEnding(key) {
    const all = loadProgress();
    const list = all[state.mission.id] || [];
    if (!list.includes(key)) list.push(key);
    all[state.mission.id] = list;
    try { localStorage.setItem("babe.endings", JSON.stringify(all)); } catch {}
  }

  function renderMissions() {
    const progress = loadProgress();
    const box = $("missions");
    box.innerHTML = "";
    MISSIONS.forEach((m) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mission" + (m === state.mission ? " selected" : "");
      b.setAttribute("aria-pressed", m === state.mission);
      const found = (progress[m.id] || []).length;
      const total = Object.keys(m.endings).length;
      b.innerHTML = `<span class="mission-emoji">${m.emoji}</span>
        <span class="mission-name">${m.name}</span>
        <span class="mission-blurb">${m.blurb}</span>
        <span class="mission-progress">${found} / ${total} endings</span>`;
      b.addEventListener("click", () => selectMission(m));
      box.appendChild(b);
    });
  }

  function selectMission(m) {
    state.mission = m;
    $("pitch").innerHTML = m.pitch;
    $("start-btn").textContent = m.cta;
    audio.blip();
    renderMissions();
  }

  function end(key) {
    const e = state.mission.endings[key];
    saveEnding(key);
    showScreen("ending-screen");
    $("phone-screen").classList.add("hidden");
    $("ending-kicker").textContent = e.kicker;
    $("ending-title").textContent = e.title;
    $("ending-body").textContent = e.body;
    const found = loadProgress()[state.mission.id] || [];
    $("ending-stats").innerHTML = [
      ["nori's rating", e.rating],
      ["her hearts", Math.round(state.hearts)],
      ["your sanity", Math.round(state.sanity)],
      ["times paused by nori", state.stats.paused],
      ...state.mission.stats(state),
      ["endings found", `${found.length} / ${Object.keys(state.mission.endings).length}`]
    ].map(([k, v]) => `<li><span>${k}</span><strong>${v}</strong></li>`).join("");
    audio.tone(key === "dumped" || key === "snapped" ? 180 : 520, 0.3, "triangle", 0.05);
  }

  // ---- mini game: slime knight ----
  const canvas = $("mini");
  const ctx = canvas.getContext("2d");

  function jump() {
    if (state.mini.on) {
      state.mini.vy = -7.2;
      state.mini.on = false;
      audio.tone(420, 0.06, "square", 0.02);
    }
  }

  function resetMini() {
    state.mini = { running: true, x: 40, y: 120, vy: 0, on: true, t: 0, slimes: [], dead: 0 };
  }

  function tickMini() {
    const m = state.mini;
    const playing = $("game-screen").classList.contains("active") && !$("tv").classList.contains("paused");
    m.t += 1;
    if (playing) {
      m.running = true;
      m.vy += 0.42;
      m.y += m.vy;
      if (m.y >= 120) { m.y = 120; m.vy = 0; m.on = true; }
      if (m.t % 70 === 0) m.slimes.push({ x: 330, w: 22, h: 18 + Math.random() * 10 });
      m.slimes.forEach((s) => { s.x -= 3.2; });
      m.slimes = m.slimes.filter((s) => s.x > -30);
      m.slimes.forEach((s) => {
        if (Math.abs(s.x - m.x) < 20 && m.y + 18 > 138 - s.h) {
          m.dead += 1;
          s.x = -40;
        }
      });
      state.stats.score += 0.2;
      $("tv-score").textContent = String(Math.floor(state.stats.score));
    }

    ctx.fillStyle = "#13213a";
    ctx.fillRect(0, 0, 320, 180);
    ctx.fillStyle = "#1b3a2a";
    ctx.fillRect(0, 140, 320, 40);
    for (let i = 0; i < 8; i += 1) {
      ctx.fillStyle = i % 2 ? "#16301f" : "#1b3a2a";
      ctx.fillRect(((m.t * 2 + i * 40) % 360) - 20, 140, 40, 40);
    }
    ctx.fillStyle = "#ffe066";
    ctx.fillRect(m.x, m.y, 18, 22);
    ctx.fillStyle = "#2b1b38";
    ctx.fillRect(m.x + 4, m.y + 6, 3, 3);
    ctx.fillRect(m.x + 11, m.y + 6, 3, 3);
    m.slimes.forEach((s) => {
      ctx.fillStyle = "#7ae7c7";
      ctx.fillRect(s.x, 140 - s.h, s.w, s.h);
      ctx.fillStyle = "#143";
      ctx.fillRect(s.x + 4, 140 - s.h + 4, 3, 3);
      ctx.fillRect(s.x + 12, 140 - s.h + 4, 3, 3);
    });
    ctx.fillStyle = "#9be7ff";
    ctx.font = "10px monospace";
    ctx.fillText(playing ? "SPACE / TAP to jump" : "paused", 8, 170);
    requestAnimationFrame(tickMini);
  }

  function startNight() {
    const raw = $("player-name").value.trim().toLowerCase();
    state.name = raw || "babe";
    const m = state.mission;
    $("room").className = `room scene-${m.scene}`;
    $("tv-title").textContent = m.tvTitle;
    $("paused-stamp").textContent = m.stamp;
    $("goal").textContent = `until ${m.goal}`;
    state.hearts = m.start.hearts;
    state.sanity = m.start.sanity;
    state.eventI = 0;
    state.flags = {};
    state.stats = { chipsLost: 0, timesMad: 0, texts: 0, paused: 0, score: 0 };
    $("snack").classList.remove("gone");
    $("tv-score").textContent = "0";
    setMeters();
    resetMini();
    $("tv").classList.add("paused");
    showScreen("game-screen");
    audio.ensure();
    audio.good();
    playEvent();
  }

  function init() {
    mountNori();
    setNori("smile", "peek");
    selectMission(state.mission);
    $("start-btn").addEventListener("click", startNight);
    $("again-btn").addEventListener("click", () => {
      showScreen("title-screen");
      setNori("smile", "peek");
      renderMissions();
    });
    $("retry-btn").addEventListener("click", startNight);
    $("mute-btn").addEventListener("click", () => {
      state.muted = !state.muted;
      $("mute-btn").textContent = state.muted ? "mute" : "sound";
    });
    $("dialogue").addEventListener("click", () => finishTyping());
    document.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        if (document.activeElement && document.activeElement.tagName === "INPUT") return;
        e.preventDefault();
        if (state.typing) finishTyping();
        else jump();
      }
    });
    canvas.addEventListener("pointerdown", jump);
    $("player-name").addEventListener("keydown", (e) => {
      if (e.key === "Enter") startNight();
    });
    tickMini();
  }

  init();
})();
