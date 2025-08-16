// move-browser.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'docs', 'browser');
const dst = path.join(__dirname, 'docs');

// 1) Copia TODO el contenido de docs/browser → docs
fs.cpSync(src, dst, { recursive: true });

// 2) Crea .nojekyll para que Pages no procese rutas raras
const nojekyll = path.join(dst, '.nojekyll');
if (!fs.existsSync(nojekyll)) fs.writeFileSync(nojekyll, '');

// 3) Borra la carpeta browser (opcional)
fs.rmSync(src, { recursive: true, force: true });

console.log('✅ Contenido movido a docs/ y .nojekyll creado');
