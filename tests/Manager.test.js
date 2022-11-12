const Manager = require('.././lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an manager containing a 'name' property when called with the 'new' keyword,", () => {
            const manager = new Manager;
            expect("name" in manager).toEqual(true);
        });
        it("should return an manager containing a 'id' property when called with the 'new' keyword,", () => {
            const manager = new Manager;
            expect("id" in manager).toEqual(true);
        });
        it("should return an manager containing a 'email' property when called with the 'new' keyword,", () => {
            const manager = new Manager;
            expect("email" in manager).toEqual(true);
        });
        it("should return an manager containing a 'role' property when called with the 'new' keyword,", () => {
            const manager = new Manager;
            expect("role" in manager).toEqual(true);
        });
        it("should return an manager containing a 'officeNumber' property when called with the 'new' keyword,", () => {
            const manager = new Manager;
            expect("officeNumber" in manager).toEqual(true);
        });
    });
    describe("getName", () => {
        it("should get name input from inquirer data", () => {
            const manager = new Manager;
            expect(manager.getName({ data: { name: "name" } })).toBe(manager.name);
        });
    });
    describe("getId", () => {
        it("should get id input from inquirer data", () => {
            const manager = new Manager;
            expect(manager.getId({ data: { id: "id" } })).toBe(manager.id);
        });
    });
    describe("getEmail", () => {
        it("should get email input from inquirer data", () => {
            const manager = new Manager;
            expect(manager.getEmail({ data: { email: "email" } })).toBe(manager.email);
        });
    });
    describe("getOfficeNumber", () => {
        it("should get office number input from inquirer data", () => {
            const manager = new Manager;
            expect(manager.getOfficeNumber({ data: { officeNumber: "officeNumber" } })).toBe(manager.officeNumber);
        });
    });
    describe("getRole", () => {
        it("should get role from inquirer data", () => {
            const manager = new Manager;
            expect(manager.getRole()).toBe(`Manager`);
        });
    });
});