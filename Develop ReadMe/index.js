// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const questions = [
{message:'Enter your github: ', name:'github'},
{message:'Enter your email: ', name:'email'},
{message:'Project Title: ', name:'title'},
{message:'Project Description', name:'description'},
{message:'Instalation: What are the steps required to install your project?', name:'installation'},
{message:'Usage: How do you use the application?', name:'usage'},
{message:'Credits: ', name:'credits'},
{message:'Test Instructions: ', name:'test'},
{type:'list', message:'License: ', name:'license', choices:[`MIT License`,`Boost Software License 1.0`,`The Unlicense`]}
];
// TODO: Create a function to write README file

async function runQuestions(){
    const response = await inquirer.prompt(questions)
    const output = generateMarkdown(response)
    fs.writeFileSync('README.md', output)
}
runQuestions()