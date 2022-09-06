// Creates a function that returns a license badge based on which license is passed in by user
function renderLicenseBadge(data) {
  const fs = require("fs");
  if (data.license[0] == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (data.license[0] == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
    `;
  } else {
    return " ";
  }
}

// Creates a function that returns the appropriate license link
function renderLicenseLink(data) {
  const fs = require("fs");
  if (data.license[0] == "MIT") {
    return `https://opensource.org/licenses/MIT`;
  } else if (data.license[0] == "ISC") {
    return `https://opensource.org/licenses/ISC`;
  } else {
    return " ";
  }
}

// Creates a function to generate markdown for the README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}

  # ${data.title}

## Description
- ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- ${data.install}

## Usage
- ${data.usage}

## License
- NOTICE: This application is covered under the ISC License.
- TO read more about this license follow this link: ${renderLicenseLink(data)} 

## Contributing
- ${data.contribution}

## Tests
- ${data.test}

## Questions
- My Github username: ${data.github}
- Link to my Github: https://github.com/${data.github}
- If you have additional questions, please reach out to me via my email: ${
    data.email
  }
`;
}

module.exports = generateMarkdown;
