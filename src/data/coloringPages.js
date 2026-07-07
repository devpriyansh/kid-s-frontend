export const coloringPages = [
  {
    id: 1,
    title: "Happy Apple",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <!-- Leaf -->
        <path d="M50 30 Q60 10 80 20 Q70 40 50 30" id="path-1" />
        <!-- Apple Body -->
        <path d="M50 30 C 20 10, 10 50, 30 80 C 40 90, 60 90, 70 80 C 90 50, 80 10, 50 30" id="path-2" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M50 30 Q60 10 80 20 Q70 40 50 30" fill="#4ade80" />
        <path d="M50 30 C 20 10, 10 50, 30 80 C 40 90, 60 90, 70 80 C 90 50, 80 10, 50 30" fill="#f87171" />
      </svg>
    `
  },
  {
    id: 2,
    title: "Cozy House",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="10,50 50,15 90,50" id="path-1" />
        <rect x="20" y="50" width="60" height="40" id="path-2" />
        <rect x="40" y="65" width="20" height="25" id="path-3" />
        <rect x="25" y="60" width="10" height="10" id="path-4" />
        <rect x="65" y="60" width="10" height="10" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="10,50 50,15 90,50" fill="#f87171" />
        <rect x="20" y="50" width="60" height="40" fill="#fef08a" />
        <rect x="40" y="65" width="20" height="25" fill="#a16207" />
        <rect x="25" y="60" width="10" height="10" fill="#38bdf8" />
        <rect x="65" y="60" width="10" height="10" fill="#38bdf8" />
      </svg>
    `
  },
  {
    id: 3,
    title: "Bright Sun",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <circle cx="50" cy="50" r="20" id="path-1" />
        <polygon points="50,10 55,25 45,25" id="path-2" />
        <polygon points="50,90 55,75 45,75" id="path-3" />
        <polygon points="10,50 25,45 25,55" id="path-4" />
        <polygon points="90,50 75,45 75,55" id="path-5" />
        <polygon points="20,20 35,30 25,35" id="path-6" />
        <polygon points="80,80 65,70 75,65" id="path-7" />
        <polygon points="80,20 65,30 75,35" id="path-8" />
        <polygon points="20,80 35,70 25,65" id="path-9" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <circle cx="50" cy="50" r="20" fill="#fde047" />
        <polygon points="50,10 55,25 45,25" fill="#fb923c" />
        <polygon points="50,90 55,75 45,75" fill="#fb923c" />
        <polygon points="10,50 25,45 25,55" fill="#fb923c" />
        <polygon points="90,50 75,45 75,55" fill="#fb923c" />
        <polygon points="20,20 35,30 25,35" fill="#fde047" />
        <polygon points="80,80 65,70 75,65" fill="#fde047" />
        <polygon points="80,20 65,30 75,35" fill="#fde047" />
        <polygon points="20,80 35,70 25,65" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 4,
    title: "Green Tree",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <rect x="40" y="60" width="20" height="35" id="path-1" />
        <circle cx="50" cy="40" r="30" id="path-2" />
        <circle cx="30" cy="50" r="15" id="path-3" />
        <circle cx="70" cy="50" r="15" id="path-4" />
        <circle cx="50" cy="20" r="15" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <rect x="40" y="60" width="20" height="35" fill="#78350f" />
        <circle cx="50" cy="40" r="30" fill="#4ade80" />
        <circle cx="30" cy="50" r="15" fill="#22c55e" />
        <circle cx="70" cy="50" r="15" fill="#22c55e" />
        <circle cx="50" cy="20" r="15" fill="#16a34a" />
      </svg>
    `
  },
  {
    id: 5,
    title: "Sail Boat",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="20,70 80,70 70,90 30,90" id="path-1" />
        <rect x="48" y="20" width="4" height="50" id="path-2" />
        <polygon points="52,20 90,60 52,60" id="path-3" />
        <polygon points="48,30 10,60 48,60" id="path-4" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="20,70 80,70 70,90 30,90" fill="#a16207" />
        <rect x="48" y="20" width="4" height="50" fill="#000000" />
        <polygon points="52,20 90,60 52,60" fill="#38bdf8" />
        <polygon points="48,30 10,60 48,60" fill="#fb7185" />
      </svg>
    `
  },
  {
    id: 6,
    title: "Twinkle Star",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="50,10 61,35 88,35 66,51 75,76 50,60 25,76 34,51 12,35 39,35" id="path-1" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="50,10 61,35 88,35 66,51 75,76 50,60 25,76 34,51 12,35 39,35" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 7,
    title: "Speedy Car",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 20 40 L 35 25 L 65 25 L 80 40 L 90 40 L 90 65 L 10 65 L 10 40 Z" id="path-1" />
        <rect x="40" y="25" width="20" height="15" id="path-2" />
        <circle cx="30" cy="65" r="10" id="path-3" />
        <circle cx="70" cy="65" r="10" id="path-4" />
        <circle cx="30" cy="65" r="4" id="path-5" />
        <circle cx="70" cy="65" r="4" id="path-6" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 20 40 L 35 25 L 65 25 L 80 40 L 90 40 L 90 65 L 10 65 L 10 40 Z" fill="#ef4444" />
        <rect x="40" y="25" width="20" height="15" fill="#bae6fd" />
        <circle cx="30" cy="65" r="10" fill="#334155" />
        <circle cx="70" cy="65" r="10" fill="#334155" />
        <circle cx="30" cy="65" r="4" fill="#cbd5e1" />
        <circle cx="70" cy="65" r="4" fill="#cbd5e1" />
      </svg>
    `
  },
  {
    id: 8,
    title: "Ice Cream",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="30,50 70,50 50,90" id="path-1" />
        <path d="M 30 50 C 30 30, 70 30, 70 50 Z" id="path-2" />
        <circle cx="50" cy="25" r="8" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="30,50 70,50 50,90" fill="#fcd34d" />
        <path d="M 30 50 C 30 30, 70 30, 70 50 Z" fill="#f472b6" />
        <circle cx="50" cy="25" r="8" fill="#ef4444" />
      </svg>
    `
  },
  {
    id: 9,
    title: "Balloon",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 50 20 C 20 20, 30 60, 50 70 C 70 60, 80 20, 50 20 Z" id="path-1" />
        <polygon points="45,70 55,70 50,75" id="path-2" />
        <path d="M 50 75 Q 40 85, 50 95" fill="none" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 50 20 C 20 20, 30 60, 50 70 C 70 60, 80 20, 50 20 Z" fill="#60a5fa" />
        <polygon points="45,70 55,70 50,75" fill="#60a5fa" />
        <path d="M 50 75 Q 40 85, 50 95" fill="none" stroke="black" />
      </svg>
    `
  },
  {
    id: 10,
    title: "Pretty Flower",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 50 60 L 50 95" fill="none" id="path-1" />
        <path d="M 50 80 Q 70 70, 70 85 Q 60 90, 50 80" id="path-2" />
        <circle cx="50" cy="40" r="10" id="path-3" />
        <circle cx="50" cy="20" r="10" id="path-4" />
        <circle cx="70" cy="40" r="10" id="path-5" />
        <circle cx="50" cy="60" r="10" id="path-6" />
        <circle cx="30" cy="40" r="10" id="path-7" />
        <circle cx="35" cy="25" r="10" id="path-8" />
        <circle cx="65" cy="25" r="10" id="path-9" />
        <circle cx="35" cy="55" r="10" id="path-10" />
        <circle cx="65" cy="55" r="10" id="path-11" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 50 60 L 50 95" fill="none" />
        <path d="M 50 80 Q 70 70, 70 85 Q 60 90, 50 80" fill="#4ade80" />
        <circle cx="50" cy="40" r="10" fill="#fde047" />
        <circle cx="50" cy="20" r="10" fill="#f472b6" />
        <circle cx="70" cy="40" r="10" fill="#f472b6" />
        <circle cx="50" cy="60" r="10" fill="#f472b6" />
        <circle cx="30" cy="40" r="10" fill="#f472b6" />
        <circle cx="35" cy="25" r="10" fill="#f472b6" />
        <circle cx="65" cy="25" r="10" fill="#f472b6" />
        <circle cx="35" cy="55" r="10" fill="#f472b6" />
        <circle cx="65" cy="55" r="10" fill="#f472b6" />
      </svg>
    `
  },
  {
    id: 11,
    title: "Butterfly",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <ellipse cx="50" cy="50" rx="6" ry="25" id="path-1" />
        <path d="M 50 30 C 20 0, 10 40, 44 45 Z" id="path-2" />
        <path d="M 50 30 C 80 0, 90 40, 56 45 Z" id="path-3" />
        <path d="M 44 45 C 10 50, 20 90, 50 70 Z" id="path-4" />
        <path d="M 56 45 C 90 50, 80 90, 50 70 Z" id="path-5" />
        <circle cx="50" cy="20" r="6" id="path-6" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <ellipse cx="50" cy="50" rx="6" ry="25" fill="#a855f7" />
        <path d="M 50 30 C 20 0, 10 40, 44 45 Z" fill="#38bdf8" />
        <path d="M 50 30 C 80 0, 90 40, 56 45 Z" fill="#38bdf8" />
        <path d="M 44 45 C 10 50, 20 90, 50 70 Z" fill="#fb7185" />
        <path d="M 56 45 C 90 50, 80 90, 50 70 Z" fill="#fb7185" />
        <circle cx="50" cy="20" r="6" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 12,
    title: "Moon & Stars",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 50 10 A 40 40 0 1 0 90 50 A 30 30 0 0 1 50 10 Z" id="path-1" />
        <polygon points="70,20 73,25 78,25 74,28 75,33 70,30 65,33 66,28 62,25 67,25" id="path-2" />
        <polygon points="85,60 88,65 93,65 89,68 90,73 85,70 80,73 81,68 77,65 82,65" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 50 10 A 40 40 0 1 0 90 50 A 30 30 0 0 1 50 10 Z" fill="#fde047" />
        <polygon points="70,20 73,25 78,25 74,28 75,33 70,30 65,33 66,28 62,25 67,25" fill="#fde047" />
        <polygon points="85,60 88,65 93,65 89,68 90,73 85,70 80,73 81,68 77,65 82,65" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 13,
    title: "Happy Fish",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <ellipse cx="40" cy="50" rx="30" ry="20" id="path-1" />
        <polygon points="70,50 90,30 90,70" id="path-2" />
        <circle cx="25" cy="45" r="4" id="path-3" />
        <path d="M 25 55 Q 35 60, 45 55" fill="none" id="path-4" />
        <polygon points="30,30 50,20 50,30" id="path-5" />
        <polygon points="30,70 50,80 50,70" id="path-6" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <ellipse cx="40" cy="50" rx="30" ry="20" fill="#fb923c" />
        <polygon points="70,50 90,30 90,70" fill="#fb923c" />
        <circle cx="25" cy="45" r="4" fill="#000" />
        <path d="M 25 55 Q 35 60, 45 55" fill="none" stroke="black" />
        <polygon points="30,30 50,20 50,30" fill="#fde047" />
        <polygon points="30,70 50,80 50,70" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 14,
    title: "Space Rocket",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 50 10 Q 70 30, 70 70 L 30 70 Q 30 30, 50 10 Z" id="path-1" />
        <polygon points="30,50 10,70 30,70" id="path-2" />
        <polygon points="70,50 90,70 70,70" id="path-3" />
        <circle cx="50" cy="40" r="8" id="path-4" />
        <polygon points="40,70 60,70 50,90" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 50 10 Q 70 30, 70 70 L 30 70 Q 30 30, 50 10 Z" fill="#e2e8f0" />
        <polygon points="30,50 10,70 30,70" fill="#ef4444" />
        <polygon points="70,50 90,70 70,70" fill="#ef4444" />
        <circle cx="50" cy="40" r="8" fill="#38bdf8" />
        <polygon points="40,70 60,70 50,90" fill="#f97316" />
      </svg>
    `
  },
  {
    id: 15,
    title: "Teddy Bear",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <circle cx="50" cy="50" r="30" id="path-1" />
        <circle cx="25" cy="25" r="12" id="path-2" />
        <circle cx="75" cy="25" r="12" id="path-3" />
        <circle cx="40" cy="40" r="4" id="path-4" />
        <circle cx="60" cy="40" r="4" id="path-5" />
        <ellipse cx="50" cy="65" rx="15" ry="10" id="path-6" />
        <circle cx="50" cy="62" r="3" id="path-7" />
        <path d="M 50 65 Q 45 70, 50 72 Q 55 70, 50 65" fill="none" id="path-8" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <circle cx="50" cy="50" r="30" fill="#d97706" />
        <circle cx="25" cy="25" r="12" fill="#d97706" />
        <circle cx="75" cy="25" r="12" fill="#d97706" />
        <circle cx="40" cy="40" r="4" fill="#000" />
        <circle cx="60" cy="40" r="4" fill="#000" />
        <ellipse cx="50" cy="65" rx="15" ry="10" fill="#fef3c7" />
        <circle cx="50" cy="62" r="3" fill="#000" />
        <path d="M 50 65 Q 45 70, 50 72 Q 55 70, 50 65" fill="none" stroke="black" />
      </svg>
    `
  }
];
