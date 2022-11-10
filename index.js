// const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Manager = require('./lib/Manager');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const { inherits } = require('util');
// const { type } = require('os');

//asks for manager's info
function init () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        }])
        .then(() => {
            firstQ();
        });
};

//asks what type of employee
function firstQ () {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]

        }])
        .then((data) => {
            if (data.employeeType === "Engineer") {
                engineerQs ();
            };
            if (data.employeeType === "Intern") {
                internQs ();
            };
            if (data.employeeType === "I don't want to add any more team members") {
                return;
            };
        });
};

//asks questions for engineering team member
function engineerQs () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub username?",
        }])
        .then(() => {
            firstQ ();
        });
};

function internQs () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
        }])
        .then(() => {
            firstQ ();
        });
};

init();