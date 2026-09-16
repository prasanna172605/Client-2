const fs = require('fs');
let css = fs.readFileSync('src/App.css', 'utf8');

const oldHero = `.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease-in-out, transform 8s ease;
  transform: scale(1.04);
}`;

const newHero = `.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* Add a warm fallback gradient to prevent harsh black flashes while images load */
  background-color: var(--dark-bg);
  background-image: linear-gradient(135deg, rgba(24, 26, 29, 1) 0%, rgba(35, 38, 42, 1) 100%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease-in-out, transform 8s ease;
  transform: scale(1.04);
}`;

css = css.replace(oldHero, newHero);
fs.writeFileSync('src/App.css', css);
