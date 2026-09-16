const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldDrawer = `  .mobile-nav-drawer {
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
  }`;

const newDrawer = `  .mobile-nav-drawer {
    display: block;
    position: fixed;
    top: 86px;
    right: 0;
    width: 85%;
    max-width: 380px;
    height: calc(100vh - 86px);
    max-height: none;
    overflow-y: auto;
    box-shadow: -5px 0 25px rgba(0,0,0,0.25);
    border-bottom: none;
    border-left: 2px solid var(--primary-yellow);
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.35s;
    visibility: hidden;
  }
  .mobile-nav-drawer.open {
    transform: translateX(0);
    visibility: visible;
  }`;

css = css.replace(oldDrawer, newDrawer);
fs.writeFileSync('src/App.css', css);
