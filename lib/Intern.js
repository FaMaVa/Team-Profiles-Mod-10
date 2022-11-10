const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    };
    
    getSchool(data) {
        this.school = `${data.school}`;
        return this.school;
    };

    //overrides to return "intern"
    getRole() {
        this.role = `Intern`;
        return this.role;
    };
}

module.exports = Intern;