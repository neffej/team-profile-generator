const fs = require('fs');
const inquirer = require('inquirer');

const team = []

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
]

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
]

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
]
// function generateProfiles


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
                console.info(team);
            break;
        }
    console.info(team);
    })};


function init(){
    console.info(team)
    inquirer.prompt(initQuestions)
    .then((response) => {
        console.info(response)
        if(response.intro === false){
            console.info( "Thank you! Run node index.js when you are ready to build your team")
        }else{
            askQuestions(managerQuestions)
        }})};



init();