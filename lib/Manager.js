const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    };
    
    getOfficeNumber(data) {
        this.officeNumber = `${data.officeNumber}`;
        return this.officeNumber;
    }

    //overrides to return "manager"
    getRole(data) {
        this.role = `Manager`;
        return this.role;
    };
}

module.exports = Manager;