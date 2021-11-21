// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile } = require('./utils/generate-readme');
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is your description? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'TableOfContents',
            message: 'What is your Table of Contents? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Table of Contents!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'BuiltWith',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter the usage. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter the usage for the README!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Websites',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'Give the credits to whom deserve. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to give the credits!');
                    return false;
                }
            }
        },
    ]);
}



// TODO: Create a function to initialize app
function init() {
    questions().then(answers => {
        // TODO: Create a function to write README file
        fs.writeFile('README.md', generatePage(answers), err => {
            if (err) throw err;
            console.log('README file has been created!')
        })
    })

}

// Function call to initialize app
init();
