// Includes packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Creates an array of questions for user input
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
    name: "usage",
    type: "input",
    message:
      "What are the instructions for your project and some examples for its use?",
  },
  {
    name: "license",
    type: "checkbox",
    message: "What license is the project covered under?",
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

// Creates a function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err, data) {
    console.log(Error);
  });
}

// Creates a function to initialize the application
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README2.md", answers);
  });
}

// The function call to initialize the application
init();
