const MALL_EVENTS = [
  {
    id: "one-thing",
    time: [11, 0],
    mood: "smile",
    pose: "cling",
    text: "i just need one thing. one. in and out.",
    dir: "You have heard this before. You wore your good sneakers for a reason.",
    choices: [
      { t: "what's the one thing?", h: 6, s: -2, r: "i'll know it when i see it. that's how shopping works. it's spiritual." },
      { t: "i'll time it.", h: -10, s: 6, r: "okay then i'm taking longer on purpose. start your little stopwatch.", flag: "sassy" },
      { t: "take as long as you want.", h: 14, s: -6, r: "you say that now. you've never seen me at a sale." }
    ]
  },
  {
    id: "beige",
    time: [11, 24],
    mood: "side",
    pose: "peek",
    text: "does this look good or does it look like i'm trying.",
    dir: "It is a beige top. She is holding a second, identical beige top.",
    choices: [
      { t: "the first one.", h: -6, s: 4, r: "the first one?? the first one is the SECOND one. i swapped them. you failed." },
      { t: "they're the same top.", h: -12, s: 8, r: "one is oat. one is almond. we are not the same, {name}.", flag: "sassy" },
      { t: "you look good in both. get the one that makes you feel cute.", h: 12, s: -2, r: "...that was a really good answer. suspicious. who taught you.", flag: "honestCute" }
    ]
  },
  {
    id: "looking",
    time: [11, 52],
    mood: "pout",
    pose: "block",
    text: "you're not even looking.",
    dir: "You were looking. At a bench. A beautiful bench with no one on it.",
    choices: [
      { t: "i'm looking. that's a nice... sleeve.", h: -8, s: 2, r: "it's a SCARF." },
      { t: "*put your phone away and stare at her like a lighthouse*", h: 12, s: -6, r: "okay too much eye contact. blink. BLINK. good. now look at these earrings." },
      { t: "can i sit on that bench for five minutes.", h: -10, s: 10, r: "the husband bench. you want the husband bench. we're not even married and you want the bench.", flag: "bench" }
    ]
  },
  {
    id: "boots",
    time: [12, 20],
    mood: "shock",
    pose: "idle",
    text: "oh my god. these are on sale.",
    dir: "Boots. She owns these boots. She is wearing these boots.",
    choices: [
      { t: "you're wearing them right now.", h: -12, s: 6, r: "these are BLACK black. mine are charcoal black. go stand over there." },
      { t: "a sale is basically free money.", h: 12, s: -10, r: "EXACTLY. this is why i love you. you understand finance.", flag: "enabler" },
      { t: "get them. i'll pay.", h: 16, s: -8, r: "no. wait. yes. no. okay yes. this counts as our anniversary gift.", flag: "paid" }
    ]
  },
  {
    id: "fitting-room",
    type: "phone",
    time: [12, 45],
    mood: "flat",
    pose: "phone",
    text: "she's in the fitting room. you can hear her through the curtain. she chooses to text.",
    messages: [
      { who: "her", text: "come here" },
      { who: "her", text: "no don't come here" },
      { who: "her", text: "ok come here" },
      { who: "her", text: "stand outside. don't look." },
      { who: "sys", text: "nori sent a photo" },
      { who: "her", text: "be honest" }
    ],
    choices: [
      { t: "you look amazing. like, unfairly.", h: 14, s: -2, r: "i'm keeping it. and the way you said 'unfairly'. keeping both.", flag: "calledPretty" },
      { t: "that's the same photo as the last one.", h: -10, s: 6, r: "different lighting. DIFFERENT. LIGHTING." },
      { t: "*walk in to tell her in person*", h: 8, s: -4, r: "the attendant screamed. i screamed. it was romantic, technically." }
    ]
  },
  {
    id: "food-court",
    time: [13, 10],
    mood: "smile",
    pose: "idle",
    text: "i'm not hungry. get whatever.",
    dir: "Food court. You order a burger. She watches it like a hawk watches a field mouse.",
    choices: [
      { t: "get your own fries then.", h: -8, s: 4, r: "i said i'm not HUNGRY. hunger and fries are different departments." },
      { t: "*secretly order extra fries for her*", h: 16, s: -2, r: "how did you— you KNEW. i'm going to marry you in this food court.", flag: "fries" },
      { t: "you can have some of mine.", h: 6, s: -6, r: "some. she eats all of them. she says 'these are so good' about your food the entire time." }
    ]
  },
  {
    id: "mannequin",
    time: [13, 38],
    mood: "side",
    pose: "cling",
    text: "that girl was looking at you.",
    dir: "It was a mannequin. The mannequin has no face.",
    choices: [
      { t: "that's a mannequin.", h: 2, s: 4, r: "a mannequin with a GREAT figure. i see how it is." },
      { t: "i only see you.", h: 12, s: -4, r: "corny. perfect. hold my hand so the mannequin knows.", flag: "calledPretty" },
      { t: "want me to fight it?", h: 8, s: 2, r: "...yes. okay walk past it and don't make eye contact. that's the fight.", flag: "sassy" }
    ]
  },
  {
    id: "hold-this",
    time: [14, 5],
    mood: "pout",
    pose: "idle",
    text: "can you hold this.",
    dir: "'This' is her bag, two shopping bags, a smoothie, and a candle she has smelled 40 times.",
    choices: [
      { t: "*hold everything like a loyal coat rack*", h: 12, s: -10, r: "look at you. the pack mule of my dreams. don't tilt the smoothie.", flag: "carried" },
      { t: "i have two arms, nori.", h: -10, s: 6, r: "and they're both free. you do the math." },
      { t: "only if i get a sip of the smoothie.", h: 6, s: 2, r: "one sip. ONE. ...that was a big sip. we're not okay but we're okay." }
    ]
  },
  {
    id: "sephora",
    time: [14, 40],
    mood: "love",
    pose: "peek",
    text: "i'm just gonna pop into sephora for a sec.",
    dir: "A sec in Sephora lasts longer than most mortgages.",
    choices: [
      { t: "i'll come with you.", h: 10, s: -8, r: "yes!! smell this. and this. this one smells like 'a tall man'. do you like it?" },
      { t: "i'll wait outside.", h: -6, s: 8, r: "she emerges 52 minutes later with one lip balm and the aura of someone who has seen god." },
      { t: "i'll hold your bags on the bench.", h: -2, s: 12, r: "the bench AGAIN. you and that bench. fine. go be with her.", flag: "bench" }
    ]
  },
  {
    id: "feet",
    time: [15, 20],
    mood: "cry",
    pose: "idle",
    text: "my feet hurt. why did you let me walk this much.",
    dir: "She planned the route. She chose the boots. Both pairs.",
    choices: [
      { t: "you literally said 'one more store'.", h: -14, s: 6, r: "i said it with my MOUTH, not my HEART.", flag: "sassy" },
      { t: "piggyback?", h: 16, s: -10, r: "the entire mall watches. she yells 'faster, horse'. a child claps.", flag: "piggyback" },
      { t: "let's sit. i'll get you a pretzel.", h: 12, s: 4, r: "pretzel diplomacy. you're getting so good at this." }
    ]
  },
  {
    id: "the-thing",
    time: [16, 10],
    mood: "flat",
    pose: "phone",
    text: "we didn't even get the thing i came for.",
    dir: "You are carrying eleven bags. None of them are the thing.",
    choices: [
      { t: "what WAS the thing?", h: -6, s: -6, r: "...i don't remember. but it was important. we'll come back next saturday." },
      { t: "we'll find it online tonight. together.", h: 10, s: 4, r: "in bed. with snacks. scrolling. that's actually my favorite kind of shopping." },
      { t: "the thing was the friends we made along the way.", h: 8, s: 6, r: "that's so stupid. i'm going to say that to my mom." }
    ]
  },
  {
    id: "parking",
    time: [16, 45],
    mood: "love",
    pose: "cling",
    text: "thanks for coming with me. i know you hate the mall.",
    dir: "The parking lot. You don't remember where you parked. She does. She always does.",
    choices: [
      { t: "i don't hate the mall. i like you at the mall.", h: 14, s: 6, r: "okay stop. you're making me want to buy you something. ...i'm buying you a pretzel.", flag: "saidLove" },
      { t: "i hate the mall a normal amount.", h: 4, s: 6, r: "honest. respect. i'm still dragging you to the outlets next month." },
      { t: "you owe me one slime knight weekend.", h: -2, s: 10, r: "deal. i'll sit on the controller the entire time. that's the deal." }
    ]
  }
];

const MALL_ENDINGS = {
  dumped: {
    kicker: "returns desk: relationship",
    title: "she took an uber home.",
    body: "With all eleven bags. You're still in the food court holding a smoothie that isn't yours. The mannequin looks smug.",
    rating: "1 / 10 — 'he loved the bench more than me'"
  },
  snapped: {
    kicker: "husband bench: occupied",
    title: "you sat on the bench and never got up.",
    body: "You are part of the mall now. Security knows your name. Nori visits on weekends with a pretzel. It's kind of nice.",
    rating: "2 / 10 — 'he became furniture'"
  },
  survived: {
    kicker: "parking lot reached",
    title: "she's asleep in the car.",
    body: "Eleven bags in the trunk. Zero of them the thing. Her boots are off and her feet are on your dashboard. You'd do it again. Don't tell anyone.",
    rating: "7 / 10 — 'he only complained twice'"
  },
  simp: {
    kicker: "credit card: melting",
    title: "you bought her the store.",
    body: "Not literally. But the cashier asked if you wanted a store card and you said 'we already have three.' Nori says you're perfect. Your bank says 'hello?'",
    rating: "10 / 10 boyfriend, 0 / 10 budget"
  },
  chaos: {
    kicker: "mall rats, certified",
    title: "you both got banned from the fitting rooms.",
    body: "It started with a mannequin and ended with a piggyback race past the fountain. She's laughing so hard she can't breathe. Security is not laughing.",
    rating: "6 / 10 — 'rude. fast. a good horse.'"
  },
  golden: {
    kicker: "shopping partner of the year",
    title: "she bought you a pretzel back.",
    body: "You held the bags, found the fries, and said the right thing about the beige top. The thing is still out there. You'll find it together.",
    rating: "9.5 / 10 — 'he carried the candle'"
  }
};

const DINNER_EVENTS = [
  {
    id: "where",
    time: [19, 0],
    mood: "smile",
    pose: "cling",
    text: "i don't care where we eat. you pick.",
    dir: "This is not a question. It is a riddle with a cover charge.",
    choices: [
      { t: "tacos?", h: -8, s: 2, r: "we had tacos in march. are you trying to relive march?" },
      { t: "that italian place you mentioned in july.", h: 16, s: 4, r: "you REMEMBERED. i said it once. while you were playing. i'm dizzy.", flag: "remembered" },
      { t: "you pick then.", h: -12, s: 6, r: "i said YOU pick. we'll be here all night. i'm hungry and it's your fault.", flag: "sassy" }
    ]
  },
  {
    id: "theo",
    time: [19, 20],
    mood: "side",
    pose: "idle",
    text: "is the waiter cute or is it just the lighting.",
    dir: "The waiter is named Theo. He has a man bun and a fountain pen.",
    choices: [
      { t: "it's the lighting.", h: 4, s: -2, r: "hm. okay. the lighting is doing a lot for him." },
      { t: "should i be worried about theo.", h: 8, s: 4, r: "yes. no. a little. it keeps you sharp." },
      { t: "i can grow a man bun.", h: 12, s: -6, r: "please never. but the fact that you offered? love." }
    ]
  },
  {
    id: "salad",
    time: [19, 34],
    mood: "smile",
    pose: "idle",
    text: "i'm just gonna get a salad.",
    dir: "She will not eat the salad. You both know what she will eat.",
    choices: [
      { t: "cool. i'll get the steak frites.", h: -6, s: 4, r: "(she will eat 60% of your frites. this is foreshadowing.)" },
      { t: "get the pasta. you want the pasta.", h: 14, s: 2, r: "...i DO want the pasta. how do you know my soul.", flag: "pasta" },
      { t: "i'll order extra fries. 'for me.'", h: 10, s: -2, r: "she nods once. a deal struck in silence. the fries are hers. they always were.", flag: "fries" }
    ]
  },
  {
    id: "phone-down",
    time: [19, 58],
    mood: "pout",
    pose: "block",
    text: "you're on your phone.",
    dir: "You checked the time. For one second. She saw it through a menu.",
    choices: [
      { t: "just checking the time.", h: -8, s: 4, r: "the time is DATE O'CLOCK." },
      { t: "*put the phone face down in the bread basket*", h: 12, s: -4, r: "...in the bread? okay. i respect a man who ruins bread for me.", flag: "phoneDown" },
      { t: "you were on yours five minutes ago.", h: -14, s: 8, r: "that was an EMERGENCY. jess got bangs.", flag: "sassy" }
    ]
  },
  {
    id: "bangs",
    type: "phone",
    time: [20, 15],
    mood: "flat",
    pose: "phone",
    text: "jess got bangs. the group chat is on fire. nori shows you. every. message.",
    contact: { name: "the girls 💅", status: "jess, megan, priya, nori" },
    messages: [
      { who: "sys", text: "jess changed the group photo" },
      { who: "her", text: "priya: SHE GOT BANGS" },
      { who: "her", text: "megan: she looks like a lamp" },
      { who: "her", text: "megan: a cute lamp!!" },
      { who: "you", text: "nori: which lamp is better. me or jess" },
      { who: "sys", text: "nori is waiting for your answer. in person." }
    ],
    choices: [
      { t: "you're not a lamp. you're the whole lighting store.", h: 14, s: -4, r: "i'm screenshotting that and sending it to the chat. sorry jess.", flag: "calledPretty" },
      { t: "i don't know who jess is.", h: -10, s: 4, r: "i've told you about jess FORTY times. she dated the guy with the boat." },
      { t: "bangs are a cry for help.", h: 6, s: 6, r: "RIGHT. okay, you can stay in the group chat of my heart." }
    ]
  },
  {
    id: "guess",
    time: [20, 40],
    mood: "shock",
    pose: "idle",
    text: "guess what i'm thinking.",
    dir: "There are infinite answers and zero correct ones.",
    choices: [
      { t: "dessert?", h: 16, s: 4, r: "HOW. are you in my brain. is it warm in there." },
      { t: "that you love me?", h: 6, s: -2, r: "that's a given. i was thinking about dessert. but also yes." },
      { t: "that theo is cute.", h: -12, s: 6, r: "...i was NOT. okay a little. but mostly dessert.", flag: "sassy" }
    ]
  },
  {
    id: "megan",
    time: [21, 5],
    mood: "cry",
    pose: "idle",
    text: "and then MEGAN said— wait. are you listening? who's megan.",
    dir: "This story has 14 characters and three betrayals. There is always a quiz.",
    choices: [
      { t: "megan from work. borrowed your charger. never gave it back.", h: 18, s: 4, r: "YOU WERE LISTENING. oh my god. i'm going to cry into the bread.", flag: "listened" },
      { t: "megan... the lamp?", h: -8, s: 4, r: "close. so close. but that's jess. and she's not a lamp. that was in confidence." },
      { t: "is megan the one with the boat?", h: -6, s: 2, r: "that's the GUY. megan is the one who KNOWS the guy with the boat. keep up." }
    ]
  },
  {
    id: "dessert",
    time: [21, 30],
    mood: "love",
    pose: "lap",
    text: "i'm not getting dessert. we can share one though.",
    dir: "'Share' is a strong word. She is already holding both spoons.",
    choices: [
      { t: "get your own. i'll get mine.", h: 8, s: 2, r: "two desserts. a power move. i'm having both." },
      { t: "*slide the whole plate over*", h: 14, s: -6, r: "you sacrificed the tiramisu. for me. this is the most romantic thing since the pasta." },
      { t: "one bite each. fair and square.", h: -6, s: 6, r: "she takes one bite. it is the entire dessert on one spoon. technically fair." }
    ]
  },
  {
    id: "bill",
    time: [21, 52],
    mood: "side",
    pose: "block",
    text: "let me pay. no, seriously. let me pay.",
    dir: "She is holding her card like a sword she has no intention of using.",
    choices: [
      { t: "okay. thanks babe.", h: -12, s: 8, r: "...wow. okay. no, it's fine. i offered. i'm paying. i'm FINE.", flag: "sassy" },
      { t: "i've got it. you get the next one.", h: 12, s: -2, r: "deal. there will never be a next one. but i'll remember this forever." },
      { t: "split it down the middle.", h: 2, s: 6, r: "romantic and fiscally responsible. like a spreadsheet with dimples." }
    ]
  },
  {
    id: "aux",
    time: [22, 12],
    mood: "smile",
    pose: "cling",
    text: "can i have the aux.",
    dir: "This is not a request. Her hand is already on the cable.",
    choices: [
      { t: "*hand it over*", h: 10, s: -6, r: "she plays the same song five times. she knows every word. now you know most of them." },
      { t: "only if it's not the sad playlist.", h: -6, s: 4, r: "it's the 'feeling things' playlist. completely different. track one: sad." },
      { t: "duet?", h: 14, s: -2, r: "you both scream the chorus at a red light. the car next to you honks. you win." }
    ]
  },
  {
    id: "good-date",
    time: [22, 28],
    mood: "love",
    pose: "sleep",
    text: "that was a good date.",
    dir: "Her head is on your shoulder. The fries in her coat pocket are for later.",
    choices: [
      { t: "best date.", h: 12, s: 8, r: "best date so far. don't get cocky. next time pick the place without me asking.", flag: "saidLove" },
      { t: "same time next week?", h: 14, s: 4, r: "yes. same restaurant. same waiter. i want to see if theo remembers us." },
      { t: "i'm still hungry. you ate my fries.", h: -4, s: 8, r: "prove it. ...okay there are fries in my pocket. share?" }
    ]
  }
];

const DINNER_ENDINGS = {
  dumped: {
    kicker: "table for one",
    title: "she took the leftovers and left.",
    body: "She asked Theo for a box, boxed her pasta, and walked into the night like the end of a movie. You got the bill. And the bread with your phone in it.",
    rating: "1 / 10 — 'he said jess was a lamp'"
  },
  snapped: {
    kicker: "check, please",
    title: "you asked for the check before the bread.",
    body: "It came out as a yell. Theo dropped his fountain pen. Nori ordered three desserts to go and ate them on the curb without you.",
    rating: "2 / 10 — 'he rushed the tiramisu'"
  },
  survived: {
    kicker: "reservation: honored",
    title: "she fell asleep on the drive home.",
    body: "One song on repeat, fries in her coat, her hand in yours at every red light. It wasn't perfect. It was a date.",
    rating: "7 / 10 — 'the pasta carried'"
  },
  simp: {
    kicker: "tab: open forever",
    title: "you gave her everything, including the tiramisu.",
    body: "Your dessert, your fries, the aux, and possibly your pension. She's delighted. Theo is taking notes.",
    rating: "10 / 10 boyfriend, 0 / 10 dessert"
  },
  chaos: {
    kicker: "public nuisance, couples edition",
    title: "the manager comped dessert so you'd leave.",
    body: "You roasted Jess's bangs, fought over the bill, and accused her of liking Theo. She loved every second. Best night ever. Banned for life.",
    rating: "6 / 10 — 'rude. loud. great fries.'"
  },
  golden: {
    kicker: "date night, perfected",
    title: "she's telling the group chat about you.",
    body: "You remembered the Italian place, ordered the right thing, and knew about Megan's charger. Jess is jealous. Even the lamp would be.",
    rating: "9.5 / 10 — 'he knew about megan'"
  }
};

const ROAD_EVENTS = [
  {
    id: "driver",
    time: [9, 0],
    mood: "smile",
    pose: "idle",
    text: "okay. i'm driving. you're navigating. don't mess this up.",
    dir: "She has adjusted her seat, her mirrors, and your seat. Your knees now live in the glovebox.",
    choices: [
      { t: "i was born for this.", h: 8, s: 2, r: "you were born for snacks and vibes. but okay, captain." },
      { t: "the phone literally tells you where to go.", h: -10, s: 6, r: "then why do i have YOU? think about that. for the whole drive.", flag: "sassy" },
      { t: "you look cute in sunglasses.", h: 12, s: -2, r: "i know. keep talking. but also tell me the exit.", flag: "calledPretty" }
    ]
  },
  {
    id: "exit",
    time: [9, 22],
    mood: "shock",
    pose: "block",
    text: "was that our exit?",
    dir: "It was. You were in a slime dungeon. The phone says 'rerouting' in a tone.",
    choices: [
      { t: "no.", h: -12, s: -4, r: "the phone says rerouting, {name}. the PHONE KNOWS." },
      { t: "yes. my bad. i'm on it.", h: 8, s: 2, r: "honesty. gross. hot. okay where now.", flag: "honest" },
      { t: "scenic detour. planned it.", h: 4, s: 6, r: "a detour. past a cow. a single cow. ...okay she's cute actually." }
    ]
  },
  {
    id: "music",
    time: [9, 50],
    mood: "pout",
    pose: "idle",
    text: "why is your music so sad.",
    dir: "It's the Slime Knight soundtrack. It is the least sad music ever made.",
    choices: [
      { t: "it's the slime knight soundtrack.", h: -8, s: 4, r: "i'm on a road trip with a boss fight. amazing." },
      { t: "*hand her the aux*", h: 10, s: -6, r: "track one: a song about a girl who drives. she dedicates it to herself." },
      { t: "you pick. i'll sing badly.", h: 14, s: -4, r: "you sing the wrong words with total confidence. she's crying laughing at 110 km/h." }
    ]
  },
  {
    id: "gas",
    time: [10, 15],
    mood: "love",
    pose: "cling",
    text: "gas station. snacks. go.",
    dir: "You have 90 seconds and no list. There is a list. It's in her head.",
    choices: [
      { t: "*come back with the exact sour gummy worms she likes*", h: 18, s: 2, r: "THE SOUR ONES. NOT THE SUGAR ONES. you're a genius.", flag: "gummies" },
      { t: "*come back with beef jerky*", h: -10, s: 4, r: "jerky. for me. who is vegetarian on weekdays. lucky it's saturday." },
      { t: "*come back with one of everything*", h: 10, s: -10, r: "she eats one chip from each bag and says she's full. the car is a pantry now." }
    ]
  },
  {
    id: "pee",
    time: [10, 32],
    mood: "flat",
    pose: "idle",
    text: "i need to pee.",
    dir: "You left the gas station eleven minutes ago. It had a bathroom. You asked.",
    choices: [
      { t: "you said you didn't need to go!!", h: -14, s: 6, r: "i didn't THEN. my bladder isn't psychic, {name}.", flag: "sassy" },
      { t: "next exit. four minutes. hold on.", h: 10, s: -2, r: "four minutes. i can do four minutes. talk to me about anything that isn't water." },
      { t: "*find a cute diner off the next exit*", h: 14, s: -4, r: "a bathroom AND pie? best navigator in history.", flag: "diner" }
    ]
  },
  {
    id: "mom",
    type: "phone",
    time: [11, 5],
    mood: "flat",
    pose: "phone",
    text: "she's driving, so she hands you her phone. 'it's my mom. answer as me. be normal.'",
    contact: { name: "mom 💐", status: "online · always" },
    messages: [
      { who: "her", text: "hi sweetie are you driving" },
      { who: "her", text: "don't text and drive" },
      { who: "her", text: "is he there" },
      { who: "her", text: "does he eat enough" },
      { who: "sys", text: "mom is typing a paragraph" },
      { who: "her", text: "tell him to drive safe 🚗❤️" }
    ],
    choices: [
      { t: "hi mom!! yes he eats a lot. he's great 💕", h: 14, s: -2, r: "'💕'?? i never use 💕. she thinks i'm in a cult. ...she loves it. she says you're 'a keeper'.", flag: "momApproved" },
      { t: "hi! this is {name}. nori's driving. all good!", h: 8, s: 4, r: "she's calling. to talk to YOU. put her on speaker. oh no." },
      { t: "k", h: -14, s: 6, r: "'k'?? to my MOTHER?? she thinks i'm mad at her. you've started a family war." }
    ]
  },
  {
    id: "lake",
    time: [11, 40],
    mood: "side",
    pose: "idle",
    text: "would you still love me if i drove us into a lake.",
    dir: "She is driving very close to a lake.",
    choices: [
      { t: "i'd love you. i'd also swim.", h: 12, s: 2, r: "correct answer. i'll drive slightly further from the lake now." },
      { t: "please don't drive us into the lake.", h: -4, s: -4, r: "that's not an answer. that's a request. i'm considering the lake." },
      { t: "i'd build you a tiny boat.", h: 14, s: 2, r: "a tiny boat. with a tiny couch. you're the worm guy. i love the worm guy.", flag: "saidLove" }
    ]
  },
  {
    id: "boing",
    time: [12, 15],
    mood: "mad",
    pose: "block",
    text: "you're playing your game. i can hear the jump sound.",
    dir: "Boing. Boing. Boing. You thought it was muted. It was not.",
    choices: [
      { t: "i'm navigating AND gaming. multitasking.", h: -10, s: 6, r: "we missed another exit, multitasker.", flag: "sassy" },
      { t: "*close the game and look out the window with her*", h: 14, s: -6, r: "see that? a cloud shaped like a dog. we're naming him steve.", flag: "phoneDown" },
      { t: "i'm checking traffic. in the slime dimension.", h: 2, s: 8, r: "...fine. but if the slime king causes a jam i'm blaming you." }
    ]
  },
  {
    id: "starving",
    time: [13, 0],
    mood: "pout",
    pose: "cling",
    text: "i'm starving and nothing sounds good.",
    dir: "There are 14 places to eat within 2 km. She has vetoed 13. The 14th is a pharmacy.",
    choices: [
      { t: "let's just stop at the next place.", h: -6, s: 4, r: "the next place is a gas station hot dog. is that who we are now?" },
      { t: "there are gummy worms in the glovebox.", h: 12, s: 2, r: "...you saved some. you SAVED some. you're a squirrel of love." },
      { t: "diner. pie. trust me.", h: 16, s: -4, r: "PIE. okay you drive the next bit. i need both hands for pie.", flag: "diner" }
    ]
  },
  {
    id: "nap",
    time: [13, 45],
    mood: "sleep",
    pose: "sleep",
    text: "i'm just gonna rest my eyes. you drive.",
    dir: "She's asleep in 14 seconds. Her hand is still on the aux, guarding it.",
    choices: [
      { t: "*drive smooth. no bumps. no hard brakes.*", h: 12, s: -4, r: "she sleeps like a cat in a sunbeam. you drive like you're carrying a cake.", flag: "smooth" },
      { t: "*quietly put the slime knight soundtrack back on*", h: -6, s: 10, r: "she mumbles 'change it' without waking up. how. how does she know." },
      { t: "*take a photo of her sleeping*", h: 6, s: 6, r: "she wakes up. 'delete it.' she sees it. 'actually send it to me. i look peaceful.'" }
    ]
  },
  {
    id: "there-yet",
    time: [14, 30],
    mood: "love",
    pose: "idle",
    text: "are we there yet.",
    dir: "You are pulling into the driveway. She is looking directly at the destination.",
    choices: [
      { t: "yes.", h: 4, s: 4, r: "i know. i just wanted to say it. it's the law of road trips." },
      { t: "almost. five more hours.", h: -4, s: 6, r: "she screams. you laugh. she laughs. she punches your arm. affectionately. hard.", flag: "sassy" },
      { t: "we're here. thanks for driving, captain.", h: 14, s: 4, r: "captain. i like captain. i'm driving home too. you're navigating. no games." }
    ]
  }
];

const ROAD_ENDINGS = {
  dumped: {
    kicker: "rerouting... relationship",
    title: "she left you at the gas station.",
    body: "With the gummy worms. And the aux. You watched her car shrink into the horizon like the end of a sad movie. A trucker offered you jerky. You said yes.",
    rating: "1 / 10 — 'he texted my mom k'"
  },
  snapped: {
    kicker: "engine: overheated",
    title: "you asked her to pull over. forever.",
    body: "You walked the last 4 km. She drove beside you at 3 km/h, playing sad songs out the window. Honestly? Iconic.",
    rating: "2 / 10 — 'he walked. i drove. we both lost.'"
  },
  survived: {
    kicker: "destination reached",
    title: "you made it. mostly on time.",
    body: "Two missed exits, one lake threat, zero crashes. She's asleep on the motel bed in her shoes. You're both kind of great at this.",
    rating: "7 / 10 — 'decent navigator. bad singer.'"
  },
  simp: {
    kicker: "co-pilot: fully captured",
    title: "you'd drive to the moon for her.",
    body: "You bought every snack, sang every song, and let her pick every stop. Your Slime Knight save file misses you. So does your spine.",
    rating: "10 / 10 boyfriend, 0 / 10 navigator"
  },
  chaos: {
    kicker: "loud car, great vibes",
    title: "you screamed every song with the windows down.",
    body: "Missed exits, lake threats, a bladder emergency, and a family group chat incident. A single cow witnessed all of it. You'd both do it again tomorrow.",
    rating: "6 / 10 — 'rude. off-key. fun.'"
  },
  golden: {
    kicker: "road trip royalty",
    title: "her mom wants you at christmas.",
    body: "Sour worms, a diner with pie, a smooth drive while she slept. Somewhere, Steve the cloud dog is proud of you.",
    rating: "9.5 / 10 — 'he found the pie'"
  }
};

const MISSIONS = [
  {
    id: "couch",
    name: "Couch Night",
    emoji: "🎮",
    blurb: "one game. she sat on the controller.",
    pitch: "You sat down to play <em>one</em> game. Nori sat down on the controller. Keep her hearts up. Keep your sanity. Survive until 2:00 AM.",
    cta: "start the night",
    goal: "2:00 AM",
    start: { hearts: 72, sanity: 78 },
    scene: "couch",
    tvTitle: "SLIME KNIGHT",
    stamp: "PAUSED BY NORI",
    events: EVENTS,
    endings: ENDINGS,
    lines: {
      quiet: "she's quiet. for now. space / tap the tv to jump.",
      quietDir: "a rare and probably cursed peace.",
      cold: "the air in the room changes temperature.",
      warm: "she tries not to smile. she fails.",
      neutral: "the slime king is still waiting. so is she."
    },
    golden: (f, st) => f.quizWin && f.calledPretty && (f.saidLove || f.pancakes) && st.hearts >= 70,
    chaos: (f) => f.sassy || f.calledJealous,
    stats: (st) => [
      ["texts received while she sat next to you", st.stats.texts],
      ["slime knight score", Math.round(st.stats.score)],
      ["pancakes promised", st.flags.pancakes ? "legally binding" : "she will remember"],
      ["worm protocol", st.flags.worm ? "tiny couch: built" : "worm: dumped"]
    ]
  },
  {
    id: "mall",
    name: "Shopping Trip",
    emoji: "🛍️",
    blurb: "she needs one thing. just one.",
    pitch: "Saturday. The mall. She needs <em>one</em> thing. Carry the bags, survive the fitting room, and make it back to the car by 5:00 PM.",
    cta: "go shopping",
    goal: "5:00 PM",
    start: { hearts: 46, sanity: 50 },
    scene: "mall",
    tvTitle: "SLIME KNIGHT POCKET",
    stamp: "CONFISCATED BY NORI",
    events: MALL_EVENTS,
    endings: MALL_ENDINGS,
    lines: {
      quiet: "she's in another fitting room. sneak a level. space / tap to jump.",
      quietDir: "the husband bench calls to you.",
      cold: "a sales assistant slowly backs away.",
      warm: "she swings your hand like you're twelve.",
      neutral: "somewhere, a sale is ending. she can feel it."
    },
    golden: (f, st) => f.fries && f.carried && (f.honestCute || f.calledPretty) && st.hearts >= 70,
    stats: (st) => [
      ["bags carried", st.flags.carried ? "all of them + a candle" : "one, reluctantly"],
      ["secret fries", st.flags.fries ? "delivered" : "stolen from you anyway"],
      ["husband bench", st.flags.bench ? "you two are close now" : "untouched. brave."],
      ["the one thing", "still not found"]
    ]
  },
  {
    id: "dinner",
    name: "Dinner Date",
    emoji: "🍝",
    blurb: "she doesn't care where. (she cares.)",
    pitch: "Date night. She doesn't care where you eat (she cares). Pick right, listen to the Megan story, and keep your phone in your pocket until 10:30 PM.",
    cta: "go to dinner",
    goal: "10:30 PM",
    start: { hearts: 46, sanity: 50 },
    scene: "dinner",
    tvTitle: "SLIME KNIGHT POCKET",
    stamp: "PHONE DOWN. NOW.",
    events: DINNER_EVENTS,
    endings: DINNER_ENDINGS,
    lines: {
      quiet: "she went to the bathroom. quick level under the table? space / tap to jump.",
      quietDir: "theo refills your water. he knows.",
      cold: "the candle flickers. ominously.",
      warm: "she steals a fry and smiles with her whole face.",
      neutral: "theo hovers. he senses drama."
    },
    golden: (f, st) => f.remembered && f.listened && (f.pasta || f.fries || f.calledPretty) && st.hearts >= 70,
    stats: (st) => [
      ["fries you actually ate", st.flags.fries ? "0 (as planned)" : "3"],
      ["megan story", st.flags.listened ? "fully retained" : "lost in the bread"],
      ["phone status", st.flags.phoneDown ? "in the bread basket" : "suspiciously nearby"],
      ["group chat messages", st.stats.texts]
    ]
  },
  {
    id: "road",
    name: "Road Trip",
    emoji: "🚗",
    blurb: "she drives. you navigate. badly.",
    pitch: "She's driving. You're navigating (and secretly playing <em>Slime Knight Pocket</em>). Don't miss the exit. Arrive by 3:00 PM.",
    cta: "hit the road",
    goal: "3:00 PM",
    start: { hearts: 46, sanity: 50 },
    scene: "road",
    tvTitle: "SLIME KNIGHT POCKET",
    stamp: "EYES ON THE MAP",
    events: ROAD_EVENTS,
    endings: ROAD_ENDINGS,
    lines: {
      quiet: "she's singing to herself. sneak a level. space / tap to jump.",
      quietDir: "a straight road. a rare peace.",
      cold: "she turns the radio off. the silence has a speed limit.",
      warm: "she drums the steering wheel happily.",
      neutral: "the gps says 'continue straight'. so does she."
    },
    golden: (f, st) => f.gummies && (f.momApproved || f.diner) && (f.smooth || f.honest) && st.hearts >= 70,
    stats: (st) => [
      ["exits missed", st.flags.honest ? "1 (admitted)" : "2+ (denied)"],
      ["sour worms", st.flags.gummies ? "correct brand" : "wrong worms"],
      ["her mom", st.flags.momApproved ? "wants you at christmas" : "has questions"],
      ["slime knight pocket score", Math.round(st.stats.score)]
    ]
  }
];
