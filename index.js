// Functional NPMs
const fs = require('fs');
const inquirer = require('inquirer');
// Class exports
const Manager = require ('./lib/Manager')
const Intern = require ('./lib/Intern')
const Engineer = require ('./lib/Engineer')
const Employee = require ('./lib/Employee')

// Helper Functions
const writeHTML = require('./src/writeHTML');
const managerCard = require('./src/managerCard');
const internCard = require('./src/internCard');
const engineerCard = require('./src/engineerCard');
const endHTML = require('./src/endHTML');

// Holder arrays
const team = [];
const info = [];


// Question arrays
const initQuestions = [
    {
        type: 'confirm',
        message: "Hello! Are you ready to build your team?",
        name: 'intro'
    },
];

const managerQuestions = [
    {
        type:'input',
        name: 'name',
        message: "Please enter the manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: "officeNumber",
        message: "What is the manager's office number?"
    },
    {
        type: 'list',
        name: 'whoNext',
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No, my team is complete"]
    }
];

const engineerQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: "github",
        message: "What is the engineer's github username?"
    },
    {
        type: 'list',
        name: 'whoNext',
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No, my team is complete"]    }
];

const internQuestions = [
    {
        type:'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: "school",
        message: "What school does the Intern go to?"
    },
    {
        type: 'list',
        name: 'whoNext',
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No, my team is complete"]    }
];

// The following three functions append HTML script to the index.html file. These appendations are populated with info from user answers to inquirer prompts.
function appendMCards(element){
    console.log(element)
            let object = element;
            let card = managerCard(object)

            fs.appendFile('./dist/index.html', card, (err) =>
            err ? console.error(err) : console.log ('Card appended!'))
}

function appendECards(element){
    console.log(element)
    let object = element;
    let card = engineerCard(object)

    fs.appendFile('./dist/index.html', card, (err) =>
    err ? console.error(err) : console.log ('Card appended!')) 
}

function appendICards(element){
            let object = element;
            let card = internCard(object)

            fs.appendFile('./dist/index.html', card, (err) =>
            err ? console.error(err) : console.log ('Card appended!'))  
    }

// This functions fulfills four functions en route to creating a functional index.html document
// First, forEach loops through team array to declare objects as their specific class.
// Second, index.html template file is written in the dist folder.
// Third, employee cards are appended to the index file according to their class.
// Finally, closing HTML tags are appended to the HTML to finish the document creation.
function makeHTML(team){
    team.forEach(member => {
        const { name, id, email, } = member
        let employee = new Employee(name, id, email)
        if(member.officeNumber != undefined){
            const { officeNumber } = member
            let employee = new Manager(name, id, email, officeNumber)
            info.push(employee);
        }else if(member.github != undefined){
            const { github} = member
            let employee = new Engineer(name, id, email, github)
            employee.getRole();
            info.push(employee);
        }else if(member.school != undefined){
            const { school } = member
            let employee = new Intern(name, id, email, school)
            employee.getRole();
            info.push(employee);
    }})
    
    fs.writeFile('./dist/index.html',writeHTML, (err) =>
        err ? console.error(err) : console.log('wroteFile!'))

    info.forEach(employee =>{
        if(employee.hasOwnProperty('officeNumber')){
            appendMCards(employee)
        }else if(employee.hasOwnProperty('github')){
            appendECards(employee)
        }else{
            appendICards(employee)
        }})

    fs.appendFile('./dist/index.html', endHTML, (err) =>
    err ? console.error(err) : console.log ('appendedFile!'))
    }


// Generic function to load question arrays into inquirer.prompt. Responses are pushed to team array.
function askQuestions(array) {
    inquirer.prompt(array)
    .then((response) => {
        team.push(response);
        switch(response.whoNext){
            case 'Engineer': 
                askQuestions(engineerQuestions);
            break;
            case "Intern": 
                askQuestions(internQuestions)
            break;
            case 'No, my team is complete': 
                makeHTML(team);
            break;
        }
    })
};


function init(){
    inquirer.prompt(initQuestions)
    .then((response) => {
        if(response.intro === false){
            console.info( "Thank you! Run node index.js when you are ready to build your team")
        }else{
            askQuestions(managerQuestions)
        }})};

init();
