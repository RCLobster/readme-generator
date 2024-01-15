/*
THE PLAN
1. allow the command line to accept user input
2. generate a README file with Title, Description, Table of Contents, Installation, Usage, License, Contributors, Tests, Questions
3. prompt user for Title
4. display user chosen Title at top of README
5. prompt user for each section
6. display user inputs in the corresponding sections in README
7. when prompting for license, give user a list of options to pick from
8. display user selected license + a badge at the top of the README
9. prompt for GitHub username
10. display username + link to GitHub profile in Questions section
11. prompt for email
12. display user email in Questions with instructions on how to reach out with additional questions
13. When a link is clicked in table of contents, jump to corresponding section of the README
*/


// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    "What is the TITLE of your project?",
    "Write a brief DESCRIPTION of your project.",
    "What are the INSTALLATION instruction for this project?",
    "Write a brief USAGE of this project.",
    "Who are the CONTRIBUTORS?",
    "What LICENSE does this project use?",
    "What is your GitHub USERNAME?",
    "What is your EMAIL address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
