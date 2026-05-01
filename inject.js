const fs = require('fs');
let servicesHtml = fs.readFileSync('services.html', 'utf8');
let generatedHtml = fs.readFileSync('generated_services.html', 'utf8');

// Find the start of the container
const startMarker = 'id="services-categories-container"';
const startIdx = servicesHtml.indexOf(startMarker);

if (startIdx === -1) {
  console.log('ERROR: Container not found');
  process.exit(1);
}

// Find the opening tag start
let tagStart = servicesHtml.lastIndexOf('<div', startIdx);

// Now find the matching closing </div> by counting nested divs
let depth = 0;
let i = tagStart;
let foundEnd = -1;

while (i < servicesHtml.length) {
  if (servicesHtml.substring(i, i + 4) === '<div') {
    depth++;
    i += 4;
  } else if (servicesHtml.substring(i, i + 6) === '</div>') {
    depth--;
    if (depth === 0) {
      foundEnd = i + 6;
      break;
    }
    i += 6;
  } else {
    i++;
  }
}

if (foundEnd === -1) {
  console.log('ERROR: Could not find matching closing tag');
  process.exit(1);
}

const replacement = '<div id="services-categories-container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">\n' + generatedHtml + '\n</div>';

servicesHtml = servicesHtml.substring(0, tagStart) + replacement + servicesHtml.substring(foundEnd);
fs.writeFileSync('services.html', servicesHtml);
console.log('Successfully replaced services container');
