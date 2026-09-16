const fs = require('fs');
let data = fs.readFileSync('src/data/contentData.js', 'utf8');

// The base url handles trailing slashes correctly
data = data.replace(/image: "\/images\/(.+?)"/g, "image: import.meta.env.BASE_URL + 'images/$1'");
fs.writeFileSync('src/data/contentData.js', data);
