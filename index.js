// bring in required modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
    message: 'Enter your applications contribution guidlines:',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Enter testing instructions for your application:',
    name: 'testing',
},
{
    type: 'list',
    message: 'Choose a liscense for your application:',
    choices: [],
    name: 'liscense'
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
