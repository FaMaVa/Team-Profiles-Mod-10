class Employee {
    constructor (name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(data) {
        this.name = `${data.name}`;
        return this.name;
    };

    getId(data) {
        this.id = `${data.id}`;
        return this.id;
    };

    getEmail(data) {
        this.email =`${data.email}`
        return this.email;
    };

    //returns "employee"
    getRole () {
        this.role = `Employee`; 
        return this.role;
    };
}

module.exports = Employee;