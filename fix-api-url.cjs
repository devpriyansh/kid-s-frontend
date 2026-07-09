const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('import.meta.env.VITE_API_BASE_URL')) {
    const oldStr = "const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://kid-s-backend.onrender.com/api/v1';";
    const newStr = `const _envUrl = import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = _envUrl ? (_envUrl.endsWith('/api/v1') ? _envUrl : _envUrl.replace(/\\/$/, '') + '/api/v1') : 'https://kid-s-backend.onrender.com/api/v1';`;
    
    // AuthContext and other files might have indentation. 
    // Let's use a regex to match it with leading spaces
    const regex = /^[ \t]*const API_BASE_URL = import\.meta\.env\.VITE_API_BASE_URL \|\| 'https:\/\/kid-s-backend\.onrender\.com\/api\/v1';/gm;
    
    if (regex.test(content)) {
      content = content.replace(regex, (match) => {
        const leadingSpaces = match.match(/^[ \t]*/)[0];
        return leadingSpaces + newStr.replace(/\n/g, '\n' + leadingSpaces);
      });
      fs.writeFileSync(file, content);
      console.log('Fixed', file);
    }
  }
});
