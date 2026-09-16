const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

// 1. Update .nav-link
css = css.replace(
  /\.nav-link\s*\{\s*padding:\s*12px 14px;/,
  `.nav-link {\n  padding: 14px 16px;\n  min-height: 44px;`
);

// 2. Update .mobile-menu button
css = css.replace(
  /\.mobile-menu button\s*\{([\s\S]*?)padding:\s*8px 0;/,
  `.mobile-menu button {$1padding: 12px 0;\n  min-height: 44px;`
);

// 3. Update .dropdown-link
css = css.replace(
  /\.dropdown-link\s*\{([\s\S]*?)padding:\s*11px 20px;/,
  `.dropdown-link {$1padding: 12px 20px;\n  min-height: 44px;`
);

// 4. Update .mobile-sub-link media query
css = css.replace(
  /\.mobile-sub-link\s*\{([\s\S]*?)padding:\s*6px 0 !important;/,
  `.mobile-sub-link {$1padding: 10px 0 !important;\n    min-height: 44px;`
);

// 5. Update .mobile-services-accordion-btn media query
css = css.replace(
  /\.mobile-services-accordion-btn\s*\{([\s\S]*?)padding:\s*10px 0;/,
  `.mobile-services-accordion-btn {$1padding: 12px 0;\n    min-height: 44px;`
);

fs.writeFileSync('src/App.css', css);
