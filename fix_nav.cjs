const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

css = css.replace(
  /\.mobile-nav-drawer \{\s*display: block;\s*max-height: calc\(100vh - 86px\);\s*overflow-y: auto;\s*\}/,
  `.mobile-nav-drawer {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 86px);
    overflow-y: auto;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  }
  .mobile-nav-drawer.open {
    display: block;
    animation: slideDown 0.3s ease-out forwards;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }`
);

fs.writeFileSync('src/App.css', css);
