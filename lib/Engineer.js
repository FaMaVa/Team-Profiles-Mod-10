const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    };
    
    getGithub(data) {
        this.github = `${data.github}`;
        return this.github;
    };

    //overrides to return "engineer"
    getRole() {
        this.role = `Engineer`;
        return this.role;
    };
}

module.exports = Engineer;