const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the TITLE of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief DESCRIPTION of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the INSTALLATION instruction for this project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Write a brief USAGE of this project.'
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who are the CONTRIBUTORS on this project?'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which LICENSE does this project use?',
            choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub USERNAME?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your EMAIL address?'
        }
    ])
    .then((data) => {
        let chosenLicense = data.license;
        let modifyLicense = chosenLicense[0];
        modifyLicense = modifyLicense.replace(/ /g, "_");
        modifyLicense = modifyLicense.replace(/-/g, "_");

        console.log(modifyLicense);

        let fileText = `
# ${data.title}
![License](https://img.shields.io/badge/License-${modifyLicense}-blue.svg)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributors](#contributors)
5. [License](#license)
6. [Questions](#questions)

## Description 
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## License
This project is covered under the following license: ${data.license}

## Questions
My GitHub Repository: https://github.com/${data.username}

If you have any additional questions about this project please reach out and email me at: ${data.email}

        `;

        fs.writeFile('genREADME.md', fileText, (err) =>
            err ? console.log(err) : console.log('File Generated!')
        );
    });
