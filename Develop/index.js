// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');

// TODO: Create an array of questions for user input

        inquirer
        .prompt([
          {
            type: 'input',
            message: "What is your name?",
            name: 'username',
          },
          {
            type: 'input',
            message: "What is your name?",
            name: 'username2',
          }
        ])
        .then(answers => {
           writeToFile("README.md", answers);
          })     

      
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
