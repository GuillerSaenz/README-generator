// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
		type: "input",
		name: "title",
		message: "What is the name of the project?",
	},
	{
		type: "input",
		name: "description",
		message: "What is the description of the project?",
	},
	{
		type: "input",
		name: "installation",
		message: "Write installation instructions for the project:",
	},
	{
		type: "input",
		name: "usage",
		message: "Write usage information for the project:",
	},
	{
		type: "input",
		name: "contributing",
		message: "Write contribution guidelines for the project:",
	},
	{
		type: "input",
		name: "tests",
		message: "Write tests for the project:",
	},
	{
		type: "list",
		name: "license",
		message: "What is the license of the project?",
		choices: ["MIT License", "Apache License 2.0", "GNU GPLv3", "GNU LGPLv3"],
	},
	{
		type: "input",
		name: "username",
		message: "Enter your github username",
	},
	{
		type: "input",
		name: "email",
		message: "Enter your E-mail",
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.log(`Error writting README file: ${err}`) : console.log(`README file ${fileName} was creted succesfully!`);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) =>
            writeToFile("README.test.md", answers)
        )
}

// Function call to initialize app
init();
