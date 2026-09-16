const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');
css = css.replace('   14. RESPONSIVE BREAKPOINTS\n@media', '   14. RESPONSIVE BREAKPOINTS\n   -------------------------------------------------------------------------- */\n@media');
fs.writeFileSync('src/App.css', css);
