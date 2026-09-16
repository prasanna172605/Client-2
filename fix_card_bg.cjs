const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldProjectImg = `.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}`;

const newProjectImg = `.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  /* Fallback background if the image hasn't loaded yet or fails */
  background-color: var(--border-color);
  background-image: linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent);
  background-size: 20px 20px;
}`;

css = css.replace(oldProjectImg, newProjectImg);
fs.writeFileSync('src/App.css', css);
