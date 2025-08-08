const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'docs', 'browser', 'index.html');
const dest = path.join(__dirname, 'docs', 'index.html');

fs.copyFileSync(src, dest);
console.log('✅ index.html copiado a docs/index.html');
