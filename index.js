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

const team = [];
const info = [];



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

function appendCards(element){
    console.log(element.getRole())
    const { name, id, email, officeNumber}  = element;
    let object = element;
let card = managerCard(object)
console.log(card)

    // fs.appendFile('./dist/index.html', card, (err) =>
    // err ? console.error(err) : console.log ('Card appended!'))  

    // switch(element){
    //     // case "Manager":
    //     //     fs.appendFile('./dist/index.html', managerCard(element), (err) =>
    //     //     err ? console.error(err) : console.log ('Card appended!'))
    //     //     break;
    //     // case "Engineer":
    //     //     fs.appendFile('./dist/index.html', element(engineerCard), (err) =>
    //     //     err ? console.error(err) : console.log ('Card appended!'))
    //     //     break;
    //     // case "Intern":
    //     //     fs.appendFile('./dist/index.html', element(internCard), (err) =>
    //     //     err ? console.error(err) : console.log ('Card appended!'))
    //     //     break;
    // }
}

function generateHTML(team){
    console.info("hello!")
    team.forEach(member => {
        const { name, id, email, } = member
        let employee = new Employee(name, id, email)
        if(member.officeNumber != undefined){
            const { officeNumber } = member
            let employee = new Manager(name, id, email, officeNumber)
            console.info(employee.getRole());
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
    // console.log(info);
    
    fs.writeFile('./dist/index.html',writeHTML, (err) =>
        err ? console.error(err) : console.log('wroteFile!'))

    info.forEach(employee =>{
        if(employee.hasOwnProperty('officeNumber')){
            appendCards(employee)
        }else if(employee.hasOwnProperty('github')){
            appendCards(employee)
        }else{
            appendCards(employee)
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
                generateHTML(team);
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
