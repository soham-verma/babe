const EVENTS = [
  {
    id: "intro",
    time: [20, 0],
    mood: "smile",
    pose: "cling",
    text: "hi {name}. you started without me.",
    dir: "Nori drops onto the couch like a cat who pays rent in guilt.",
    choices: [
      { t: "i waited. you were in the bathroom for 40 minutes.", h: -6, s: 4, r: "skincare is a journey. slime knight is a hobby.", flag: "sassy" },
      { t: "come play. you can be player two.", h: 12, s: 6, r: "wait really?? okay but if i die it's your fault.", flag: "invited" },
      { t: "it's just the menu.", h: -4, s: 2, r: "menus still count. you were having a moment with a menu. weird." }
    ]
  },
  {
    id: "sit",
    time: [20, 8],
    mood: "love",
    pose: "lap",
    text: "mmm. comfy. don't get up.",
    dir: "She is now 70% of your lap and 100% of the hitbox.",
    choices: [
      { t: "i can't see the screen.", h: -8, s: 5, r: "then look at me. i'm a better screen." },
      { t: "stay. i'll play around you.", h: 10, s: -6, r: "that's the most romantic thing anyone's said while a slime is eating them." },
      { t: "*lift her gently onto the couch*", h: 4, s: 4, r: "rude. cute. confusing. i'm filing this under 'we'll talk later'." }
    ]
  },
  {
    id: "bored",
    time: [20, 16],
    mood: "pout",
    pose: "cling",
    text: "babe. i'm bored.",
    dir: "Your knight dies. The game asks if you want to continue. Nori does not.",
    choices: [
      { t: "one more match.", h: -14, s: 8, r: "that's what you said one-more-match ago. that was 19 minutes ago. i counted.", flag: "oneMore" },
      { t: "ok, what do you wanna do?", h: 8, s: -8, r: "i don't KNOW. you're supposed to know. that's boyfriend law." },
      { t: "you're sitting on the controller.", h: -10, s: 6, r: "so move me then. with your arms. the ones you aren't using to ignore me." }
    ]
  },
  {
    id: "npc",
    time: [20, 27],
    mood: "side",
    pose: "block",
    text: "who is THAT.",
    dir: "She means the shopkeeper. The shopkeeper is a mushroom with a bow.",
    choices: [
      { t: "that's a mushroom.", h: 2, s: 4, r: "a pretty mushroom. with a bow. interesting. go on." },
      { t: "are you jealous of a fungus.", h: -16, s: 8, r: "don't do that. don't say 'jealous' like i'm the problem. SHE has a bow.", flag: "calledJealous" },
      { t: "you're prettier.", h: 14, s: -4, r: "...okay. keep going. no that's it? wow. okay. fine. cute.", flag: "calledPretty" }
    ]
  },
  {
    id: "phone1",
    type: "phone",
    time: [20, 38],
    mood: "flat",
    pose: "phone",
    text: "she's sitting two inches away. her phone is louder than your game.",
    messages: [
      { who: "her", text: "{name}" },
      { who: "her", text: "{name}." },
      { who: "her", text: "hello??" },
      { who: "her", text: "ok." },
      { who: "sys", text: "nori liked her own message" },
      { who: "her", text: "i'm fine" }
    ],
    choices: [
      { t: "you're literally next to me.", h: -12, s: 6, r: "and yet. the energy. missing." },
      { t: "sorry baby, what's up?", h: 10, s: -8, r: "nothing. i just wanted you to say baby. trapped. my favorite.", flag: "saidBaby" },
      { t: "send a selfie of the two of you on the couch", h: 12, s: -2, r: "WAIT i look cute in this lighting. okay you can play for seven minutes." }
    ]
  },
  {
    id: "snack",
    time: [20, 51],
    mood: "smile",
    pose: "idle",
    text: "can i have a bite?",
    dir: "There are four chips left. She does not mean a bite.",
    choices: [
      { t: "go for it.", h: 8, s: -2, r: "she takes the bag. the bag. it's gone. a crime scene in foil.", flag: "snackShared", snack: "gone" },
      { t: "just one.", h: -6, s: 2, r: "she takes two. stares at you. takes a third. 'what.'" },
      { t: "i'll get you your own.", h: 6, s: -6, r: "romantic. also you have to pause. she knows. she wins twice." }
    ]
  },
  {
    id: "mad",
    time: [21, 4],
    mood: "pout",
    pose: "cling",
    text: "are you mad at me.",
    dir: "Nobody was mad. somebody is about to be.",
    choices: [
      { t: "no?", h: -10, s: -4, r: "the question mark. i heard the question mark. so you ARE mad." },
      { t: "no. i love you. i'm just trying to beat this boss.", h: 12, s: 2, r: "okay. beat her. but like, emotionally i'm the boss. just so we're clear.", flag: "saidLove" },
      { t: "i wasn't until the fourth time you asked.", h: -18, s: 10, r: "wow. okay. i'm going to sit here and be a ghost. a hot ghost.", flag: "sassy" }
    ]
  },
  {
    id: "reel",
    time: [21, 18],
    mood: "love",
    pose: "block",
    text: "look at this. look. LOOK. pause it. {name}.",
    dir: "She is holding a 47-second video one inch from your eye. it is a cat in a hat.",
    choices: [
      { t: "that's a good cat.", h: 10, s: -4, r: "RIGHT?? wait there's another one. don't unpause." },
      { t: "i will look at exactly one.", h: -8, s: 6, r: "controlling. but okay. this one. and the next one because it's a two-part." },
      { t: "*watch the whole cat saga*", h: 14, s: -12, r: "you're the only person who gets me. also there are twelve more. sit down." }
    ]
  },
  {
    id: "never",
    time: [21, 33],
    mood: "cry",
    pose: "idle",
    text: "we never do anything.",
    dir: "It is 9:33 PM on a school night in your living room. you are doing something. it is this.",
    choices: [
      { t: "we're doing something right now.", h: -8, s: 4, r: "this is sitting. sitting is not a date. sitting is what furniture does." },
      { t: "tomorrow. pancakes. no game.", h: 16, s: 4, r: "WRITE IT DOWN. if you forget i will be legally allowed to be dramatic.", flag: "pancakes" },
      { t: "want to go for a night walk?", h: 8, s: -8, r: "it's cold. i don't want to. i just wanted you to offer. i'm staying. play your little slime." }
    ]
  },
  {
    id: "rate",
    time: [21, 47],
    mood: "side",
    pose: "peek",
    text: "rate me. 1 to 10. be honest. but also don't.",
    dir: "Her face is doing a dangerous amount of eyeliner energy for someone in a hoodie.",
    choices: [
      { t: "10.", h: 6, s: -2, r: "too fast. you didn't even look. that's a guilty 10." },
      { t: "11. the extra one is for stealing my chips.", h: 16, s: 2, r: "accepted. i want this in writing. tattoo it maybe.", flag: "calledPretty" },
      { t: "9.9 because you paused slime knight.", h: -14, s: 8, r: "so the slime gets a perfect score and i get a deduction. okay. cool. great. i'm fine." }
    ]
  },
  {
    id: "quiz",
    time: [22, 2],
    mood: "smile",
    pose: "idle",
    text: "pop quiz. what's my go-to order.",
    dir: "She said it once, six weeks ago, while you were in a loading screen.",
    choices: [
      { t: "oat matcha, extra sweet, no ice, because ice is 'a scam'.", h: 18, s: 8, r: "YOU DO LISTEN. i'm going to scream. quietly. into your hoodie.", flag: "quizWin" },
      { t: "coffee black, like your soul when i'm annoying.", h: -6, s: 6, r: "that's YOU. i am a matcha girl. this is why we have problems." },
      { t: "whatever the barista recommends.", h: -10, s: 2, r: "i have never once trusted a barista. they keep trying to give me ice." }
    ]
  },
  {
    id: "choose",
    time: [22, 19],
    mood: "mad",
    pose: "block",
    text: "if you had to choose. me or the game.",
    dir: "The slime king has 3 HP. She timed this. She is an assassin.",
    choices: [
      { t: "you. obviously you.", h: 10, s: -10, r: "then close it. ...you're not closing it. i saw your thumb. traitor." },
      { t: "can i finish this boss and then choose you forever.", h: 2, s: 4, r: "romantic loophole. i hate that it worked. you have 40 seconds. GO." },
      { t: "the game doesn't steal the blanket.", h: -20, s: 12, r: "the GAME doesn't love you. i checked. it has no arms.", flag: "sassy" }
    ]
  },
  {
    id: "ok",
    time: [22, 36],
    mood: "flat",
    pose: "phone",
    text: "ok.",
    dir: "The scariest word in the english language. she is typing. she deletes it.",
    choices: [
      { t: "ok?", h: -12, s: -6, r: "don't ok my ok. you don't get to ok. that's my ok." },
      { t: "hey. talk to me. for real.", h: 14, s: -4, r: "i just wanted you to look away from the slime. it worked. i'm a genius and a menace." },
      { t: "i'm pausing. what's going on.", h: 12, s: 6, r: "...nothing huge. i missed your face. that's all. don't make it weird. it's already weird." }
    ]
  },
  {
    id: "sarah",
    time: [22, 52],
    mood: "side",
    pose: "cling",
    text: "who's sarah.",
    dir: "A notification said 'Sarah: standup moved to 10'. Sarah is 47 and brings bagels.",
    choices: [
      { t: "coworker. 47. bagels. married. a legend.", h: 8, s: 4, r: "show me the bagels. okay she's real. she can live." },
      { t: "the gps. it just... sounds like sarah.", h: -8, s: 6, r: "so you named the gps. you named her. i need a minute." },
      { t: "i don't know a sarah.", h: -16, s: -2, r: "THEN WHY IS SHE MOVING THE STANDUP. don't lie with your whole chest." }
    ]
  },
  {
    id: "movie",
    time: [23, 10],
    mood: "smile",
    pose: "lap",
    text: "let's watch a movie. a cute one. i'll be quiet.",
    dir: "She will not be quiet. this is a legally binding prophecy.",
    choices: [
      { t: "put it on. i'll hold you.", h: 14, s: -8, r: "she talks through the entire plot. then asks what happened. then gets mad you know.", flag: "movie" },
      { t: "after this dungeon.", h: -10, s: 6, r: "there is always a dungeon. i am dating a dungeon." },
      { t: "you pick. i'll pause the game.", h: 12, s: 2, r: "she picks a 3-hour movie she has already seen. she falls asleep at minute 11. you are free. sort of." }
    ]
  },
  {
    id: "pretty",
    time: [23, 28],
    mood: "pout",
    pose: "peek",
    text: "do you even find me pretty or do you just tolerate me like a loud roommate.",
    dir: "The hoodie is winning. she is also winning. this is a trap with lip gloss.",
    choices: [
      { t: "you're the prettiest person in this apartment.", h: 8, s: -2, r: "there are two people in this apartment. aim higher." },
      { t: "i find you pretty. i also find you loud. both can be true.", h: 6, s: 6, r: "honest. annoying. i'll allow it. say pretty again." },
      { t: "i picked you. i keep picking you. even when you sit on slime knight.", h: 18, s: 4, r: "okay shut up. i'm going to hide my face in your neck now. don't die.", flag: "calledPretty" }
    ]
  },
  {
    id: "sleep",
    time: [23, 46],
    mood: "sleep",
    pose: "cling",
    text: "let's go to sleep.",
    dir: "She is not tired. she is testing whether you'll choose the bed over the boss.",
    choices: [
      { t: "okay. bed.", h: 12, s: 8, r: "wait i'm not tired anymore. wow. crazy how that works. sit back down." },
      { t: "20 minutes.", h: -6, s: 4, r: "set a timer. if you snooze it i will become folklore." },
      { t: "you sleep. i'll be quiet.", h: -12, s: 8, r: "so i sleep alone and you date a slime. noted. i'm building a nest ON you instead." }
    ]
  },
  {
    id: "worm",
    time: [0, 8],
    mood: "shock",
    pose: "idle",
    text: "would you still love me if i was a worm.",
    dir: "It is past midnight. philosophy hour. there is no safe zoology.",
    choices: [
      { t: "yes. i'd build you a tiny terrarium with a couch.", h: 16, s: 2, r: "that's disgusting. that's perfect. i'm keeping you.", flag: "worm" },
      { t: "i would be so normal about it.", h: 4, s: 4, r: "you would lose me in the carpet in four minutes. i know you." },
      { t: "can we not do the worm bit.", h: -14, s: 6, r: "so that's a no. i'm a worm and i'm dumped. goodnight forever." }
    ]
  },
  {
    id: "love-speed",
    time: [0, 29],
    mood: "mad",
    pose: "cling",
    text: "you took a second to say it. i counted. a whole second.",
    dir: "You said i love you. the audit arrived immediately.",
    choices: [
      { t: "i love you. i love you. i love you. interest paid.", h: 14, s: -4, r: "okay greedy but i accept your payment plan.", flag: "saidLove" },
      { t: "i was swallowing a chip.", h: -8, s: 6, r: "so the chip came first. the chip. i hope it was worth our marriage." },
      { t: "come here.", h: 10, s: 2, r: "she comes here. she steals the rest of the chip. balance restored." }
    ]
  },
  {
    id: "talk",
    time: [1, 2],
    mood: "flat",
    pose: "block",
    text: "we need to talk.",
    dir: "The four horsemen of a tuesday night. your knight falls in a hole.",
    choices: [
      { t: "okay. i'm here.", h: 12, s: -6, r: "i forgot what i was mad about. but the vibe was important. thanks for showing up." },
      { t: "is this about the mushroom.", h: -10, s: 8, r: "it's about EVERYTHING. including the mushroom. especially the way you said 'that's a mushroom' so calmly." },
      { t: "can it wait until i save.", h: -18, s: 4, r: "SAVE?? you're saving the game and not the relationship?? i cannot BELIEVE—" }
    ]
  },
  {
    id: "quiet",
    time: [1, 28],
    mood: "smile",
    pose: "sleep",
    text: "don't die in your game. i like your dumb face.",
    dir: "Her voice is small now. a truce, or a trap with a blanket.",
    choices: [
      { t: "i like your dumb face too.", h: 14, s: 8, r: "she makes a noise like a kettle and hides. you may play. a little." },
      { t: "go to sleep, menace.", h: 10, s: 10, r: "only if you stay. if you get up i will know. i have sonar." },
      { t: "one more match. for real this time.", h: -8, s: 4, r: "she pinches you. not hard. a warning from a sleepy gremlin." }
    ]
  },
  {
    id: "dawn",
    time: [1, 52],
    mood: "love",
    pose: "sleep",
    text: "babe.",
    dir: "Almost 2. the city is quiet. she is a weighted blanket with opinions, currently off.",
    choices: [
      { t: "right here.", h: 10, s: 10, r: "mm. okay. you can have the last chip. i already ate it. but emotionally it's yours." },
      { t: "*keep playing silently*", h: -4, s: 6, r: "she mumbles 'i can hear the buttons' and does not move. legendary." },
      { t: "*put the controller down and stay*", h: 16, s: 12, r: "the slime king lives another day. you do too. she smiles in her sleep like she won.", flag: "putDown" }
    ]
  }
];

const ENDINGS = {
  dumped: {
    kicker: "relationship status: loading error",
    title: "she went home.",
    body: "Nori put on her shoes in the kind of silence that has a soundtrack. You got your screen back. It looks bigger. Worse.",
    rating: "1 / 10 — 'he chose a mushroom'"
  },
  snapped: {
    kicker: "sanity.exe has stopped working",
    title: "you said 'i need a minute'.",
    body: "It came out like a fire alarm. She looked small for half a second, then powerful, then gone. The slime king clapped. You hate him.",
    rating: "2 / 10 — 'he said he needed a minute'"
  },
  survived: {
    kicker: "2:00 AM achievement unlocked",
    title: "she's asleep on you.",
    body: "You survived the night. She drools, just a little, like a threat. Tomorrow there will be pancakes, or there will be war. Tonight counts.",
    rating: "7 / 10 — 'the slime lived too'"
  },
  simp: {
    kicker: "hearts: max. spine: missing",
    title: "you live here now.",
    body: "Nori is delighted. You have not touched the controller in 49 minutes. She calls you perfect. The slime king sends thoughts and prayers.",
    rating: "10 / 10 boyfriend, 0 / 10 gamer"
  },
  chaos: {
    kicker: "matching each other's freak",
    title: "she's laughing.",
    body: "You were mean in a way she likes. She bit your hoodie. You're both terrible. You'll get pancakes anyway.",
    rating: "6 / 10 — 'rude. hot. confusing.'"
  },
  golden: {
    kicker: "boyfriend of the year (disputed)",
    title: "she kept the star clip in.",
    body: "You remembered the matcha. You called her pretty without being asked twice. She still sat on the game. She also stayed. That's the whole sport.",
    rating: "9.5 / 10 — 'he paused'"
  }
};
