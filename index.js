const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateProfiles = require('./src/generate-profiles');
const generateHTML = require('./src/generateHTML');


//asks for manager's info
function init() {
    console.log("\nWelcome to the team generator!")
    console.log("Use`npm run reset` to reset the dist/ folder\n")
    console.log("\nPlease build your team 👥")
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
        .then((data) => {
            console.log(data);
            const manager = new Manager;
            manager.getName(data);
            manager.getId(data);
            manager.getEmail(data);
            manager.getOfficeNumber(data);
            manager.getRole();
            generateProfiles.profiles.push(manager);
            firstQ();
        });
};

//asks what type of employee
function firstQ() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]

        }])
        .then((data) => {
            if (data.employeeType === "Engineer") {
                engineerQs(data);
            };
            if (data.employeeType === "Intern") {
                internQs(data);
            };
            if (data.employeeType === "I don't want to add any more team members") {
                generateProfiles.generateProfiles();
                return;
            };
        });
};

//asks questions for engineering team member
function engineerQs() {
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
        .then((data) => {
            console.log(data);
            const engineer = new Engineer;
            engineer.getName(data);
            engineer.getId(data);
            engineer.getEmail(data);
            engineer.getGithub(data);
            engineer.getRole();
            generateProfiles.profiles.push(engineer);
            firstQ();
        });
};

function internQs() {
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
        .then((data) => {
            console.log(data);
            const intern = new Intern;
            intern.getName(data);
            intern.getId(data);
            intern.getEmail(data);
            intern.getSchool(data);
            intern.getRole();
            generateProfiles.profiles.push(intern);
            firstQ();
        });
};


init();