export const CLASSES = {
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
          lessons: [
          {
                    "L": "A",
                    "l": "a",
                    "e": [
                              {
                                        "w": "Apple",
                                        "i": "🍎"
                              },
                              {
                                        "w": "Ant",
                                        "i": "🐜"
                              },
                              {
                                        "w": "Airplane",
                                        "i": "✈️"
                              }
                    ],
                    "id": "a",
                    "letter": "A",
                    "word": "Apple",
                    "image": "🍎",
                    "examples": [
                              {
                                        "word": "Apple",
                                        "image": "🍎"
                              },
                              {
                                        "word": "Ant",
                                        "image": "🐜"
                              },
                              {
                                        "word": "Airplane",
                                        "image": "✈️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "A"
                              },
                              {
                                        "type": "trace",
                                        "target": "a"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Apple",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Goat",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "A",
                                        "targetLower": "a",
                                        "grid": [
                                                  "T",
                                                  "A",
                                                  "g",
                                                  "a",
                                                  "A",
                                                  "L",
                                                  "a",
                                                  "l",
                                                  "o"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "A",
                                        "lower": "a",
                                        "options": [
                                                  "g",
                                                  "a",
                                                  "l"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "A"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Lion",
                                        "targetImage": "🦁",
                                        "options": [
                                                  {
                                                            "w": "Airplane",
                                                            "i": "✈️"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Ant",
                                                            "i": "🐜"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "A",
                                        "lower": "a",
                                        "word": "Apple",
                                        "image": "🍎"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "a"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "A"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍎"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Apple",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Goat",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "A",
                                        "options": [
                                                  "a",
                                                  "L",
                                                  "g",
                                                  "l"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "A",
                                        "options": [
                                                  "L",
                                                  "G"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find A",
                                        "options": [
                                                  "L",
                                                  "G",
                                                  "A"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find a",
                                        "options": [
                                                  "l",
                                                  "a",
                                                  "g"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🍎",
                                        "options": [
                                                  "🐐",
                                                  "🍎",
                                                  "🦁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with A?",
                                        "options": [
                                                  "🦁",
                                                  "🍎"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "A is for...",
                                        "options": [
                                                  "🍎",
                                                  "🦁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match A",
                                        "options": [
                                                  "l",
                                                  "a"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is A?",
                                        "options": [
                                                  "Apple",
                                                  "Lion"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐜",
                                        "options": [
                                                  "🐜",
                                                  "🍋",
                                                  "🍇"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with A?",
                                        "options": [
                                                  "🐜",
                                                  "🍋"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "A"
                    }
          },
          {
                    "L": "B",
                    "l": "b",
                    "e": [
                              {
                                        "w": "Ball",
                                        "i": "⚽"
                              },
                              {
                                        "w": "Bear",
                                        "i": "🐻"
                              },
                              {
                                        "w": "Bus",
                                        "i": "🚌"
                              }
                    ],
                    "id": "b",
                    "letter": "B",
                    "word": "Ball",
                    "image": "⚽",
                    "examples": [
                              {
                                        "word": "Ball",
                                        "image": "⚽"
                              },
                              {
                                        "word": "Bear",
                                        "image": "🐻"
                              },
                              {
                                        "word": "Bus",
                                        "image": "🚌"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "B"
                              },
                              {
                                        "type": "trace",
                                        "target": "b"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Ball",
                                                  "i": "⚽"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Ball",
                                                            "i": "⚽"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "B",
                                        "targetLower": "b",
                                        "grid": [
                                                  "l",
                                                  "p",
                                                  "B",
                                                  "I",
                                                  "S",
                                                  "B",
                                                  "b",
                                                  "b",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "B",
                                        "lower": "b",
                                        "options": [
                                                  "s",
                                                  "b",
                                                  "p"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "B"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Sun",
                                        "targetImage": "☀️",
                                        "options": [
                                                  {
                                                            "w": "Bear",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "Ball",
                                                            "i": "⚽"
                                                  },
                                                  {
                                                            "w": "Bus",
                                                            "i": "🚌"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "B",
                                        "lower": "b",
                                        "word": "Ball",
                                        "image": "⚽"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "b"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "B"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "⚽"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Ball",
                                                  "i": "⚽"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Ball",
                                                            "i": "⚽"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "B",
                                        "options": [
                                                  "b",
                                                  "S",
                                                  "p",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "B",
                                        "options": [
                                                  "S",
                                                  "P"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find B",
                                        "options": [
                                                  "S",
                                                  "B",
                                                  "P"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find b",
                                        "options": [
                                                  "p",
                                                  "s",
                                                  "b"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find ⚽",
                                        "options": [
                                                  "🐷",
                                                  "☀️",
                                                  "⚽"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with B?",
                                        "options": [
                                                  "⚽",
                                                  "☀️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "B is for...",
                                        "options": [
                                                  "☀️",
                                                  "⚽"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match B",
                                        "options": [
                                                  "s",
                                                  "b"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is B?",
                                        "options": [
                                                  "Ball",
                                                  "Sun"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐻",
                                        "options": [
                                                  "🐧",
                                                  "🐍",
                                                  "🐻"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with B?",
                                        "options": [
                                                  "🐍",
                                                  "🐻"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "B"
                    }
          },
          {
                    "L": "C",
                    "l": "c",
                    "e": [
                              {
                                        "w": "Cat",
                                        "i": "🐱"
                              },
                              {
                                        "w": "Car",
                                        "i": "🚗"
                              },
                              {
                                        "w": "Cake",
                                        "i": "🎂"
                              }
                    ],
                    "id": "c",
                    "letter": "C",
                    "word": "Cat",
                    "image": "🐱",
                    "examples": [
                              {
                                        "word": "Cat",
                                        "image": "🐱"
                              },
                              {
                                        "word": "Car",
                                        "image": "🚗"
                              },
                              {
                                        "word": "Cake",
                                        "image": "🎂"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "C"
                              },
                              {
                                        "type": "trace",
                                        "target": "c"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Cat",
                                                  "i": "🐱"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  },
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "C",
                                        "targetLower": "c",
                                        "grid": [
                                                  "T",
                                                  "C",
                                                  "c",
                                                  "c",
                                                  "C",
                                                  "v",
                                                  "z",
                                                  "m",
                                                  "Z"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "C",
                                        "lower": "c",
                                        "options": [
                                                  "v",
                                                  "c",
                                                  "z"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "C"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Zebra",
                                        "targetImage": "🦓",
                                        "options": [
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  },
                                                  {
                                                            "w": "Car",
                                                            "i": "🚗"
                                                  },
                                                  {
                                                            "w": "Cake",
                                                            "i": "🎂"
                                                  },
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "C",
                                        "lower": "c",
                                        "word": "Cat",
                                        "image": "🐱"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "c"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "C"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐱"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Cat",
                                                  "i": "🐱"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  },
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "C",
                                        "options": [
                                                  "c",
                                                  "Z",
                                                  "v",
                                                  "z"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "C",
                                        "options": [
                                                  "Z",
                                                  "V"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find C",
                                        "options": [
                                                  "V",
                                                  "C",
                                                  "Z"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find c",
                                        "options": [
                                                  "z",
                                                  "c",
                                                  "v"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐱",
                                        "options": [
                                                  "🦓",
                                                  "🚐",
                                                  "🐱"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with C?",
                                        "options": [
                                                  "🐱",
                                                  "🦓"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "C is for...",
                                        "options": [
                                                  "🐱",
                                                  "🦓"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match C",
                                        "options": [
                                                  "c",
                                                  "z"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is C?",
                                        "options": [
                                                  "Cat",
                                                  "Zebra"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🚗",
                                        "options": [
                                                  "🦁",
                                                  "🌋",
                                                  "🚗"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with C?",
                                        "options": [
                                                  "🚗",
                                                  "🦁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "C"
                    }
          },
          {
                    "L": "D",
                    "l": "d",
                    "e": [
                              {
                                        "w": "Dog",
                                        "i": "🐶"
                              },
                              {
                                        "w": "Duck",
                                        "i": "🦆"
                              },
                              {
                                        "w": "Drum",
                                        "i": "🥁"
                              }
                    ],
                    "id": "d",
                    "letter": "D",
                    "word": "Dog",
                    "image": "🐶",
                    "examples": [
                              {
                                        "word": "Dog",
                                        "image": "🐶"
                              },
                              {
                                        "word": "Duck",
                                        "image": "🦆"
                              },
                              {
                                        "word": "Drum",
                                        "image": "🥁"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "D"
                              },
                              {
                                        "type": "trace",
                                        "target": "d"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Dog",
                                                  "i": "🐶"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Dog",
                                                            "i": "🐶"
                                                  },
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "D",
                                        "targetLower": "d",
                                        "grid": [
                                                  "d",
                                                  "d",
                                                  "A",
                                                  "l",
                                                  "D",
                                                  "c",
                                                  "U",
                                                  "D",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "D",
                                        "lower": "d",
                                        "options": [
                                                  "a",
                                                  "d",
                                                  "c"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "D"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Apple",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Duck",
                                                            "i": "🦆"
                                                  },
                                                  {
                                                            "w": "Drum",
                                                            "i": "🥁"
                                                  },
                                                  {
                                                            "w": "Dog",
                                                            "i": "🐶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "D",
                                        "lower": "d",
                                        "word": "Dog",
                                        "image": "🐶"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "d"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "D"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐶"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Dog",
                                                  "i": "🐶"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Dog",
                                                            "i": "🐶"
                                                  },
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "D",
                                        "options": [
                                                  "d",
                                                  "A",
                                                  "c",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "D",
                                        "options": [
                                                  "A",
                                                  "C"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find D",
                                        "options": [
                                                  "C",
                                                  "D",
                                                  "A"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find d",
                                        "options": [
                                                  "d",
                                                  "a",
                                                  "c"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐶",
                                        "options": [
                                                  "🍎",
                                                  "🐶",
                                                  "🐱"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with D?",
                                        "options": [
                                                  "🍎",
                                                  "🐶"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "D is for...",
                                        "options": [
                                                  "🍎",
                                                  "🐶"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match D",
                                        "options": [
                                                  "d",
                                                  "a"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is D?",
                                        "options": [
                                                  "Apple",
                                                  "Dog"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🦆",
                                        "options": [
                                                  "🐜",
                                                  "🦆",
                                                  "🚗"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with D?",
                                        "options": [
                                                  "🐜",
                                                  "🦆"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "D"
                    }
          },
          {
                    "L": "E",
                    "l": "e",
                    "e": [
                              {
                                        "w": "Elephant",
                                        "i": "🐘"
                              },
                              {
                                        "w": "Egg",
                                        "i": "🥚"
                              },
                              {
                                        "w": "Engine",
                                        "i": "🚂"
                              }
                    ],
                    "id": "e",
                    "letter": "E",
                    "word": "Elephant",
                    "image": "🐘",
                    "examples": [
                              {
                                        "word": "Elephant",
                                        "image": "🐘"
                              },
                              {
                                        "word": "Egg",
                                        "image": "🥚"
                              },
                              {
                                        "word": "Engine",
                                        "image": "🚂"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "E"
                              },
                              {
                                        "type": "trace",
                                        "target": "e"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Elephant",
                                                  "i": "🐘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Elephant",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "E",
                                        "targetLower": "e",
                                        "grid": [
                                                  "a",
                                                  "P",
                                                  "o",
                                                  "r",
                                                  "A",
                                                  "E",
                                                  "e",
                                                  "E",
                                                  "e"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "E",
                                        "lower": "e",
                                        "options": [
                                                  "a",
                                                  "e",
                                                  "o"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "E"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Apple",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "Egg",
                                                            "i": "🥚"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Engine",
                                                            "i": "🚂"
                                                  },
                                                  {
                                                            "w": "Elephant",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "E",
                                        "lower": "e",
                                        "word": "Elephant",
                                        "image": "🐘"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "e"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "E"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐘"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Elephant",
                                                  "i": "🐘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Elephant",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "E",
                                        "options": [
                                                  "e",
                                                  "A",
                                                  "o",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "E",
                                        "options": [
                                                  "A",
                                                  "O"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find E",
                                        "options": [
                                                  "A",
                                                  "E",
                                                  "O"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find e",
                                        "options": [
                                                  "a",
                                                  "e",
                                                  "o"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐘",
                                        "options": [
                                                  "🦉",
                                                  "🐘",
                                                  "🍎"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with E?",
                                        "options": [
                                                  "🐘",
                                                  "🍎"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "E is for...",
                                        "options": [
                                                  "🐘",
                                                  "🍎"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match E",
                                        "options": [
                                                  "e",
                                                  "a"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is E?",
                                        "options": [
                                                  "Apple",
                                                  "Elephant"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🥚",
                                        "options": [
                                                  "🥚",
                                                  "🐜",
                                                  "🍊"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with E?",
                                        "options": [
                                                  "🐜",
                                                  "🥚"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "E"
                    }
          },
          {
                    "L": "F",
                    "l": "f",
                    "e": [
                              {
                                        "w": "Fish",
                                        "i": "🐟"
                              },
                              {
                                        "w": "Frog",
                                        "i": "🐸"
                              },
                              {
                                        "w": "Flower",
                                        "i": "🌸"
                              }
                    ],
                    "id": "f",
                    "letter": "F",
                    "word": "Fish",
                    "image": "🐟",
                    "examples": [
                              {
                                        "word": "Fish",
                                        "image": "🐟"
                              },
                              {
                                        "word": "Frog",
                                        "image": "🐸"
                              },
                              {
                                        "word": "Flower",
                                        "image": "🌸"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "F"
                              },
                              {
                                        "type": "trace",
                                        "target": "f"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Fish",
                                                  "i": "🐟"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "F",
                                        "targetLower": "f",
                                        "grid": [
                                                  "f",
                                                  "Y",
                                                  "F",
                                                  "h",
                                                  "l",
                                                  "f",
                                                  "s",
                                                  "H",
                                                  "F"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "F",
                                        "lower": "f",
                                        "options": [
                                                  "l",
                                                  "h",
                                                  "f"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "F"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Hat",
                                        "targetImage": "🎩",
                                        "options": [
                                                  {
                                                            "w": "Frog",
                                                            "i": "🐸"
                                                  },
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Flower",
                                                            "i": "🌸"
                                                  },
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "F",
                                        "lower": "f",
                                        "word": "Fish",
                                        "image": "🐟"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "f"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "F"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐟"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Fish",
                                                  "i": "🐟"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "F",
                                        "options": [
                                                  "f",
                                                  "H",
                                                  "l",
                                                  "h"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "F",
                                        "options": [
                                                  "H",
                                                  "L"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find F",
                                        "options": [
                                                  "F",
                                                  "L",
                                                  "H"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find f",
                                        "options": [
                                                  "l",
                                                  "f",
                                                  "h"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐟",
                                        "options": [
                                                  "🦁",
                                                  "🐟",
                                                  "🎩"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with F?",
                                        "options": [
                                                  "🐟",
                                                  "🎩"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "F is for...",
                                        "options": [
                                                  "🎩",
                                                  "🐟"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match F",
                                        "options": [
                                                  "f",
                                                  "h"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is F?",
                                        "options": [
                                                  "Fish",
                                                  "Hat"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐸",
                                        "options": [
                                                  "🍋",
                                                  "🐸",
                                                  "🐴"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with F?",
                                        "options": [
                                                  "🐴",
                                                  "🐸"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "F"
                    }
          },
          {
                    "L": "G",
                    "l": "g",
                    "e": [
                              {
                                        "w": "Goat",
                                        "i": "🐐"
                              },
                              {
                                        "w": "Grape",
                                        "i": "🍇"
                              },
                              {
                                        "w": "Guitar",
                                        "i": "🎸"
                              }
                    ],
                    "id": "g",
                    "letter": "G",
                    "word": "Goat",
                    "image": "🐐",
                    "examples": [
                              {
                                        "word": "Goat",
                                        "image": "🐐"
                              },
                              {
                                        "word": "Grape",
                                        "image": "🍇"
                              },
                              {
                                        "word": "Guitar",
                                        "image": "🎸"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "G"
                              },
                              {
                                        "type": "trace",
                                        "target": "g"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Goat",
                                                  "i": "🐐"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Goat",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "G",
                                        "targetLower": "g",
                                        "grid": [
                                                  "k",
                                                  "G",
                                                  "g",
                                                  "s",
                                                  "B",
                                                  "g",
                                                  "G",
                                                  "x",
                                                  "S"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "G",
                                        "lower": "g",
                                        "options": [
                                                  "g",
                                                  "x",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "G"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Sun",
                                        "targetImage": "☀️",
                                        "options": [
                                                  {
                                                            "w": "Goat",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "Grape",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Guitar",
                                                            "i": "🎸"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "G",
                                        "lower": "g",
                                        "word": "Goat",
                                        "image": "🐐"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "g"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "G"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐐"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Goat",
                                                  "i": "🐐"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Goat",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "G",
                                        "options": [
                                                  "g",
                                                  "S",
                                                  "x",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "G",
                                        "options": [
                                                  "S",
                                                  "X"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find G",
                                        "options": [
                                                  "S",
                                                  "G",
                                                  "X"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find g",
                                        "options": [
                                                  "g",
                                                  "s",
                                                  "x"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐐",
                                        "options": [
                                                  "🐐",
                                                  "☀️",
                                                  "🎹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with G?",
                                        "options": [
                                                  "🐐",
                                                  "☀️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "G is for...",
                                        "options": [
                                                  "☀️",
                                                  "🐐"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match G",
                                        "options": [
                                                  "s",
                                                  "g"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is G?",
                                        "options": [
                                                  "Goat",
                                                  "Sun"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🍇",
                                        "options": [
                                                  "🩻",
                                                  "🐍",
                                                  "🍇"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with G?",
                                        "options": [
                                                  "🍇",
                                                  "🐍"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "G"
                    }
          },
          {
                    "L": "H",
                    "l": "h",
                    "e": [
                              {
                                        "w": "Hat",
                                        "i": "🎩"
                              },
                              {
                                        "w": "Horse",
                                        "i": "🐴"
                              },
                              {
                                        "w": "House",
                                        "i": "🏠"
                              }
                    ],
                    "id": "h",
                    "letter": "H",
                    "word": "Hat",
                    "image": "🎩",
                    "examples": [
                              {
                                        "word": "Hat",
                                        "image": "🎩"
                              },
                              {
                                        "word": "Horse",
                                        "image": "🐴"
                              },
                              {
                                        "word": "House",
                                        "image": "🏠"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "H"
                              },
                              {
                                        "type": "trace",
                                        "target": "h"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Hat",
                                                  "i": "🎩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Elephant",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "H",
                                        "targetLower": "h",
                                        "grid": [
                                                  "h",
                                                  "n",
                                                  "H",
                                                  "H",
                                                  "S",
                                                  "e",
                                                  "l",
                                                  "h",
                                                  "L"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "H",
                                        "lower": "h",
                                        "options": [
                                                  "h",
                                                  "l",
                                                  "e"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "H"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Lion",
                                        "targetImage": "🦁",
                                        "options": [
                                                  {
                                                            "w": "House",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  },
                                                  {
                                                            "w": "Horse",
                                                            "i": "🐴"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "H",
                                        "lower": "h",
                                        "word": "Hat",
                                        "image": "🎩"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "h"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "H"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🎩"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Hat",
                                                  "i": "🎩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Hat",
                                                            "i": "🎩"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Elephant",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "H",
                                        "options": [
                                                  "h",
                                                  "L",
                                                  "e",
                                                  "l"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "H",
                                        "options": [
                                                  "L",
                                                  "E"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find H",
                                        "options": [
                                                  "H",
                                                  "L",
                                                  "E"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find h",
                                        "options": [
                                                  "l",
                                                  "e",
                                                  "h"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find 🎩",
                                        "options": [
                                                  "🐘",
                                                  "🦁",
                                                  "🎩"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with H?",
                                        "options": [
                                                  "🎩",
                                                  "🦁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "H is for...",
                                        "options": [
                                                  "🦁",
                                                  "🎩"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match H",
                                        "options": [
                                                  "l",
                                                  "h"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is H?",
                                        "options": [
                                                  "Lion",
                                                  "Hat"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐴",
                                        "options": [
                                                  "🥚",
                                                  "🐴",
                                                  "🍋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with H?",
                                        "options": [
                                                  "🍋",
                                                  "🐴"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "H"
                    }
          },
          {
                    "L": "I",
                    "l": "i",
                    "e": [
                              {
                                        "w": "Ice Cream",
                                        "i": "🍦"
                              },
                              {
                                        "w": "Igloo",
                                        "i": "🧊"
                              },
                              {
                                        "w": "Island",
                                        "i": "🏝️"
                              }
                    ],
                    "id": "i",
                    "letter": "I",
                    "word": "Ice Cream",
                    "image": "🍦",
                    "examples": [
                              {
                                        "word": "Ice Cream",
                                        "image": "🍦"
                              },
                              {
                                        "word": "Igloo",
                                        "image": "🧊"
                              },
                              {
                                        "word": "Island",
                                        "image": "🏝️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "I"
                              },
                              {
                                        "type": "trace",
                                        "target": "i"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Ice Cream",
                                                  "i": "🍦"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "I",
                                        "targetLower": "i",
                                        "grid": [
                                                  "w",
                                                  "C",
                                                  "i",
                                                  "v",
                                                  "i",
                                                  "W",
                                                  "I",
                                                  "I",
                                                  "n"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "I",
                                        "lower": "i",
                                        "options": [
                                                  "i",
                                                  "w",
                                                  "n"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "I"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Watermelon",
                                        "targetImage": "🍉",
                                        "options": [
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Igloo",
                                                            "i": "🧊"
                                                  },
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Island",
                                                            "i": "🏝️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "I",
                                        "lower": "i",
                                        "word": "Ice Cream",
                                        "image": "🍦"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "i"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "I"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍦"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Ice Cream",
                                                  "i": "🍦"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "I",
                                        "options": [
                                                  "i",
                                                  "W",
                                                  "n",
                                                  "w"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "I",
                                        "options": [
                                                  "W",
                                                  "N"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find I",
                                        "options": [
                                                  "W",
                                                  "N",
                                                  "I"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find i",
                                        "options": [
                                                  "i",
                                                  "w",
                                                  "n"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🍦",
                                        "options": [
                                                  "🪹",
                                                  "🍉",
                                                  "🍦"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with I?",
                                        "options": [
                                                  "🍦",
                                                  "🍉"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "I is for...",
                                        "options": [
                                                  "🍦",
                                                  "🍉"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match I",
                                        "options": [
                                                  "i",
                                                  "w"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is I?",
                                        "options": [
                                                  "Ice Cream",
                                                  "Watermelon"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🧊",
                                        "options": [
                                                  "🧊",
                                                  "🐳",
                                                  "🥅"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with I?",
                                        "options": [
                                                  "🐳",
                                                  "🧊"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "I"
                    }
          },
          {
                    "L": "J",
                    "l": "j",
                    "e": [
                              {
                                        "w": "Juice",
                                        "i": "🧃"
                              },
                              {
                                        "w": "Jacket",
                                        "i": "🧥"
                              },
                              {
                                        "w": "Jellyfish",
                                        "i": "🪼"
                              }
                    ],
                    "id": "j",
                    "letter": "J",
                    "word": "Juice",
                    "image": "🧃",
                    "examples": [
                              {
                                        "word": "Juice",
                                        "image": "🧃"
                              },
                              {
                                        "word": "Jacket",
                                        "image": "🧥"
                              },
                              {
                                        "word": "Jellyfish",
                                        "image": "🪼"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "J"
                              },
                              {
                                        "type": "trace",
                                        "target": "j"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Juice",
                                                  "i": "🧃"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "J",
                                        "targetLower": "j",
                                        "grid": [
                                                  "o",
                                                  "p",
                                                  "j",
                                                  "J",
                                                  "J",
                                                  "P",
                                                  "j",
                                                  "Z",
                                                  "h"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "J",
                                        "lower": "j",
                                        "options": [
                                                  "j",
                                                  "p",
                                                  "o"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "J"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Pig",
                                        "targetImage": "🐷",
                                        "options": [
                                                  {
                                                            "w": "Jacket",
                                                            "i": "🧥"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Jellyfish",
                                                            "i": "🪼"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "J",
                                        "lower": "j",
                                        "word": "Juice",
                                        "image": "🧃"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "j"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "J"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🧃"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Juice",
                                                  "i": "🧃"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "J",
                                        "options": [
                                                  "j",
                                                  "P",
                                                  "o",
                                                  "p"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "J",
                                        "options": [
                                                  "P",
                                                  "O"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find J",
                                        "options": [
                                                  "P",
                                                  "O",
                                                  "J"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find j",
                                        "options": [
                                                  "j",
                                                  "p",
                                                  "o"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🧃",
                                        "options": [
                                                  "🧃",
                                                  "🐷",
                                                  "🦉"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with J?",
                                        "options": [
                                                  "🧃",
                                                  "🐷"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "J is for...",
                                        "options": [
                                                  "🧃",
                                                  "🐷"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match J",
                                        "options": [
                                                  "j",
                                                  "p"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is J?",
                                        "options": [
                                                  "Pig",
                                                  "Juice"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🧥",
                                        "options": [
                                                  "🧥",
                                                  "🐧",
                                                  "🍊"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with J?",
                                        "options": [
                                                  "🧥",
                                                  "🐧"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "J"
                    }
          },
          {
                    "L": "K",
                    "l": "k",
                    "e": [
                              {
                                        "w": "Kite",
                                        "i": "🪁"
                              },
                              {
                                        "w": "Kangaroo",
                                        "i": "🦘"
                              },
                              {
                                        "w": "Key",
                                        "i": "🔑"
                              }
                    ],
                    "id": "k",
                    "letter": "K",
                    "word": "Kite",
                    "image": "🪁",
                    "examples": [
                              {
                                        "word": "Kite",
                                        "image": "🪁"
                              },
                              {
                                        "word": "Kangaroo",
                                        "image": "🦘"
                              },
                              {
                                        "word": "Key",
                                        "image": "🔑"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "K"
                              },
                              {
                                        "type": "trace",
                                        "target": "k"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Kite",
                                                  "i": "🪁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "K",
                                        "targetLower": "k",
                                        "grid": [
                                                  "K",
                                                  "k",
                                                  "K",
                                                  "Q",
                                                  "q",
                                                  "a",
                                                  "I",
                                                  "f",
                                                  "k"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "K",
                                        "lower": "k",
                                        "options": [
                                                  "k",
                                                  "q",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "K"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Queen",
                                        "targetImage": "👑",
                                        "options": [
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Kangaroo",
                                                            "i": "🦘"
                                                  },
                                                  {
                                                            "w": "Key",
                                                            "i": "🔑"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "K",
                                        "lower": "k",
                                        "word": "Kite",
                                        "image": "🪁"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "k"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "K"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪁"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Kite",
                                                  "i": "🪁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "K",
                                        "options": [
                                                  "k",
                                                  "Q",
                                                  "a",
                                                  "q"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "K",
                                        "options": [
                                                  "Q",
                                                  "A"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find K",
                                        "options": [
                                                  "K",
                                                  "A",
                                                  "Q"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find k",
                                        "options": [
                                                  "a",
                                                  "k",
                                                  "q"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🪁",
                                        "options": [
                                                  "🪁",
                                                  "👑",
                                                  "🍎"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with K?",
                                        "options": [
                                                  "👑",
                                                  "🪁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "K is for...",
                                        "options": [
                                                  "👑",
                                                  "🪁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match K",
                                        "options": [
                                                  "k",
                                                  "q"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is K?",
                                        "options": [
                                                  "Queen",
                                                  "Kite"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🦘",
                                        "options": [
                                                  "🐜",
                                                  "🦘",
                                                  "🛌"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with K?",
                                        "options": [
                                                  "🛌",
                                                  "🦘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "K"
                    }
          },
          {
                    "L": "L",
                    "l": "l",
                    "e": [
                              {
                                        "w": "Lion",
                                        "i": "🦁"
                              },
                              {
                                        "w": "Lemon",
                                        "i": "🍋"
                              },
                              {
                                        "w": "Leaf",
                                        "i": "🍃"
                              }
                    ],
                    "id": "l",
                    "letter": "L",
                    "word": "Lion",
                    "image": "🦁",
                    "examples": [
                              {
                                        "word": "Lion",
                                        "image": "🦁"
                              },
                              {
                                        "word": "Lemon",
                                        "image": "🍋"
                              },
                              {
                                        "word": "Leaf",
                                        "image": "🍃"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "L"
                              },
                              {
                                        "type": "trace",
                                        "target": "l"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Lion",
                                                  "i": "🦁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "L",
                                        "targetLower": "l",
                                        "grid": [
                                                  "j",
                                                  "l",
                                                  "l",
                                                  "M",
                                                  "m",
                                                  "U",
                                                  "L",
                                                  "w",
                                                  "L"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "L",
                                        "lower": "l",
                                        "options": [
                                                  "j",
                                                  "l",
                                                  "m"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "L"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Monkey",
                                        "targetImage": "🐵",
                                        "options": [
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Lemon",
                                                            "i": "🍋"
                                                  },
                                                  {
                                                            "w": "Leaf",
                                                            "i": "🍃"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "L",
                                        "lower": "l",
                                        "word": "Lion",
                                        "image": "🦁"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "l"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "L"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦁"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Lion",
                                                  "i": "🦁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "L",
                                        "options": [
                                                  "l",
                                                  "M",
                                                  "j",
                                                  "m"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "L",
                                        "options": [
                                                  "M",
                                                  "J"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find L",
                                        "options": [
                                                  "M",
                                                  "L",
                                                  "J"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find l",
                                        "options": [
                                                  "l",
                                                  "m",
                                                  "j"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🦁",
                                        "options": [
                                                  "🦁",
                                                  "🐵",
                                                  "🧃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with L?",
                                        "options": [
                                                  "🐵",
                                                  "🦁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "L is for...",
                                        "options": [
                                                  "🦁",
                                                  "🐵"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match L",
                                        "options": [
                                                  "m",
                                                  "l"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is L?",
                                        "options": [
                                                  "Lion",
                                                  "Monkey"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🍋",
                                        "options": [
                                                  "🌙",
                                                  "🧥",
                                                  "🍋"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with L?",
                                        "options": [
                                                  "🌙",
                                                  "🍋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "L"
                    }
          },
          {
                    "L": "M",
                    "l": "m",
                    "e": [
                              {
                                        "w": "Monkey",
                                        "i": "🐵"
                              },
                              {
                                        "w": "Moon",
                                        "i": "🌙"
                              },
                              {
                                        "w": "Mouse",
                                        "i": "🐭"
                              }
                    ],
                    "id": "m",
                    "letter": "M",
                    "word": "Monkey",
                    "image": "🐵",
                    "examples": [
                              {
                                        "word": "Monkey",
                                        "image": "🐵"
                              },
                              {
                                        "word": "Moon",
                                        "image": "🌙"
                              },
                              {
                                        "word": "Mouse",
                                        "image": "🐭"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "M"
                              },
                              {
                                        "type": "trace",
                                        "target": "m"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Monkey",
                                                  "i": "🐵"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "M",
                                        "targetLower": "m",
                                        "grid": [
                                                  "M",
                                                  "S",
                                                  "s",
                                                  "m",
                                                  "x",
                                                  "m",
                                                  "v",
                                                  "M",
                                                  "X"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "M",
                                        "lower": "m",
                                        "options": [
                                                  "m",
                                                  "x",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "M"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Sun",
                                        "targetImage": "☀️",
                                        "options": [
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  },
                                                  {
                                                            "w": "Mouse",
                                                            "i": "🐭"
                                                  },
                                                  {
                                                            "w": "Moon",
                                                            "i": "🌙"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "M",
                                        "lower": "m",
                                        "word": "Monkey",
                                        "image": "🐵"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "m"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "M"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐵"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Monkey",
                                                  "i": "🐵"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "M",
                                        "options": [
                                                  "m",
                                                  "S",
                                                  "x",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "M",
                                        "options": [
                                                  "S",
                                                  "X"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find M",
                                        "options": [
                                                  "S",
                                                  "M",
                                                  "X"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find m",
                                        "options": [
                                                  "m",
                                                  "s",
                                                  "x"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐵",
                                        "options": [
                                                  "🐵",
                                                  "☀️",
                                                  "🎹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with M?",
                                        "options": [
                                                  "☀️",
                                                  "🐵"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "M is for...",
                                        "options": [
                                                  "🐵",
                                                  "☀️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match M",
                                        "options": [
                                                  "m",
                                                  "s"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is M?",
                                        "options": [
                                                  "Monkey",
                                                  "Sun"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🌙",
                                        "options": [
                                                  "🌙",
                                                  "🐍",
                                                  "🩻"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with M?",
                                        "options": [
                                                  "🐍",
                                                  "🌙"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "M"
                    }
          },
          {
                    "L": "N",
                    "l": "n",
                    "e": [
                              {
                                        "w": "Nest",
                                        "i": "🪹"
                              },
                              {
                                        "w": "Net",
                                        "i": "🥅"
                              },
                              {
                                        "w": "Ninja",
                                        "i": "🥷"
                              }
                    ],
                    "id": "n",
                    "letter": "N",
                    "word": "Nest",
                    "image": "🪹",
                    "examples": [
                              {
                                        "word": "Nest",
                                        "image": "🪹"
                              },
                              {
                                        "word": "Net",
                                        "image": "🥅"
                              },
                              {
                                        "word": "Ninja",
                                        "image": "🥷"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "N"
                              },
                              {
                                        "type": "trace",
                                        "target": "n"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Nest",
                                                  "i": "🪹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "N",
                                        "targetLower": "n",
                                        "grid": [
                                                  "K",
                                                  "a",
                                                  "n",
                                                  "N",
                                                  "n",
                                                  "P",
                                                  "u",
                                                  "N",
                                                  "k"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "N",
                                        "lower": "n",
                                        "options": [
                                                  "k",
                                                  "n",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "N"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Kite",
                                        "targetImage": "🪁",
                                        "options": [
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Ninja",
                                                            "i": "🥷"
                                                  },
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Net",
                                                            "i": "🥅"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "N",
                                        "lower": "n",
                                        "word": "Nest",
                                        "image": "🪹"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "n"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "N"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪹"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Nest",
                                                  "i": "🪹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "N",
                                        "options": [
                                                  "n",
                                                  "K",
                                                  "a",
                                                  "k"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "N",
                                        "options": [
                                                  "K",
                                                  "A"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find N",
                                        "options": [
                                                  "K",
                                                  "N",
                                                  "A"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find n",
                                        "options": [
                                                  "k",
                                                  "n",
                                                  "a"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🪹",
                                        "options": [
                                                  "🪁",
                                                  "🍎",
                                                  "🪹"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with N?",
                                        "options": [
                                                  "🪹",
                                                  "🪁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "N is for...",
                                        "options": [
                                                  "🪹",
                                                  "🪁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match N",
                                        "options": [
                                                  "n",
                                                  "k"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is N?",
                                        "options": [
                                                  "Nest",
                                                  "Kite"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🥅",
                                        "options": [
                                                  "🐜",
                                                  "🦘",
                                                  "🥅"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with N?",
                                        "options": [
                                                  "🦘",
                                                  "🥅"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "N"
                    }
          },
          {
                    "L": "O",
                    "l": "o",
                    "e": [
                              {
                                        "w": "Owl",
                                        "i": "🦉"
                              },
                              {
                                        "w": "Orange",
                                        "i": "🍊"
                              },
                              {
                                        "w": "Octopus",
                                        "i": "🐙"
                              }
                    ],
                    "id": "o",
                    "letter": "O",
                    "word": "Owl",
                    "image": "🦉",
                    "examples": [
                              {
                                        "word": "Owl",
                                        "image": "🦉"
                              },
                              {
                                        "word": "Orange",
                                        "image": "🍊"
                              },
                              {
                                        "word": "Octopus",
                                        "image": "🐙"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "O"
                              },
                              {
                                        "type": "trace",
                                        "target": "o"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Owl",
                                                  "i": "🦉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "O",
                                        "targetLower": "o",
                                        "grid": [
                                                  "O",
                                                  "S",
                                                  "i",
                                                  "o",
                                                  "m",
                                                  "O",
                                                  "I",
                                                  "o",
                                                  "j"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "O",
                                        "lower": "o",
                                        "options": [
                                                  "o",
                                                  "i",
                                                  "m"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "O"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Ice Cream",
                                        "targetImage": "🍦",
                                        "options": [
                                                  {
                                                            "w": "Octopus",
                                                            "i": "🐙"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Orange",
                                                            "i": "🍊"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "O",
                                        "lower": "o",
                                        "word": "Owl",
                                        "image": "🦉"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "o"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "O"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦉"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Owl",
                                                  "i": "🦉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Ice Cream",
                                                            "i": "🍦"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "O",
                                        "options": [
                                                  "o",
                                                  "I",
                                                  "m",
                                                  "i"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "O",
                                        "options": [
                                                  "I",
                                                  "M"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find O",
                                        "options": [
                                                  "I",
                                                  "O",
                                                  "M"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find o",
                                        "options": [
                                                  "o",
                                                  "i",
                                                  "m"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🦉",
                                        "options": [
                                                  "🦉",
                                                  "🐵",
                                                  "🍦"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with O?",
                                        "options": [
                                                  "🍦",
                                                  "🦉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "O is for...",
                                        "options": [
                                                  "🍦",
                                                  "🦉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match O",
                                        "options": [
                                                  "o",
                                                  "i"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is O?",
                                        "options": [
                                                  "Owl",
                                                  "Ice Cream"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🍊",
                                        "options": [
                                                  "🍊",
                                                  "🧊",
                                                  "🌙"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with O?",
                                        "options": [
                                                  "🍊",
                                                  "🧊"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "O"
                    }
          },
          {
                    "L": "P",
                    "l": "p",
                    "e": [
                              {
                                        "w": "Pig",
                                        "i": "🐷"
                              },
                              {
                                        "w": "Penguin",
                                        "i": "🐧"
                              },
                              {
                                        "w": "Pizza",
                                        "i": "🍕"
                              }
                    ],
                    "id": "p",
                    "letter": "P",
                    "word": "Pig",
                    "image": "🐷",
                    "examples": [
                              {
                                        "word": "Pig",
                                        "image": "🐷"
                              },
                              {
                                        "word": "Penguin",
                                        "image": "🐧"
                              },
                              {
                                        "word": "Pizza",
                                        "image": "🍕"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "P"
                              },
                              {
                                        "type": "trace",
                                        "target": "p"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Pig",
                                                  "i": "🐷"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "P",
                                        "targetLower": "p",
                                        "grid": [
                                                  "o",
                                                  "P",
                                                  "p",
                                                  "P",
                                                  "w",
                                                  "O",
                                                  "k",
                                                  "N",
                                                  "p"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "P",
                                        "lower": "p",
                                        "options": [
                                                  "p",
                                                  "o",
                                                  "w"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "P"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Owl",
                                        "targetImage": "🦉",
                                        "options": [
                                                  {
                                                            "w": "Penguin",
                                                            "i": "🐧"
                                                  },
                                                  {
                                                            "w": "Pizza",
                                                            "i": "🍕"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "P",
                                        "lower": "p",
                                        "word": "Pig",
                                        "image": "🐷"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "p"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "P"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐷"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Pig",
                                                  "i": "🐷"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Pig",
                                                            "i": "🐷"
                                                  },
                                                  {
                                                            "w": "Owl",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "P",
                                        "options": [
                                                  "p",
                                                  "O",
                                                  "w",
                                                  "o"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "P",
                                        "options": [
                                                  "O",
                                                  "W"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find P",
                                        "options": [
                                                  "W",
                                                  "O",
                                                  "P"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find p",
                                        "options": [
                                                  "o",
                                                  "p",
                                                  "w"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐷",
                                        "options": [
                                                  "🍉",
                                                  "🐷",
                                                  "🦉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with P?",
                                        "options": [
                                                  "🐷",
                                                  "🦉"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "P is for...",
                                        "options": [
                                                  "🐷",
                                                  "🦉"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match P",
                                        "options": [
                                                  "o",
                                                  "p"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is P?",
                                        "options": [
                                                  "Pig",
                                                  "Owl"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐧",
                                        "options": [
                                                  "🐧",
                                                  "🍊",
                                                  "🐳"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with P?",
                                        "options": [
                                                  "🍊",
                                                  "🐧"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "P"
                    }
          },
          {
                    "L": "Q",
                    "l": "q",
                    "e": [
                              {
                                        "w": "Queen",
                                        "i": "👑"
                              },
                              {
                                        "w": "Quilt",
                                        "i": "🛌"
                              },
                              {
                                        "w": "Quiet",
                                        "i": "🤫"
                              }
                    ],
                    "id": "q",
                    "letter": "Q",
                    "word": "Queen",
                    "image": "👑",
                    "examples": [
                              {
                                        "word": "Queen",
                                        "image": "👑"
                              },
                              {
                                        "word": "Quilt",
                                        "image": "🛌"
                              },
                              {
                                        "word": "Quiet",
                                        "image": "🤫"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "Q"
                              },
                              {
                                        "type": "trace",
                                        "target": "q"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Queen",
                                                  "i": "👑"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Umbrella",
                                                            "i": "☂️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "Q",
                                        "targetLower": "q",
                                        "grid": [
                                                  "k",
                                                  "R",
                                                  "q",
                                                  "u",
                                                  "Q",
                                                  "q",
                                                  "Q",
                                                  "c",
                                                  "K"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "Q",
                                        "lower": "q",
                                        "options": [
                                                  "q",
                                                  "k",
                                                  "u"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "Q"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Kite",
                                        "targetImage": "🪁",
                                        "options": [
                                                  {
                                                            "w": "Quilt",
                                                            "i": "🛌"
                                                  },
                                                  {
                                                            "w": "Quiet",
                                                            "i": "🤫"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "Q",
                                        "lower": "q",
                                        "word": "Queen",
                                        "image": "👑"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "q"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "Q"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "👑"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Queen",
                                                  "i": "👑"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Umbrella",
                                                            "i": "☂️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "Q",
                                        "options": [
                                                  "q",
                                                  "K",
                                                  "u",
                                                  "k"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "Q",
                                        "options": [
                                                  "K",
                                                  "U"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find Q",
                                        "options": [
                                                  "Q",
                                                  "K",
                                                  "U"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find q",
                                        "options": [
                                                  "u",
                                                  "q",
                                                  "k"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 👑",
                                        "options": [
                                                  "☂️",
                                                  "🪁",
                                                  "👑"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with Q?",
                                        "options": [
                                                  "🪁",
                                                  "👑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Q is for...",
                                        "options": [
                                                  "🪁",
                                                  "👑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match Q",
                                        "options": [
                                                  "q",
                                                  "k"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is Q?",
                                        "options": [
                                                  "Kite",
                                                  "Queen"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🛌",
                                        "options": [
                                                  "🛌",
                                                  "🦄",
                                                  "🦘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with Q?",
                                        "options": [
                                                  "🛌",
                                                  "🦘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "Q"
                    }
          },
          {
                    "L": "R",
                    "l": "r",
                    "e": [
                              {
                                        "w": "Rabbit",
                                        "i": "🐰"
                              },
                              {
                                        "w": "Rainbow",
                                        "i": "🌈"
                              },
                              {
                                        "w": "Rocket",
                                        "i": "🚀"
                              }
                    ],
                    "id": "r",
                    "letter": "R",
                    "word": "Rabbit",
                    "image": "🐰",
                    "examples": [
                              {
                                        "word": "Rabbit",
                                        "image": "🐰"
                              },
                              {
                                        "word": "Rainbow",
                                        "image": "🌈"
                              },
                              {
                                        "word": "Rocket",
                                        "image": "🚀"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "R"
                              },
                              {
                                        "type": "trace",
                                        "target": "r"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Rabbit",
                                                  "i": "🐰"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  },
                                                  {
                                                            "w": "Rabbit",
                                                            "i": "🐰"
                                                  },
                                                  {
                                                            "w": "Dog",
                                                            "i": "🐶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "R",
                                        "targetLower": "r",
                                        "grid": [
                                                  "c",
                                                  "N",
                                                  "R",
                                                  "r",
                                                  "z",
                                                  "r",
                                                  "R",
                                                  "d",
                                                  "C"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "R",
                                        "lower": "r",
                                        "options": [
                                                  "c",
                                                  "d",
                                                  "r"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "R"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Cat",
                                        "targetImage": "🐱",
                                        "options": [
                                                  {
                                                            "w": "Rabbit",
                                                            "i": "🐰"
                                                  },
                                                  {
                                                            "w": "Rocket",
                                                            "i": "🚀"
                                                  },
                                                  {
                                                            "w": "Rainbow",
                                                            "i": "🌈"
                                                  },
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "R",
                                        "lower": "r",
                                        "word": "Rabbit",
                                        "image": "🐰"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "r"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "R"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐰"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Rabbit",
                                                  "i": "🐰"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Cat",
                                                            "i": "🐱"
                                                  },
                                                  {
                                                            "w": "Rabbit",
                                                            "i": "🐰"
                                                  },
                                                  {
                                                            "w": "Dog",
                                                            "i": "🐶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "R",
                                        "options": [
                                                  "r",
                                                  "C",
                                                  "d",
                                                  "c"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "R",
                                        "options": [
                                                  "C",
                                                  "D"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find R",
                                        "options": [
                                                  "R",
                                                  "D",
                                                  "C"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find r",
                                        "options": [
                                                  "r",
                                                  "c",
                                                  "d"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐰",
                                        "options": [
                                                  "🐰",
                                                  "🐱",
                                                  "🐶"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with R?",
                                        "options": [
                                                  "🐱",
                                                  "🐰"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "R is for...",
                                        "options": [
                                                  "🐱",
                                                  "🐰"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match R",
                                        "options": [
                                                  "c",
                                                  "r"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is R?",
                                        "options": [
                                                  "Cat",
                                                  "Rabbit"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🌈",
                                        "options": [
                                                  "🚗",
                                                  "🌈",
                                                  "🦆"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with R?",
                                        "options": [
                                                  "🚗",
                                                  "🌈"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "R"
                    }
          },
          {
                    "L": "S",
                    "l": "s",
                    "e": [
                              {
                                        "w": "Sun",
                                        "i": "☀️"
                              },
                              {
                                        "w": "Snake",
                                        "i": "🐍"
                              },
                              {
                                        "w": "Star",
                                        "i": "⭐"
                              }
                    ],
                    "id": "s",
                    "letter": "S",
                    "word": "Sun",
                    "image": "☀️",
                    "examples": [
                              {
                                        "word": "Sun",
                                        "image": "☀️"
                              },
                              {
                                        "word": "Snake",
                                        "image": "🐍"
                              },
                              {
                                        "word": "Star",
                                        "image": "⭐"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "S"
                              },
                              {
                                        "type": "trace",
                                        "target": "s"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Sun",
                                                  "i": "☀️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "S",
                                        "targetLower": "s",
                                        "grid": [
                                                  "A",
                                                  "S",
                                                  "P",
                                                  "s",
                                                  "x",
                                                  "S",
                                                  "a",
                                                  "s",
                                                  "n"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "S",
                                        "lower": "s",
                                        "options": [
                                                  "a",
                                                  "s",
                                                  "n"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "S"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Apple",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "Star",
                                                            "i": "⭐"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Snake",
                                                            "i": "🐍"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "S",
                                        "lower": "s",
                                        "word": "Sun",
                                        "image": "☀️"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "s"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "S"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "☀️"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Sun",
                                                  "i": "☀️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Apple",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "S",
                                        "options": [
                                                  "s",
                                                  "A",
                                                  "n",
                                                  "a"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "S",
                                        "options": [
                                                  "A",
                                                  "N"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find S",
                                        "options": [
                                                  "A",
                                                  "S",
                                                  "N"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find s",
                                        "options": [
                                                  "s",
                                                  "a",
                                                  "n"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find ☀️",
                                        "options": [
                                                  "☀️",
                                                  "🍎",
                                                  "🪹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with S?",
                                        "options": [
                                                  "🍎",
                                                  "☀️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "S is for...",
                                        "options": [
                                                  "🍎",
                                                  "☀️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match S",
                                        "options": [
                                                  "a",
                                                  "s"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is S?",
                                        "options": [
                                                  "Sun",
                                                  "Apple"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐍",
                                        "options": [
                                                  "🐍",
                                                  "🥅",
                                                  "🐜"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with S?",
                                        "options": [
                                                  "🐜",
                                                  "🐍"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "S"
                    }
          },
          {
                    "L": "T",
                    "l": "t",
                    "e": [
                              {
                                        "w": "Tiger",
                                        "i": "🐯"
                              },
                              {
                                        "w": "Tree",
                                        "i": "🌳"
                              },
                              {
                                        "w": "Train",
                                        "i": "🚆"
                              }
                    ],
                    "id": "t",
                    "letter": "T",
                    "word": "Tiger",
                    "image": "🐯",
                    "examples": [
                              {
                                        "word": "Tiger",
                                        "image": "🐯"
                              },
                              {
                                        "word": "Tree",
                                        "image": "🌳"
                              },
                              {
                                        "word": "Train",
                                        "image": "🚆"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "T"
                              },
                              {
                                        "type": "trace",
                                        "target": "t"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Tiger",
                                                  "i": "🐯"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Tiger",
                                                            "i": "🐯"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "T",
                                        "targetLower": "t",
                                        "grid": [
                                                  "S",
                                                  "F",
                                                  "f",
                                                  "t",
                                                  "t",
                                                  "T",
                                                  "t",
                                                  "x",
                                                  "T"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "T",
                                        "lower": "t",
                                        "options": [
                                                  "x",
                                                  "t",
                                                  "f"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "T"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Fish",
                                        "targetImage": "🐟",
                                        "options": [
                                                  {
                                                            "w": "Tree",
                                                            "i": "🌳"
                                                  },
                                                  {
                                                            "w": "Tiger",
                                                            "i": "🐯"
                                                  },
                                                  {
                                                            "w": "Train",
                                                            "i": "🚆"
                                                  },
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "T",
                                        "lower": "t",
                                        "word": "Tiger",
                                        "image": "🐯"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "t"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "T"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐯"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Tiger",
                                                  "i": "🐯"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Tiger",
                                                            "i": "🐯"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "T",
                                        "options": [
                                                  "t",
                                                  "F",
                                                  "x",
                                                  "f"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "T",
                                        "options": [
                                                  "F",
                                                  "X"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find T",
                                        "options": [
                                                  "X",
                                                  "F",
                                                  "T"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find t",
                                        "options": [
                                                  "f",
                                                  "t",
                                                  "x"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐯",
                                        "options": [
                                                  "🐯",
                                                  "🐟",
                                                  "🎹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with T?",
                                        "options": [
                                                  "🐟",
                                                  "🐯"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "T is for...",
                                        "options": [
                                                  "🐯",
                                                  "🐟"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match T",
                                        "options": [
                                                  "t",
                                                  "f"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is T?",
                                        "options": [
                                                  "Fish",
                                                  "Tiger"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🌳",
                                        "options": [
                                                  "🐸",
                                                  "🌳",
                                                  "🩻"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with T?",
                                        "options": [
                                                  "🐸",
                                                  "🌳"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "T"
                    }
          },
          {
                    "L": "U",
                    "l": "u",
                    "e": [
                              {
                                        "w": "Umbrella",
                                        "i": "☂️"
                              },
                              {
                                        "w": "Unicorn",
                                        "i": "🦄"
                              },
                              {
                                        "w": "Up",
                                        "i": "⬆️"
                              }
                    ],
                    "id": "u",
                    "letter": "U",
                    "word": "Umbrella",
                    "image": "☂️",
                    "examples": [
                              {
                                        "word": "Umbrella",
                                        "image": "☂️"
                              },
                              {
                                        "word": "Unicorn",
                                        "image": "🦄"
                              },
                              {
                                        "word": "Up",
                                        "image": "⬆️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "U"
                              },
                              {
                                        "type": "trace",
                                        "target": "u"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Umbrella",
                                                  "i": "☂️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Umbrella",
                                                            "i": "☂️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "U",
                                        "targetLower": "u",
                                        "grid": [
                                                  "u",
                                                  "U",
                                                  "U",
                                                  "E",
                                                  "Q",
                                                  "l",
                                                  "q",
                                                  "m",
                                                  "u"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "U",
                                        "lower": "u",
                                        "options": [
                                                  "q",
                                                  "u",
                                                  "l"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "U"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Queen",
                                        "targetImage": "👑",
                                        "options": [
                                                  {
                                                            "w": "Umbrella",
                                                            "i": "☂️"
                                                  },
                                                  {
                                                            "w": "Unicorn",
                                                            "i": "🦄"
                                                  },
                                                  {
                                                            "w": "Up",
                                                            "i": "⬆️"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "U",
                                        "lower": "u",
                                        "word": "Umbrella",
                                        "image": "☂️"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "u"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "U"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "☂️"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Umbrella",
                                                  "i": "☂️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Umbrella",
                                                            "i": "☂️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "U",
                                        "options": [
                                                  "u",
                                                  "Q",
                                                  "l",
                                                  "q"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "U",
                                        "options": [
                                                  "Q",
                                                  "L"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find U",
                                        "options": [
                                                  "U",
                                                  "Q",
                                                  "L"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find u",
                                        "options": [
                                                  "l",
                                                  "u",
                                                  "q"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find ☂️",
                                        "options": [
                                                  "🦁",
                                                  "☂️",
                                                  "👑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with U?",
                                        "options": [
                                                  "☂️",
                                                  "👑"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "U is for...",
                                        "options": [
                                                  "👑",
                                                  "☂️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match U",
                                        "options": [
                                                  "u",
                                                  "q"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is U?",
                                        "options": [
                                                  "Queen",
                                                  "Umbrella"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🦄",
                                        "options": [
                                                  "🦄",
                                                  "🛌",
                                                  "🍋"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with U?",
                                        "options": [
                                                  "🛌",
                                                  "🦄"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "U"
                    }
          },
          {
                    "L": "V",
                    "l": "v",
                    "e": [
                              {
                                        "w": "Van",
                                        "i": "🚐"
                              },
                              {
                                        "w": "Volcano",
                                        "i": "🌋"
                              },
                              {
                                        "w": "Violin",
                                        "i": "🎻"
                              }
                    ],
                    "id": "v",
                    "letter": "V",
                    "word": "Van",
                    "image": "🚐",
                    "examples": [
                              {
                                        "word": "Van",
                                        "image": "🚐"
                              },
                              {
                                        "word": "Volcano",
                                        "image": "🌋"
                              },
                              {
                                        "word": "Violin",
                                        "image": "🎻"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "V"
                              },
                              {
                                        "type": "trace",
                                        "target": "v"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Van",
                                                  "i": "🚐"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "V",
                                        "targetLower": "v",
                                        "grid": [
                                                  "v",
                                                  "a",
                                                  "S",
                                                  "s",
                                                  "V",
                                                  "v",
                                                  "l",
                                                  "V",
                                                  "T"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "V",
                                        "lower": "v",
                                        "options": [
                                                  "s",
                                                  "v",
                                                  "l"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "V"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Sun",
                                        "targetImage": "☀️",
                                        "options": [
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Violin",
                                                            "i": "🎻"
                                                  },
                                                  {
                                                            "w": "Volcano",
                                                            "i": "🌋"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "V",
                                        "lower": "v",
                                        "word": "Van",
                                        "image": "🚐"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "v"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "V"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🚐"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Van",
                                                  "i": "🚐"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Sun",
                                                            "i": "☀️"
                                                  },
                                                  {
                                                            "w": "Lion",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "V",
                                        "options": [
                                                  "v",
                                                  "S",
                                                  "l",
                                                  "s"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "V",
                                        "options": [
                                                  "S",
                                                  "L"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find V",
                                        "options": [
                                                  "S",
                                                  "V",
                                                  "L"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find v",
                                        "options": [
                                                  "s",
                                                  "v",
                                                  "l"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🚐",
                                        "options": [
                                                  "☀️",
                                                  "🦁",
                                                  "🚐"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with V?",
                                        "options": [
                                                  "☀️",
                                                  "🚐"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "V is for...",
                                        "options": [
                                                  "☀️",
                                                  "🚐"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match V",
                                        "options": [
                                                  "s",
                                                  "v"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is V?",
                                        "options": [
                                                  "Sun",
                                                  "Van"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🌋",
                                        "options": [
                                                  "🌋",
                                                  "🍋",
                                                  "🐍"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with V?",
                                        "options": [
                                                  "🐍",
                                                  "🌋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "V"
                    }
          },
          {
                    "L": "W",
                    "l": "w",
                    "e": [
                              {
                                        "w": "Watermelon",
                                        "i": "🍉"
                              },
                              {
                                        "w": "Whale",
                                        "i": "🐳"
                              },
                              {
                                        "w": "Watch",
                                        "i": "⌚"
                              }
                    ],
                    "id": "w",
                    "letter": "W",
                    "word": "Watermelon",
                    "image": "🍉",
                    "examples": [
                              {
                                        "word": "Watermelon",
                                        "image": "🍉"
                              },
                              {
                                        "word": "Whale",
                                        "image": "🐳"
                              },
                              {
                                        "word": "Watch",
                                        "image": "⌚"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "W"
                              },
                              {
                                        "type": "trace",
                                        "target": "w"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Watermelon",
                                                  "i": "🍉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "W",
                                        "targetLower": "w",
                                        "grid": [
                                                  "W",
                                                  "o",
                                                  "w",
                                                  "w",
                                                  "P",
                                                  "W",
                                                  "f",
                                                  "q",
                                                  "F"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "W",
                                        "lower": "w",
                                        "options": [
                                                  "f",
                                                  "w",
                                                  "q"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "W"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Fish",
                                        "targetImage": "🐟",
                                        "options": [
                                                  {
                                                            "w": "Whale",
                                                            "i": "🐳"
                                                  },
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Watch",
                                                            "i": "⌚"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "W",
                                        "lower": "w",
                                        "word": "Watermelon",
                                        "image": "🍉"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "w"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "W"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍉"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Watermelon",
                                                  "i": "🍉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Queen",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "Watermelon",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "Fish",
                                                            "i": "🐟"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "W",
                                        "options": [
                                                  "w",
                                                  "F",
                                                  "q",
                                                  "f"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "W",
                                        "options": [
                                                  "F",
                                                  "Q"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find W",
                                        "options": [
                                                  "W",
                                                  "F",
                                                  "Q"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find w",
                                        "options": [
                                                  "q",
                                                  "f",
                                                  "w"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find 🍉",
                                        "options": [
                                                  "🍉",
                                                  "🐟",
                                                  "👑"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with W?",
                                        "options": [
                                                  "🐟",
                                                  "🍉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "W is for...",
                                        "options": [
                                                  "🍉",
                                                  "🐟"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match W",
                                        "options": [
                                                  "w",
                                                  "f"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "What is W?",
                                        "options": [
                                                  "Fish",
                                                  "Watermelon"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🐳",
                                        "options": [
                                                  "🐸",
                                                  "🛌",
                                                  "🐳"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with W?",
                                        "options": [
                                                  "🐳",
                                                  "🐸"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "W"
                    }
          },
          {
                    "L": "X",
                    "l": "x",
                    "e": [
                              {
                                        "w": "Xylophone",
                                        "i": "🎹"
                              },
                              {
                                        "w": "X-ray",
                                        "i": "🩻"
                              },
                              {
                                        "w": "Xmas Tree",
                                        "i": "🎄"
                              }
                    ],
                    "id": "x",
                    "letter": "X",
                    "word": "Xylophone",
                    "image": "🎹",
                    "examples": [
                              {
                                        "word": "Xylophone",
                                        "image": "🎹"
                              },
                              {
                                        "word": "X-ray",
                                        "image": "🩻"
                              },
                              {
                                        "word": "Xmas Tree",
                                        "image": "🎄"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "X"
                              },
                              {
                                        "type": "trace",
                                        "target": "x"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Xylophone",
                                                  "i": "🎹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "X",
                                        "targetLower": "x",
                                        "grid": [
                                                  "j",
                                                  "X",
                                                  "x",
                                                  "x",
                                                  "X",
                                                  "k",
                                                  "J",
                                                  "B",
                                                  "z"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "X",
                                        "lower": "x",
                                        "options": [
                                                  "x",
                                                  "k",
                                                  "j"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "X"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Juice",
                                        "targetImage": "🧃",
                                        "options": [
                                                  {
                                                            "w": "Xmas Tree",
                                                            "i": "🎄"
                                                  },
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  },
                                                  {
                                                            "w": "X-ray",
                                                            "i": "🩻"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "X",
                                        "lower": "x",
                                        "word": "Xylophone",
                                        "image": "🎹"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "x"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "X"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🎹"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Xylophone",
                                                  "i": "🎹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  },
                                                  {
                                                            "w": "Xylophone",
                                                            "i": "🎹"
                                                  },
                                                  {
                                                            "w": "Kite",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "X",
                                        "options": [
                                                  "x",
                                                  "J",
                                                  "k",
                                                  "j"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "X",
                                        "options": [
                                                  "J",
                                                  "K"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find X",
                                        "options": [
                                                  "K",
                                                  "X",
                                                  "J"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find x",
                                        "options": [
                                                  "k",
                                                  "j",
                                                  "x"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Find 🎹",
                                        "options": [
                                                  "🪁",
                                                  "🎹",
                                                  "🧃"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with X?",
                                        "options": [
                                                  "🎹",
                                                  "🧃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "X is for...",
                                        "options": [
                                                  "🧃",
                                                  "🎹"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Match X",
                                        "options": [
                                                  "j",
                                                  "x"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is X?",
                                        "options": [
                                                  "Xylophone",
                                                  "Juice"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🩻",
                                        "options": [
                                                  "🦘",
                                                  "🩻",
                                                  "🧥"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with X?",
                                        "options": [
                                                  "🩻",
                                                  "🧥"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "X"
                    }
          },
          {
                    "L": "Y",
                    "l": "y",
                    "e": [
                              {
                                        "w": "Yak",
                                        "i": "🐃"
                              },
                              {
                                        "w": "Yoyo",
                                        "i": "🪀"
                              },
                              {
                                        "w": "Yellow",
                                        "i": "🟡"
                              }
                    ],
                    "id": "y",
                    "letter": "Y",
                    "word": "Yak",
                    "image": "🐃",
                    "examples": [
                              {
                                        "word": "Yak",
                                        "image": "🐃"
                              },
                              {
                                        "word": "Yoyo",
                                        "image": "🪀"
                              },
                              {
                                        "word": "Yellow",
                                        "image": "🟡"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "Y"
                              },
                              {
                                        "type": "trace",
                                        "target": "y"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Yak",
                                                  "i": "🐃"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Yak",
                                                            "i": "🐃"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  },
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "Y",
                                        "targetLower": "y",
                                        "grid": [
                                                  "j",
                                                  "Y",
                                                  "J",
                                                  "y",
                                                  "Y",
                                                  "m",
                                                  "z",
                                                  "y",
                                                  "Y"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "Y",
                                        "lower": "y",
                                        "options": [
                                                  "y",
                                                  "m",
                                                  "j"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "Y"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Juice",
                                        "targetImage": "🧃",
                                        "options": [
                                                  {
                                                            "w": "Yak",
                                                            "i": "🐃"
                                                  },
                                                  {
                                                            "w": "Yellow",
                                                            "i": "🟡"
                                                  },
                                                  {
                                                            "w": "Yoyo",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "Y",
                                        "lower": "y",
                                        "word": "Yak",
                                        "image": "🐃"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "y"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "Y"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐃"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Yak",
                                                  "i": "🐃"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Yak",
                                                            "i": "🐃"
                                                  },
                                                  {
                                                            "w": "Monkey",
                                                            "i": "🐵"
                                                  },
                                                  {
                                                            "w": "Juice",
                                                            "i": "🧃"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "Y",
                                        "options": [
                                                  "y",
                                                  "J",
                                                  "m",
                                                  "j"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "Y",
                                        "options": [
                                                  "J",
                                                  "M"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find Y",
                                        "options": [
                                                  "Y",
                                                  "J",
                                                  "M"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find y",
                                        "options": [
                                                  "y",
                                                  "j",
                                                  "m"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🐃",
                                        "options": [
                                                  "🧃",
                                                  "🐃",
                                                  "🐵"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with Y?",
                                        "options": [
                                                  "🐃",
                                                  "🧃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Y is for...",
                                        "options": [
                                                  "🐃",
                                                  "🧃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match Y",
                                        "options": [
                                                  "j",
                                                  "y"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is Y?",
                                        "options": [
                                                  "Juice",
                                                  "Yak"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🪀",
                                        "options": [
                                                  "🧥",
                                                  "🌙",
                                                  "🪀"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "Starts with Y?",
                                        "options": [
                                                  "🪀",
                                                  "🧥"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "Y"
                    }
          },
          {
                    "L": "Z",
                    "l": "z",
                    "e": [
                              {
                                        "w": "Zebra",
                                        "i": "🦓"
                              },
                              {
                                        "w": "Zoo",
                                        "i": "🦁"
                              },
                              {
                                        "w": "Zipper",
                                        "i": "🤐"
                              }
                    ],
                    "id": "z",
                    "letter": "Z",
                    "word": "Zebra",
                    "image": "🦓",
                    "examples": [
                              {
                                        "word": "Zebra",
                                        "image": "🦓"
                              },
                              {
                                        "word": "Zoo",
                                        "image": "🦁"
                              },
                              {
                                        "word": "Zipper",
                                        "image": "🤐"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "Z"
                              },
                              {
                                        "type": "trace",
                                        "target": "z"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "Zebra",
                                                  "i": "🦓"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "Z",
                                        "targetLower": "z",
                                        "grid": [
                                                  "Z",
                                                  "z",
                                                  "Z",
                                                  "V",
                                                  "n",
                                                  "B",
                                                  "y",
                                                  "v",
                                                  "z"
                                        ]
                              },
                              {
                                        "type": "match-cases",
                                        "upper": "Z",
                                        "lower": "z",
                                        "options": [
                                                  "v",
                                                  "z",
                                                  "n"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "Z"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "Van",
                                        "targetImage": "🚐",
                                        "options": [
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  },
                                                  {
                                                            "w": "Zoo",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "Zipper",
                                                            "i": "🤐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "Z",
                                        "lower": "z",
                                        "word": "Zebra",
                                        "image": "🦓"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "z"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "Z"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦓"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "Zebra",
                                                  "i": "🦓"
                                        },
                                        "options": [
                                                  {
                                                            "w": "Nest",
                                                            "i": "🪹"
                                                  },
                                                  {
                                                            "w": "Zebra",
                                                            "i": "🦓"
                                                  },
                                                  {
                                                            "w": "Van",
                                                            "i": "🚐"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "Z",
                                        "options": [
                                                  "z",
                                                  "V",
                                                  "n",
                                                  "v"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "Z",
                                        "options": [
                                                  "V",
                                                  "N"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "Find Z",
                                        "options": [
                                                  "Z",
                                                  "N",
                                                  "V"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find z",
                                        "options": [
                                                  "z",
                                                  "n",
                                                  "v"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Find 🦓",
                                        "options": [
                                                  "🚐",
                                                  "🦓",
                                                  "🪹"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Starts with Z?",
                                        "options": [
                                                  "🚐",
                                                  "🦓"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Z is for...",
                                        "options": [
                                                  "🦓",
                                                  "🚐"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Match Z",
                                        "options": [
                                                  "v",
                                                  "z"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "What is Z?",
                                        "options": [
                                                  "Van",
                                                  "Zebra"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "Find 🦁",
                                        "options": [
                                                  "🦁",
                                                  "🥅",
                                                  "🌋"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "Starts with Z?",
                                        "options": [
                                                  "🌋",
                                                  "🦁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "Z"
                    }
          }
]
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
          lessons: [
          {
                    "L": "अ",
                    "e": [
                              {
                                        "w": "अनार",
                                        "i": "🍎"
                              },
                              {
                                        "w": "अजगर",
                                        "i": "🐍"
                              },
                              {
                                        "w": "अदरक",
                                        "i": "🫚"
                              }
                    ],
                    "id": "swar_0",
                    "letter": "अ",
                    "word": "अनार",
                    "image": "🍎",
                    "examples": [
                              {
                                        "word": "अनार",
                                        "image": "🍎"
                              },
                              {
                                        "word": "अजगर",
                                        "image": "🐍"
                              },
                              {
                                        "word": "अदरक",
                                        "image": "🫚"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "अ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "अनार",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "अ",
                                        "targetLower": "अ",
                                        "grid": [
                                                  "अ",
                                                  "अ",
                                                  "ओ",
                                                  "अ",
                                                  "इ",
                                                  "अ",
                                                  "औ",
                                                  "ई",
                                                  "औ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "अ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "औरत",
                                        "targetImage": "👩",
                                        "options": [
                                                  {
                                                            "w": "अदरक",
                                                            "i": "🫚"
                                                  },
                                                  {
                                                            "w": "अजगर",
                                                            "i": "🐍"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "अ",
                                        "lower": "अ",
                                        "word": "अनार",
                                        "image": "🍎"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "अ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "अ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍎"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "अनार",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "अ",
                                        "options": [
                                                  "अ",
                                                  "औ",
                                                  "इ",
                                                  "औ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "अ",
                                        "options": [
                                                  "औ",
                                                  "इ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "अ खोजें",
                                        "options": [
                                                  "अ",
                                                  "औ",
                                                  "इ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🍎 खोजें",
                                        "options": [
                                                  "👩",
                                                  "🫘",
                                                  "🍎"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "अ से क्या शुरू होता है?",
                                        "options": [
                                                  "🍎",
                                                  "👩"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🍎?",
                                        "options": [
                                                  "औरत",
                                                  "अनार"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐍 खोजें",
                                        "options": [
                                                  "🐍",
                                                  "🛠️",
                                                  "🏢"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "औज़ार",
                                                  "अजगर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "अ से क्या शुरू होता है?",
                                        "options": [
                                                  "🐍",
                                                  "🛠️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🫚 खोजें",
                                        "options": [
                                                  "🫚",
                                                  "💊",
                                                  "🚂"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "औषधि",
                                                  "अदरक"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "अ"
                    }
          },
          {
                    "L": "आ",
                    "e": [
                              {
                                        "w": "आम",
                                        "i": "🥭"
                              },
                              {
                                        "w": "आलू",
                                        "i": "🥔"
                              },
                              {
                                        "w": "आग",
                                        "i": "🔥"
                              }
                    ],
                    "id": "swar_1",
                    "letter": "आ",
                    "word": "आम",
                    "image": "🥭",
                    "examples": [
                              {
                                        "word": "आम",
                                        "image": "🥭"
                              },
                              {
                                        "word": "आलू",
                                        "image": "🥔"
                              },
                              {
                                        "word": "आग",
                                        "image": "🔥"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "आ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "आम",
                                                  "i": "🥭"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "आम",
                                                            "i": "🥭"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "आ",
                                        "targetLower": "आ",
                                        "grid": [
                                                  "ऊ",
                                                  "ई",
                                                  "आ",
                                                  "ऊ",
                                                  "आ",
                                                  "आ",
                                                  "ऊ",
                                                  "औ",
                                                  "आ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "आ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ऊन",
                                        "targetImage": "🧶",
                                        "options": [
                                                  {
                                                            "w": "आम",
                                                            "i": "🥭"
                                                  },
                                                  {
                                                            "w": "आलू",
                                                            "i": "🥔"
                                                  },
                                                  {
                                                            "w": "आग",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "आ",
                                        "lower": "आ",
                                        "word": "आम",
                                        "image": "🥭"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "आ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "आ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🥭"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "आम",
                                                  "i": "🥭"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "आम",
                                                            "i": "🥭"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "आ",
                                        "options": [
                                                  "आ",
                                                  "ऊ",
                                                  "औ",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "आ",
                                        "options": [
                                                  "ऊ",
                                                  "औ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "आ खोजें",
                                        "options": [
                                                  "औ",
                                                  "आ",
                                                  "ऊ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🥭 खोजें",
                                        "options": [
                                                  "🧶",
                                                  "🥭",
                                                  "👩"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "आ से क्या शुरू होता है?",
                                        "options": [
                                                  "🧶",
                                                  "🥭"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🥭?",
                                        "options": [
                                                  "आम",
                                                  "ऊन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🥔 खोजें",
                                        "options": [
                                                  "🥔",
                                                  "🛠️",
                                                  "🐪"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "आ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऊंट",
                                                  "आलू"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "आ से क्या शुरू होता है?",
                                        "options": [
                                                  "🥔",
                                                  "🐪"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🔥 खोजें",
                                        "options": [
                                                  "⬆️",
                                                  "💊",
                                                  "🔥"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "आ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "आग",
                                                  "ऊपर"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "आ"
                    }
          },
          {
                    "L": "इ",
                    "e": [
                              {
                                        "w": "इमली",
                                        "i": "🫘"
                              },
                              {
                                        "w": "इमारत",
                                        "i": "🏢"
                              },
                              {
                                        "w": "इंजन",
                                        "i": "🚂"
                              }
                    ],
                    "id": "swar_2",
                    "letter": "इ",
                    "word": "इमली",
                    "image": "🫘",
                    "examples": [
                              {
                                        "word": "इमली",
                                        "image": "🫘"
                              },
                              {
                                        "word": "इमारत",
                                        "image": "🏢"
                              },
                              {
                                        "word": "इंजन",
                                        "image": "🚂"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "इ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "इमली",
                                                  "i": "🫘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "इ",
                                        "targetLower": "इ",
                                        "grid": [
                                                  "ऐ",
                                                  "इ",
                                                  "इ",
                                                  "अ",
                                                  "इ",
                                                  "इ",
                                                  "अ",
                                                  "ऐ",
                                                  "ओ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "इ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "अनार",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "इमारत",
                                                            "i": "🏢"
                                                  },
                                                  {
                                                            "w": "इंजन",
                                                            "i": "🚂"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "इ",
                                        "lower": "इ",
                                        "word": "इमली",
                                        "image": "🫘"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "इ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "इ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🫘"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "इमली",
                                                  "i": "🫘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "अनार",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "इ",
                                        "options": [
                                                  "इ",
                                                  "अ",
                                                  "ऐ",
                                                  "अ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "इ",
                                        "options": [
                                                  "अ",
                                                  "ऐ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "इ खोजें",
                                        "options": [
                                                  "इ",
                                                  "अ",
                                                  "ऐ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🫘 खोजें",
                                        "options": [
                                                  "👓",
                                                  "🫘",
                                                  "🍎"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "इ से क्या शुरू होता है?",
                                        "options": [
                                                  "🍎",
                                                  "🫘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🫘?",
                                        "options": [
                                                  "इमली",
                                                  "अनार"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🏢 खोजें",
                                        "options": [
                                                  "🐘",
                                                  "🏢",
                                                  "🐍"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "इ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अजगर",
                                                  "इमारत"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "इ से क्या शुरू होता है?",
                                        "options": [
                                                  "🐍",
                                                  "🏢"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🚂 खोजें",
                                        "options": [
                                                  "🚂",
                                                  "🫚",
                                                  "📢"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "इ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अदरक",
                                                  "इंजन"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "इ"
                    }
          },
          {
                    "L": "ई",
                    "e": [
                              {
                                        "w": "ईख",
                                        "i": "🎋"
                              },
                              {
                                        "w": "ईंट",
                                        "i": "🧱"
                              },
                              {
                                        "w": "ईद",
                                        "i": "🌙"
                              }
                    ],
                    "id": "swar_3",
                    "letter": "ई",
                    "word": "ईख",
                    "image": "🎋",
                    "examples": [
                              {
                                        "word": "ईख",
                                        "image": "🎋"
                              },
                              {
                                        "word": "ईंट",
                                        "image": "🧱"
                              },
                              {
                                        "word": "ईद",
                                        "image": "🌙"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ई"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ईख",
                                                  "i": "🎋"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ईख",
                                                            "i": "🎋"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ई",
                                        "targetLower": "ई",
                                        "grid": [
                                                  "अः",
                                                  "ई",
                                                  "ई",
                                                  "अः",
                                                  "ऊ",
                                                  "औ",
                                                  "ई",
                                                  "ई",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ई"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "अः",
                                        "targetImage": "✨",
                                        "options": [
                                                  {
                                                            "w": "ईंट",
                                                            "i": "🧱"
                                                  },
                                                  {
                                                            "w": "ईख",
                                                            "i": "🎋"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ईद",
                                                            "i": "🌙"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ई",
                                        "lower": "ई",
                                        "word": "ईख",
                                        "image": "🎋"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ई"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ई"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🎋"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ईख",
                                                  "i": "🎋"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ईख",
                                                            "i": "🎋"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ई",
                                        "options": [
                                                  "ई",
                                                  "अः",
                                                  "औ",
                                                  "अः"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ई",
                                        "options": [
                                                  "अः",
                                                  "औ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ई खोजें",
                                        "options": [
                                                  "औ",
                                                  "अः",
                                                  "ई"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🎋 खोजें",
                                        "options": [
                                                  "✨",
                                                  "🎋",
                                                  "👩"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ई से क्या शुरू होता है?",
                                        "options": [
                                                  "🎋",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🎋?",
                                        "options": [
                                                  "ईख",
                                                  "अः"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🧱 खोजें",
                                        "options": [
                                                  "🧱",
                                                  "🙏",
                                                  "🛠️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ई से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ईंट",
                                                  "नमः"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ई से क्या शुरू होता है?",
                                        "options": [
                                                  "🧱",
                                                  "🙏"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🌙 खोजें",
                                        "options": [
                                                  "🌙",
                                                  "🌅",
                                                  "💊"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ई से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ईद",
                                                  "प्रातः"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ई"
                    }
          },
          {
                    "L": "उ",
                    "e": [
                              {
                                        "w": "उल्लू",
                                        "i": "🦉"
                              },
                              {
                                        "w": "उपहार",
                                        "i": "🎁"
                              },
                              {
                                        "w": "उंगली",
                                        "i": "☝️"
                              }
                    ],
                    "id": "swar_4",
                    "letter": "उ",
                    "word": "उल्लू",
                    "image": "🦉",
                    "examples": [
                              {
                                        "word": "उल्लू",
                                        "image": "🦉"
                              },
                              {
                                        "word": "उपहार",
                                        "image": "🎁"
                              },
                              {
                                        "word": "उंगली",
                                        "image": "☝️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "उ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "उल्लू",
                                                  "i": "🦉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "उल्लू",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "उ",
                                        "targetLower": "उ",
                                        "grid": [
                                                  "उ",
                                                  "औ",
                                                  "ऐ",
                                                  "उ",
                                                  "ए",
                                                  "उ",
                                                  "औ",
                                                  "अं",
                                                  "उ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "उ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "औरत",
                                        "targetImage": "👩",
                                        "options": [
                                                  {
                                                            "w": "उंगली",
                                                            "i": "☝️"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "उपहार",
                                                            "i": "🎁"
                                                  },
                                                  {
                                                            "w": "उल्लू",
                                                            "i": "🦉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "उ",
                                        "lower": "उ",
                                        "word": "उल्लू",
                                        "image": "🦉"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "उ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "उ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦉"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "उल्लू",
                                                  "i": "🦉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "उल्लू",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "उ",
                                        "options": [
                                                  "उ",
                                                  "औ",
                                                  "अं",
                                                  "औ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "उ",
                                        "options": [
                                                  "औ",
                                                  "अं"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "उ खोजें",
                                        "options": [
                                                  "उ",
                                                  "औ",
                                                  "अं"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🦉 खोजें",
                                        "options": [
                                                  "🦉",
                                                  "👩",
                                                  "🍇"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "उ से क्या शुरू होता है?",
                                        "options": [
                                                  "👩",
                                                  "🦉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🦉?",
                                        "options": [
                                                  "औरत",
                                                  "उल्लू"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🎁 खोजें",
                                        "options": [
                                                  "🥚",
                                                  "🎁",
                                                  "🛠️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "उ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "औज़ार",
                                                  "उपहार"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "उ से क्या शुरू होता है?",
                                        "options": [
                                                  "🛠️",
                                                  "🎁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "☝️ खोजें",
                                        "options": [
                                                  "🔢",
                                                  "☝️",
                                                  "💊"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "उ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "उंगली",
                                                  "औषधि"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "उ"
                    }
          },
          {
                    "L": "ऊ",
                    "e": [
                              {
                                        "w": "ऊन",
                                        "i": "🧶"
                              },
                              {
                                        "w": "ऊंट",
                                        "i": "🐪"
                              },
                              {
                                        "w": "ऊपर",
                                        "i": "⬆️"
                              }
                    ],
                    "id": "swar_5",
                    "letter": "ऊ",
                    "word": "ऊन",
                    "image": "🧶",
                    "examples": [
                              {
                                        "word": "ऊन",
                                        "image": "🧶"
                              },
                              {
                                        "word": "ऊंट",
                                        "image": "🐪"
                              },
                              {
                                        "word": "ऊपर",
                                        "image": "⬆️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ऊ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ऊन",
                                                  "i": "🧶"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ऊ",
                                        "targetLower": "ऊ",
                                        "grid": [
                                                  "ऊ",
                                                  "औ",
                                                  "ऊ",
                                                  "ओ",
                                                  "ओ",
                                                  "ऊ",
                                                  "इ",
                                                  "ई",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ऊ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ओखली",
                                        "targetImage": "🥣",
                                        "options": [
                                                  {
                                                            "w": "ऊंट",
                                                            "i": "🐪"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "ऊपर",
                                                            "i": "⬆️"
                                                  },
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ऊ",
                                        "lower": "ऊ",
                                        "word": "ऊन",
                                        "image": "🧶"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ऊ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ऊ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🧶"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ऊन",
                                                  "i": "🧶"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ऊ",
                                        "options": [
                                                  "ऊ",
                                                  "ओ",
                                                  "इ",
                                                  "ओ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ऊ",
                                        "options": [
                                                  "ओ",
                                                  "इ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ऊ खोजें",
                                        "options": [
                                                  "ओ",
                                                  "ऊ",
                                                  "इ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🧶 खोजें",
                                        "options": [
                                                  "🫘",
                                                  "🥣",
                                                  "🧶"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ऊ से क्या शुरू होता है?",
                                        "options": [
                                                  "🧶",
                                                  "🥣"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🧶?",
                                        "options": [
                                                  "ओखली",
                                                  "ऊन"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐪 खोजें",
                                        "options": [
                                                  "🐪",
                                                  "🏢",
                                                  "💧"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ऊ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऊंट",
                                                  "ओस"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ऊ से क्या शुरू होता है?",
                                        "options": [
                                                  "🐪",
                                                  "💧"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "⬆️ खोजें",
                                        "options": [
                                                  "🧣",
                                                  "⬆️",
                                                  "🚂"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ऊ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ओढ़नी",
                                                  "ऊपर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ऊ"
                    }
          },
          {
                    "L": "ऋ",
                    "e": [
                              {
                                        "w": "ऋषि",
                                        "i": "🧘"
                              },
                              {
                                        "w": "ऋतु",
                                        "i": "🌧️"
                              },
                              {
                                        "w": "ऋषभ",
                                        "i": "🐂"
                              }
                    ],
                    "id": "swar_6",
                    "letter": "ऋ",
                    "word": "ऋषि",
                    "image": "🧘",
                    "examples": [
                              {
                                        "word": "ऋषि",
                                        "image": "🧘"
                              },
                              {
                                        "word": "ऋतु",
                                        "image": "🌧️"
                              },
                              {
                                        "word": "ऋषभ",
                                        "image": "🐂"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ऋ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ऋषि",
                                                  "i": "🧘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऋषि",
                                                            "i": "🧘"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ऋ",
                                        "targetLower": "ऋ",
                                        "grid": [
                                                  "ऋ",
                                                  "ऋ",
                                                  "ऋ",
                                                  "ऊ",
                                                  "ओ",
                                                  "आ",
                                                  "ऋ",
                                                  "ई",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ऋ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ऊन",
                                        "targetImage": "🧶",
                                        "options": [
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "ऋतु",
                                                            "i": "🌧️"
                                                  },
                                                  {
                                                            "w": "ऋषि",
                                                            "i": "🧘"
                                                  },
                                                  {
                                                            "w": "ऋषभ",
                                                            "i": "🐂"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ऋ",
                                        "lower": "ऋ",
                                        "word": "ऋषि",
                                        "image": "🧘"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ऋ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ऋ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🧘"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ऋषि",
                                                  "i": "🧘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ऋषि",
                                                            "i": "🧘"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ऋ",
                                        "options": [
                                                  "ऋ",
                                                  "ऊ",
                                                  "ओ",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ऋ",
                                        "options": [
                                                  "ऊ",
                                                  "ओ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ऋ खोजें",
                                        "options": [
                                                  "ऋ",
                                                  "ऊ",
                                                  "ओ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🧘 खोजें",
                                        "options": [
                                                  "🧘",
                                                  "🧶",
                                                  "🥣"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ऋ से क्या शुरू होता है?",
                                        "options": [
                                                  "🧶",
                                                  "🧘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🧘?",
                                        "options": [
                                                  "ऋषि",
                                                  "ऊन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🌧️ खोजें",
                                        "options": [
                                                  "💧",
                                                  "🌧️",
                                                  "🐪"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ऋ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऋतु",
                                                  "ऊंट"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ऋ से क्या शुरू होता है?",
                                        "options": [
                                                  "🌧️",
                                                  "🐪"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🐂 खोजें",
                                        "options": [
                                                  "🐂",
                                                  "⬆️",
                                                  "🧣"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ऋ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऋषभ",
                                                  "ऊपर"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ऋ"
                    }
          },
          {
                    "L": "ए",
                    "e": [
                              {
                                        "w": "एक",
                                        "i": "1️⃣"
                              },
                              {
                                        "w": "एड़ी",
                                        "i": "🦶"
                              },
                              {
                                        "w": "एल्बम",
                                        "i": "🖼️"
                              }
                    ],
                    "id": "swar_7",
                    "letter": "ए",
                    "word": "एक",
                    "image": "1️⃣",
                    "examples": [
                              {
                                        "word": "एक",
                                        "image": "1️⃣"
                              },
                              {
                                        "word": "एड़ी",
                                        "image": "🦶"
                              },
                              {
                                        "word": "एल्बम",
                                        "image": "🖼️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ए"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "एक",
                                                  "i": "1️⃣"
                                        },
                                        "options": [
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "एक",
                                                            "i": "1️⃣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ए",
                                        "targetLower": "ए",
                                        "grid": [
                                                  "ए",
                                                  "ई",
                                                  "ए",
                                                  "अः",
                                                  "ऊ",
                                                  "ए",
                                                  "ए",
                                                  "ए",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ए"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ऊन",
                                        "targetImage": "🧶",
                                        "options": [
                                                  {
                                                            "w": "एक",
                                                            "i": "1️⃣"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "एड़ी",
                                                            "i": "🦶"
                                                  },
                                                  {
                                                            "w": "एल्बम",
                                                            "i": "🖼️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ए",
                                        "lower": "ए",
                                        "word": "एक",
                                        "image": "1️⃣"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ए"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ए"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "1️⃣"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "एक",
                                                  "i": "1️⃣"
                                        },
                                        "options": [
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "एक",
                                                            "i": "1️⃣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ए",
                                        "options": [
                                                  "ए",
                                                  "ऊ",
                                                  "अः",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ए",
                                        "options": [
                                                  "ऊ",
                                                  "अः"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ए खोजें",
                                        "options": [
                                                  "ऊ",
                                                  "अः",
                                                  "ए"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 1️⃣ खोजें",
                                        "options": [
                                                  "1️⃣",
                                                  "✨",
                                                  "🧶"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ए से क्या शुरू होता है?",
                                        "options": [
                                                  "🧶",
                                                  "1️⃣"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 1️⃣?",
                                        "options": [
                                                  "एक",
                                                  "ऊन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🦶 खोजें",
                                        "options": [
                                                  "🦶",
                                                  "🐪",
                                                  "🙏"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ए से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऊंट",
                                                  "एड़ी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ए से क्या शुरू होता है?",
                                        "options": [
                                                  "🐪",
                                                  "🦶"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🖼️ खोजें",
                                        "options": [
                                                  "🖼️",
                                                  "⬆️",
                                                  "🌅"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ए से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऊपर",
                                                  "एल्बम"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ए"
                    }
          },
          {
                    "L": "ऐ",
                    "e": [
                              {
                                        "w": "ऐनक",
                                        "i": "👓"
                              },
                              {
                                        "w": "ऐरावत",
                                        "i": "🐘"
                              },
                              {
                                        "w": "ऐलान",
                                        "i": "📢"
                              }
                    ],
                    "id": "swar_8",
                    "letter": "ऐ",
                    "word": "ऐनक",
                    "image": "👓",
                    "examples": [
                              {
                                        "word": "ऐनक",
                                        "image": "👓"
                              },
                              {
                                        "word": "ऐरावत",
                                        "image": "🐘"
                              },
                              {
                                        "word": "ऐलान",
                                        "image": "📢"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ऐ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ऐनक",
                                                  "i": "👓"
                                        },
                                        "options": [
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ऐ",
                                        "targetLower": "ऐ",
                                        "grid": [
                                                  "ए",
                                                  "ऐ",
                                                  "अं",
                                                  "इ",
                                                  "ऐ",
                                                  "ऐ",
                                                  "ऐ",
                                                  "अं",
                                                  "अः"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ऐ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "अंगूर",
                                        "targetImage": "🍇",
                                        "options": [
                                                  {
                                                            "w": "ऐलान",
                                                            "i": "📢"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "ऐरावत",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ऐ",
                                        "lower": "ऐ",
                                        "word": "ऐनक",
                                        "image": "👓"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ऐ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ऐ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "👓"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ऐनक",
                                                  "i": "👓"
                                        },
                                        "options": [
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ऐ",
                                        "options": [
                                                  "ऐ",
                                                  "अं",
                                                  "इ",
                                                  "अं"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ऐ",
                                        "options": [
                                                  "अं",
                                                  "इ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ऐ खोजें",
                                        "options": [
                                                  "ऐ",
                                                  "इ",
                                                  "अं"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 👓 खोजें",
                                        "options": [
                                                  "🍇",
                                                  "🫘",
                                                  "👓"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ऐ से क्या शुरू होता है?",
                                        "options": [
                                                  "🍇",
                                                  "👓"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 👓?",
                                        "options": [
                                                  "अंगूर",
                                                  "ऐनक"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐘 खोजें",
                                        "options": [
                                                  "🏢",
                                                  "🐘",
                                                  "🥚"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ऐ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंडा",
                                                  "ऐरावत"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ऐ से क्या शुरू होता है?",
                                        "options": [
                                                  "🐘",
                                                  "🥚"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "📢 खोजें",
                                        "options": [
                                                  "🔢",
                                                  "🚂",
                                                  "📢"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ऐ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंक",
                                                  "ऐलान"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ऐ"
                    }
          },
          {
                    "L": "ओ",
                    "e": [
                              {
                                        "w": "ओखली",
                                        "i": "🥣"
                              },
                              {
                                        "w": "ओस",
                                        "i": "💧"
                              },
                              {
                                        "w": "ओढ़नी",
                                        "i": "🧣"
                              }
                    ],
                    "id": "swar_9",
                    "letter": "ओ",
                    "word": "ओखली",
                    "image": "🥣",
                    "examples": [
                              {
                                        "word": "ओखली",
                                        "image": "🥣"
                              },
                              {
                                        "word": "ओस",
                                        "image": "💧"
                              },
                              {
                                        "word": "ओढ़नी",
                                        "image": "🧣"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ओ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ओखली",
                                                  "i": "🥣"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ओ",
                                        "targetLower": "ओ",
                                        "grid": [
                                                  "ऐ",
                                                  "इ",
                                                  "ऐ",
                                                  "ओ",
                                                  "ओ",
                                                  "इ",
                                                  "ऐ",
                                                  "ओ",
                                                  "ओ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ओ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "इमली",
                                        "targetImage": "🫘",
                                        "options": [
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  },
                                                  {
                                                            "w": "ओस",
                                                            "i": "💧"
                                                  },
                                                  {
                                                            "w": "ओढ़नी",
                                                            "i": "🧣"
                                                  },
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ओ",
                                        "lower": "ओ",
                                        "word": "ओखली",
                                        "image": "🥣"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ओ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ओ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🥣"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ओखली",
                                                  "i": "🥣"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "इमली",
                                                            "i": "🫘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ओ",
                                        "options": [
                                                  "ओ",
                                                  "इ",
                                                  "ऐ",
                                                  "इ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ओ",
                                        "options": [
                                                  "इ",
                                                  "ऐ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ओ खोजें",
                                        "options": [
                                                  "ओ",
                                                  "इ",
                                                  "ऐ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🥣 खोजें",
                                        "options": [
                                                  "🥣",
                                                  "👓",
                                                  "🫘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ओ से क्या शुरू होता है?",
                                        "options": [
                                                  "🫘",
                                                  "🥣"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🥣?",
                                        "options": [
                                                  "ओखली",
                                                  "इमली"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "💧 खोजें",
                                        "options": [
                                                  "🐘",
                                                  "🏢",
                                                  "💧"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ओ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "इमारत",
                                                  "ओस"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ओ से क्या शुरू होता है?",
                                        "options": [
                                                  "🏢",
                                                  "💧"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🧣 खोजें",
                                        "options": [
                                                  "🚂",
                                                  "🧣",
                                                  "📢"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ओ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ओढ़नी",
                                                  "इंजन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ओ"
                    }
          },
          {
                    "L": "औ",
                    "e": [
                              {
                                        "w": "औरत",
                                        "i": "👩"
                              },
                              {
                                        "w": "औज़ार",
                                        "i": "🛠️"
                              },
                              {
                                        "w": "औषधि",
                                        "i": "💊"
                              }
                    ],
                    "id": "swar_10",
                    "letter": "औ",
                    "word": "औरत",
                    "image": "👩",
                    "examples": [
                              {
                                        "word": "औरत",
                                        "image": "👩"
                              },
                              {
                                        "word": "औज़ार",
                                        "image": "🛠️"
                              },
                              {
                                        "word": "औषधि",
                                        "image": "💊"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "औ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "औरत",
                                                  "i": "👩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "उल्लू",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "औ",
                                        "targetLower": "औ",
                                        "grid": [
                                                  "अं",
                                                  "उ",
                                                  "औ",
                                                  "अं",
                                                  "औ",
                                                  "औ",
                                                  "औ",
                                                  "अ",
                                                  "आ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "औ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "अंगूर",
                                        "targetImage": "🍇",
                                        "options": [
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "औज़ार",
                                                            "i": "🛠️"
                                                  },
                                                  {
                                                            "w": "औषधि",
                                                            "i": "💊"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "औ",
                                        "lower": "औ",
                                        "word": "औरत",
                                        "image": "👩"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "औ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "औ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "👩"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "औरत",
                                                  "i": "👩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "औरत",
                                                            "i": "👩"
                                                  },
                                                  {
                                                            "w": "उल्लू",
                                                            "i": "🦉"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "औ",
                                        "options": [
                                                  "औ",
                                                  "अं",
                                                  "उ",
                                                  "अं"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "औ",
                                        "options": [
                                                  "अं",
                                                  "उ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "औ खोजें",
                                        "options": [
                                                  "औ",
                                                  "अं",
                                                  "उ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 👩 खोजें",
                                        "options": [
                                                  "🍇",
                                                  "👩",
                                                  "🦉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "औ से क्या शुरू होता है?",
                                        "options": [
                                                  "🍇",
                                                  "👩"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 👩?",
                                        "options": [
                                                  "औरत",
                                                  "अंगूर"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🛠️ खोजें",
                                        "options": [
                                                  "🛠️",
                                                  "🎁",
                                                  "🥚"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "औ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंडा",
                                                  "औज़ार"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "औ से क्या शुरू होता है?",
                                        "options": [
                                                  "🥚",
                                                  "🛠️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "💊 खोजें",
                                        "options": [
                                                  "🔢",
                                                  "💊",
                                                  "☝️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "औ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंक",
                                                  "औषधि"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "औ"
                    }
          },
          {
                    "L": "अं",
                    "e": [
                              {
                                        "w": "अंगूर",
                                        "i": "🍇"
                              },
                              {
                                        "w": "अंडा",
                                        "i": "🥚"
                              },
                              {
                                        "w": "अंक",
                                        "i": "🔢"
                              }
                    ],
                    "id": "swar_11",
                    "letter": "अं",
                    "word": "अंगूर",
                    "image": "🍇",
                    "examples": [
                              {
                                        "word": "अंगूर",
                                        "image": "🍇"
                              },
                              {
                                        "word": "अंडा",
                                        "image": "🥚"
                              },
                              {
                                        "word": "अंक",
                                        "image": "🔢"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "अं"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "अंगूर",
                                                  "i": "🍇"
                                        },
                                        "options": [
                                                  {
                                                            "w": "एक",
                                                            "i": "1️⃣"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "अं",
                                        "targetLower": "अं",
                                        "grid": [
                                                  "अं",
                                                  "अं",
                                                  "ऊ",
                                                  "अं",
                                                  "ऐ",
                                                  "ए",
                                                  "औ",
                                                  "अं",
                                                  "ऐ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "अं"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ऐनक",
                                        "targetImage": "👓",
                                        "options": [
                                                  {
                                                            "w": "अंक",
                                                            "i": "🔢"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  },
                                                  {
                                                            "w": "अंडा",
                                                            "i": "🥚"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "अं",
                                        "lower": "अं",
                                        "word": "अंगूर",
                                        "image": "🍇"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "अं"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "अं"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍇"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "अंगूर",
                                                  "i": "🍇"
                                        },
                                        "options": [
                                                  {
                                                            "w": "एक",
                                                            "i": "1️⃣"
                                                  },
                                                  {
                                                            "w": "अंगूर",
                                                            "i": "🍇"
                                                  },
                                                  {
                                                            "w": "ऐनक",
                                                            "i": "👓"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "अं",
                                        "options": [
                                                  "अं",
                                                  "ऐ",
                                                  "ए",
                                                  "ऐ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "अं",
                                        "options": [
                                                  "ऐ",
                                                  "ए"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "अं खोजें",
                                        "options": [
                                                  "ए",
                                                  "ऐ",
                                                  "अं"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🍇 खोजें",
                                        "options": [
                                                  "1️⃣",
                                                  "👓",
                                                  "🍇"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "अं से क्या शुरू होता है?",
                                        "options": [
                                                  "👓",
                                                  "🍇"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🍇?",
                                        "options": [
                                                  "अंगूर",
                                                  "ऐनक"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🥚 खोजें",
                                        "options": [
                                                  "🥚",
                                                  "🐘",
                                                  "🦶"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अं से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंडा",
                                                  "ऐरावत"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अं से क्या शुरू होता है?",
                                        "options": [
                                                  "🥚",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🔢 खोजें",
                                        "options": [
                                                  "🖼️",
                                                  "🔢",
                                                  "📢"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "अं से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "अंक",
                                                  "ऐलान"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "अं"
                    }
          },
          {
                    "L": "अः",
                    "e": [
                              {
                                        "w": "अः",
                                        "i": "✨"
                              },
                              {
                                        "w": "नमः",
                                        "i": "🙏"
                              },
                              {
                                        "w": "प्रातः",
                                        "i": "🌅"
                              }
                    ],
                    "id": "swar_12",
                    "letter": "अः",
                    "word": "अः",
                    "image": "✨",
                    "examples": [
                              {
                                        "word": "अः",
                                        "image": "✨"
                              },
                              {
                                        "word": "नमः",
                                        "image": "🙏"
                              },
                              {
                                        "word": "प्रातः",
                                        "image": "🌅"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "अः"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "अः",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "अः",
                                        "targetLower": "अः",
                                        "grid": [
                                                  "अः",
                                                  "अः",
                                                  "ऊ",
                                                  "अः",
                                                  "ए",
                                                  "ओ",
                                                  "अं",
                                                  "अः",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "अः"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ऊन",
                                        "targetImage": "🧶",
                                        "options": [
                                                  {
                                                            "w": "प्रातः",
                                                            "i": "🌅"
                                                  },
                                                  {
                                                            "w": "नमः",
                                                            "i": "🙏"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "अः",
                                        "lower": "अः",
                                        "word": "अः",
                                        "image": "✨"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "अः"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "अः"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "✨"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "अः",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ओखली",
                                                            "i": "🥣"
                                                  },
                                                  {
                                                            "w": "अः",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ऊन",
                                                            "i": "🧶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "अः",
                                        "options": [
                                                  "अः",
                                                  "ऊ",
                                                  "ओ",
                                                  "ऊ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "अः",
                                        "options": [
                                                  "ऊ",
                                                  "ओ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "अः खोजें",
                                        "options": [
                                                  "ओ",
                                                  "ऊ",
                                                  "अः"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र ✨ खोजें",
                                        "options": [
                                                  "🥣",
                                                  "🧶",
                                                  "✨"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "अः से क्या शुरू होता है?",
                                        "options": [
                                                  "🧶",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है ✨?",
                                        "options": [
                                                  "ऊन",
                                                  "अः"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🙏 खोजें",
                                        "options": [
                                                  "🙏",
                                                  "🐪",
                                                  "💧"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अः से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "नमः",
                                                  "ऊंट"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अः से क्या शुरू होता है?",
                                        "options": [
                                                  "🙏",
                                                  "🐪"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🌅 खोजें",
                                        "options": [
                                                  "🌅",
                                                  "🧣",
                                                  "⬆️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "अः से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ऊपर",
                                                  "प्रातः"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "अः"
                    }
          },
          {
                    "L": "क",
                    "e": [
                              {
                                        "w": "कबूतर",
                                        "i": "🕊️"
                              },
                              {
                                        "w": "कमल",
                                        "i": "🪷"
                              },
                              {
                                        "w": "कलम",
                                        "i": "🖊️"
                              }
                    ],
                    "id": "vyanjan_0",
                    "letter": "क",
                    "word": "कबूतर",
                    "image": "🕊️",
                    "examples": [
                              {
                                        "word": "कबूतर",
                                        "image": "🕊️"
                              },
                              {
                                        "word": "कमल",
                                        "image": "🪷"
                              },
                              {
                                        "word": "कलम",
                                        "image": "🖊️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "क"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "कबूतर",
                                                  "i": "🕊️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "क",
                                        "targetLower": "क",
                                        "grid": [
                                                  "क",
                                                  "ञ",
                                                  "त",
                                                  "क",
                                                  "क",
                                                  "ञ",
                                                  "क्ष",
                                                  "क",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "क"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ञ",
                                        "targetImage": "✨",
                                        "options": [
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कमल",
                                                            "i": "🪷"
                                                  },
                                                  {
                                                            "w": "कलम",
                                                            "i": "🖊️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "क",
                                        "lower": "क",
                                        "word": "कबूतर",
                                        "image": "🕊️"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "क"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "क"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🕊️"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "कबूतर",
                                                  "i": "🕊️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "क",
                                        "options": [
                                                  "क",
                                                  "ञ",
                                                  "क्ष",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "क",
                                        "options": [
                                                  "ञ",
                                                  "क्ष"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "क खोजें",
                                        "options": [
                                                  "क",
                                                  "क्ष",
                                                  "ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🕊️ खोजें",
                                        "options": [
                                                  "🕊️",
                                                  "✨",
                                                  "⚔️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "क से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🕊️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🕊️?",
                                        "options": [
                                                  "कबूतर",
                                                  "ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🪷 खोजें",
                                        "options": [
                                                  "🪷",
                                                  "🙏",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "क से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ञ",
                                                  "कमल"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "क से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🪷"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🖊️ खोजें",
                                        "options": [
                                                  "🖊️",
                                                  "✨",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "क से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "कलम",
                                                  "ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "क"
                    }
          },
          {
                    "L": "ख",
                    "e": [
                              {
                                        "w": "खरगोश",
                                        "i": "🐇"
                              },
                              {
                                        "w": "खिड़की",
                                        "i": "🪟"
                              },
                              {
                                        "w": "खिलौना",
                                        "i": "🧸"
                              }
                    ],
                    "id": "vyanjan_1",
                    "letter": "ख",
                    "word": "खरगोश",
                    "image": "🐇",
                    "examples": [
                              {
                                        "word": "खरगोश",
                                        "image": "🐇"
                              },
                              {
                                        "word": "खिड़की",
                                        "image": "🪟"
                              },
                              {
                                        "word": "खिलौना",
                                        "image": "🧸"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ख"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "खरगोश",
                                                  "i": "🐇"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "घर",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ख",
                                        "targetLower": "ख",
                                        "grid": [
                                                  "ख",
                                                  "ध",
                                                  "ख",
                                                  "प",
                                                  "घ",
                                                  "ख",
                                                  "प",
                                                  "क",
                                                  "ख"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ख"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "पतंग",
                                        "targetImage": "🪁",
                                        "options": [
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  },
                                                  {
                                                            "w": "खिलौना",
                                                            "i": "🧸"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "खिड़की",
                                                            "i": "🪟"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ख",
                                        "lower": "ख",
                                        "word": "खरगोश",
                                        "image": "🐇"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ख"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ख"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐇"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "खरगोश",
                                                  "i": "🐇"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "घर",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ख",
                                        "options": [
                                                  "ख",
                                                  "प",
                                                  "घ",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ख",
                                        "options": [
                                                  "प",
                                                  "घ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ख खोजें",
                                        "options": [
                                                  "प",
                                                  "ख",
                                                  "घ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🐇 खोजें",
                                        "options": [
                                                  "🐇",
                                                  "🪁",
                                                  "🏠"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ख से क्या शुरू होता है?",
                                        "options": [
                                                  "🪁",
                                                  "🐇"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🐇?",
                                        "options": [
                                                  "पतंग",
                                                  "खरगोश"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🪟 खोजें",
                                        "options": [
                                                  "🪟",
                                                  "⌚",
                                                  "🍃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ख से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "पत्ता",
                                                  "खिड़की"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ख से क्या शुरू होता है?",
                                        "options": [
                                                  "🪟",
                                                  "🍃"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🧸 खोजें",
                                        "options": [
                                                  "🧸",
                                                  "🥭",
                                                  "🐎"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ख से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "खिलौना",
                                                  "पपीता"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ख"
                    }
          },
          {
                    "L": "ग",
                    "e": [
                              {
                                        "w": "गमला",
                                        "i": "🪴"
                              },
                              {
                                        "w": "गाय",
                                        "i": "🐄"
                              },
                              {
                                        "w": "गाजर",
                                        "i": "🥕"
                              }
                    ],
                    "id": "vyanjan_2",
                    "letter": "ग",
                    "word": "गमला",
                    "image": "🪴",
                    "examples": [
                              {
                                        "word": "गमला",
                                        "image": "🪴"
                              },
                              {
                                        "word": "गाय",
                                        "image": "🐄"
                              },
                              {
                                        "word": "गाजर",
                                        "image": "🥕"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ग"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "गमला",
                                                  "i": "🪴"
                                        },
                                        "options": [
                                                  {
                                                            "w": "गमला",
                                                            "i": "🪴"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ग",
                                        "targetLower": "ग",
                                        "grid": [
                                                  "व",
                                                  "ग",
                                                  "ग",
                                                  "ल",
                                                  "ग",
                                                  "ल",
                                                  "ग",
                                                  "ल",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ग"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "लट्टू",
                                        "targetImage": "🪀",
                                        "options": [
                                                  {
                                                            "w": "गाजर",
                                                            "i": "🥕"
                                                  },
                                                  {
                                                            "w": "गाय",
                                                            "i": "🐄"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "गमला",
                                                            "i": "🪴"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ग",
                                        "lower": "ग",
                                        "word": "गमला",
                                        "image": "🪴"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ग"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ग"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪴"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "गमला",
                                                  "i": "🪴"
                                        },
                                        "options": [
                                                  {
                                                            "w": "गमला",
                                                            "i": "🪴"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ग",
                                        "options": [
                                                  "ग",
                                                  "ल",
                                                  "द",
                                                  "ल"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ग",
                                        "options": [
                                                  "ल",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ग खोजें",
                                        "options": [
                                                  "ल",
                                                  "ग",
                                                  "द"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🪴 खोजें",
                                        "options": [
                                                  "🪴",
                                                  "🪀",
                                                  "🖋️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ग से क्या शुरू होता है?",
                                        "options": [
                                                  "🪀",
                                                  "🪴"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🪴?",
                                        "options": [
                                                  "लट्टू",
                                                  "गमला"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐄 खोजें",
                                        "options": [
                                                  "🐄",
                                                  "👦",
                                                  "🪞"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ग से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "लड़का",
                                                  "गाय"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ग से क्या शुरू होता है?",
                                        "options": [
                                                  "👦",
                                                  "🐄"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🥕 खोजें",
                                        "options": [
                                                  "🧄",
                                                  "🥕",
                                                  "🚪"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ग से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "लहसुन",
                                                  "गाजर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ग"
                    }
          },
          {
                    "L": "घ",
                    "e": [
                              {
                                        "w": "घर",
                                        "i": "🏠"
                              },
                              {
                                        "w": "घड़ी",
                                        "i": "⌚"
                              },
                              {
                                        "w": "घोड़ा",
                                        "i": "🐎"
                              }
                    ],
                    "id": "vyanjan_3",
                    "letter": "घ",
                    "word": "घर",
                    "image": "🏠",
                    "examples": [
                              {
                                        "word": "घर",
                                        "image": "🏠"
                              },
                              {
                                        "word": "घड़ी",
                                        "image": "⌚"
                              },
                              {
                                        "word": "घोड़ा",
                                        "image": "🐎"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "घ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "घर",
                                                  "i": "🏠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "घर",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "घ",
                                        "targetLower": "घ",
                                        "grid": [
                                                  "ठ",
                                                  "ख",
                                                  "फ",
                                                  "घ",
                                                  "घ",
                                                  "फ",
                                                  "घ",
                                                  "घ",
                                                  "क"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "घ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "फल",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "घर",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "घोड़ा",
                                                            "i": "🐎"
                                                  },
                                                  {
                                                            "w": "घड़ी",
                                                            "i": "⌚"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "घ",
                                        "lower": "घ",
                                        "word": "घर",
                                        "image": "🏠"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "घ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "घ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🏠"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "घर",
                                                  "i": "🏠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "घर",
                                                            "i": "🏠"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "घ",
                                        "options": [
                                                  "घ",
                                                  "फ",
                                                  "ख",
                                                  "फ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "घ",
                                        "options": [
                                                  "फ",
                                                  "ख"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "घ खोजें",
                                        "options": [
                                                  "फ",
                                                  "घ",
                                                  "ख"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🏠 खोजें",
                                        "options": [
                                                  "🍎",
                                                  "🐇",
                                                  "🏠"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "घ से क्या शुरू होता है?",
                                        "options": [
                                                  "🏠",
                                                  "🍎"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🏠?",
                                        "options": [
                                                  "फल",
                                                  "घर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "⌚ खोजें",
                                        "options": [
                                                  "🪟",
                                                  "🌸",
                                                  "⌚"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "घ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "फूल",
                                                  "घड़ी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "घ से क्या शुरू होता है?",
                                        "options": [
                                                  "⌚",
                                                  "🌸"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🐎 खोजें",
                                        "options": [
                                                  "🐎",
                                                  "⚽",
                                                  "🧸"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "घ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "फुटबॉल",
                                                  "घोड़ा"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "घ"
                    }
          },
          {
                    "L": "ङ",
                    "e": [
                              {
                                        "w": "ङ",
                                        "i": "✨"
                              },
                              {
                                        "w": "ङ",
                                        "i": "✨"
                              },
                              {
                                        "w": "ङ",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_4",
                    "letter": "ङ",
                    "word": "ङ",
                    "image": "✨",
                    "examples": [
                              {
                                        "word": "ङ",
                                        "image": "✨"
                              },
                              {
                                        "word": "ङ",
                                        "image": "✨"
                              },
                              {
                                        "word": "ङ",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ङ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ङ",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ङ",
                                        "targetLower": "ङ",
                                        "grid": [
                                                  "ङ",
                                                  "क",
                                                  "र",
                                                  "ङ",
                                                  "ङ",
                                                  "त",
                                                  "क",
                                                  "ञ",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ङ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "कबूतर",
                                        "targetImage": "🕊️",
                                        "options": [
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ङ",
                                        "lower": "ङ",
                                        "word": "ङ",
                                        "image": "✨"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ङ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ङ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "✨"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ङ",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ङ",
                                        "options": [
                                                  "ङ",
                                                  "क",
                                                  "ञ",
                                                  "क"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ङ",
                                        "options": [
                                                  "क",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ङ खोजें",
                                        "options": [
                                                  "ङ",
                                                  "क",
                                                  "ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र ✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "🕊️",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ङ से क्या शुरू होता है?",
                                        "options": [
                                                  "🕊️",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है ✨?",
                                        "options": [
                                                  "ङ",
                                                  "कबूतर"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "✨",
                                                  "🪷"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ङ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "कमल",
                                                  "ङ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ङ से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🪷"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "✨",
                                                  "🖊️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ङ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "कलम",
                                                  "ङ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ङ"
                    }
          },
          {
                    "L": "च",
                    "e": [
                              {
                                        "w": "चम्मच",
                                        "i": "🥄"
                              },
                              {
                                        "w": "चाँद",
                                        "i": "🌙"
                              },
                              {
                                        "w": "चाबी",
                                        "i": "🔑"
                              }
                    ],
                    "id": "vyanjan_5",
                    "letter": "च",
                    "word": "चम्मच",
                    "image": "🥄",
                    "examples": [
                              {
                                        "word": "चम्मच",
                                        "image": "🥄"
                              },
                              {
                                        "word": "चाँद",
                                        "image": "🌙"
                              },
                              {
                                        "word": "चाबी",
                                        "image": "🔑"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "च"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "चम्मच",
                                                  "i": "🥄"
                                        },
                                        "options": [
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "च",
                                        "targetLower": "च",
                                        "grid": [
                                                  "ट",
                                                  "च",
                                                  "ध",
                                                  "च",
                                                  "ध",
                                                  "ञ",
                                                  "च",
                                                  "ण",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "च"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "धनुष",
                                        "targetImage": "🏹",
                                        "options": [
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "चाँद",
                                                            "i": "🌙"
                                                  },
                                                  {
                                                            "w": "चाबी",
                                                            "i": "🔑"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "च",
                                        "lower": "च",
                                        "word": "चम्मच",
                                        "image": "🥄"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "च"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "च"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🥄"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "चम्मच",
                                                  "i": "🥄"
                                        },
                                        "options": [
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "च",
                                        "options": [
                                                  "च",
                                                  "ध",
                                                  "ण",
                                                  "ध"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "च",
                                        "options": [
                                                  "ध",
                                                  "ण"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "च खोजें",
                                        "options": [
                                                  "ण",
                                                  "ध",
                                                  "च"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🥄 खोजें",
                                        "options": [
                                                  "🏹",
                                                  "🥄",
                                                  "🏹"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "च से क्या शुरू होता है?",
                                        "options": [
                                                  "🥄",
                                                  "🏹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🥄?",
                                        "options": [
                                                  "धनुष",
                                                  "चम्मच"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🌙 खोजें",
                                        "options": [
                                                  "🧵",
                                                  "🌙",
                                                  "👣"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "च से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "धागा",
                                                  "चाँद"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "च से क्या शुरू होता है?",
                                        "options": [
                                                  "🌙",
                                                  "🧵"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🔑 खोजें",
                                        "options": [
                                                  "🔑",
                                                  "☀️",
                                                  "🪕"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "च से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "धूप",
                                                  "चाबी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "च"
                    }
          },
          {
                    "L": "छ",
                    "e": [
                              {
                                        "w": "छतरी",
                                        "i": "☔"
                              },
                              {
                                        "w": "छत",
                                        "i": "🛖"
                              },
                              {
                                        "w": "छड़ी",
                                        "i": "🦯"
                              }
                    ],
                    "id": "vyanjan_6",
                    "letter": "छ",
                    "word": "छतरी",
                    "image": "☔",
                    "examples": [
                              {
                                        "word": "छतरी",
                                        "image": "☔"
                              },
                              {
                                        "word": "छत",
                                        "image": "🛖"
                              },
                              {
                                        "word": "छड़ी",
                                        "image": "🦯"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "छ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "छतरी",
                                                  "i": "☔"
                                        },
                                        "options": [
                                                  {
                                                            "w": "छतरी",
                                                            "i": "☔"
                                                  },
                                                  {
                                                            "w": "गमला",
                                                            "i": "🪴"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "छ",
                                        "targetLower": "छ",
                                        "grid": [
                                                  "छ",
                                                  "ग",
                                                  "म",
                                                  "छ",
                                                  "क",
                                                  "क",
                                                  "छ",
                                                  "ध",
                                                  "छ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "छ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "कबूतर",
                                        "targetImage": "🕊️",
                                        "options": [
                                                  {
                                                            "w": "छत",
                                                            "i": "🛖"
                                                  },
                                                  {
                                                            "w": "छतरी",
                                                            "i": "☔"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "छड़ी",
                                                            "i": "🦯"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "छ",
                                        "lower": "छ",
                                        "word": "छतरी",
                                        "image": "☔"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "छ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "छ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "☔"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "छतरी",
                                                  "i": "☔"
                                        },
                                        "options": [
                                                  {
                                                            "w": "छतरी",
                                                            "i": "☔"
                                                  },
                                                  {
                                                            "w": "गमला",
                                                            "i": "🪴"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "छ",
                                        "options": [
                                                  "छ",
                                                  "क",
                                                  "ग",
                                                  "क"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "छ",
                                        "options": [
                                                  "क",
                                                  "ग"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "छ खोजें",
                                        "options": [
                                                  "क",
                                                  "छ",
                                                  "ग"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र ☔ खोजें",
                                        "options": [
                                                  "🪴",
                                                  "🕊️",
                                                  "☔"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "छ से क्या शुरू होता है?",
                                        "options": [
                                                  "☔",
                                                  "🕊️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है ☔?",
                                        "options": [
                                                  "छतरी",
                                                  "कबूतर"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🛖 खोजें",
                                        "options": [
                                                  "🐄",
                                                  "🪷",
                                                  "🛖"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "छ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "छत",
                                                  "कमल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "छ से क्या शुरू होता है?",
                                        "options": [
                                                  "🪷",
                                                  "🛖"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🦯 खोजें",
                                        "options": [
                                                  "🖊️",
                                                  "🥕",
                                                  "🦯"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "छ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "कलम",
                                                  "छड़ी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "छ"
                    }
          },
          {
                    "L": "ज",
                    "e": [
                              {
                                        "w": "जहाज़",
                                        "i": "🚢"
                              },
                              {
                                        "w": "जल",
                                        "i": "💧"
                              },
                              {
                                        "w": "जूता",
                                        "i": "👞"
                              }
                    ],
                    "id": "vyanjan_7",
                    "letter": "ज",
                    "word": "जहाज़",
                    "image": "🚢",
                    "examples": [
                              {
                                        "word": "जहाज़",
                                        "image": "🚢"
                              },
                              {
                                        "word": "जल",
                                        "image": "💧"
                              },
                              {
                                        "word": "जूता",
                                        "image": "👞"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ज"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "जहाज़",
                                                  "i": "🚢"
                                        },
                                        "options": [
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ज",
                                        "targetLower": "ज",
                                        "grid": [
                                                  "ज",
                                                  "ज",
                                                  "च",
                                                  "ज",
                                                  "ठ",
                                                  "च",
                                                  "प",
                                                  "ज",
                                                  "घ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ज"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "चम्मच",
                                        "targetImage": "🥄",
                                        "options": [
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "जल",
                                                            "i": "💧"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "जूता",
                                                            "i": "👞"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ज",
                                        "lower": "ज",
                                        "word": "जहाज़",
                                        "image": "🚢"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ज"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ज"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🚢"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "जहाज़",
                                                  "i": "🚢"
                                        },
                                        "options": [
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ज",
                                        "options": [
                                                  "ज",
                                                  "च",
                                                  "प",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ज",
                                        "options": [
                                                  "च",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ज खोजें",
                                        "options": [
                                                  "ज",
                                                  "च",
                                                  "प"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🚢 खोजें",
                                        "options": [
                                                  "🥄",
                                                  "🚢",
                                                  "🪁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज से क्या शुरू होता है?",
                                        "options": [
                                                  "🚢",
                                                  "🥄"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🚢?",
                                        "options": [
                                                  "जहाज़",
                                                  "चम्मच"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "💧 खोजें",
                                        "options": [
                                                  "🍃",
                                                  "💧",
                                                  "🌙"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "जल",
                                                  "चाँद"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ज से क्या शुरू होता है?",
                                        "options": [
                                                  "💧",
                                                  "🌙"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "👞 खोजें",
                                        "options": [
                                                  "🥭",
                                                  "👞",
                                                  "🔑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "जूता",
                                                  "चाबी"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ज"
                    }
          },
          {
                    "L": "झ",
                    "e": [
                              {
                                        "w": "झंडा",
                                        "i": "🚩"
                              },
                              {
                                        "w": "झरना",
                                        "i": "🏞️"
                              },
                              {
                                        "w": "झूला",
                                        "i": "🛝"
                              }
                    ],
                    "id": "vyanjan_8",
                    "letter": "झ",
                    "word": "झंडा",
                    "image": "🚩",
                    "examples": [
                              {
                                        "word": "झंडा",
                                        "image": "🚩"
                              },
                              {
                                        "word": "झरना",
                                        "image": "🏞️"
                              },
                              {
                                        "word": "झूला",
                                        "image": "🛝"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "झ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "झंडा",
                                                  "i": "🚩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "झ",
                                        "targetLower": "झ",
                                        "grid": [
                                                  "स",
                                                  "भ",
                                                  "झ",
                                                  "झ",
                                                  "भ",
                                                  "द",
                                                  "भ",
                                                  "झ",
                                                  "झ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "झ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "भालू",
                                        "targetImage": "🐻",
                                        "options": [
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "झूला",
                                                            "i": "🛝"
                                                  },
                                                  {
                                                            "w": "झरना",
                                                            "i": "🏞️"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "झ",
                                        "lower": "झ",
                                        "word": "झंडा",
                                        "image": "🚩"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "झ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "झ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🚩"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "झंडा",
                                                  "i": "🚩"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "झ",
                                        "options": [
                                                  "झ",
                                                  "भ",
                                                  "द",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "झ",
                                        "options": [
                                                  "भ",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "झ खोजें",
                                        "options": [
                                                  "झ",
                                                  "द",
                                                  "भ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🚩 खोजें",
                                        "options": [
                                                  "🚩",
                                                  "🐻",
                                                  "🖋️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "झ से क्या शुरू होता है?",
                                        "options": [
                                                  "🚩",
                                                  "🐻"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🚩?",
                                        "options": [
                                                  "झंडा",
                                                  "भालू"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🏞️ खोजें",
                                        "options": [
                                                  "🏞️",
                                                  "🏛️",
                                                  "🪞"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "झ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "झरना",
                                                  "भवन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "झ से क्या शुरू होता है?",
                                        "options": [
                                                  "🏞️",
                                                  "🏛️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🛝 खोजें",
                                        "options": [
                                                  "🐑",
                                                  "🛝",
                                                  "🚪"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "झ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "भेड़",
                                                  "झूला"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "झ"
                    }
          },
          {
                    "L": "ञ",
                    "e": [
                              {
                                        "w": "ञ",
                                        "i": "✨"
                              },
                              {
                                        "w": "ञ",
                                        "i": "✨"
                              },
                              {
                                        "w": "ञ",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_9",
                    "letter": "ञ",
                    "word": "ञ",
                    "image": "✨",
                    "examples": [
                              {
                                        "word": "ञ",
                                        "image": "✨"
                              },
                              {
                                        "word": "ञ",
                                        "image": "✨"
                              },
                              {
                                        "word": "ञ",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ञ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ञ",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ञ",
                                        "targetLower": "ञ",
                                        "grid": [
                                                  "ण",
                                                  "ङ",
                                                  "ण",
                                                  "ण",
                                                  "घ",
                                                  "ञ",
                                                  "ञ",
                                                  "ञ",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ञ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "बाण",
                                        "targetImage": "🏹",
                                        "options": [
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ञ",
                                        "lower": "ञ",
                                        "word": "ञ",
                                        "image": "✨"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ञ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ञ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "✨"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ञ",
                                                  "i": "✨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ञ",
                                        "options": [
                                                  "ञ",
                                                  "ण",
                                                  "ङ",
                                                  "ण"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ञ",
                                        "options": [
                                                  "ण",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ञ खोजें",
                                        "options": [
                                                  "ण",
                                                  "ञ",
                                                  "ङ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र ✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "✨",
                                                  "🏹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ञ से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🏹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है ✨?",
                                        "options": [
                                                  "ञ",
                                                  "बाण"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "👣",
                                                  "✨",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ञ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "चरण",
                                                  "ञ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ञ से क्या शुरू होता है?",
                                        "options": [
                                                  "👣",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "✨",
                                                  "🪕"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ञ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ञ",
                                                  "वीणा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ञ"
                    }
          },
          {
                    "L": "ट",
                    "e": [
                              {
                                        "w": "टमाटर",
                                        "i": "🍅"
                              },
                              {
                                        "w": "टोकरी",
                                        "i": "🧺"
                              },
                              {
                                        "w": "टोपी",
                                        "i": "🧢"
                              }
                    ],
                    "id": "vyanjan_10",
                    "letter": "ट",
                    "word": "टमाटर",
                    "image": "🍅",
                    "examples": [
                              {
                                        "word": "टमाटर",
                                        "image": "🍅"
                              },
                              {
                                        "word": "टोकरी",
                                        "image": "🧺"
                              },
                              {
                                        "word": "टोपी",
                                        "image": "🧢"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ट"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "टमाटर",
                                                  "i": "🍅"
                                        },
                                        "options": [
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ट",
                                        "targetLower": "ट",
                                        "grid": [
                                                  "त्र",
                                                  "ल",
                                                  "ट",
                                                  "झ",
                                                  "ट",
                                                  "ट",
                                                  "ह",
                                                  "ह",
                                                  "ट"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ट"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "हाथी",
                                        "targetImage": "🐘",
                                        "options": [
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "टोपी",
                                                            "i": "🧢"
                                                  },
                                                  {
                                                            "w": "टोकरी",
                                                            "i": "🧺"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ट",
                                        "lower": "ट",
                                        "word": "टमाटर",
                                        "image": "🍅"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ट"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ट"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍅"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "टमाटर",
                                                  "i": "🍅"
                                        },
                                        "options": [
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ट",
                                        "options": [
                                                  "ट",
                                                  "ह",
                                                  "ल",
                                                  "ह"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ट",
                                        "options": [
                                                  "ह",
                                                  "ल"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ट खोजें",
                                        "options": [
                                                  "ट",
                                                  "ह",
                                                  "ल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🍅 खोजें",
                                        "options": [
                                                  "🪀",
                                                  "🐘",
                                                  "🍅"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ट से क्या शुरू होता है?",
                                        "options": [
                                                  "🍅",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🍅?",
                                        "options": [
                                                  "हाथी",
                                                  "टमाटर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🧺 खोजें",
                                        "options": [
                                                  "👦",
                                                  "🧺",
                                                  "✋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ट से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "हाथ",
                                                  "टोकरी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ट से क्या शुरू होता है?",
                                        "options": [
                                                  "🧺",
                                                  "✋"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🧢 खोजें",
                                        "options": [
                                                  "💨",
                                                  "🧢",
                                                  "🧄"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ट से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "टोपी",
                                                  "हवा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ट"
                    }
          },
          {
                    "L": "ठ",
                    "e": [
                              {
                                        "w": "ठठेरा",
                                        "i": "🔨"
                              },
                              {
                                        "w": "ठंड",
                                        "i": "🥶"
                              },
                              {
                                        "w": "ठेला",
                                        "i": "🛒"
                              }
                    ],
                    "id": "vyanjan_11",
                    "letter": "ठ",
                    "word": "ठठेरा",
                    "image": "🔨",
                    "examples": [
                              {
                                        "word": "ठठेरा",
                                        "image": "🔨"
                              },
                              {
                                        "word": "ठंड",
                                        "image": "🥶"
                              },
                              {
                                        "word": "ठेला",
                                        "image": "🛒"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ठ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ठठेरा",
                                                  "i": "🔨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "ठठेरा",
                                                            "i": "🔨"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ठ",
                                        "targetLower": "ठ",
                                        "grid": [
                                                  "न",
                                                  "ठ",
                                                  "ठ",
                                                  "ठ",
                                                  "द",
                                                  "द",
                                                  "थ",
                                                  "च",
                                                  "ठ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ठ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "दवात",
                                        "targetImage": "🖋️",
                                        "options": [
                                                  {
                                                            "w": "ठेला",
                                                            "i": "🛒"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "ठठेरा",
                                                            "i": "🔨"
                                                  },
                                                  {
                                                            "w": "ठंड",
                                                            "i": "🥶"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ठ",
                                        "lower": "ठ",
                                        "word": "ठठेरा",
                                        "image": "🔨"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ठ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ठ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🔨"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ठठेरा",
                                                  "i": "🔨"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "ठठेरा",
                                                            "i": "🔨"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ठ",
                                        "options": [
                                                  "ठ",
                                                  "द",
                                                  "न",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ठ",
                                        "options": [
                                                  "द",
                                                  "न"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ठ खोजें",
                                        "options": [
                                                  "ठ",
                                                  "द",
                                                  "न"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🔨 खोजें",
                                        "options": [
                                                  "🔨",
                                                  "🖋️",
                                                  "🚰"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ठ से क्या शुरू होता है?",
                                        "options": [
                                                  "🔨",
                                                  "🖋️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🔨?",
                                        "options": [
                                                  "दवात",
                                                  "ठठेरा"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🥶 खोजें",
                                        "options": [
                                                  "🪞",
                                                  "⛵",
                                                  "🥶"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ठ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "दर्पण",
                                                  "ठंड"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ठ से क्या शुरू होता है?",
                                        "options": [
                                                  "🪞",
                                                  "🥶"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🛒 खोजें",
                                        "options": [
                                                  "🚪",
                                                  "🛒",
                                                  "🍋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ठ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ठेला",
                                                  "दरवाज़ा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ठ"
                    }
          },
          {
                    "L": "ड",
                    "e": [
                              {
                                        "w": "डमरू",
                                        "i": "🥁"
                              },
                              {
                                        "w": "डंडा",
                                        "i": "🦯"
                              },
                              {
                                        "w": "डबलरोटी",
                                        "i": "🍞"
                              }
                    ],
                    "id": "vyanjan_12",
                    "letter": "ड",
                    "word": "डमरू",
                    "image": "🥁",
                    "examples": [
                              {
                                        "word": "डमरू",
                                        "image": "🥁"
                              },
                              {
                                        "word": "डंडा",
                                        "image": "🦯"
                              },
                              {
                                        "word": "डबलरोटी",
                                        "image": "🍞"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ड"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "डमरू",
                                                  "i": "🥁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "डमरू",
                                                            "i": "🥁"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ड",
                                        "targetLower": "ड",
                                        "grid": [
                                                  "ञ",
                                                  "ड",
                                                  "ड",
                                                  "न",
                                                  "फ",
                                                  "ड",
                                                  "ज्ञ",
                                                  "ड",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ड"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ञ",
                                        "targetImage": "✨",
                                        "options": [
                                                  {
                                                            "w": "डंडा",
                                                            "i": "🦯"
                                                  },
                                                  {
                                                            "w": "डबलरोटी",
                                                            "i": "🍞"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "डमरू",
                                                            "i": "🥁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ड",
                                        "lower": "ड",
                                        "word": "डमरू",
                                        "image": "🥁"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ड"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ड"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🥁"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "डमरू",
                                                  "i": "🥁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "डमरू",
                                                            "i": "🥁"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ड",
                                        "options": [
                                                  "ड",
                                                  "ञ",
                                                  "फ",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ड",
                                        "options": [
                                                  "ञ",
                                                  "फ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ड खोजें",
                                        "options": [
                                                  "ञ",
                                                  "ड",
                                                  "फ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🥁 खोजें",
                                        "options": [
                                                  "✨",
                                                  "🥁",
                                                  "🍎"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ड से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🥁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🥁?",
                                        "options": [
                                                  "ञ",
                                                  "डमरू"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🦯 खोजें",
                                        "options": [
                                                  "✨",
                                                  "🦯",
                                                  "🌸"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ड से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "डंडा",
                                                  "ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ड से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🦯"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🍞 खोजें",
                                        "options": [
                                                  "🍞",
                                                  "⚽",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ड से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ञ",
                                                  "डबलरोटी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ड"
                    }
          },
          {
                    "L": "ढ",
                    "e": [
                              {
                                        "w": "ढोलक",
                                        "i": "🪘"
                              },
                              {
                                        "w": "ढक्कन",
                                        "i": "🥘"
                              },
                              {
                                        "w": "ढाल",
                                        "i": "🛡️"
                              }
                    ],
                    "id": "vyanjan_13",
                    "letter": "ढ",
                    "word": "ढोलक",
                    "image": "🪘",
                    "examples": [
                              {
                                        "word": "ढोलक",
                                        "image": "🪘"
                              },
                              {
                                        "word": "ढक्कन",
                                        "image": "🥘"
                              },
                              {
                                        "word": "ढाल",
                                        "image": "🛡️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ढ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ढोलक",
                                                  "i": "🪘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ढ",
                                        "targetLower": "ढ",
                                        "grid": [
                                                  "च",
                                                  "ढ",
                                                  "च",
                                                  "ढ",
                                                  "ढ",
                                                  "ष",
                                                  "ह",
                                                  "च",
                                                  "ढ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ढ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "चम्मच",
                                        "targetImage": "🥄",
                                        "options": [
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  },
                                                  {
                                                            "w": "ढाल",
                                                            "i": "🛡️"
                                                  },
                                                  {
                                                            "w": "ढक्कन",
                                                            "i": "🥘"
                                                  },
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ढ",
                                        "lower": "ढ",
                                        "word": "ढोलक",
                                        "image": "🪘"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ढ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ढ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪘"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ढोलक",
                                                  "i": "🪘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ढ",
                                        "options": [
                                                  "ढ",
                                                  "च",
                                                  "ह",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ढ",
                                        "options": [
                                                  "च",
                                                  "ह"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ढ खोजें",
                                        "options": [
                                                  "ढ",
                                                  "च",
                                                  "ह"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🪘 खोजें",
                                        "options": [
                                                  "🪘",
                                                  "🥄",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ढ से क्या शुरू होता है?",
                                        "options": [
                                                  "🥄",
                                                  "🪘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🪘?",
                                        "options": [
                                                  "ढोलक",
                                                  "चम्मच"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🥘 खोजें",
                                        "options": [
                                                  "🥘",
                                                  "🌙",
                                                  "✋"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ढ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ढक्कन",
                                                  "चाँद"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ढ से क्या शुरू होता है?",
                                        "options": [
                                                  "🌙",
                                                  "🥘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🛡️ खोजें",
                                        "options": [
                                                  "🛡️",
                                                  "🔑",
                                                  "💨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ढ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ढाल",
                                                  "चाबी"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ढ"
                    }
          },
          {
                    "L": "ण",
                    "e": [
                              {
                                        "w": "बाण",
                                        "i": "🏹"
                              },
                              {
                                        "w": "चरण",
                                        "i": "👣"
                              },
                              {
                                        "w": "वीणा",
                                        "i": "🪕"
                              }
                    ],
                    "id": "vyanjan_14",
                    "letter": "ण",
                    "word": "बाण",
                    "image": "🏹",
                    "examples": [
                              {
                                        "word": "बाण",
                                        "image": "🏹"
                              },
                              {
                                        "word": "चरण",
                                        "image": "👣"
                              },
                              {
                                        "word": "वीणा",
                                        "image": "🪕"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ण"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "बाण",
                                                  "i": "🏹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ण",
                                        "targetLower": "ण",
                                        "grid": [
                                                  "ण",
                                                  "ण",
                                                  "ण",
                                                  "ज्ञ",
                                                  "व",
                                                  "ज्ञ",
                                                  "ण",
                                                  "ब",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ण"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ज्ञानी",
                                        "targetImage": "🧠",
                                        "options": [
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "चरण",
                                                            "i": "👣"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  },
                                                  {
                                                            "w": "वीणा",
                                                            "i": "🪕"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ण",
                                        "lower": "ण",
                                        "word": "बाण",
                                        "image": "🏹"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ण"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ण"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🏹"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "बाण",
                                                  "i": "🏹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "बाण",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ण",
                                        "options": [
                                                  "ण",
                                                  "ज्ञ",
                                                  "भ",
                                                  "ज्ञ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ण",
                                        "options": [
                                                  "ज्ञ",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ण खोजें",
                                        "options": [
                                                  "भ",
                                                  "ज्ञ",
                                                  "ण"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🏹 खोजें",
                                        "options": [
                                                  "🧠",
                                                  "🐻",
                                                  "🏹"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ण से क्या शुरू होता है?",
                                        "options": [
                                                  "🧠",
                                                  "🏹"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🏹?",
                                        "options": [
                                                  "ज्ञानी",
                                                  "बाण"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "👣 खोजें",
                                        "options": [
                                                  "🏛️",
                                                  "📚",
                                                  "👣"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ण से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ज्ञान",
                                                  "चरण"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ण से क्या शुरू होता है?",
                                        "options": [
                                                  "📚",
                                                  "👣"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🪕 खोजें",
                                        "options": [
                                                  "🪕",
                                                  "✨",
                                                  "🐑"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ण से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "वीणा",
                                                  "ज्ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ण"
                    }
          },
          {
                    "L": "त",
                    "e": [
                              {
                                        "w": "तरबूज़",
                                        "i": "🍉"
                              },
                              {
                                        "w": "तितली",
                                        "i": "🦋"
                              },
                              {
                                        "w": "तारा",
                                        "i": "⭐"
                              }
                    ],
                    "id": "vyanjan_15",
                    "letter": "त",
                    "word": "तरबूज़",
                    "image": "🍉",
                    "examples": [
                              {
                                        "word": "तरबूज़",
                                        "image": "🍉"
                              },
                              {
                                        "word": "तितली",
                                        "image": "🦋"
                              },
                              {
                                        "word": "तारा",
                                        "image": "⭐"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "त"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "तरबूज़",
                                                  "i": "🍉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "तरबूज़",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "त",
                                        "targetLower": "त",
                                        "grid": [
                                                  "ञ",
                                                  "त",
                                                  "द",
                                                  "त",
                                                  "ङ",
                                                  "द",
                                                  "त",
                                                  "त",
                                                  "श"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "त"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "दवात",
                                        "targetImage": "🖋️",
                                        "options": [
                                                  {
                                                            "w": "तितली",
                                                            "i": "🦋"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "तारा",
                                                            "i": "⭐"
                                                  },
                                                  {
                                                            "w": "तरबूज़",
                                                            "i": "🍉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "त",
                                        "lower": "त",
                                        "word": "तरबूज़",
                                        "image": "🍉"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "त"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "त"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍉"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "तरबूज़",
                                                  "i": "🍉"
                                        },
                                        "options": [
                                                  {
                                                            "w": "तरबूज़",
                                                            "i": "🍉"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "त",
                                        "options": [
                                                  "त",
                                                  "द",
                                                  "ङ",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "त",
                                        "options": [
                                                  "द",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "त खोजें",
                                        "options": [
                                                  "द",
                                                  "ङ",
                                                  "त"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🍉 खोजें",
                                        "options": [
                                                  "🖋️",
                                                  "🍉",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "त से क्या शुरू होता है?",
                                        "options": [
                                                  "🖋️",
                                                  "🍉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🍉?",
                                        "options": [
                                                  "दवात",
                                                  "तरबूज़"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🦋 खोजें",
                                        "options": [
                                                  "🪞",
                                                  "✨",
                                                  "🦋"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "त से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "तितली",
                                                  "दर्पण"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "त से क्या शुरू होता है?",
                                        "options": [
                                                  "🦋",
                                                  "🪞"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "⭐ खोजें",
                                        "options": [
                                                  "✨",
                                                  "⭐",
                                                  "🚪"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "त से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "दरवाज़ा",
                                                  "तारा"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "त"
                    }
          },
          {
                    "L": "थ",
                    "e": [
                              {
                                        "w": "थर्मस",
                                        "i": "🫙"
                              },
                              {
                                        "w": "थैला",
                                        "i": "🛍️"
                              },
                              {
                                        "w": "थाली",
                                        "i": "🍽️"
                              }
                    ],
                    "id": "vyanjan_16",
                    "letter": "थ",
                    "word": "थर्मस",
                    "image": "🫙",
                    "examples": [
                              {
                                        "word": "थर्मस",
                                        "image": "🫙"
                              },
                              {
                                        "word": "थैला",
                                        "image": "🛍️"
                              },
                              {
                                        "word": "थाली",
                                        "image": "🍽️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "थ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "थर्मस",
                                                  "i": "🫙"
                                        },
                                        "options": [
                                                  {
                                                            "w": "थर्मस",
                                                            "i": "🫙"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "थ",
                                        "targetLower": "थ",
                                        "grid": [
                                                  "ङ",
                                                  "न",
                                                  "न",
                                                  "थ",
                                                  "थ",
                                                  "थ",
                                                  "श",
                                                  "थ",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "थ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "नल",
                                        "targetImage": "🚰",
                                        "options": [
                                                  {
                                                            "w": "थर्मस",
                                                            "i": "🫙"
                                                  },
                                                  {
                                                            "w": "थैला",
                                                            "i": "🛍️"
                                                  },
                                                  {
                                                            "w": "थाली",
                                                            "i": "🍽️"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "थ",
                                        "lower": "थ",
                                        "word": "थर्मस",
                                        "image": "🫙"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "थ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "थ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🫙"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "थर्मस",
                                                  "i": "🫙"
                                        },
                                        "options": [
                                                  {
                                                            "w": "थर्मस",
                                                            "i": "🫙"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "थ",
                                        "options": [
                                                  "थ",
                                                  "न",
                                                  "ङ",
                                                  "न"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "थ",
                                        "options": [
                                                  "न",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "थ खोजें",
                                        "options": [
                                                  "थ",
                                                  "ङ",
                                                  "न"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🫙 खोजें",
                                        "options": [
                                                  "🫙",
                                                  "✨",
                                                  "🚰"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "थ से क्या शुरू होता है?",
                                        "options": [
                                                  "🚰",
                                                  "🫙"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🫙?",
                                        "options": [
                                                  "थर्मस",
                                                  "नल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🛍️ खोजें",
                                        "options": [
                                                  "⛵",
                                                  "🛍️",
                                                  "✨"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "थ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "नाव",
                                                  "थैला"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "थ से क्या शुरू होता है?",
                                        "options": [
                                                  "🛍️",
                                                  "⛵"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🍽️ खोजें",
                                        "options": [
                                                  "🍋",
                                                  "✨",
                                                  "🍽️"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "थ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "नींबू",
                                                  "थाली"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "थ"
                    }
          },
          {
                    "L": "द",
                    "e": [
                              {
                                        "w": "दवात",
                                        "i": "🖋️"
                              },
                              {
                                        "w": "दर्पण",
                                        "i": "🪞"
                              },
                              {
                                        "w": "दरवाज़ा",
                                        "i": "🚪"
                              }
                    ],
                    "id": "vyanjan_17",
                    "letter": "द",
                    "word": "दवात",
                    "image": "🖋️",
                    "examples": [
                              {
                                        "word": "दवात",
                                        "image": "🖋️"
                              },
                              {
                                        "word": "दर्पण",
                                        "image": "🪞"
                              },
                              {
                                        "word": "दरवाज़ा",
                                        "image": "🚪"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "द"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "दवात",
                                                  "i": "🖋️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "द",
                                        "targetLower": "द",
                                        "grid": [
                                                  "ष",
                                                  "ष",
                                                  "द",
                                                  "ह",
                                                  "ग",
                                                  "द",
                                                  "द",
                                                  "द",
                                                  "छ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "द"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "षट्कोण",
                                        "targetImage": "💠",
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "दरवाज़ा",
                                                            "i": "🚪"
                                                  },
                                                  {
                                                            "w": "दर्पण",
                                                            "i": "🪞"
                                                  },
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "द",
                                        "lower": "द",
                                        "word": "दवात",
                                        "image": "🖋️"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "द"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "द"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🖋️"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "दवात",
                                                  "i": "🖋️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "द",
                                        "options": [
                                                  "द",
                                                  "ष",
                                                  "ह",
                                                  "ष"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "द",
                                        "options": [
                                                  "ष",
                                                  "ह"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "द खोजें",
                                        "options": [
                                                  "ह",
                                                  "द",
                                                  "ष"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🖋️ खोजें",
                                        "options": [
                                                  "🖋️",
                                                  "💠",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "द से क्या शुरू होता है?",
                                        "options": [
                                                  "🖋️",
                                                  "💠"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🖋️?",
                                        "options": [
                                                  "षट्कोण",
                                                  "दवात"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🪞 खोजें",
                                        "options": [
                                                  "🐝",
                                                  "🪞",
                                                  "✋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "द से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "दर्पण",
                                                  "षटपद"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "द से क्या शुरू होता है?",
                                        "options": [
                                                  "🪞",
                                                  "🐝"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🚪 खोजें",
                                        "options": [
                                                  "🚪",
                                                  "✨",
                                                  "💨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "द से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ष",
                                                  "दरवाज़ा"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "द"
                    }
          },
          {
                    "L": "ध",
                    "e": [
                              {
                                        "w": "धनुष",
                                        "i": "🏹"
                              },
                              {
                                        "w": "धागा",
                                        "i": "🧵"
                              },
                              {
                                        "w": "धूप",
                                        "i": "☀️"
                              }
                    ],
                    "id": "vyanjan_18",
                    "letter": "ध",
                    "word": "धनुष",
                    "image": "🏹",
                    "examples": [
                              {
                                        "word": "धनुष",
                                        "image": "🏹"
                              },
                              {
                                        "word": "धागा",
                                        "image": "🧵"
                              },
                              {
                                        "word": "धूप",
                                        "image": "☀️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ध"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "धनुष",
                                                  "i": "🏹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ध",
                                        "targetLower": "ध",
                                        "grid": [
                                                  "च",
                                                  "ध",
                                                  "ध",
                                                  "त्र",
                                                  "त्र",
                                                  "ध",
                                                  "ध",
                                                  "ल",
                                                  "ख"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ध"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "त्रिशूल",
                                        "targetImage": "🔱",
                                        "options": [
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "धागा",
                                                            "i": "🧵"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "धूप",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ध",
                                        "lower": "ध",
                                        "word": "धनुष",
                                        "image": "🏹"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ध"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ध"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🏹"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "धनुष",
                                                  "i": "🏹"
                                        },
                                        "options": [
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ध",
                                        "options": [
                                                  "ध",
                                                  "त्र",
                                                  "च",
                                                  "त्र"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ध",
                                        "options": [
                                                  "त्र",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ध खोजें",
                                        "options": [
                                                  "च",
                                                  "ध",
                                                  "त्र"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🏹 खोजें",
                                        "options": [
                                                  "🔱",
                                                  "🥄",
                                                  "🏹"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ध से क्या शुरू होता है?",
                                        "options": [
                                                  "🏹",
                                                  "🔱"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🏹?",
                                        "options": [
                                                  "धनुष",
                                                  "त्रिशूल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🧵 खोजें",
                                        "options": [
                                                  "🧵",
                                                  "🔺",
                                                  "🌙"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ध से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "त्रिभुज",
                                                  "धागा"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ध से क्या शुरू होता है?",
                                        "options": [
                                                  "🔺",
                                                  "🧵"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "☀️ खोजें",
                                        "options": [
                                                  "☀️",
                                                  "✨",
                                                  "🔑"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ध से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "धूप",
                                                  "त्र"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ध"
                    }
          },
          {
                    "L": "न",
                    "e": [
                              {
                                        "w": "नल",
                                        "i": "🚰"
                              },
                              {
                                        "w": "नाव",
                                        "i": "⛵"
                              },
                              {
                                        "w": "नींबू",
                                        "i": "🍋"
                              }
                    ],
                    "id": "vyanjan_19",
                    "letter": "न",
                    "word": "नल",
                    "image": "🚰",
                    "examples": [
                              {
                                        "word": "नल",
                                        "image": "🚰"
                              },
                              {
                                        "word": "नाव",
                                        "image": "⛵"
                              },
                              {
                                        "word": "नींबू",
                                        "image": "🍋"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "न"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "नल",
                                                  "i": "🚰"
                                        },
                                        "options": [
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  },
                                                  {
                                                            "w": "सेब",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "न",
                                        "targetLower": "न",
                                        "grid": [
                                                  "ज",
                                                  "ध",
                                                  "न",
                                                  "स",
                                                  "ज",
                                                  "स",
                                                  "न",
                                                  "न",
                                                  "न"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "न"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "जहाज़",
                                        "targetImage": "🚢",
                                        "options": [
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  },
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "नाव",
                                                            "i": "⛵"
                                                  },
                                                  {
                                                            "w": "नींबू",
                                                            "i": "🍋"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "न",
                                        "lower": "न",
                                        "word": "नल",
                                        "image": "🚰"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "न"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "न"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🚰"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "नल",
                                                  "i": "🚰"
                                        },
                                        "options": [
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  },
                                                  {
                                                            "w": "नल",
                                                            "i": "🚰"
                                                  },
                                                  {
                                                            "w": "सेब",
                                                            "i": "🍎"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "न",
                                        "options": [
                                                  "न",
                                                  "ज",
                                                  "स",
                                                  "ज"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "न",
                                        "options": [
                                                  "ज",
                                                  "स"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "न खोजें",
                                        "options": [
                                                  "ज",
                                                  "स",
                                                  "न"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🚰 खोजें",
                                        "options": [
                                                  "🚰",
                                                  "🍎",
                                                  "🚢"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "न से क्या शुरू होता है?",
                                        "options": [
                                                  "🚰",
                                                  "🚢"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🚰?",
                                        "options": [
                                                  "जहाज़",
                                                  "नल"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "⛵ खोजें",
                                        "options": [
                                                  "⛵",
                                                  "💧",
                                                  "☀️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "न से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "जल",
                                                  "नाव"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "न से क्या शुरू होता है?",
                                        "options": [
                                                  "⛵",
                                                  "💧"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🍋 खोजें",
                                        "options": [
                                                  "👞",
                                                  "🛣️",
                                                  "🍋"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "न से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "नींबू",
                                                  "जूता"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "न"
                    }
          },
          {
                    "L": "प",
                    "e": [
                              {
                                        "w": "पतंग",
                                        "i": "🪁"
                              },
                              {
                                        "w": "पत्ता",
                                        "i": "🍃"
                              },
                              {
                                        "w": "पपीता",
                                        "i": "🥭"
                              }
                    ],
                    "id": "vyanjan_20",
                    "letter": "प",
                    "word": "पतंग",
                    "image": "🪁",
                    "examples": [
                              {
                                        "word": "पतंग",
                                        "image": "🪁"
                              },
                              {
                                        "word": "पत्ता",
                                        "image": "🍃"
                              },
                              {
                                        "word": "पपीता",
                                        "image": "🥭"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "प"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "पतंग",
                                                  "i": "🪁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "प",
                                        "targetLower": "प",
                                        "grid": [
                                                  "प",
                                                  "प",
                                                  "फ",
                                                  "ङ",
                                                  "य",
                                                  "फ",
                                                  "क्ष",
                                                  "प",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "प"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "फल",
                                        "targetImage": "🍎",
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "पत्ता",
                                                            "i": "🍃"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "पपीता",
                                                            "i": "🥭"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "प",
                                        "lower": "प",
                                        "word": "पतंग",
                                        "image": "🪁"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "प"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "प"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪁"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "पतंग",
                                                  "i": "🪁"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "ङ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "प",
                                        "options": [
                                                  "प",
                                                  "फ",
                                                  "ङ",
                                                  "फ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "प",
                                        "options": [
                                                  "फ",
                                                  "ङ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "प खोजें",
                                        "options": [
                                                  "फ",
                                                  "ङ",
                                                  "प"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🪁 खोजें",
                                        "options": [
                                                  "🍎",
                                                  "✨",
                                                  "🪁"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "प से क्या शुरू होता है?",
                                        "options": [
                                                  "🍎",
                                                  "🪁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🪁?",
                                        "options": [
                                                  "फल",
                                                  "पतंग"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🍃 खोजें",
                                        "options": [
                                                  "✨",
                                                  "🌸",
                                                  "🍃"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "प से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "फूल",
                                                  "पत्ता"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "प से क्या शुरू होता है?",
                                        "options": [
                                                  "🍃",
                                                  "🌸"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🥭 खोजें",
                                        "options": [
                                                  "⚽",
                                                  "✨",
                                                  "🥭"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "प से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "पपीता",
                                                  "फुटबॉल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "प"
                    }
          },
          {
                    "L": "फ",
                    "e": [
                              {
                                        "w": "फल",
                                        "i": "🍎"
                              },
                              {
                                        "w": "फूल",
                                        "i": "🌸"
                              },
                              {
                                        "w": "फुटबॉल",
                                        "i": "⚽"
                              }
                    ],
                    "id": "vyanjan_21",
                    "letter": "फ",
                    "word": "फल",
                    "image": "🍎",
                    "examples": [
                              {
                                        "word": "फल",
                                        "image": "🍎"
                              },
                              {
                                        "word": "फूल",
                                        "image": "🌸"
                              },
                              {
                                        "word": "फुटबॉल",
                                        "image": "⚽"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "फ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "फल",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "छतरी",
                                                            "i": "☔"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "फ",
                                        "targetLower": "फ",
                                        "grid": [
                                                  "फ",
                                                  "फ",
                                                  "फ",
                                                  "भ",
                                                  "ट",
                                                  "फ",
                                                  "ट",
                                                  "छ",
                                                  "स"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "फ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "टमाटर",
                                        "targetImage": "🍅",
                                        "options": [
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "फुटबॉल",
                                                            "i": "⚽"
                                                  },
                                                  {
                                                            "w": "फूल",
                                                            "i": "🌸"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "फ",
                                        "lower": "फ",
                                        "word": "फल",
                                        "image": "🍎"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "फ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "फ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍎"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "फल",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "फल",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "टमाटर",
                                                            "i": "🍅"
                                                  },
                                                  {
                                                            "w": "छतरी",
                                                            "i": "☔"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "फ",
                                        "options": [
                                                  "फ",
                                                  "ट",
                                                  "छ",
                                                  "ट"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "फ",
                                        "options": [
                                                  "ट",
                                                  "छ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "फ खोजें",
                                        "options": [
                                                  "ट",
                                                  "फ",
                                                  "छ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🍎 खोजें",
                                        "options": [
                                                  "🍅",
                                                  "☔",
                                                  "🍎"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "फ से क्या शुरू होता है?",
                                        "options": [
                                                  "🍅",
                                                  "🍎"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🍎?",
                                        "options": [
                                                  "टमाटर",
                                                  "फल"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🌸 खोजें",
                                        "options": [
                                                  "🧺",
                                                  "🛖",
                                                  "🌸"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "फ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "फूल",
                                                  "टोकरी"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "फ से क्या शुरू होता है?",
                                        "options": [
                                                  "🧺",
                                                  "🌸"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "⚽ खोजें",
                                        "options": [
                                                  "🧢",
                                                  "🦯",
                                                  "⚽"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "फ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "टोपी",
                                                  "फुटबॉल"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "फ"
                    }
          },
          {
                    "L": "ब",
                    "e": [
                              {
                                        "w": "बत्तख",
                                        "i": "🦆"
                              },
                              {
                                        "w": "बकरी",
                                        "i": "🐐"
                              },
                              {
                                        "w": "बंदर",
                                        "i": "🐒"
                              }
                    ],
                    "id": "vyanjan_22",
                    "letter": "ब",
                    "word": "बत्तख",
                    "image": "🦆",
                    "examples": [
                              {
                                        "word": "बत्तख",
                                        "image": "🦆"
                              },
                              {
                                        "word": "बकरी",
                                        "image": "🐐"
                              },
                              {
                                        "word": "बंदर",
                                        "image": "🐒"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ब"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "बत्तख",
                                                  "i": "🦆"
                                        },
                                        "options": [
                                                  {
                                                            "w": "बत्तख",
                                                            "i": "🦆"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ब",
                                        "targetLower": "ब",
                                        "grid": [
                                                  "ब",
                                                  "ब",
                                                  "ब",
                                                  "ज्ञ",
                                                  "त",
                                                  "ब",
                                                  "झ",
                                                  "झ",
                                                  "त"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ब"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "झंडा",
                                        "targetImage": "🚩",
                                        "options": [
                                                  {
                                                            "w": "बत्तख",
                                                            "i": "🦆"
                                                  },
                                                  {
                                                            "w": "बंदर",
                                                            "i": "🐒"
                                                  },
                                                  {
                                                            "w": "बकरी",
                                                            "i": "🐐"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ब",
                                        "lower": "ब",
                                        "word": "बत्तख",
                                        "image": "🦆"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ब"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ब"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦆"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "बत्तख",
                                                  "i": "🦆"
                                        },
                                        "options": [
                                                  {
                                                            "w": "बत्तख",
                                                            "i": "🦆"
                                                  },
                                                  {
                                                            "w": "झंडा",
                                                            "i": "🚩"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ब",
                                        "options": [
                                                  "ब",
                                                  "झ",
                                                  "ज्ञ",
                                                  "झ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ब",
                                        "options": [
                                                  "झ",
                                                  "ज्ञ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ब खोजें",
                                        "options": [
                                                  "ब",
                                                  "ज्ञ",
                                                  "झ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🦆 खोजें",
                                        "options": [
                                                  "🦆",
                                                  "🧠",
                                                  "🚩"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ब से क्या शुरू होता है?",
                                        "options": [
                                                  "🦆",
                                                  "🚩"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🦆?",
                                        "options": [
                                                  "बत्तख",
                                                  "झंडा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🐐 खोजें",
                                        "options": [
                                                  "🐐",
                                                  "🏞️",
                                                  "📚"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ब से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "बकरी",
                                                  "झरना"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ब से क्या शुरू होता है?",
                                        "options": [
                                                  "🏞️",
                                                  "🐐"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐒 खोजें",
                                        "options": [
                                                  "🐒",
                                                  "🛝",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ब से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "बंदर",
                                                  "झूला"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ब"
                    }
          },
          {
                    "L": "भ",
                    "e": [
                              {
                                        "w": "भालू",
                                        "i": "🐻"
                              },
                              {
                                        "w": "भवन",
                                        "i": "🏛️"
                              },
                              {
                                        "w": "भेड़",
                                        "i": "🐑"
                              }
                    ],
                    "id": "vyanjan_23",
                    "letter": "भ",
                    "word": "भालू",
                    "image": "🐻",
                    "examples": [
                              {
                                        "word": "भालू",
                                        "image": "🐻"
                              },
                              {
                                        "word": "भवन",
                                        "image": "🏛️"
                              },
                              {
                                        "word": "भेड़",
                                        "image": "🐑"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "भ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "भालू",
                                                  "i": "🐻"
                                        },
                                        "options": [
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "तरबूज़",
                                                            "i": "🍉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "भ",
                                        "targetLower": "भ",
                                        "grid": [
                                                  "भ",
                                                  "भ",
                                                  "भ",
                                                  "क",
                                                  "भ",
                                                  "द",
                                                  "क",
                                                  "र",
                                                  "त"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "भ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "कबूतर",
                                        "targetImage": "🕊️",
                                        "options": [
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "भवन",
                                                            "i": "🏛️"
                                                  },
                                                  {
                                                            "w": "भेड़",
                                                            "i": "🐑"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "भ",
                                        "lower": "भ",
                                        "word": "भालू",
                                        "image": "🐻"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "भ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "भ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐻"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "भालू",
                                                  "i": "🐻"
                                        },
                                        "options": [
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "कबूतर",
                                                            "i": "🕊️"
                                                  },
                                                  {
                                                            "w": "तरबूज़",
                                                            "i": "🍉"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "भ",
                                        "options": [
                                                  "भ",
                                                  "क",
                                                  "त",
                                                  "क"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "भ",
                                        "options": [
                                                  "क",
                                                  "त"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "भ खोजें",
                                        "options": [
                                                  "त",
                                                  "क",
                                                  "भ"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🐻 खोजें",
                                        "options": [
                                                  "🕊️",
                                                  "🐻",
                                                  "🍉"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "भ से क्या शुरू होता है?",
                                        "options": [
                                                  "🕊️",
                                                  "🐻"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🐻?",
                                        "options": [
                                                  "कबूतर",
                                                  "भालू"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🏛️ खोजें",
                                        "options": [
                                                  "🪷",
                                                  "🏛️",
                                                  "🦋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "भ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "भवन",
                                                  "कमल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "भ से क्या शुरू होता है?",
                                        "options": [
                                                  "🪷",
                                                  "🏛️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐑 खोजें",
                                        "options": [
                                                  "🐑",
                                                  "⭐",
                                                  "🖊️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "भ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "भेड़",
                                                  "कलम"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "भ"
                    }
          },
          {
                    "L": "म",
                    "e": [
                              {
                                        "w": "मछली",
                                        "i": "🐟"
                              },
                              {
                                        "w": "मोर",
                                        "i": "🦚"
                              },
                              {
                                        "w": "मटर",
                                        "i": "🫛"
                              }
                    ],
                    "id": "vyanjan_24",
                    "letter": "म",
                    "word": "मछली",
                    "image": "🐟",
                    "examples": [
                              {
                                        "word": "मछली",
                                        "image": "🐟"
                              },
                              {
                                        "word": "मोर",
                                        "image": "🦚"
                              },
                              {
                                        "word": "मटर",
                                        "image": "🫛"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "म"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "मछली",
                                                  "i": "🐟"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "मछली",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "म",
                                        "targetLower": "म",
                                        "grid": [
                                                  "म",
                                                  "म",
                                                  "ढ",
                                                  "ढ",
                                                  "ज्ञ",
                                                  "प",
                                                  "न",
                                                  "म",
                                                  "म"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "म"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ढोलक",
                                        "targetImage": "🪘",
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "मोर",
                                                            "i": "🦚"
                                                  },
                                                  {
                                                            "w": "मछली",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "मटर",
                                                            "i": "🫛"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "म",
                                        "lower": "म",
                                        "word": "मछली",
                                        "image": "🐟"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "म"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "म"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐟"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "मछली",
                                                  "i": "🐟"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "मछली",
                                                            "i": "🐟"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "म",
                                        "options": [
                                                  "म",
                                                  "ढ",
                                                  "ज्ञ",
                                                  "ढ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "म",
                                        "options": [
                                                  "ढ",
                                                  "ज्ञ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "म खोजें",
                                        "options": [
                                                  "म",
                                                  "ढ",
                                                  "ज्ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🐟 खोजें",
                                        "options": [
                                                  "🧠",
                                                  "🪘",
                                                  "🐟"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "म से क्या शुरू होता है?",
                                        "options": [
                                                  "🐟",
                                                  "🪘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🐟?",
                                        "options": [
                                                  "ढोलक",
                                                  "मछली"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🦚 खोजें",
                                        "options": [
                                                  "🦚",
                                                  "🥘",
                                                  "📚"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "म से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ढक्कन",
                                                  "मोर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "म से क्या शुरू होता है?",
                                        "options": [
                                                  "🥘",
                                                  "🦚"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🫛 खोजें",
                                        "options": [
                                                  "🛡️",
                                                  "✨",
                                                  "🫛"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "म से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ढाल",
                                                  "मटर"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "म"
                    }
          },
          {
                    "L": "य",
                    "e": [
                              {
                                        "w": "यज्ञ",
                                        "i": "🔥"
                              },
                              {
                                        "w": "यान",
                                        "i": "🚀"
                              },
                              {
                                        "w": "योगा",
                                        "i": "🧘"
                              }
                    ],
                    "id": "vyanjan_25",
                    "letter": "य",
                    "word": "यज्ञ",
                    "image": "🔥",
                    "examples": [
                              {
                                        "word": "यज्ञ",
                                        "image": "🔥"
                              },
                              {
                                        "word": "यान",
                                        "image": "🚀"
                              },
                              {
                                        "word": "योगा",
                                        "image": "🧘"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "य"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "यज्ञ",
                                                  "i": "🔥"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "य",
                                        "targetLower": "य",
                                        "grid": [
                                                  "ढ",
                                                  "ल",
                                                  "य",
                                                  "य",
                                                  "ध",
                                                  "य",
                                                  "ल",
                                                  "य",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "य"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "लट्टू",
                                        "targetImage": "🪀",
                                        "options": [
                                                  {
                                                            "w": "योगा",
                                                            "i": "🧘"
                                                  },
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "यान",
                                                            "i": "🚀"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "य",
                                        "lower": "य",
                                        "word": "यज्ञ",
                                        "image": "🔥"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "य"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "य"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🔥"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "यज्ञ",
                                                  "i": "🔥"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ढोलक",
                                                            "i": "🪘"
                                                  },
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "य",
                                        "options": [
                                                  "य",
                                                  "ल",
                                                  "ढ",
                                                  "ल"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "य",
                                        "options": [
                                                  "ल",
                                                  "ढ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "य खोजें",
                                        "options": [
                                                  "ल",
                                                  "य",
                                                  "ढ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🔥 खोजें",
                                        "options": [
                                                  "🪘",
                                                  "🪀",
                                                  "🔥"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "य से क्या शुरू होता है?",
                                        "options": [
                                                  "🪀",
                                                  "🔥"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🔥?",
                                        "options": [
                                                  "यज्ञ",
                                                  "लट्टू"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🚀 खोजें",
                                        "options": [
                                                  "👦",
                                                  "🚀",
                                                  "🥘"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "य से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "लड़का",
                                                  "यान"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "य से क्या शुरू होता है?",
                                        "options": [
                                                  "🚀",
                                                  "👦"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🧘 खोजें",
                                        "options": [
                                                  "🧄",
                                                  "🧘",
                                                  "🛡️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "य से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "योगा",
                                                  "लहसुन"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "य"
                    }
          },
          {
                    "L": "र",
                    "e": [
                              {
                                        "w": "रथ",
                                        "i": "🛷"
                              },
                              {
                                        "w": "रस्सी",
                                        "i": "🪢"
                              },
                              {
                                        "w": "राजा",
                                        "i": "👑"
                              }
                    ],
                    "id": "vyanjan_26",
                    "letter": "र",
                    "word": "रथ",
                    "image": "🛷",
                    "examples": [
                              {
                                        "word": "रथ",
                                        "image": "🛷"
                              },
                              {
                                        "word": "रस्सी",
                                        "image": "🪢"
                              },
                              {
                                        "word": "राजा",
                                        "image": "👑"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "र"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "रथ",
                                                  "i": "🛷"
                                        },
                                        "options": [
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "र",
                                        "targetLower": "र",
                                        "grid": [
                                                  "च",
                                                  "त्र",
                                                  "र",
                                                  "त्र",
                                                  "ध",
                                                  "र",
                                                  "र",
                                                  "ध",
                                                  "र"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "र"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "त्रिशूल",
                                        "targetImage": "🔱",
                                        "options": [
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "राजा",
                                                            "i": "👑"
                                                  },
                                                  {
                                                            "w": "रस्सी",
                                                            "i": "🪢"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "र",
                                        "lower": "र",
                                        "word": "रथ",
                                        "image": "🛷"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "र"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "र"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🛷"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "रथ",
                                                  "i": "🛷"
                                        },
                                        "options": [
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  },
                                                  {
                                                            "w": "चम्मच",
                                                            "i": "🥄"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "र",
                                        "options": [
                                                  "र",
                                                  "त्र",
                                                  "च",
                                                  "त्र"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "र",
                                        "options": [
                                                  "त्र",
                                                  "च"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "र खोजें",
                                        "options": [
                                                  "त्र",
                                                  "र",
                                                  "च"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🛷 खोजें",
                                        "options": [
                                                  "🔱",
                                                  "🛷",
                                                  "🥄"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "र से क्या शुरू होता है?",
                                        "options": [
                                                  "🔱",
                                                  "🛷"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🛷?",
                                        "options": [
                                                  "रथ",
                                                  "त्रिशूल"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🪢 खोजें",
                                        "options": [
                                                  "🌙",
                                                  "🪢",
                                                  "🔺"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "र से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "रस्सी",
                                                  "त्रिभुज"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "र से क्या शुरू होता है?",
                                        "options": [
                                                  "🪢",
                                                  "🔺"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "👑 खोजें",
                                        "options": [
                                                  "✨",
                                                  "👑",
                                                  "🔑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "र से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "राजा",
                                                  "त्र"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "र"
                    }
          },
          {
                    "L": "ल",
                    "e": [
                              {
                                        "w": "लट्टू",
                                        "i": "🪀"
                              },
                              {
                                        "w": "लड़का",
                                        "i": "👦"
                              },
                              {
                                        "w": "लहसुन",
                                        "i": "🧄"
                              }
                    ],
                    "id": "vyanjan_27",
                    "letter": "ल",
                    "word": "लट्टू",
                    "image": "🪀",
                    "examples": [
                              {
                                        "word": "लट्टू",
                                        "image": "🪀"
                              },
                              {
                                        "word": "लड़का",
                                        "image": "👦"
                              },
                              {
                                        "word": "लहसुन",
                                        "image": "🧄"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ल"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "लट्टू",
                                                  "i": "🪀"
                                        },
                                        "options": [
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ल",
                                        "targetLower": "ल",
                                        "grid": [
                                                  "फ",
                                                  "ह",
                                                  "ल",
                                                  "त्र",
                                                  "ल",
                                                  "ह",
                                                  "ल",
                                                  "ल",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ल"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "हाथी",
                                        "targetImage": "🐘",
                                        "options": [
                                                  {
                                                            "w": "लड़का",
                                                            "i": "👦"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "लहसुन",
                                                            "i": "🧄"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ल",
                                        "lower": "ल",
                                        "word": "लट्टू",
                                        "image": "🪀"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ल"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ल"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🪀"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "लट्टू",
                                                  "i": "🪀"
                                        },
                                        "options": [
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "लट्टू",
                                                            "i": "🪀"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ल",
                                        "options": [
                                                  "ल",
                                                  "ह",
                                                  "त्र",
                                                  "ह"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ल",
                                        "options": [
                                                  "ह",
                                                  "त्र"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ल खोजें",
                                        "options": [
                                                  "त्र",
                                                  "ह",
                                                  "ल"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🪀 खोजें",
                                        "options": [
                                                  "🪀",
                                                  "🔱",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ल से क्या शुरू होता है?",
                                        "options": [
                                                  "🪀",
                                                  "🐘"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🪀?",
                                        "options": [
                                                  "लट्टू",
                                                  "हाथी"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "👦 खोजें",
                                        "options": [
                                                  "✋",
                                                  "🔺",
                                                  "👦"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ल से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "हाथ",
                                                  "लड़का"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ल से क्या शुरू होता है?",
                                        "options": [
                                                  "✋",
                                                  "👦"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🧄 खोजें",
                                        "options": [
                                                  "💨",
                                                  "✨",
                                                  "🧄"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ल से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "लहसुन",
                                                  "हवा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ल"
                    }
          },
          {
                    "L": "व",
                    "e": [
                              {
                                        "w": "वक",
                                        "i": "🦢"
                              },
                              {
                                        "w": "वन",
                                        "i": "🌲"
                              },
                              {
                                        "w": "वर्षा",
                                        "i": "🌧️"
                              }
                    ],
                    "id": "vyanjan_28",
                    "letter": "व",
                    "word": "वक",
                    "image": "🦢",
                    "examples": [
                              {
                                        "word": "वक",
                                        "image": "🦢"
                              },
                              {
                                        "word": "वन",
                                        "image": "🌲"
                              },
                              {
                                        "word": "वर्षा",
                                        "image": "🌧️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "व"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "वक",
                                                  "i": "🦢"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "वक",
                                                            "i": "🦢"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "व",
                                        "targetLower": "व",
                                        "grid": [
                                                  "व",
                                                  "व",
                                                  "व",
                                                  "त",
                                                  "द",
                                                  "व",
                                                  "द",
                                                  "ख",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "व"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "दवात",
                                        "targetImage": "🖋️",
                                        "options": [
                                                  {
                                                            "w": "वक",
                                                            "i": "🦢"
                                                  },
                                                  {
                                                            "w": "वन",
                                                            "i": "🌲"
                                                  },
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "वर्षा",
                                                            "i": "🌧️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "व",
                                        "lower": "व",
                                        "word": "वक",
                                        "image": "🦢"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "व"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "व"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🦢"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "वक",
                                                  "i": "🦢"
                                        },
                                        "options": [
                                                  {
                                                            "w": "दवात",
                                                            "i": "🖋️"
                                                  },
                                                  {
                                                            "w": "वक",
                                                            "i": "🦢"
                                                  },
                                                  {
                                                            "w": "खरगोश",
                                                            "i": "🐇"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "व",
                                        "options": [
                                                  "व",
                                                  "द",
                                                  "ख",
                                                  "द"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "व",
                                        "options": [
                                                  "द",
                                                  "ख"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "व खोजें",
                                        "options": [
                                                  "द",
                                                  "व",
                                                  "ख"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🦢 खोजें",
                                        "options": [
                                                  "🦢",
                                                  "🖋️",
                                                  "🐇"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "व से क्या शुरू होता है?",
                                        "options": [
                                                  "🖋️",
                                                  "🦢"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🦢?",
                                        "options": [
                                                  "वक",
                                                  "दवात"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🌲 खोजें",
                                        "options": [
                                                  "🪞",
                                                  "🪟",
                                                  "🌲"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "व से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "दर्पण",
                                                  "वन"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "व से क्या शुरू होता है?",
                                        "options": [
                                                  "🪞",
                                                  "🌲"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🌧️ खोजें",
                                        "options": [
                                                  "🚪",
                                                  "🧸",
                                                  "🌧️"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "व से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "वर्षा",
                                                  "दरवाज़ा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "व"
                    }
          },
          {
                    "L": "श",
                    "e": [
                              {
                                        "w": "शलजम",
                                        "i": "🧅"
                              },
                              {
                                        "w": "शंख",
                                        "i": "🐚"
                              },
                              {
                                        "w": "शेर",
                                        "i": "🦁"
                              }
                    ],
                    "id": "vyanjan_29",
                    "letter": "श",
                    "word": "शलजम",
                    "image": "🧅",
                    "examples": [
                              {
                                        "word": "शलजम",
                                        "image": "🧅"
                              },
                              {
                                        "word": "शंख",
                                        "image": "🐚"
                              },
                              {
                                        "word": "शेर",
                                        "image": "🦁"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "श"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "शलजम",
                                                  "i": "🧅"
                                        },
                                        "options": [
                                                  {
                                                            "w": "शलजम",
                                                            "i": "🧅"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "श",
                                        "targetLower": "श",
                                        "grid": [
                                                  "ज",
                                                  "ड",
                                                  "श",
                                                  "श",
                                                  "श",
                                                  "श",
                                                  "ध",
                                                  "ठ",
                                                  "ध"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "श"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "धनुष",
                                        "targetImage": "🏹",
                                        "options": [
                                                  {
                                                            "w": "शेर",
                                                            "i": "🦁"
                                                  },
                                                  {
                                                            "w": "शंख",
                                                            "i": "🐚"
                                                  },
                                                  {
                                                            "w": "शलजम",
                                                            "i": "🧅"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "श",
                                        "lower": "श",
                                        "word": "शलजम",
                                        "image": "🧅"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "श"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "श"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🧅"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "शलजम",
                                                  "i": "🧅"
                                        },
                                        "options": [
                                                  {
                                                            "w": "शलजम",
                                                            "i": "🧅"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "जहाज़",
                                                            "i": "🚢"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "श",
                                        "options": [
                                                  "श",
                                                  "ध",
                                                  "ज",
                                                  "ध"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "श",
                                        "options": [
                                                  "ध",
                                                  "ज"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "श खोजें",
                                        "options": [
                                                  "ज",
                                                  "ध",
                                                  "श"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🧅 खोजें",
                                        "options": [
                                                  "🏹",
                                                  "🚢",
                                                  "🧅"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "श से क्या शुरू होता है?",
                                        "options": [
                                                  "🏹",
                                                  "🧅"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🧅?",
                                        "options": [
                                                  "शलजम",
                                                  "धनुष"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🐚 खोजें",
                                        "options": [
                                                  "💧",
                                                  "🧵",
                                                  "🐚"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "श से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "धागा",
                                                  "शंख"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "श से क्या शुरू होता है?",
                                        "options": [
                                                  "🧵",
                                                  "🐚"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🦁 खोजें",
                                        "options": [
                                                  "☀️",
                                                  "🦁",
                                                  "👞"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "श से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "शेर",
                                                  "धूप"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "श"
                    }
          },
          {
                    "L": "ष",
                    "e": [
                              {
                                        "w": "षट्कोण",
                                        "i": "💠"
                              },
                              {
                                        "w": "षटपद",
                                        "i": "🐝"
                              },
                              {
                                        "w": "ष",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_30",
                    "letter": "ष",
                    "word": "षट्कोण",
                    "image": "💠",
                    "examples": [
                              {
                                        "word": "षट्कोण",
                                        "image": "💠"
                              },
                              {
                                        "word": "षटपद",
                                        "image": "🐝"
                              },
                              {
                                        "word": "ष",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ष"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "षट्कोण",
                                                  "i": "💠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ष",
                                        "targetLower": "ष",
                                        "grid": [
                                                  "श",
                                                  "ष",
                                                  "ञ",
                                                  "ध",
                                                  "ञ",
                                                  "ष",
                                                  "ष",
                                                  "ष",
                                                  "ष"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ष"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "ञ",
                                        "targetImage": "✨",
                                        "options": [
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  },
                                                  {
                                                            "w": "षटपद",
                                                            "i": "🐝"
                                                  },
                                                  {
                                                            "w": "ष",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ष",
                                        "lower": "ष",
                                        "word": "षट्कोण",
                                        "image": "💠"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ष"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ष"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "💠"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "षट्कोण",
                                                  "i": "💠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "धनुष",
                                                            "i": "🏹"
                                                  },
                                                  {
                                                            "w": "षट्कोण",
                                                            "i": "💠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ष",
                                        "options": [
                                                  "ष",
                                                  "ञ",
                                                  "ध",
                                                  "ञ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ष",
                                        "options": [
                                                  "ञ",
                                                  "ध"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ष खोजें",
                                        "options": [
                                                  "ञ",
                                                  "ष",
                                                  "ध"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 💠 खोजें",
                                        "options": [
                                                  "💠",
                                                  "✨",
                                                  "🏹"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ष से क्या शुरू होता है?",
                                        "options": [
                                                  "💠",
                                                  "✨"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 💠?",
                                        "options": [
                                                  "ञ",
                                                  "षट्कोण"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🐝 खोजें",
                                        "options": [
                                                  "✨",
                                                  "🧵",
                                                  "🐝"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ष से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ञ",
                                                  "षटपद"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ष से क्या शुरू होता है?",
                                        "options": [
                                                  "✨",
                                                  "🐝"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "✨",
                                                  "☀️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ष से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ञ",
                                                  "ष"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ष"
                    }
          },
          {
                    "L": "स",
                    "e": [
                              {
                                        "w": "सेब",
                                        "i": "🍎"
                              },
                              {
                                        "w": "सूरज",
                                        "i": "☀️"
                              },
                              {
                                        "w": "सड़क",
                                        "i": "🛣️"
                              }
                    ],
                    "id": "vyanjan_31",
                    "letter": "स",
                    "word": "सेब",
                    "image": "🍎",
                    "examples": [
                              {
                                        "word": "सेब",
                                        "image": "🍎"
                              },
                              {
                                        "word": "सूरज",
                                        "image": "☀️"
                              },
                              {
                                        "word": "सड़क",
                                        "image": "🛣️"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "स"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "सेब",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "शलजम",
                                                            "i": "🧅"
                                                  },
                                                  {
                                                            "w": "सेब",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "स",
                                        "targetLower": "स",
                                        "grid": [
                                                  "प",
                                                  "त्र",
                                                  "न",
                                                  "स",
                                                  "स",
                                                  "श",
                                                  "स",
                                                  "स",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "स"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "पतंग",
                                        "targetImage": "🪁",
                                        "options": [
                                                  {
                                                            "w": "सड़क",
                                                            "i": "🛣️"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "सेब",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "सूरज",
                                                            "i": "☀️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "स",
                                        "lower": "स",
                                        "word": "सेब",
                                        "image": "🍎"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "स"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "स"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🍎"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "सेब",
                                                  "i": "🍎"
                                        },
                                        "options": [
                                                  {
                                                            "w": "शलजम",
                                                            "i": "🧅"
                                                  },
                                                  {
                                                            "w": "सेब",
                                                            "i": "🍎"
                                                  },
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "स",
                                        "options": [
                                                  "स",
                                                  "प",
                                                  "श",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "स",
                                        "options": [
                                                  "प",
                                                  "श"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "स खोजें",
                                        "options": [
                                                  "स",
                                                  "प",
                                                  "श"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "चित्र 🍎 खोजें",
                                        "options": [
                                                  "🍎",
                                                  "🪁",
                                                  "🧅"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "स से क्या शुरू होता है?",
                                        "options": [
                                                  "🍎",
                                                  "🪁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🍎?",
                                        "options": [
                                                  "पतंग",
                                                  "सेब"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "☀️ खोजें",
                                        "options": [
                                                  "🐚",
                                                  "🍃",
                                                  "☀️"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "स से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "पत्ता",
                                                  "सूरज"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "स से क्या शुरू होता है?",
                                        "options": [
                                                  "🍃",
                                                  "☀️"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🛣️ खोजें",
                                        "options": [
                                                  "🥭",
                                                  "🛣️",
                                                  "🦁"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "स से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "पपीता",
                                                  "सड़क"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "स"
                    }
          },
          {
                    "L": "ह",
                    "e": [
                              {
                                        "w": "हाथी",
                                        "i": "🐘"
                              },
                              {
                                        "w": "हाथ",
                                        "i": "✋"
                              },
                              {
                                        "w": "हवा",
                                        "i": "💨"
                              }
                    ],
                    "id": "vyanjan_32",
                    "letter": "ह",
                    "word": "हाथी",
                    "image": "🐘",
                    "examples": [
                              {
                                        "word": "हाथी",
                                        "image": "🐘"
                              },
                              {
                                        "word": "हाथ",
                                        "image": "✋"
                              },
                              {
                                        "word": "हवा",
                                        "image": "💨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ह"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "हाथी",
                                                  "i": "🐘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ह",
                                        "targetLower": "ह",
                                        "grid": [
                                                  "प",
                                                  "ह",
                                                  "ह",
                                                  "प",
                                                  "ह",
                                                  "ह",
                                                  "प",
                                                  "क्ष",
                                                  "य"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ह"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "पतंग",
                                        "targetImage": "🪁",
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "हाथ",
                                                            "i": "✋"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "हवा",
                                                            "i": "💨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ह",
                                        "lower": "ह",
                                        "word": "हाथी",
                                        "image": "🐘"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ह"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ह"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🐘"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "हाथी",
                                                  "i": "🐘"
                                        },
                                        "options": [
                                                  {
                                                            "w": "पतंग",
                                                            "i": "🪁"
                                                  },
                                                  {
                                                            "w": "हाथी",
                                                            "i": "🐘"
                                                  },
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ह",
                                        "options": [
                                                  "ह",
                                                  "प",
                                                  "क्ष",
                                                  "प"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ह",
                                        "options": [
                                                  "प",
                                                  "क्ष"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ह खोजें",
                                        "options": [
                                                  "क्ष",
                                                  "प",
                                                  "ह"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🐘 खोजें",
                                        "options": [
                                                  "🐘",
                                                  "🪁",
                                                  "⚔️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ह से क्या शुरू होता है?",
                                        "options": [
                                                  "🐘",
                                                  "🪁"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🐘?",
                                        "options": [
                                                  "हाथी",
                                                  "पतंग"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✋ खोजें",
                                        "options": [
                                                  "🍃",
                                                  "✋",
                                                  "🙏"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ह से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "पत्ता",
                                                  "हाथ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ह से क्या शुरू होता है?",
                                        "options": [
                                                  "🍃",
                                                  "✋"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "💨 खोजें",
                                        "options": [
                                                  "🥭",
                                                  "✨",
                                                  "💨"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "ह से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "हवा",
                                                  "पपीता"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ह"
                    }
          },
          {
                    "L": "क्ष",
                    "e": [
                              {
                                        "w": "क्षत्रिय",
                                        "i": "⚔️"
                              },
                              {
                                        "w": "क्षमा",
                                        "i": "🙏"
                              },
                              {
                                        "w": "क्ष",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_33",
                    "letter": "क्ष",
                    "word": "क्षत्रिय",
                    "image": "⚔️",
                    "examples": [
                              {
                                        "word": "क्षत्रिय",
                                        "image": "⚔️"
                              },
                              {
                                        "word": "क्षमा",
                                        "image": "🙏"
                              },
                              {
                                        "word": "क्ष",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "क्ष"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "क्षत्रिय",
                                                  "i": "⚔️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  },
                                                  {
                                                            "w": "बत्तख",
                                                            "i": "🦆"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "क्ष",
                                        "targetLower": "क्ष",
                                        "grid": [
                                                  "क्ष",
                                                  "क्ष",
                                                  "ष",
                                                  "क्ष",
                                                  "र",
                                                  "ल",
                                                  "र",
                                                  "क्ष",
                                                  "ब"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "क्ष"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "रथ",
                                        "targetImage": "🛷",
                                        "options": [
                                                  {
                                                            "w": "क्षमा",
                                                            "i": "🙏"
                                                  },
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  },
                                                  {
                                                            "w": "क्ष",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "क्ष",
                                        "lower": "क्ष",
                                        "word": "क्षत्रिय",
                                        "image": "⚔️"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "क्ष"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "क्ष"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "⚔️"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "क्षत्रिय",
                                                  "i": "⚔️"
                                        },
                                        "options": [
                                                  {
                                                            "w": "क्षत्रिय",
                                                            "i": "⚔️"
                                                  },
                                                  {
                                                            "w": "रथ",
                                                            "i": "🛷"
                                                  },
                                                  {
                                                            "w": "बत्तख",
                                                            "i": "🦆"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "क्ष",
                                        "options": [
                                                  "क्ष",
                                                  "र",
                                                  "ब",
                                                  "र"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "क्ष",
                                        "options": [
                                                  "र",
                                                  "ब"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "क्ष खोजें",
                                        "options": [
                                                  "र",
                                                  "ब",
                                                  "क्ष"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र ⚔️ खोजें",
                                        "options": [
                                                  "🛷",
                                                  "🦆",
                                                  "⚔️"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "क्ष से क्या शुरू होता है?",
                                        "options": [
                                                  "⚔️",
                                                  "🛷"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है ⚔️?",
                                        "options": [
                                                  "रथ",
                                                  "क्षत्रिय"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "🙏 खोजें",
                                        "options": [
                                                  "🪢",
                                                  "🙏",
                                                  "🐐"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "क्ष से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "क्षमा",
                                                  "रस्सी"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "क्ष से क्या शुरू होता है?",
                                        "options": [
                                                  "🙏",
                                                  "🪢"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "✨",
                                                  "👑",
                                                  "🐒"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "क्ष से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "क्ष",
                                                  "राजा"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "क्ष"
                    }
          },
          {
                    "L": "त्र",
                    "e": [
                              {
                                        "w": "त्रिशूल",
                                        "i": "🔱"
                              },
                              {
                                        "w": "त्रिभुज",
                                        "i": "🔺"
                              },
                              {
                                        "w": "त्र",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_34",
                    "letter": "त्र",
                    "word": "त्रिशूल",
                    "image": "🔱",
                    "examples": [
                              {
                                        "word": "त्रिशूल",
                                        "image": "🔱"
                              },
                              {
                                        "word": "त्रिभुज",
                                        "image": "🔺"
                              },
                              {
                                        "word": "त्र",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "त्र"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "त्रिशूल",
                                                  "i": "🔱"
                                        },
                                        "options": [
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "त्र",
                                        "targetLower": "त्र",
                                        "grid": [
                                                  "त्र",
                                                  "त्र",
                                                  "त्र",
                                                  "य",
                                                  "भ",
                                                  "य",
                                                  "ठ",
                                                  "त्र",
                                                  "त्र"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "त्र"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "यज्ञ",
                                        "targetImage": "🔥",
                                        "options": [
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  },
                                                  {
                                                            "w": "त्रिभुज",
                                                            "i": "🔺"
                                                  },
                                                  {
                                                            "w": "त्र",
                                                            "i": "✨"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "त्र",
                                        "lower": "त्र",
                                        "word": "त्रिशूल",
                                        "image": "🔱"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "त्र"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "त्र"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🔱"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "त्रिशूल",
                                                  "i": "🔱"
                                        },
                                        "options": [
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "त्रिशूल",
                                                            "i": "🔱"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "त्र",
                                        "options": [
                                                  "त्र",
                                                  "य",
                                                  "भ",
                                                  "य"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "त्र",
                                        "options": [
                                                  "य",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "त्र खोजें",
                                        "options": [
                                                  "य",
                                                  "भ",
                                                  "त्र"
                                        ],
                                        "answer": 2
                              },
                              {
                                        "question": "चित्र 🔱 खोजें",
                                        "options": [
                                                  "🔱",
                                                  "🔥",
                                                  "🐻"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "त्र से क्या शुरू होता है?",
                                        "options": [
                                                  "🔥",
                                                  "🔱"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "यह क्या है 🔱?",
                                        "options": [
                                                  "त्रिशूल",
                                                  "यज्ञ"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "🔺 खोजें",
                                        "options": [
                                                  "🔺",
                                                  "🚀",
                                                  "🏛️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "त्र से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "यान",
                                                  "त्रिभुज"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "त्र से क्या शुरू होता है?",
                                        "options": [
                                                  "🔺",
                                                  "🚀"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "🧘",
                                                  "✨",
                                                  "🐑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "त्र से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "योगा",
                                                  "त्र"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "त्र"
                    }
          },
          {
                    "L": "ज्ञ",
                    "e": [
                              {
                                        "w": "ज्ञानी",
                                        "i": "🧠"
                              },
                              {
                                        "w": "ज्ञान",
                                        "i": "📚"
                              },
                              {
                                        "w": "ज्ञ",
                                        "i": "✨"
                              }
                    ],
                    "id": "vyanjan_35",
                    "letter": "ज्ञ",
                    "word": "ज्ञानी",
                    "image": "🧠",
                    "examples": [
                              {
                                        "word": "ज्ञानी",
                                        "image": "🧠"
                              },
                              {
                                        "word": "ज्ञान",
                                        "image": "📚"
                              },
                              {
                                        "word": "ज्ञ",
                                        "image": "✨"
                              }
                    ],
                    "trace": true,
                    "practice": [
                              {
                                        "type": "trace",
                                        "target": "ज्ञ"
                              },
                              {
                                        "type": "find-picture",
                                        "target": {
                                                  "w": "ज्ञानी",
                                                  "i": "🧠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "find-letter",
                                        "target": "ज्ञ",
                                        "targetLower": "ज्ञ",
                                        "grid": [
                                                  "य",
                                                  "ज्ञ",
                                                  "ष",
                                                  "भ",
                                                  "ज्ञ",
                                                  "भ",
                                                  "ज्ञ",
                                                  "न",
                                                  "ज्ञ"
                                        ]
                              },
                              {
                                        "type": "pop-balloon",
                                        "target": "ज्ञ"
                              },
                              {
                                        "type": "odd-one-out",
                                        "targetLabel": "भालू",
                                        "targetImage": "🐻",
                                        "options": [
                                                  {
                                                            "w": "ज्ञ",
                                                            "i": "✨"
                                                  },
                                                  {
                                                            "w": "ज्ञान",
                                                            "i": "📚"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  }
                                        ]
                              },
                              {
                                        "type": "memory-match",
                                        "upper": "ज्ञ",
                                        "lower": "ज्ञ",
                                        "word": "ज्ञानी",
                                        "image": "🧠"
                              },
                              {
                                        "type": "feed-monkey",
                                        "target": "ज्ञ"
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "games": [
                              {
                                        "type": "magic-hats",
                                        "target": "ज्ञ"
                              },
                              {
                                        "type": "splash-color",
                                        "target": "🧠"
                              },
                              {
                                        "type": "drag-to-basket",
                                        "target": {
                                                  "w": "ज्ञानी",
                                                  "i": "🧠"
                                        },
                                        "options": [
                                                  {
                                                            "w": "यज्ञ",
                                                            "i": "🔥"
                                                  },
                                                  {
                                                            "w": "भालू",
                                                            "i": "🐻"
                                                  },
                                                  {
                                                            "w": "ज्ञानी",
                                                            "i": "🧠"
                                                  }
                                        ]
                              },
                              {
                                        "type": "whack-a-letter",
                                        "target": "ज्ञ",
                                        "options": [
                                                  "ज्ञ",
                                                  "भ",
                                                  "य",
                                                  "भ"
                                        ]
                              },
                              {
                                        "type": "letter-train",
                                        "target": "ज्ञ",
                                        "options": [
                                                  "भ",
                                                  "य"
                                        ]
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "quizzes": [
                              {
                                        "question": "ज्ञ खोजें",
                                        "options": [
                                                  "य",
                                                  "ज्ञ",
                                                  "भ"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "चित्र 🧠 खोजें",
                                        "options": [
                                                  "🔥",
                                                  "🧠",
                                                  "🐻"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज्ञ से क्या शुरू होता है?",
                                        "options": [
                                                  "🧠",
                                                  "🐻"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "यह क्या है 🧠?",
                                        "options": [
                                                  "भालू",
                                                  "ज्ञानी"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "📚 खोजें",
                                        "options": [
                                                  "📚",
                                                  "🏛️",
                                                  "🚀"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "ज्ञ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "भवन",
                                                  "ज्ञान"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज्ञ से क्या शुरू होता है?",
                                        "options": [
                                                  "📚",
                                                  "🏛️"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "question": "✨ खोजें",
                                        "options": [
                                                  "🧘",
                                                  "✨",
                                                  "🐑"
                                        ],
                                        "answer": 1
                              },
                              {
                                        "question": "ज्ञ से शुरू होने वाला शब्द?",
                                        "options": [
                                                  "ज्ञ",
                                                  "भेड़"
                                        ],
                                        "answer": 0
                              },
                              {
                                        "type": "reward"
                              }
                    ],
                    "game": {
                              "type": "pop-balloon",
                              "target": "ज्ञ"
                    }
          }
]
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
