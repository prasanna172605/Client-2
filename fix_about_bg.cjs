const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldAboutImg = `.about-main-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 4px;
}`;

const newAboutImg = `.about-main-img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  border-radius: 4px;
  /* Soft fallback pattern */
  background-color: var(--border-color);
  background-image: linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent);
  background-size: 20px 20px;
}`;

css = css.replace(oldAboutImg, newAboutImg);
fs.writeFileSync('src/App.css', css);
