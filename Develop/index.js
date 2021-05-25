// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

var questions = [
  {
    type: "input",
    message: "What is the title of your repository?",
    name: "title",
  },
  //   objects to make: title, description, s table of contents, Installation, Usage, License,Contribution, Tests and QUestions,
  {
    type: "input",
    message: "Describe your project here.",
    name: "description",
  },
  {
    type: "input",
    message: "How do yu use this repository?",
    name: "usage",
  },
  {
    type: "list",
    message: "Which license would you like to use?",
    name: "license",
    choices: ["MIT", "GPLv2", "Apache", "None"],
  },
  {
    type: "input",
    message: "What are the guildlines for contributing to this repository?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How do you run tests on this repository?",
    name: "tests",
    default: "npm test",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your github email?",
    name: "email",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
