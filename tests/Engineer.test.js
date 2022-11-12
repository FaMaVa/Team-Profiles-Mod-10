const Engineer = require('.././lib/Engineer');


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an engineer containing a 'name' property when called with the 'new' keyword,", () => {
            const engineer = new Engineer;
            expect("name" in engineer).toEqual(true);
        });
        it("should return an engineer containing a 'id' property when called with the 'new' keyword,", () => {
            const engineer = new Engineer;
            expect("id" in engineer).toEqual(true);
        });
        it("should return an engineer containing a 'email' property when called with the 'new' keyword,", () => {
            const engineer = new Engineer;
            expect("email" in engineer).toEqual(true);
        });
        it("should return an engineer containing a 'role' property when called with the 'new' keyword,", () => {
            const engineer = new Engineer;
            expect("role" in engineer).toEqual(true);
        });
        it("should return an engineer containing a 'github' property when called with the 'new' keyword,", () => {
            const engineer = new Engineer;
            expect("github" in engineer).toEqual(true);
        });
    });
    describe("getName", () => {
        it("should get name input from inquirer data", () => {
            const engineer = new Engineer;
            expect(engineer.getName({ data: { name: "name" } })).toBe(engineer.name);
        });
    });
    describe("getId", () => {
        it("should get id input from inquirer data", () => {
            const engineer = new Engineer;
            expect(engineer.getId({ data: { id: "id" } })).toBe(engineer.id);
        });
    });
    describe("getEmail", () => {
        it("should get email input from inquirer data", () => {
            const engineer = new Engineer;
            expect(engineer.getEmail({ data: { email: "email" } })).toBe(engineer.email);
        });
    });
    describe("getGithub", () => {
        it("should get GitHub input from inquirer data", () => {
            const engineer = new Engineer;
            expect(engineer.getGithub({ data: { github: "github" } })).toBe(engineer.github);
        });
    });
    describe("getRole", () => {
        it("should get role from inquirer data", () => {
            const engineer = new Engineer;
            expect(engineer.getRole()).toBe(`Engineer`);
        });
    });
});