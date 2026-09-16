const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldDrawer = `    height: calc(100vh - 86px);`;
const newDrawer = `    height: calc(100vh - 86px);
    height: calc(100dvh - 86px);`;

css = css.replace(oldDrawer, newDrawer);
fs.writeFileSync('src/App.css', css);
