export const CLASSES = {
  nursery: {
    id: 'nursery',
    label: 'Nursery',
    age: '3-4',
    icon: '🌱',
    color: 'from-green-400 to-emerald-500',
    modules: [
      {
        id: 'alphabet',
        title: 'Alphabets',
        icon: '🔤',
        lessons: [
          {
            id: 'a',
            letter: 'A',
            word: 'Apple',
            image: '🍎',
            trace: true,
            quiz: { question: 'Find A', options: ['A','B','C'], answer: 0 },
            game: { type: 'pop-balloon', target: 'A' }
          },
          {
            id: 'b',
            letter: 'B',
            word: 'Ball',
            image: '⚽',
            trace: true,
            quiz: { question: 'Find B', options: ['B','D','F'], answer: 0 },
            game: { type: 'pop-balloon', target: 'B' }
          },
          {
            id: 'c',
            letter: 'C',
            word: 'Cat',
            image: '🐱',
            trace: true,
            quiz: { question: 'Find C', options: ['C','E','G'], answer: 0 },
            game: { type: 'pop-balloon', target: 'C' }
          },
          // Add more letters up to Z if needed
        ]
      },
      {
        id: 'numbers',
        title: 'Numbers',
        icon: '🔢',
        lessons: [
          {
            id: 'n1',
            number: 1,
            image: '🍎',
            count: 1,
            quiz: { question: 'How many apples?', options: ['1','2','3'], answer: 0 },
            game: { type: 'catch-stars', target: '1' }
          },
          {
            id: 'n2',
            number: 2,
            image: '🎈',
            count: 2,
            quiz: { question: 'How many balloons?', options: ['1','2','3'], answer: 1 },
            game: { type: 'catch-stars', target: '2' }
          },
          // Add more numbers up to 10
        ]
      },
      {
        id: 'fruits',
        title: 'Fruits',
        icon: '🍎',
        lessons: [
          {
            id: 'apple',
            word: 'Apple',
            image: '🍎',
            quiz: { question: 'Which fruit is this?', options: ['Apple','Banana','Orange'], answer: 0 },
            game: { type: 'feed-monkey', target: 'Apple' }
          },
          {
            id: 'banana',
            word: 'Banana',
            image: '🍌',
            quiz: { question: 'Which fruit is this?', options: ['Apple','Banana','Orange'], answer: 1 },
            game: { type: 'feed-monkey', target: 'Banana' }
          }
        ]
      },
      {
        id: 'shapes',
        title: 'Shapes',
        icon: '⭐',
        lessons: [] // empty for now
      },
      {
        id: 'colors',
        title: 'Colors',
        icon: '🎨',
        lessons: []
      },
      {
        id: 'animals',
        title: 'Animals',
        icon: '🐶',
        lessons: []
      },
      // ... add other modules similarly
    ]
  },
  kg1: {
    id: 'kg1',
    label: 'KG1',
    age: '4-5',
    icon: '🌼',
    color: 'from-yellow-400 to-amber-500',
    modules: [
      { id: 'capital-letters', title: 'Capital Letters', icon: '🔠', lessons: [] },
      { id: 'small-letters', title: 'Small Letters', icon: '🔡', lessons: [] },
      { id: 'phonics', title: 'Phonics', icon: '🔊', lessons: [] },
      { id: 'numbers-100', title: 'Numbers 1-100', icon: '🔢', lessons: [] },
      { id: 'counting', title: 'Counting', icon: '🔢', lessons: [] },
      { id: 'addition', title: 'Addition', icon: '➕', lessons: [] },
      { id: 'subtraction', title: 'Subtraction', icon: '➖', lessons: [] },
      { id: 'colors', title: 'Colors', icon: '🎨', lessons: [] },
      { id: 'shapes', title: 'Shapes', icon: '⭐', lessons: [] },
      { id: 'animals', title: 'Animals', icon: '🐶', lessons: [] },
      { id: 'birds', title: 'Birds', icon: '🐦', lessons: [] },
      { id: 'vegetables', title: 'Vegetables', icon: '🥕', lessons: [] },
      { id: 'fruits', title: 'Fruits', icon: '🍎', lessons: [] },
      { id: 'opposites', title: 'Opposite Words', icon: '⬆️⬇️', lessons: [] },
      { id: 'matching', title: 'Matching', icon: '🔗', lessons: [] },
      { id: 'memory', title: 'Memory Game', icon: '🧠', lessons: [] },
      { id: 'rhymes', title: 'Rhymes', icon: '🎵', lessons: [] },
      { id: 'stories', title: 'Stories', icon: '📖', lessons: [] },
      { id: 'drawing', title: 'Drawing', icon: '✏️', lessons: [] },
      { id: 'tracing', title: 'Tracing', icon: '✍️', lessons: [] },
      { id: 'quiz', title: 'Quiz', icon: '❓', lessons: [] },
      { id: 'rewards', title: 'Rewards', icon: '🏆', lessons: [] },
    ]
  },
  kg2: {
    id: 'kg2',
    label: 'KG2',
    age: '5-6',
    icon: '🚀',
    color: 'from-blue-400 to-indigo-500',
    modules: [
      { id: 'reading', title: 'Reading', icon: '📖', lessons: [] },
      { id: 'writing', title: 'Writing', icon: '✍️', lessons: [] },
      { id: 'word-formation', title: 'Word Formation', icon: '🧩', lessons: [] },
      { id: 'sentences', title: 'Simple Sentences', icon: '📝', lessons: [] },
      { id: 'math-addition', title: 'Addition', icon: '➕', lessons: [] },
      { id: 'math-subtraction', title: 'Subtraction', icon: '➖', lessons: [] },
      { id: 'multiplication', title: 'Multiplication Intro', icon: '✖️', lessons: [] },
      { id: 'time', title: 'Time', icon: '🕒', lessons: [] },
      { id: 'calendar', title: 'Calendar', icon: '📅', lessons: [] },
      { id: 'money', title: 'Money', icon: '💰', lessons: [] },
      { id: 'patterns', title: 'Patterns', icon: '🔁', lessons: [] },
      { id: 'science-plants', title: 'Plants', icon: '🌱', lessons: [] },
      { id: 'science-animals', title: 'Animals', icon: '🐘', lessons: [] },
      { id: 'human-body', title: 'Human Body', icon: '🧍', lessons: [] },
      { id: 'community-helpers', title: 'Community Helpers', icon: '👮', lessons: [] },
      { id: 'transport', title: 'Transport', icon: '🚗', lessons: [] },
      { id: 'puzzles', title: 'Puzzle Games', icon: '🧩', lessons: [] },
      { id: 'memory', title: 'Memory Games', icon: '🧠', lessons: [] },
      { id: 'quiz', title: 'Quiz', icon: '❓', lessons: [] },
      { id: 'achievements', title: 'Achievements', icon: '🏅', lessons: [] },
      { id: 'certificates', title: 'Certificates', icon: '📜', lessons: [] },
    ]
  }
};

export const getClass = (id) => CLASSES[id];