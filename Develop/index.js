// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "What is the desrciption of your project?",
  },
  {
    name: "installation-instructions",
    type: "input",
    message: "What are the installation instructions?",
  },
  {
    name: "usageinfo",
    type: "checkbox",
    message: "What is the project's usage information?",
    choices: ["MIT", "ISC"],
  },
  {
    name: "contribution-guidelines",
    type: "input",
    message: "What are the contribution guidelines?",
  },
  {
    name: "test-instructions",
    type: "input",
    message: "What are the testing instructions?",
  },
  {
    name: "github-handle",
    type: "input",
    message: "What is your github username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([questions[0]]).then((answers) => {
    inquirer.prompt([questions[1]]).then((answers) => {
      inquirer.prompt([questions[2]]).then((answers) => {
        inquirer.prompt([questions[3]]).then((answers) => {
          inquirer.prompt([questions[4]]).then((answers) => {
            inquirer.prompt([questions[5]]).then((answers) => {
              inquirer.prompt([questions[6]]).then((answers) => {
                inquirer.prompt([questions[7]]).then((answers) => {});
              });
            });
          });
        });
      });
    });
  });
}

// Function call to initialize app
init();
