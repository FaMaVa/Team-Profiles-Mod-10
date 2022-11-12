const Intern = require('.././lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an intern containing a 'name' property when called with the 'new' keyword,", () => {
            const intern = new Intern;
            expect("name" in intern).toEqual(true);
        })
        it("should return an intern containing a 'id' property when called with the 'new' keyword,", () => {
            const intern = new Intern;
            expect("id" in intern).toEqual(true);
        })
        it("should return an intern containing a 'email' property when called with the 'new' keyword,", () => {
            const intern = new Intern;
            expect("email" in intern).toEqual(true);
        })
        it("should return an intern containing a 'role' property when called with the 'new' keyword,", () => {
            const intern = new Intern;
            expect("role" in intern).toEqual(true);
        })
        it("should return an intern containing a 'school' property when called with the 'new' keyword,", () => {
            const intern = new Intern;
            expect("school" in intern).toEqual(true);
        });
    });

    describe("getName", () => {
        it("should get name input from inquirer data", () => {
            const intern = new Intern;
            expect(intern.getName({ data: { name: "name" } })).toBe(intern.name);
        });
    });
    describe("getId", () => {
        it("should get id input from inquirer data", () => {
            const intern = new Intern;
            expect(intern.getId({ data: { id: "id" } })).toBe(intern.id);
        });
    });
    describe("getEmail", () => {
        it("should get email input from inquirer data", () => {
            const intern = new Intern;
            expect(intern.getEmail({ data: { email: "email" } })).toBe(intern.email);
        });
    });
    describe("getSchool", () => {
        it("should get school input from inquirer data", () => {
            const intern = new Intern;
            expect(intern.getSchool({ data: { school: "school" } })).toBe(intern.school);
        });
    });
    describe("getRole", () => {
        it("should get role from inquirer data", () => {
            const intern = new Intern;
            expect(intern.getRole()).toBe(`Intern`);
        });
    });
});