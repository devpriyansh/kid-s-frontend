export const coloringPages = [
  {
    id: 1,
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
    category: "easy",
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
,
  {
    id: 16,
    category: "easy",
    title: "Watermelon",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 10 30 A 40 40 0 0 0 90 30 Z" id="path-1" />
        <path d="M 20 30 A 30 30 0 0 0 80 30 Z" id="path-2" />
        <circle cx="35" cy="45" r="2" id="path-3" />
        <circle cx="50" cy="55" r="2" id="path-4" />
        <circle cx="65" cy="45" r="2" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 10 30 A 40 40 0 0 0 90 30 Z" fill="#22c55e" />
        <path d="M 20 30 A 30 30 0 0 0 80 30 Z" fill="#ef4444" />
        <circle cx="35" cy="45" r="2" fill="#000000" />
        <circle cx="50" cy="55" r="2" fill="#000000" />
        <circle cx="65" cy="45" r="2" fill="#000000" />
      </svg>
    `
  },
  {
    id: 17,
    category: "easy",
    title: "Crown",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="10,80 90,80 90,30 70,50 50,10 30,50 10,30" id="path-1" />
        <circle cx="10" cy="30" r="5" id="path-2" />
        <circle cx="50" cy="10" r="5" id="path-3" />
        <circle cx="90" cy="30" r="5" id="path-4" />
        <circle cx="50" cy="65" r="6" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="10,80 90,80 90,30 70,50 50,10 30,50 10,30" fill="#fde047" />
        <circle cx="10" cy="30" r="5" fill="#f472b6" />
        <circle cx="50" cy="10" r="5" fill="#f472b6" />
        <circle cx="90" cy="30" r="5" fill="#f472b6" />
        <circle cx="50" cy="65" r="6" fill="#38bdf8" />
      </svg>
    `
  },
  {
    id: 18,
    category: "easy",
    title: "Diamond",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="50,10 80,30 50,90 20,30" id="path-1" />
        <polygon points="50,10 80,30 20,30" id="path-2" />
        <polygon points="35,30 65,30 50,90" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="50,10 80,30 50,90 20,30" fill="#0ea5e9" />
        <polygon points="50,10 80,30 20,30" fill="#bae6fd" />
        <polygon points="35,30 65,30 50,90" fill="#38bdf8" />
      </svg>
    `
  },
  {
    id: 19,
    category: "easy",
    title: "Hot Air Balloon",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 70, 60 80, 50 80 C 40 80, 30 70, 30 50 Z" id="path-1" />
        <rect x="40" y="85" width="20" height="10" id="path-2" />
        <line x1="40" y1="80" x2="40" y2="85" stroke="black" />
        <line x1="60" y1="80" x2="60" y2="85" stroke="black" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 70, 60 80, 50 80 C 40 80, 30 70, 30 50 Z" fill="#f43f5e" />
        <rect x="40" y="85" width="20" height="10" fill="#a16207" />
        <line x1="40" y1="80" x2="40" y2="85" stroke="black" />
        <line x1="60" y1="80" x2="60" y2="85" stroke="black" />
      </svg>
    `
  },
  {
    id: 20,
    category: "easy",
    title: "Birthday Cake",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <rect x="30" y="60" width="40" height="30" id="path-1" />
        <rect x="35" y="40" width="30" height="20" id="path-2" />
        <rect x="48" y="20" width="4" height="20" id="path-3" />
        <ellipse cx="50" cy="15" rx="3" ry="5" id="path-4" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <rect x="30" y="60" width="40" height="30" fill="#fcd34d" />
        <rect x="35" y="40" width="30" height="20" fill="#f472b6" />
        <rect x="48" y="20" width="4" height="20" fill="#ffffff" />
        <ellipse cx="50" cy="15" rx="3" ry="5" fill="#f97316" />
      </svg>
    `
  },
  {
    id: 21,
    category: "easy",
    title: "Pizza Slice",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="50,10 90,80 10,80" id="path-1" />
        <path d="M 10 80 Q 50 90, 90 80 Q 50 70, 10 80" id="path-2" />
        <circle cx="50" cy="40" r="5" id="path-3" />
        <circle cx="65" cy="55" r="5" id="path-4" />
        <circle cx="35" cy="65" r="5" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="50,10 90,80 10,80" fill="#fcd34d" />
        <path d="M 10 80 Q 50 90, 90 80 Q 50 70, 10 80" fill="#d97706" />
        <circle cx="50" cy="40" r="5" fill="#ef4444" />
        <circle cx="65" cy="55" r="5" fill="#ef4444" />
        <circle cx="35" cy="65" r="5" fill="#ef4444" />
      </svg>
    `
  },
  {
    id: 22,
    category: "easy",
    title: "Magic Potion",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <circle cx="50" cy="60" r="30" id="path-1" />
        <rect x="40" y="10" width="20" height="25" id="path-2" />
        <ellipse cx="50" cy="10" rx="10" ry="4" id="path-3" />
        <rect x="45" y="5" width="10" height="5" id="path-4" />
        <circle cx="50" cy="60" r="5" id="path-5" />
        <circle cx="65" cy="50" r="3" id="path-6" />
        <circle cx="40" cy="70" r="4" id="path-7" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <circle cx="50" cy="60" r="30" fill="#a855f7" />
        <rect x="40" y="10" width="20" height="25" fill="#bae6fd" />
        <ellipse cx="50" cy="10" rx="10" ry="4" fill="#bae6fd" />
        <rect x="45" y="5" width="10" height="5" fill="#a16207" />
        <circle cx="50" cy="60" r="5" fill="#fde047" />
        <circle cx="65" cy="50" r="3" fill="#fde047" />
        <circle cx="40" cy="70" r="4" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 23,
    category: "easy",
    title: "Open Book",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 50 80 Q 25 90, 10 80 L 10 20 Q 25 30, 50 20" id="path-1" />
        <path d="M 50 80 Q 75 90, 90 80 L 90 20 Q 75 30, 50 20" id="path-2" />
        <polygon points="50,20 50,80 45,75 45,15" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 50 80 Q 25 90, 10 80 L 10 20 Q 25 30, 50 20" fill="#ffffff" />
        <path d="M 50 80 Q 75 90, 90 80 L 90 20 Q 75 30, 50 20" fill="#ffffff" />
        <polygon points="50,20 50,80 45,75 45,15" fill="#ef4444" />
      </svg>
    `
  },
  {
    id: 24,
    category: "easy",
    title: "Cute Cat",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <circle cx="50" cy="60" r="30" id="path-1" />
        <polygon points="25,43 15,10 40,35" id="path-2" />
        <polygon points="75,43 85,10 60,35" id="path-3" />
        <circle cx="35" cy="55" r="5" id="path-4" />
        <circle cx="65" cy="55" r="5" id="path-5" />
        <polygon points="45,65 55,65 50,70" id="path-6" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <circle cx="50" cy="60" r="30" fill="#fcd34d" />
        <polygon points="25,43 15,10 40,35" fill="#fcd34d" />
        <polygon points="75,43 85,10 60,35" fill="#fcd34d" />
        <circle cx="35" cy="55" r="5" fill="#000000" />
        <circle cx="65" cy="55" r="5" fill="#000000" />
        <polygon points="45,65 55,65 50,70" fill="#ec4899" />
      </svg>
    `
  },
  {
    id: 25,
    category: "easy",
    title: "Friendly Dog",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <ellipse cx="50" cy="60" rx="35" ry="25" id="path-1" />
        <ellipse cx="15" cy="50" rx="8" ry="25" id="path-2" />
        <ellipse cx="85" cy="50" rx="8" ry="25" id="path-3" />
        <circle cx="35" cy="55" r="4" id="path-4" />
        <circle cx="65" cy="55" r="4" id="path-5" />
        <ellipse cx="50" cy="70" rx="10" ry="6" id="path-6" />
        <circle cx="50" cy="68" r="3" id="path-7" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <ellipse cx="50" cy="60" rx="35" ry="25" fill="#d97706" />
        <ellipse cx="15" cy="50" rx="8" ry="25" fill="#78350f" />
        <ellipse cx="85" cy="50" rx="8" ry="25" fill="#78350f" />
        <circle cx="35" cy="55" r="4" fill="#000000" />
        <circle cx="65" cy="55" r="4" fill="#000000" />
        <ellipse cx="50" cy="70" rx="10" ry="6" fill="#fef3c7" />
        <circle cx="50" cy="68" r="3" fill="#000000" />
      </svg>
    `
  },
  {
    id: 26,
    category: "easy",
    title: "Simple Train",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <rect x="40" y="40" width="50" height="40" id="path-1" />
        <rect x="10" y="60" width="30" height="20" id="path-2" />
        <rect x="20" y="30" width="10" height="30" id="path-3" />
        <circle cx="30" cy="80" r="10" id="path-4" />
        <circle cx="60" cy="80" r="10" id="path-5" />
        <circle cx="80" cy="80" r="10" id="path-6" />
        <rect x="50" y="50" width="15" height="15" id="path-7" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <rect x="40" y="40" width="50" height="40" fill="#3b82f6" />
        <rect x="10" y="60" width="30" height="20" fill="#ef4444" />
        <rect x="20" y="30" width="10" height="30" fill="#fcd34d" />
        <circle cx="30" cy="80" r="10" fill="#334155" />
        <circle cx="60" cy="80" r="10" fill="#334155" />
        <circle cx="80" cy="80" r="10" fill="#334155" />
        <rect x="50" y="50" width="15" height="15" fill="#bae6fd" />
      </svg>
    `
  },
  {
    id: 27,
    category: "easy",
    title: "Magic Wand",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <polygon points="50,10 55,25 70,30 55,35 50,50 45,35 30,30 45,25" id="path-1" />
        <rect x="45" y="50" width="10" height="40" id="path-2" />
        <circle cx="20" cy="20" r="3" id="path-3" />
        <circle cx="80" cy="15" r="2" id="path-4" />
        <circle cx="75" cy="50" r="4" id="path-5" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <polygon points="50,10 55,25 70,30 55,35 50,50 45,35 30,30 45,25" fill="#fde047" />
        <rect x="45" y="50" width="10" height="40" fill="#a16207" />
        <circle cx="20" cy="20" r="3" fill="#38bdf8" />
        <circle cx="80" cy="15" r="2" fill="#38bdf8" />
        <circle cx="75" cy="50" r="4" fill="#38bdf8" />
      </svg>
    `
  },
  {
    id: 28,
    category: "easy",
    title: "Snowman",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <circle cx="50" cy="75" r="25" id="path-1" />
        <circle cx="50" cy="40" r="18" id="path-2" />
        <circle cx="50" cy="15" r="12" id="path-3" />
        <circle cx="45" cy="12" r="2" id="path-4" />
        <circle cx="55" cy="12" r="2" id="path-5" />
        <polygon points="50,16 60,18 50,20" id="path-6" />
        <circle cx="50" cy="35" r="2" id="path-7" />
        <circle cx="50" cy="45" r="2" id="path-8" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <circle cx="50" cy="75" r="25" fill="#ffffff" />
        <circle cx="50" cy="40" r="18" fill="#ffffff" />
        <circle cx="50" cy="15" r="12" fill="#ffffff" />
        <circle cx="45" cy="12" r="2" fill="#000000" />
        <circle cx="55" cy="12" r="2" fill="#000000" />
        <polygon points="50,16 60,18 50,20" fill="#f97316" />
        <circle cx="50" cy="35" r="2" fill="#000000" />
        <circle cx="50" cy="45" r="2" fill="#000000" />
      </svg>
    `
  },
  {
    id: 29,
    category: "easy",
    title: "Candy",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <ellipse cx="50" cy="50" rx="20" ry="15" id="path-1" />
        <polygon points="30,50 10,35 10,65" id="path-2" />
        <polygon points="70,50 90,35 90,65" id="path-3" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <ellipse cx="50" cy="50" rx="20" ry="15" fill="#ec4899" />
        <polygon points="30,50 10,35 10,65" fill="#fde047" />
        <polygon points="70,50 90,35 90,65" fill="#38bdf8" />
      </svg>
    `
  },
  {
    id: 30,
    category: "easy",
    title: "Rainbow",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        <path d="M 10 80 A 40 40 0 0 1 90 80 L 80 80 A 30 30 0 0 0 20 80 Z" id="path-1" />
        <path d="M 20 80 A 30 30 0 0 1 80 80 L 70 80 A 20 20 0 0 0 30 80 Z" id="path-2" />
        <path d="M 30 80 A 20 20 0 0 1 70 80 L 60 80 A 10 10 0 0 0 40 80 Z" id="path-3" />
        <path d="M 40 80 A 10 10 0 0 1 60 80 L 50 80 Z" id="path-4" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" stroke-linejoin="round">
        <path d="M 10 80 A 40 40 0 0 1 90 80 L 80 80 A 30 30 0 0 0 20 80 Z" fill="#ef4444" />
        <path d="M 20 80 A 30 30 0 0 1 80 80 L 70 80 A 20 20 0 0 0 30 80 Z" fill="#f97316" />
        <path d="M 30 80 A 20 20 0 0 1 70 80 L 60 80 A 10 10 0 0 0 40 80 Z" fill="#fde047" />
        <path d="M 40 80 A 10 10 0 0 1 60 80 L 50 80 Z" fill="#22c55e" />
      </svg>
    `
  }

,

  {
    id: 31,
    title: "Peaceful Valley",
    category: "portrait",
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" id="path-1" />
        <circle cx="100" cy="50" r="30" id="path-2" />
        <polygon points="0,150 40,70 100,150" id="path-3" />
        <polygon points="60,150 120,50 180,150" id="path-4" />
        <polygon points="140,150 180,90 220,150" id="path-5" />
        <polygon points="40,70 20,110 30,105 40,120 50,105 60,110" id="path-6" />
        <polygon points="120,50 90,100 105,95 120,110 135,95 150,100" id="path-7" />
        <polygon points="180,90 160,120 170,115 180,125 190,115 200,120" id="path-8" />
        <path d="M 0 140 Q 50 120, 100 150 Q 150 130, 200 160 L 200 200 L 0 200 Z" id="path-9" />
        <path d="M 80 150 Q 120 160, 90 180 Q 70 190, 100 200 L 150 200 Q 100 190, 140 180 Q 160 160, 110 150 Z" id="path-10" />
        <rect x="30" y="150" width="10" height="20" id="path-11" />
        <polygon points="15,160 35,130 55,160" id="path-12" />
        <polygon points="20,140 35,115 50,140" id="path-13" />
        <rect x="160" y="160" width="10" height="20" id="path-14" />
        <polygon points="145,170 165,140 185,170" id="path-15" />
        <polygon points="150,150 165,125 180,150" id="path-16" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" fill="#bae6fd" />
        <circle cx="100" cy="50" r="30" fill="#fde047" />
        <polygon points="0,150 40,70 100,150" fill="#94a3b8" />
        <polygon points="60,150 120,50 180,150" fill="#94a3b8" />
        <polygon points="140,150 180,90 220,150" fill="#94a3b8" />
        <polygon points="40,70 20,110 30,105 40,120 50,105 60,110" fill="#ffffff" />
        <polygon points="120,50 90,100 105,95 120,110 135,95 150,100" fill="#ffffff" />
        <polygon points="180,90 160,120 170,115 180,125 190,115 200,120" fill="#ffffff" />
        <path d="M 0 140 Q 50 120, 100 150 Q 150 130, 200 160 L 200 200 L 0 200 Z" fill="#22c55e" />
        <path d="M 80 150 Q 120 160, 90 180 Q 70 190, 100 200 L 150 200 Q 100 190, 140 180 Q 160 160, 110 150 Z" fill="#3b82f6" />
        <rect x="30" y="150" width="10" height="20" fill="#78350f" />
        <polygon points="15,160 35,130 55,160" fill="#16a34a" />
        <polygon points="20,140 35,115 50,140" fill="#16a34a" />
        <rect x="160" y="160" width="10" height="20" fill="#78350f" />
        <polygon points="145,170 165,140 185,170" fill="#16a34a" />
        <polygon points="150,150 165,125 180,150" fill="#16a34a" />
      </svg>
    `
  },
  {
    id: 32,
    title: "City Skyline",
    category: "portrait",
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" id="path-1" />
        <circle cx="160" cy="40" r="20" id="path-2" />
        <rect x="20" y="80" width="40" height="120" id="path-3" />
        <rect x="90" y="60" width="50" height="140" id="path-4" />
        <rect x="160" y="90" width="30" height="110" id="path-5" />
        <rect x="0" y="120" width="30" height="80" id="path-6" />
        <rect x="50" y="100" width="60" height="100" id="path-7" />
        <rect x="130" y="130" width="50" height="70" id="path-8" />
        <rect x="30" y="90" width="10" height="10" id="path-9" />
        <rect x="30" y="110" width="10" height="10" id="path-10" />
        <rect x="100" y="70" width="10" height="10" id="path-11" />
        <rect x="120" y="70" width="10" height="10" id="path-12" />
        <rect x="100" y="90" width="10" height="10" id="path-13" />
        <rect x="120" y="90" width="10" height="10" id="path-14" />
        <rect x="60" y="110" width="10" height="10" id="path-15" />
        <rect x="80" y="110" width="10" height="10" id="path-16" />
        <rect x="60" y="130" width="10" height="10" id="path-17" />
        <rect x="80" y="130" width="10" height="10" id="path-18" />
        <rect x="140" y="140" width="10" height="10" id="path-19" />
        <rect x="160" y="140" width="10" height="10" id="path-20" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" fill="#334155" />
        <circle cx="160" cy="40" r="20" fill="#fef08a" />
        <rect x="20" y="80" width="40" height="120" fill="#64748b" />
        <rect x="90" y="60" width="50" height="140" fill="#475569" />
        <rect x="160" y="90" width="30" height="110" fill="#64748b" />
        <rect x="0" y="120" width="30" height="80" fill="#1e293b" />
        <rect x="50" y="100" width="60" height="100" fill="#0f172a" />
        <rect x="130" y="130" width="50" height="70" fill="#1e293b" />
        <rect x="30" y="90" width="10" height="10" fill="#fde047" />
        <rect x="30" y="110" width="10" height="10" fill="#fde047" />
        <rect x="100" y="70" width="10" height="10" fill="#fde047" />
        <rect x="120" y="70" width="10" height="10" fill="#fde047" />
        <rect x="100" y="90" width="10" height="10" fill="#fde047" />
        <rect x="120" y="90" width="10" height="10" fill="#fde047" />
        <rect x="60" y="110" width="10" height="10" fill="#fde047" />
        <rect x="80" y="110" width="10" height="10" fill="#fde047" />
        <rect x="60" y="130" width="10" height="10" fill="#fde047" />
        <rect x="80" y="130" width="10" height="10" fill="#fde047" />
        <rect x="140" y="140" width="10" height="10" fill="#fde047" />
        <rect x="160" y="140" width="10" height="10" fill="#fde047" />
      </svg>
    `
  },
  {
    id: 33,
    title: "Ocean Floor",
    category: "portrait",
    svgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" id="path-1" />
        <path d="M 0 150 Q 50 140, 100 160 Q 150 180, 200 150 L 200 200 L 0 200 Z" id="path-2" />
        <path d="M 30 200 Q 20 180, 40 160 Q 20 140, 30 120 Q 40 140, 50 160 Q 40 180, 30 200 Z" id="path-3" />
        <path d="M 50 200 Q 40 170, 60 140 Q 40 110, 50 80 Q 60 110, 70 140 Q 50 170, 50 200 Z" id="path-4" />
        <path d="M 160 200 Q 150 160, 170 120 Q 150 80, 160 40 Q 170 80, 180 120 Q 160 160, 160 200 Z" id="path-5" />
        <ellipse cx="100" cy="80" rx="40" ry="20" id="path-6" />
        <rect x="90" y="50" width="20" height="15" id="path-7" />
        <circle cx="100" cy="55" r="5" id="path-8" />
        <circle cx="80" cy="80" r="6" id="path-9" />
        <circle cx="100" cy="80" r="6" id="path-10" />
        <circle cx="120" cy="80" r="6" id="path-11" />
        <polygon points="140,80 160,70 160,90" id="path-12" />
        <circle cx="165" cy="65" r="3" id="path-13" />
        <circle cx="170" cy="50" r="4" id="path-14" />
        <circle cx="175" cy="35" r="2" id="path-15" />
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="0" y="0" width="200" height="200" fill="#0284c7" />
        <path d="M 0 150 Q 50 140, 100 160 Q 150 180, 200 150 L 200 200 L 0 200 Z" fill="#fde047" />
        <path d="M 30 200 Q 20 180, 40 160 Q 20 140, 30 120 Q 40 140, 50 160 Q 40 180, 30 200 Z" fill="#16a34a" />
        <path d="M 50 200 Q 40 170, 60 140 Q 40 110, 50 80 Q 60 110, 70 140 Q 50 170, 50 200 Z" fill="#16a34a" />
        <path d="M 160 200 Q 150 160, 170 120 Q 150 80, 160 40 Q 170 80, 180 120 Q 160 160, 160 200 Z" fill="#16a34a" />
        <ellipse cx="100" cy="80" rx="40" ry="20" fill="#fcd34d" />
        <rect x="90" y="50" width="20" height="15" fill="#eab308" />
        <circle cx="100" cy="55" r="5" fill="#0ea5e9" />
        <circle cx="80" cy="80" r="6" fill="#bae6fd" />
        <circle cx="100" cy="80" r="6" fill="#bae6fd" />
        <circle cx="120" cy="80" r="6" fill="#bae6fd" />
        <polygon points="140,80 160,70 160,90" fill="#94a3b8" />
        <circle cx="165" cy="65" r="3" fill="#bae6fd" />
        <circle cx="170" cy="50" r="4" fill="#bae6fd" />
        <circle cx="175" cy="35" r="2" fill="#bae6fd" />
      </svg>
    `
  }

,

  {
    id: 34,
    title: "Letter A",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">A</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#78350f" />
        <circle cx="50" cy="50" r="35" fill="#d946ef" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#f472b6">A</text>
      </svg>
    `
  },
  {
    id: 35,
    title: "Letter B",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">B</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#fef3c7" />
        <circle cx="50" cy="50" r="35" fill="#fb7185" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#38bdf8">B</text>
      </svg>
    `
  },
  {
    id: 36,
    title: "Letter C",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">C</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#ef4444" />
        <circle cx="50" cy="50" r="35" fill="#22c55e" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#ec4899">C</text>
      </svg>
    `
  },
  {
    id: 37,
    title: "Letter D",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">D</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#fef3c7" />
        <circle cx="50" cy="50" r="35" fill="#ef4444" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#a855f7">D</text>
      </svg>
    `
  },
  {
    id: 38,
    title: "Letter E",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">E</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#6366f1" />
        <circle cx="50" cy="50" r="35" fill="#a16207" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#84cc16">E</text>
      </svg>
    `
  },
  {
    id: 39,
    title: "Letter F",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">F</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#d946ef" />
        <circle cx="50" cy="50" r="35" fill="#d97706" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#e2e8f0">F</text>
      </svg>
    `
  },
  {
    id: 40,
    title: "Letter G",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">G</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#1e293b" />
        <circle cx="50" cy="50" r="35" fill="#475569" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#14b8a6">G</text>
      </svg>
    `
  },
  {
    id: 41,
    title: "Letter H",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">H</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#e2e8f0" />
        <circle cx="50" cy="50" r="35" fill="#fef08a" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#a16207">H</text>
      </svg>
    `
  },
  {
    id: 42,
    title: "Letter I",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">I</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#eab308" />
        <circle cx="50" cy="50" r="35" fill="#f97316" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#78350f">I</text>
      </svg>
    `
  },
  {
    id: 43,
    title: "Letter J",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">J</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#d946ef" />
        <circle cx="50" cy="50" r="35" fill="#94a3b8" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#d97706">J</text>
      </svg>
    `
  },
  {
    id: 44,
    title: "Letter K",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">K</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#ec4899" />
        <circle cx="50" cy="50" r="35" fill="#a855f7" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#334155">K</text>
      </svg>
    `
  },
  {
    id: 45,
    title: "Letter L",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">L</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#f97316" />
        <circle cx="50" cy="50" r="35" fill="#38bdf8" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#22c55e">L</text>
      </svg>
    `
  },
  {
    id: 46,
    title: "Letter M",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">M</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#64748b" />
        <circle cx="50" cy="50" r="35" fill="#d97706" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#94a3b8">M</text>
      </svg>
    `
  },
  {
    id: 47,
    title: "Letter N",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">N</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#16a34a" />
        <circle cx="50" cy="50" r="35" fill="#14b8a6" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#0284c7">N</text>
      </svg>
    `
  },
  {
    id: 48,
    title: "Letter O",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">O</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#0ea5e9" />
        <circle cx="50" cy="50" r="35" fill="#4ade80" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#0284c7">O</text>
      </svg>
    `
  },
  {
    id: 49,
    title: "Letter P",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">P</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#eab308" />
        <circle cx="50" cy="50" r="35" fill="#a855f7" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#4ade80">P</text>
      </svg>
    `
  },
  {
    id: 50,
    title: "Letter Q",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">Q</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#d946ef" />
        <circle cx="50" cy="50" r="35" fill="#fb7185" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#f59e0b">Q</text>
      </svg>
    `
  },
  {
    id: 51,
    title: "Letter R",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">R</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#3b82f6" />
        <circle cx="50" cy="50" r="35" fill="#84cc16" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#fb7185">R</text>
      </svg>
    `
  },
  {
    id: 52,
    title: "Letter S",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">S</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#d946ef" />
        <circle cx="50" cy="50" r="35" fill="#84cc16" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#94a3b8">S</text>
      </svg>
    `
  },
  {
    id: 53,
    title: "Letter T",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">T</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#d97706" />
        <circle cx="50" cy="50" r="35" fill="#fef08a" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#1e293b">T</text>
      </svg>
    `
  }
,

  {
    id: 54,
    title: "Letter U",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">U</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#cbd5e1" />
        <circle cx="50" cy="50" r="35" fill="#0284c7" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#fcd34d">U</text>
      </svg>
    `
  },
  {
    id: 55,
    title: "Letter V",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">V</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#fef3c7" />
        <circle cx="50" cy="50" r="35" fill="#6366f1" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#3b82f6">V</text>
      </svg>
    `
  },
  {
    id: 56,
    title: "Letter W",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">W</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#a855f7" />
        <circle cx="50" cy="50" r="35" fill="#22c55e" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#475569">W</text>
      </svg>
    `
  },
  {
    id: 57,
    title: "Letter X",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">X</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#4ade80" />
        <circle cx="50" cy="50" r="35" fill="#f59e0b" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#78350f">X</text>
      </svg>
    `
  },
  {
    id: 58,
    title: "Letter Y",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">Y</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#0ea5e9" />
        <circle cx="50" cy="50" r="35" fill="#f472b6" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#ec4899">Y</text>
      </svg>
    `
  },
  {
    id: 59,
    title: "Letter Z",
    category: "learning",
    svgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" fill="white" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" id="path-1" />
        <circle cx="50" cy="50" r="35" id="path-2" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" id="path-3">Z</text>
      </svg>
    `,
    referenceSvgContent: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="2" stroke-linejoin="round">
        <rect x="5" y="5" width="90" height="90" rx="15" fill="#e2e8f0" />
        <circle cx="50" cy="50" r="35" fill="#1e293b" />
        <text x="50" y="70" font-size="60" font-family="Arial, sans-serif" font-weight="900" text-anchor="middle" fill="#06b6d4">Z</text>
      </svg>
    `
  }
];
