const jsdoc = require('jsdoc-to-markdown');
const fs = require('fs');

let ReadMe = fs.readFileSync('README_template.md').toString();

// Documentation Gen
const documentation = jsdoc.renderSync({ files: 'src/*.js' });
ReadMe = ReadMe.replace(/<docs><\/docs>/g, documentation);


fs.writeFileSync('README.md', ReadMe);