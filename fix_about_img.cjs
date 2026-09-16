const fs = require('fs');
let data = fs.readFileSync('src/components/AboutSection.jsx', 'utf8');

data = data.replace(/src="\/images\/service-concrete-estimation\.jpg"/g, "src={`${import.meta.env.BASE_URL}images/service-concrete-estimation.jpg`}");
fs.writeFileSync('src/components/AboutSection.jsx', data);
