const Employee = require('.././lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an employee containing a 'name' property when called with the 'new' keyword", () => {
            const employee = new Employee;
            expect("name" in employee).toEqual(true);
        });
        it("should return an employee containing a 'id' property when called with the 'new' keyword", () => {
            const employee = new Employee;
            expect("id" in employee).toEqual(true);
        });
        it("should return an employee containing a 'email' property when called with the 'new' keyword", () => {
            const employee = new Employee;
            expect("email" in employee).toEqual(true);
        });
        it("should return an employee containing a 'role' property when called with the 'new' keyword", () => {
            const employee = new Employee;
            expect("role" in employee).toEqual(true);
        });
    });
    describe("getName", () => {
        it("should get name input from inquirer data", () => {
            const employee = new Employee;
            expect(employee.getName({data: {name: "name"}})).toBe(employee.name);
        });
    });
    describe("getId", () => {
        it("should get id input from inquirer data", () => {
            const employee = new Employee;
            expect(employee.getId({data: {id: "id"}})).toBe(employee.id);  
        });
    });
    describe("getEmail", () => {
        it("should get email input from inquirer data", () => {
            const employee = new Employee;
            expect(employee.getEmail({data: {email: "email"}})).toBe(employee.email);
        });
    });
    describe("getRole", () => {
        it("should get role from inquirer data", () => {
            const employee = new Employee;
            expect(employee.getRole()).toBe(`Employee`);  
        });
    });
});