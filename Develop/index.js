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
            message: 'Please enter the title of your project. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title your project!');
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
            name: 'Installation',
            message: 'How do you install this application? (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter how to install this application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Enter the usage. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter the usage!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choosing following license. (Required)',
            choices: ["Apache","Boost","Eclipse","IBM","MIT"],
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
            name: 'Contributing',
            message: 'Who are the contributors? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the contributors!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How do you test your application? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter how to test your application!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is your Email? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
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
        fs.writeFile('./dist/README.md', generatePage(answers), err => {
            if (err) throw err;
            console.log('README file has been created!')
        })
    })

}

// Function call to initialize app
init();
