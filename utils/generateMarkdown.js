// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return "";
  }

  const parsedLicense = license.split(" ").join("_");
	return `[![License](https://img.shields.io/badge/License-${parsedLicense}-green)](${renderLicenseLink(license)})`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
		return "";
	}

	const links = {
		"MIT License": "http://opensource.org/licenses/MIT",
		"Apache License 2.0": "http://www.apache.org/licenses/LICENSE-2.0",
		"GNU GPLv3": "",
		"GNU LGPLv3": "",
	};

	return links[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
		return "";
	}

	return `## License
  Licensed under the [${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## About me
  asdadasdas

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For further questions, you can refer to [my Github Page](https://github.com/${data.username})
  Additionally, you can reach me via email: ${data.email}
  `;
  }

  module.exports = generateMarkdown;
