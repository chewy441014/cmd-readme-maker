/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title 
    of my project and sections entitled Description, Table of Contents, 
Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, 
    contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled 
    Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a 
    notice is added to the section of the README entitled License that explains 
which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a 
    link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with 
    instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var genMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
var questions = [{ name: "title", message: "Project Title" },
{ name: "desc", message: "Description" },
{ name: "instr", message: "Installation Instructions" },
{ name: "usage", message: "Usage Information" },
{ name: "contr", message: "Contribution Guidelines" },
{ name: "test", message: "Test Instructions" },
{ name: "lic", message: "Choose one of these licenses: ", type: "list", choices: ["MIT License", "ISC License", "GNU General Public License v3.0"] },
{ name: "github", message: "Type your Github username: " },
{ name: "email", message: "Type your email: " }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
    console.log('Initializing')
    // console.log(inquirer)
    inquirer.prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            // console.log(questions)
            // console.log(answers)
            let text = genMD(answers);
            // console.log(text)
            writeToFile('README.md', text);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// Function call to initialize app
init();
