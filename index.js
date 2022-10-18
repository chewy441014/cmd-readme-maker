// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{ name: "title", message: "Project Title" },
{ name: "desc", message: "Description" },
{ name: "instr", message: "Installation Instructions" },
{ name: "usage", message: "Usage Information" },
{ name: "contr", message: "Contribution Guidelines" },
{ name: "test", message: "Test Instructions" },
{ name: "lic", message: "Choose one of these licenses: ", type: "list", choices: ["MIT License", "ISC License", "GNU General Public License v3.0"] },
{ name: "github", message: "Type your Github username: " },
{ name: "email", message: "Type your email: " }];

// a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./readme-demo/'+fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            let text = genMD(answers);
            writeToFile('README.md', text);
        });
}

// Function call to initialize app
init();
