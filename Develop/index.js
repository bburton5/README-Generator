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
  fs.writeFile("README2.md", "this is the added README", function (err, data) {
    console.log(Error);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([questions[0]]).then((answers) => {
    console.log("Your Project's Title:", answers.title);
    inquirer.prompt([questions[1]]).then((answers) => {
      console.log("Your Project's Description:", answers.description);
      inquirer.prompt([questions[2]]).then((answers) => {
        console.log(
          "Your Project's Installation Instructions:",
          answers.install
        );
        inquirer.prompt([questions[3]]).then((answers) => {
          console.log("Your Project's Usage Info:", answers.usageinfo);
          inquirer.prompt([questions[4]]).then((answers) => {
            console.log(
              "Your Project's Contribution Guidelines:",
              answers.constribution
            );
            inquirer.prompt([questions[5]]).then((answers) => {
              console.log("Your Project's Testing Instructions:", answers.test);
              inquirer.prompt([questions[6]]).then((answers) => {
                console.log("Your Github Username:", answers.github);
                inquirer.prompt([questions[7]]).then((answers) => {
                  console.log("Your Email Address:", answers.email);
                  writeToFile();
                });
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
