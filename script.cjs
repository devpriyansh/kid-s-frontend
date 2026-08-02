const fs = require('fs');

const generateEnglishAlphabets = () => {
  const letters = [
    { L: 'A', l: 'a', e: [{w:'Apple',i:'🍎'}, {w:'Ant',i:'🐜'}, {w:'Airplane',i:'✈️'}] },
    { L: 'B', l: 'b', e: [{w:'Ball',i:'⚽'}, {w:'Bear',i:'🐻'}, {w:'Bus',i:'🚌'}] },
    { L: 'C', l: 'c', e: [{w:'Cat',i:'🐱'}, {w:'Car',i:'🚗'}, {w:'Cake',i:'🎂'}] },
    { L: 'D', l: 'd', e: [{w:'Dog',i:'🐶'}, {w:'Duck',i:'🦆'}, {w:'Drum',i:'🥁'}] },
    { L: 'E', l: 'e', e: [{w:'Elephant',i:'🐘'}, {w:'Egg',i:'🥚'}, {w:'Engine',i:'🚂'}] },
    { L: 'F', l: 'f', e: [{w:'Fish',i:'🐟'}, {w:'Frog',i:'🐸'}, {w:'Flower',i:'🌸'}] },
    { L: 'G', l: 'g', e: [{w:'Goat',i:'🐐'}, {w:'Grape',i:'🍇'}, {w:'Guitar',i:'🎸'}] },
    { L: 'H', l: 'h', e: [{w:'Hat',i:'🎩'}, {w:'Horse',i:'🐴'}, {w:'House',i:'🏠'}] },
    { L: 'I', l: 'i', e: [{w:'Ice Cream',i:'🍦'}, {w:'Igloo',i:'🧊'}, {w:'Island',i:'🏝️'}] },
    { L: 'J', l: 'j', e: [{w:'Juice',i:'🧃'}, {w:'Jacket',i:'🧥'}, {w:'Jellyfish',i:'🪼'}] },
    { L: 'K', l: 'k', e: [{w:'Kite',i:'🪁'}, {w:'Kangaroo',i:'🦘'}, {w:'Key',i:'🔑'}] },
    { L: 'L', l: 'l', e: [{w:'Lion',i:'🦁'}, {w:'Lemon',i:'🍋'}, {w:'Leaf',i:'🍃'}] },
    { L: 'M', l: 'm', e: [{w:'Monkey',i:'🐵'}, {w:'Moon',i:'🌙'}, {w:'Mouse',i:'🐭'}] },
    { L: 'N', l: 'n', e: [{w:'Nest',i:'🪹'}, {w:'Net',i:'🥅'}, {w:'Ninja',i:'🥷'}] },
    { L: 'O', l: 'o', e: [{w:'Owl',i:'🦉'}, {w:'Orange',i:'🍊'}, {w:'Octopus',i:'🐙'}] },
    { L: 'P', l: 'p', e: [{w:'Pig',i:'🐷'}, {w:'Penguin',i:'🐧'}, {w:'Pizza',i:'🍕'}] },
    { L: 'Q', l: 'q', e: [{w:'Queen',i:'👑'}, {w:'Quilt',i:'🛌'}, {w:'Quiet',i:'🤫'}] },
    { L: 'R', l: 'r', e: [{w:'Rabbit',i:'🐰'}, {w:'Rainbow',i:'🌈'}, {w:'Rocket',i:'🚀'}] },
    { L: 'S', l: 's', e: [{w:'Sun',i:'☀️'}, {w:'Snake',i:'🐍'}, {w:'Star',i:'⭐'}] },
    { L: 'T', l: 't', e: [{w:'Tiger',i:'🐯'}, {w:'Tree',i:'🌳'}, {w:'Train',i:'🚆'}] },
    { L: 'U', l: 'u', e: [{w:'Umbrella',i:'☂️'}, {w:'Unicorn',i:'🦄'}, {w:'Up',i:'⬆️'}] },
    { L: 'V', l: 'v', e: [{w:'Van',i:'🚐'}, {w:'Volcano',i:'🌋'}, {w:'Violin',i:'🎻'}] },
    { L: 'W', l: 'w', e: [{w:'Watermelon',i:'🍉'}, {w:'Whale',i:'🐳'}, {w:'Watch',i:'⌚'}] },
    { L: 'X', l: 'x', e: [{w:'Xylophone',i:'🎹'}, {w:'X-ray',i:'🩻'}, {w:'Xmas Tree',i:'🎄'}] },
    { L: 'Y', l: 'y', e: [{w:'Yak',i:'🐃'}, {w:'Yoyo',i:'🪀'}, {w:'Yellow',i:'🟡'}] },
    { L: 'Z', l: 'z', e: [{w:'Zebra',i:'🦓'}, {w:'Zoo',i:'🦁'}, {w:'Zipper',i:'🤐'}] }
  ];

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  return letters.map(item => {
    let wrongLetter1 = getRandomItem(letters);
    while (wrongLetter1.L === item.L) wrongLetter1 = getRandomItem(letters);
    let wrongLetter2 = getRandomItem(letters);
    while (wrongLetter2.L === item.L || wrongLetter2.L === wrongLetter1.L) wrongLetter2 = getRandomItem(letters);

    const findPictureOptions = shuffle([
      item.e[0],
      wrongLetter1.e[0],
      wrongLetter2.e[0]
    ]);

    const findLetterGrid = shuffle([
      item.L, item.l, item.L,
      wrongLetter1.L, wrongLetter2.l, getRandomItem(letters).L,
      getRandomItem(letters).l, wrongLetter1.l, item.l
    ]);

    const oddOneOutOptions = shuffle([
      item.e[0], item.e[1], item.e[2], wrongLetter1.e[0]
    ]);

    const quizOptions = shuffle([item.L, wrongLetter1.L, wrongLetter2.L]);
    const quizAnswer = quizOptions.indexOf(item.L);

      const makeQuiz = (q, target, ...distractors) => {
        const opts = [target, ...distractors];
        const shuffled = [...opts].sort(() => Math.random() - 0.5);
        return { question: q, options: shuffled, answer: shuffled.indexOf(target) };
      };

      return {
        ...item,
        id: item.L.toLowerCase(),
        letter: item.L,
        word: item.e[0].w,
        image: item.e[0].i,
        examples: item.e.map(e => ({ word: e.w, image: e.i })),
        trace: true,
        practice: [
          { type: 'trace', target: item.L },
          { type: 'trace', target: item.l },
          { type: 'find-picture', target: item.e[0], options: findPictureOptions },
          { type: 'find-letter', target: item.L, targetLower: item.l, grid: findLetterGrid },
          { type: 'match-cases', upper: item.L, lower: item.l, options: shuffle([item.l, wrongLetter1.l, wrongLetter2.l]) },
          { type: 'pop-balloon', target: item.L },
          { type: 'odd-one-out', targetLabel: wrongLetter1.e[0].w, targetImage: wrongLetter1.e[0].i, options: oddOneOutOptions },
          { type: 'memory-match', upper: item.L, lower: item.l, word: item.e[0].w, image: item.e[0].i },
          { type: 'feed-monkey', target: item.l },
          { type: 'reward' }
        ],
        games: [
          { type: 'magic-hats', target: item.L },
          { type: 'splash-color', target: item.e[0].i },
          { type: 'drag-to-basket', target: item.e[0], options: findPictureOptions },
          { type: 'whack-a-letter', target: item.L, options: [item.l, wrongLetter1.L, wrongLetter2.l, wrongLetter1.l] },
          { type: 'letter-train', target: item.L, options: [wrongLetter1.L, wrongLetter2.L] },
          { type: 'reward' }
        ],
        quizzes: [
          makeQuiz(`Find ${item.L}`, item.L, wrongLetter1.L, wrongLetter2.L),
          makeQuiz(`Find ${item.l}`, item.l, wrongLetter1.l, wrongLetter2.l),
          makeQuiz(`Find ${item.e[0].i}`, item.e[0].i, wrongLetter1.e[0].i, wrongLetter2.e[0].i),
          makeQuiz(`Starts with ${item.L}?`, item.e[0].i, wrongLetter1.e[0].i),
          makeQuiz(`${item.L} is for...`, item.e[0].i, wrongLetter1.e[0].i),
          makeQuiz(`Match ${item.L}`, item.l, wrongLetter1.l),
          makeQuiz(`What is ${item.L}?`, item.e[0].w, wrongLetter1.e[0].w),
          makeQuiz(`Find ${item.e[1].i}`, item.e[1].i, wrongLetter1.e[1].i, wrongLetter2.e[1].i),
          makeQuiz(`Starts with ${item.L}?`, item.e[1].i, wrongLetter1.e[1].i),
          { type: 'reward' }
        ],
        game: { type: 'pop-balloon', target: item.L }
      };
    });
  };

const generateHindiSwar = () => {
  const letters = [
    { L: 'अ', e: [{w:'अनार',i:'🍎'}, {w:'अजगर',i:'🐍'}, {w:'अदरक',i:'🫚'}] },
    { L: 'आ', e: [{w:'आम',i:'🥭'}, {w:'आलू',i:'🥔'}, {w:'आग',i:'🔥'}] },
    { L: 'इ', e: [{w:'इमली',i:'🫘'}, {w:'इमारत',i:'🏢'}, {w:'इंजन',i:'🚂'}] },
    { L: 'ई', e: [{w:'ईख',i:'🎋'}, {w:'ईंट',i:'🧱'}, {w:'ईद',i:'🌙'}] },
    { L: 'उ', e: [{w:'उल्लू',i:'🦉'}, {w:'उपहार',i:'🎁'}, {w:'उंगली',i:'☝️'}] },
    { L: 'ऊ', e: [{w:'ऊन',i:'🧶'}, {w:'ऊंट',i:'🐪'}, {w:'ऊपर',i:'⬆️'}] },
    { L: 'ऋ', e: [{w:'ऋषि',i:'🧘'}, {w:'ऋतु',i:'🌧️'}, {w:'ऋषभ',i:'🐂'}] },
    { L: 'ए', e: [{w:'एक',i:'1️⃣'}, {w:'एड़ी',i:'🦶'}, {w:'एल्बम',i:'🖼️'}] },
    { L: 'ऐ', e: [{w:'ऐनक',i:'👓'}, {w:'ऐरावत',i:'🐘'}, {w:'ऐलान',i:'📢'}] },
    { L: 'ओ', e: [{w:'ओखली',i:'🥣'}, {w:'ओस',i:'💧'}, {w:'ओढ़नी',i:'🧣'}] },
    { L: 'औ', e: [{w:'औरत',i:'👩'}, {w:'औज़ार',i:'🛠️'}, {w:'औषधि',i:'💊'}] },
    { L: 'अं', e: [{w:'अंगूर',i:'🍇'}, {w:'अंडा',i:'🥚'}, {w:'अंक',i:'🔢'}] },
    { L: 'अः', e: [{w:'अः',i:'✨'}, {w:'नमः',i:'🙏'}, {w:'प्रातः',i:'🌅'}] }
  ];

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  return letters.map((item, idx) => {
    let wrongLetter1 = getRandomItem(letters);
    while (wrongLetter1.L === item.L) wrongLetter1 = getRandomItem(letters);
    let wrongLetter2 = getRandomItem(letters);
    while (wrongLetter2.L === item.L || wrongLetter2.L === wrongLetter1.L) wrongLetter2 = getRandomItem(letters);

    const findPictureOptions = shuffle([
      item.e[0],
      wrongLetter1.e[0],
      wrongLetter2.e[0]
    ]);

    const findLetterGrid = shuffle([
      item.L, item.L, item.L,
      wrongLetter1.L, wrongLetter2.L, getRandomItem(letters).L,
      getRandomItem(letters).L, wrongLetter1.L, item.L
    ]);

    const oddOneOutOptions = shuffle([
      item.e[0], item.e[1], item.e[2], wrongLetter1.e[0]
    ]);

    const makeQuiz = (q, target, ...distractors) => {
      const opts = [target, ...distractors];
      const shuffled = [...opts].sort(() => Math.random() - 0.5);
      return { question: q, options: shuffled, answer: shuffled.indexOf(target) };
    };

    return {
      ...item,
      id: `swar_${idx}`,
      letter: item.L,
      word: item.e[0].w,
      image: item.e[0].i,
      examples: item.e.map(e => ({ word: e.w, image: e.i })),
      trace: true,
      practice: [
        { type: 'trace', target: item.L },
        { type: 'find-picture', target: item.e[0], options: findPictureOptions },
        { type: 'find-letter', target: item.L, targetLower: item.L, grid: findLetterGrid },
        { type: 'pop-balloon', target: item.L },
        { type: 'odd-one-out', targetLabel: wrongLetter1.e[0].w, targetImage: wrongLetter1.e[0].i, options: oddOneOutOptions },
        { type: 'memory-match', upper: item.L, lower: item.L, word: item.e[0].w, image: item.e[0].i },
        { type: 'feed-monkey', target: item.L },
        { type: 'reward' }
      ],
      games: [
        { type: 'magic-hats', target: item.L },
        { type: 'splash-color', target: item.e[0].i },
        { type: 'drag-to-basket', target: item.e[0], options: findPictureOptions },
        { type: 'whack-a-letter', target: item.L, options: [item.L, wrongLetter1.L, wrongLetter2.L, wrongLetter1.L] },
        { type: 'letter-train', target: item.L, options: [wrongLetter1.L, wrongLetter2.L] },
        { type: 'reward' }
      ],
      quizzes: [
        makeQuiz(`${item.L} खोजें`, item.L, wrongLetter1.L, wrongLetter2.L),
        makeQuiz(`चित्र ${item.e[0].i} खोजें`, item.e[0].i, wrongLetter1.e[0].i, wrongLetter2.e[0].i),
        makeQuiz(`${item.L} से क्या शुरू होता है?`, item.e[0].i, wrongLetter1.e[0].i),
        makeQuiz(`यह क्या है ${item.e[0].i}?`, item.e[0].w, wrongLetter1.e[0].w),
        makeQuiz(`${item.e[1].i} खोजें`, item.e[1].i, wrongLetter1.e[1].i, wrongLetter2.e[1].i),
        makeQuiz(`${item.L} से शुरू होने वाला शब्द?`, item.e[1].w, wrongLetter1.e[1].w),
        makeQuiz(`${item.L} से क्या शुरू होता है?`, item.e[1].i, wrongLetter1.e[1].i),
        makeQuiz(`${item.e[2].i} खोजें`, item.e[2].i, wrongLetter1.e[2].i, wrongLetter2.e[2].i),
        makeQuiz(`${item.L} से शुरू होने वाला शब्द?`, item.e[2].w, wrongLetter1.e[2].w),
        { type: 'reward' }
      ],
      game: { type: 'pop-balloon', target: item.L }
    };
  });
};

const generateHindiVyanjan = () => {
  const letters = [
    { L: 'क', e: [{w:'कबूतर',i:'🕊️'}, {w:'कमल',i:'🪷'}, {w:'कलम',i:'🖊️'}] },
    { L: 'ख', e: [{w:'खरगोश',i:'🐇'}, {w:'खिड़की',i:'🪟'}, {w:'खिलौना',i:'🧸'}] },
    { L: 'ग', e: [{w:'गमला',i:'🪴'}, {w:'गाय',i:'🐄'}, {w:'गाजर',i:'🥕'}] },
    { L: 'घ', e: [{w:'घर',i:'🏠'}, {w:'घड़ी',i:'⌚'}, {w:'घोड़ा',i:'🐎'}] },
    { L: 'ङ', e: [{w:'ङ',i:'✨'}, {w:'ङ',i:'✨'}, {w:'ङ',i:'✨'}] },
    { L: 'च', e: [{w:'चम्मच',i:'🥄'}, {w:'चाँद',i:'🌙'}, {w:'चाबी',i:'🔑'}] },
    { L: 'छ', e: [{w:'छतरी',i:'☔'}, {w:'छत',i:'🛖'}, {w:'छड़ी',i:'🦯'}] },
    { L: 'ज', e: [{w:'जहाज़',i:'🚢'}, {w:'जल',i:'💧'}, {w:'जूता',i:'👞'}] },
    { L: 'झ', e: [{w:'झंडा',i:'🚩'}, {w:'झरना',i:'🏞️'}, {w:'झूला',i:'🛝'}] },
    { L: 'ञ', e: [{w:'ञ',i:'✨'}, {w:'ञ',i:'✨'}, {w:'ञ',i:'✨'}] },
    { L: 'ट', e: [{w:'टमाटर',i:'🍅'}, {w:'टोकरी',i:'🧺'}, {w:'टोपी',i:'🧢'}] },
    { L: 'ठ', e: [{w:'ठठेरा',i:'🔨'}, {w:'ठंड',i:'🥶'}, {w:'ठेला',i:'🛒'}] },
    { L: 'ड', e: [{w:'डमरू',i:'🥁'}, {w:'डंडा',i:'🦯'}, {w:'डबलरोटी',i:'🍞'}] },
    { L: 'ढ', e: [{w:'ढोलक',i:'🪘'}, {w:'ढक्कन',i:'🥘'}, {w:'ढाल',i:'🛡️'}] },
    { L: 'ण', e: [{w:'बाण',i:'🏹'}, {w:'चरण',i:'👣'}, {w:'वीणा',i:'🪕'}] },
    { L: 'त', e: [{w:'तरबूज़',i:'🍉'}, {w:'तितली',i:'🦋'}, {w:'तारा',i:'⭐'}] },
    { L: 'थ', e: [{w:'थर्मस',i:'🫙'}, {w:'थैला',i:'🛍️'}, {w:'थाली',i:'🍽️'}] },
    { L: 'द', e: [{w:'दवात',i:'🖋️'}, {w:'दर्पण',i:'🪞'}, {w:'दरवाज़ा',i:'🚪'}] },
    { L: 'ध', e: [{w:'धनुष',i:'🏹'}, {w:'धागा',i:'🧵'}, {w:'धूप',i:'☀️'}] },
    { L: 'न', e: [{w:'नल',i:'🚰'}, {w:'नाव',i:'⛵'}, {w:'नींबू',i:'🍋'}] },
    { L: 'प', e: [{w:'पतंग',i:'🪁'}, {w:'पत्ता',i:'🍃'}, {w:'पपीता',i:'🥭'}] },
    { L: 'फ', e: [{w:'फल',i:'🍎'}, {w:'फूल',i:'🌸'}, {w:'फुटबॉल',i:'⚽'}] },
    { L: 'ब', e: [{w:'बत्तख',i:'🦆'}, {w:'बकरी',i:'🐐'}, {w:'बंदर',i:'🐒'}] },
    { L: 'भ', e: [{w:'भालू',i:'🐻'}, {w:'भवन',i:'🏛️'}, {w:'भेड़',i:'🐑'}] },
    { L: 'म', e: [{w:'मछली',i:'🐟'}, {w:'मोर',i:'🦚'}, {w:'मटर',i:'🫛'}] },
    { L: 'य', e: [{w:'यज्ञ',i:'🔥'}, {w:'यान',i:'🚀'}, {w:'योगा',i:'🧘'}] },
    { L: 'र', e: [{w:'रथ',i:'🛷'}, {w:'रस्सी',i:'🪢'}, {w:'राजा',i:'👑'}] },
    { L: 'ल', e: [{w:'लट्टू',i:'🪀'}, {w:'लड़का',i:'👦'}, {w:'लहसुन',i:'🧄'}] },
    { L: 'व', e: [{w:'वक',i:'🦢'}, {w:'वन',i:'🌲'}, {w:'वर्षा',i:'🌧️'}] },
    { L: 'श', e: [{w:'शलजम',i:'🧅'}, {w:'शंख',i:'🐚'}, {w:'शेर',i:'🦁'}] },
    { L: 'ष', e: [{w:'षट्कोण',i:'💠'}, {w:'षटपद',i:'🐝'}, {w:'ष',i:'✨'}] },
    { L: 'स', e: [{w:'सेब',i:'🍎'}, {w:'सूरज',i:'☀️'}, {w:'सड़क',i:'🛣️'}] },
    { L: 'ह', e: [{w:'हाथी',i:'🐘'}, {w:'हाथ',i:'✋'}, {w:'हवा',i:'💨'}] },
    { L: 'क्ष', e: [{w:'क्षत्रिय',i:'⚔️'}, {w:'क्षमा',i:'🙏'}, {w:'क्ष',i:'✨'}] },
    { L: 'त्र', e: [{w:'त्रिशूल',i:'🔱'}, {w:'त्रिभुज',i:'🔺'}, {w:'त्र',i:'✨'}] },
    { L: 'ज्ञ', e: [{w:'ज्ञानी',i:'🧠'}, {w:'ज्ञान',i:'📚'}, {w:'ज्ञ',i:'✨'}] }
  ];

  const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  return letters.map((item, idx) => {
    let wrongLetter1 = getRandomItem(letters);
    while (wrongLetter1.L === item.L) wrongLetter1 = getRandomItem(letters);
    let wrongLetter2 = getRandomItem(letters);
    while (wrongLetter2.L === item.L || wrongLetter2.L === wrongLetter1.L) wrongLetter2 = getRandomItem(letters);

    const findPictureOptions = shuffle([
      item.e[0],
      wrongLetter1.e[0],
      wrongLetter2.e[0]
    ]);

    const findLetterGrid = shuffle([
      item.L, item.L, item.L,
      wrongLetter1.L, wrongLetter2.L, getRandomItem(letters).L,
      getRandomItem(letters).L, wrongLetter1.L, item.L
    ]);

    const oddOneOutOptions = shuffle([
      item.e[0], item.e[1], item.e[2], wrongLetter1.e[0]
    ]);

    const makeQuiz = (q, target, ...distractors) => {
      const opts = [target, ...distractors];
      const shuffled = [...opts].sort(() => Math.random() - 0.5);
      return { question: q, options: shuffled, answer: shuffled.indexOf(target) };
    };

    return {
      ...item,
      id: `vyanjan_${idx}`,
      letter: item.L,
      word: item.e[0].w,
      image: item.e[0].i,
      examples: item.e.map(e => ({ word: e.w, image: e.i })),
      trace: true,
      practice: [
        { type: 'trace', target: item.L },
        { type: 'find-picture', target: item.e[0], options: findPictureOptions },
        { type: 'find-letter', target: item.L, targetLower: item.L, grid: findLetterGrid },
        { type: 'pop-balloon', target: item.L },
        { type: 'odd-one-out', targetLabel: wrongLetter1.e[0].w, targetImage: wrongLetter1.e[0].i, options: oddOneOutOptions },
        { type: 'memory-match', upper: item.L, lower: item.L, word: item.e[0].w, image: item.e[0].i },
        { type: 'feed-monkey', target: item.L },
        { type: 'reward' }
      ],
      games: [
        { type: 'magic-hats', target: item.L },
        { type: 'splash-color', target: item.e[0].i },
        { type: 'drag-to-basket', target: item.e[0], options: findPictureOptions },
        { type: 'whack-a-letter', target: item.L, options: [item.L, wrongLetter1.L, wrongLetter2.L, wrongLetter1.L] },
        { type: 'letter-train', target: item.L, options: [wrongLetter1.L, wrongLetter2.L] },
        { type: 'reward' }
      ],
      quizzes: [
        makeQuiz(`${item.L} खोजें`, item.L, wrongLetter1.L, wrongLetter2.L),
        makeQuiz(`चित्र ${item.e[0].i} खोजें`, item.e[0].i, wrongLetter1.e[0].i, wrongLetter2.e[0].i),
        makeQuiz(`${item.L} से क्या शुरू होता है?`, item.e[0].i, wrongLetter1.e[0].i),
        makeQuiz(`यह क्या है ${item.e[0].i}?`, item.e[0].w, wrongLetter1.e[0].w),
        makeQuiz(`${item.e[1].i} खोजें`, item.e[1].i, wrongLetter1.e[1].i, wrongLetter2.e[1].i),
        makeQuiz(`${item.L} से शुरू होने वाला शब्द?`, item.e[1].w, wrongLetter1.e[1].w),
        makeQuiz(`${item.L} से क्या शुरू होता है?`, item.e[1].i, wrongLetter1.e[1].i),
        makeQuiz(`${item.e[2].i} खोजें`, item.e[2].i, wrongLetter1.e[2].i, wrongLetter2.e[2].i),
        makeQuiz(`${item.L} से शुरू होने वाला शब्द?`, item.e[2].w, wrongLetter1.e[2].w),
        { type: 'reward' }
      ],
      game: { type: 'pop-balloon', target: item.L }
    };
  });
};

const fileContent = `export const CLASSES = {
  nursery: {
    id: 'nursery',
    label: 'Nursery',
    age: '3-4',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500',
    subjects: {
      english: [
        {
          id: 'eng-alphabets',
          title: 'Alphabets (A-Z)',
          icon: '🔤',
          color: 'kid-primary',
          lessons: ${JSON.stringify(generateEnglishAlphabets(), null, 12)}
        },
        {
          id: 'eng-phonics',
          title: 'Phonics',
          icon: '🔊',
          color: 'kid-purple',
          lessons: [
            { id: 'ph-a', letter: 'A', word: 'Ant', image: '🐜', trace: false, quiz: { question: 'Which starts with A?', options: ['Ant', 'Bat', 'Cat'], answer: 0 }, game: { type: 'catch-stars', target: 'A' } }
          ]
        }
      ],
      hindi: [
        {
          id: 'hin-alphabets',
          title: 'Hindi Varnamala',
          icon: 'अ',
          color: 'kid-yellow-dark',
          lessons: ${JSON.stringify([...generateHindiSwar(), ...generateHindiVyanjan()], null, 12)}
        }
      ],
      math: [
        {
          id: 'math-numbers',
          title: 'Numbers (1-10)',
          icon: '🔢',
          color: 'kid-secondary',
          lessons: [
            { id: 'n1', number: 1, image: '🍎', count: 1, quiz: { question: 'How many apples?', options: ['1','2','3'], answer: 0 }, game: { type: 'catch-stars', target: '1' } },
            { id: 'n2', number: 2, image: '🎈', count: 2, quiz: { question: 'How many balloons?', options: ['1','2','3'], answer: 1 }, game: { type: 'catch-stars', target: '2' } }
          ]
        },
        {
          id: 'math-shapes',
          title: 'Shapes',
          icon: '⭐',
          color: 'kid-green',
          lessons: [
            { id: 's-circle', word: 'Circle', image: '⚪', quiz: { question: 'Find the Circle', options: ['⚪', '🟩', '🔺'], answer: 0 }, game: { type: 'catch-stars', target: '⚪' } }
          ]
        }
      ]
    }
  },
  kg1: {
    id: 'kg1',
    label: 'KG1',
    age: '4-5',
    icon: '🌼',
    color: 'from-yellow-400 to-amber-500',
    subjects: {
      english: [
        { id: 'eng-capital', title: 'Capital Letters', icon: '🔠', color: 'kid-primary', lessons: [] },
        { id: 'eng-small', title: 'Small Letters', icon: '🔡', color: 'kid-purple', lessons: [] }
      ],
      hindi: [
        { id: 'hin-varnamala', title: 'Varnamala Recap', icon: 'अ', color: 'kid-yellow-dark', lessons: [] }
      ],
      math: [
        { id: 'math-count', title: 'Counting (1-50)', icon: '🔢', color: 'kid-secondary', lessons: [] }
      ]
    }
  },
  kg2: {
    id: 'kg2',
    label: 'KG2',
    age: '5-6',
    icon: '🚀',
    color: 'from-blue-400 to-indigo-500',
    subjects: {
      english: [
        { id: 'eng-reading', title: 'Reading Words', icon: '📖', color: 'kid-primary', lessons: [] },
        { id: 'eng-sentences', title: 'Simple Sentences', icon: '📝', color: 'kid-purple', lessons: [] }
      ],
      hindi: [
        { id: 'hin-matra', title: 'Matras', icon: 'आ', color: 'kid-yellow-dark', lessons: [] },
        { id: 'hin-words', title: 'Simple Words', icon: 'शब्द', color: 'kid-pink', lessons: [] }
      ],
      math: [
        { id: 'math-add', title: 'Addition', icon: '➕', color: 'kid-secondary', lessons: [] },
        { id: 'math-sub', title: 'Subtraction', icon: '➖', color: 'kid-green', lessons: [] }
      ]
    }
  }
};

export const getClass = (id) => CLASSES[id];
`;

fs.writeFileSync("/Users/priyansh/Learning/Projects/Kid's Website/my-project/src/data/curriculum.js", fileContent);
