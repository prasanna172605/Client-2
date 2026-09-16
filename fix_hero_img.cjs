const fs = require('fs');
let data = fs.readFileSync('src/components/HeroSlider.jsx', 'utf8');

data = data.replace(/image: '\/images\//g, "image: import.meta.env.BASE_URL + 'images/");
fs.writeFileSync('src/components/HeroSlider.jsx', data);
