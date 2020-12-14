// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)
  * [License](#license)
   
  
  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}


  ## Contributing

  ${data.contribution}


  ## Testing

  ${data.testing}


  ## Questions

  If you have questions regarding this application I can be reached through email at ${data.email}
  Or through my github account at @${data.username}


  ## License

  This application is covered under the following license ${data.license}

`;
}

module.exports = generateMarkdown;
