const fs = require('fs');
let data = fs.readFileSync('src/data/contentData.js', 'utf8');

data = data.replace(/\/images\//g, './images/');
fs.writeFileSync('src/data/contentData.js', data);
