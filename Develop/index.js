// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
    message: "What is the description of your project?",
  },
  {
    name: "install",
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
    name: "contribution",
    type: "input",
    message: "What are the contribution guidelines?",
  },
  {
    name: "test",
    type: "input",
    message: "What are the testing instructions?",
  },
  {
    name: "github",
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
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err, data) {
    console.log(Error);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README2.md", answers);
  });
}

// Function call to initialize app
init();
