const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    
    getSchool() {

    };

    //overrides to return "manager"
    getRole() {

    };
}

module.exports = Intern;