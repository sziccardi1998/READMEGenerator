// bring in required modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown')

// create a promise to write to file as a response
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user that will be passed to inquirer
const questions = [
{
    type: 'input',
    message: 'What is your GitHub username? (Do not include @)',
    name: 'username',
}, 
{
    type: 'input',
    message: 'What is your email address.',
    name: 'email',
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is the name of this GitHub Repo?',
    name: 'repo',
},
{
    type: 'input',
    message: 'Enter a brief description of your project:',
    name: 'description'
},
{
    type: 'input',
    message: 'Enter installation instructions for your application:',
    name: 'installation'
},
{
    type: 'input',
    message: 'Enter usage information for your application:',
    name: 'usage',
},
{
    type: 'input',
    message: 'Enter your applications contribution guidelines:',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Enter testing instructions for your application:',
    name: 'testing',
},
{
    type: 'list',
    message: 'Choose a license for your application:',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    name: 'license'
}
];

// pass the questions into inquirer
const userResponse = () => inquirer.prompt(questions);

// create variable with the name of the file that will be written
const writtenFile = 'exampleREADME.md';

// function to initialize program
function init() {
    userResponse()
    .then((answers) => writeFileAsync(writtenFile, generateMarkdown(answers)))
    .then(() => console.log("Succesfully written to " + writtenFile))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
