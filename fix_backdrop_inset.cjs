const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldBackdrop = `  .mobile-drawer-backdrop {
    position: fixed;
    top: 86px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(2px);
    z-index: 998;
    animation: fadeInBackdrop 0.35s ease-out forwards;
  }`;

const newBackdrop = `  .mobile-drawer-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(2px);
    z-index: 998;
    animation: fadeInBackdrop 0.35s ease-out forwards;
  }`;

css = css.replace(oldBackdrop, newBackdrop);
fs.writeFileSync('src/App.css', css);
