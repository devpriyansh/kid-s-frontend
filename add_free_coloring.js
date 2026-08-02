const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/coloringPages.js');
let content = fs.readFileSync(filePath, 'utf8');

const newGames = [
  { id: 60, title: 'Cute Dinosaur', img: '🦕', paths: ['M20 80 Q20 40 50 20 Q70 20 80 40 Q90 60 70 80 Q50 90 20 80', 'M30 30 Q40 30 40 40 Q30 40 30 30'] },
  { id: 61, title: 'Robot Friend', img: '🤖', paths: ['M20 20 H80 V80 H20 Z', 'M30 30 H40 V40 H30 Z', 'M60 30 H70 V40 H60 Z', 'M40 60 H60 V70 H40 Z'] },
  { id: 62, title: 'Ice Cream Cone', img: '🍦', paths: ['M30 40 L50 90 L70 40 Z', 'M20 40 C 20 10, 80 10, 80 40 Z'] },
  { id: 63, title: 'Space Rocket', img: '🚀', paths: ['M40 80 L50 20 L60 80 Z', 'M30 80 L40 60 L40 80 Z', 'M70 80 L60 60 L60 80 Z', 'M45 40 A5 5 0 1 0 55 40 A5 5 0 1 0 45 40'] },
  { id: 64, title: 'Magic Wand', img: '🪄', paths: ['M20 80 L80 20 L90 30 L30 90 Z', 'M70 10 L80 0 L90 10 L80 20 Z'] },
  { id: 65, title: 'Happy Frog', img: '🐸', paths: ['M20 50 C 20 20, 80 20, 80 50 C 80 80, 20 80, 20 50', 'M30 30 A10 10 0 1 0 50 30 A10 10 0 1 0 30 30', 'M60 30 A10 10 0 1 0 80 30 A10 10 0 1 0 60 30'] },
  { id: 66, title: 'Little Chick', img: '🐥', paths: ['M30 60 C 30 20, 70 20, 70 60 C 70 90, 30 90, 30 60', 'M40 40 A5 5 0 1 0 50 40 A5 5 0 1 0 40 40', 'M60 40 A5 5 0 1 0 70 40 A5 5 0 1 0 60 40', 'M45 55 L55 55 L50 65 Z'] },
  { id: 67, title: 'Sweet Candy', img: '🍬', paths: ['M30 40 L70 40 L70 60 L30 60 Z', 'M10 30 L30 40 L30 60 L10 70 Z', 'M90 30 L70 40 L70 60 L90 70 Z'] },
  { id: 68, title: 'Toy Train', img: '🚂', paths: ['M20 40 H80 V80 H20 Z', 'M60 20 H80 V40 H60 Z', 'M30 80 A10 10 0 1 0 50 80 A10 10 0 1 0 30 80', 'M60 80 A10 10 0 1 0 80 80 A10 10 0 1 0 60 80'] },
  { id: 69, title: 'Party Balloon', img: '🎈', paths: ['M30 30 C 30 0, 70 0, 70 30 C 70 70, 50 80, 50 80 C 50 80, 30 70, 30 30', 'M45 80 L55 80 L50 90 Z'] },
  { id: 70, title: 'Cute Cat', img: '🐱', paths: ['M30 50 C 30 20, 70 20, 70 50 C 70 80, 30 80, 30 50', 'M20 20 L40 30 L30 50 Z', 'M80 20 L60 30 L70 50 Z', 'M40 40 A5 5 0 1 0 50 40 A5 5 0 1 0 40 40', 'M60 40 A5 5 0 1 0 70 40 A5 5 0 1 0 60 40'] },
  { id: 71, title: 'Fluffy Dog', img: '🐶', paths: ['M30 50 C 30 20, 70 20, 70 50 C 70 80, 30 80, 30 50', 'M10 40 C 10 20, 30 30, 30 50 C 30 70, 10 60, 10 40', 'M90 40 C 90 20, 70 30, 70 50 C 70 70, 90 60, 90 40', 'M40 45 A5 5 0 1 0 50 45 A5 5 0 1 0 40 45', 'M60 45 A5 5 0 1 0 70 45 A5 5 0 1 0 60 45'] },
  { id: 72, title: 'Shiny Crown', img: '👑', paths: ['M20 80 L80 80 L90 30 L70 50 L50 20 L30 50 L10 30 Z'] },
  { id: 73, title: 'Bouncing Ball', img: '⚽', paths: ['M20 50 A30 30 0 1 0 80 50 A30 30 0 1 0 20 50', 'M40 30 L60 30 L70 50 L60 70 L40 70 L30 50 Z'] },
  { id: 74, title: 'Magic Potion', img: '🧪', paths: ['M40 20 H60 V40 L80 80 H20 L40 40 Z', 'M30 80 L70 80 L60 60 L40 60 Z'] }
];

let addedString = '';
newGames.forEach((g) => {
  addedString += `  {
    id: ${g.id},
    category: "free",
    title: "${g.title}",
    svgContent: \`
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="black" stroke-width="3" fill="white" stroke-linejoin="round">
        ${g.paths.map((p, i) => \`<path d="\${p}" id="path-\${i+1}" />\`).join('\\n        ')}
      </svg>
    \`
  },\n`;
});

content = content.replace(/\];[\s]*$/, ',\n' + addedString + '];\n');
fs.writeFileSync(filePath, content);
console.log('Added 15 free games!');
