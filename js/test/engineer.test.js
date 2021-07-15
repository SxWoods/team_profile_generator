//Should attempt to require the employee file 
const Engineer = require("java/engineer");

test("Create a new Engineer", () => {
    const newEmp = new Engineer();
    expect(typeof(newEmp)).toBe("object");
})

test("Name assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Engineer(name);
    expect(newEmp.name).toBe(name);
})

test("Name assigned through constructor", () => {
    const id = 5;
    const newEmp = new Engineer("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Engineer("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github assigned through constructor", () =>{
    const gitHub = "testGit";
    const newEmp = new Engineer("Name", "ID", "email", gitHub);
    expect(newEmp.gitHub).toBe(gitHub);
})

test("Get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Engineer(name);
    expect(newEmp.getName()).toBe(name);
})

test("Get email from getID()", () => {
    const id = 5;
    const newEmp = new Engineer("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Engineer("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Get gitHub from getGitHub", () => {
    const git = "github"
    const newEmp = new Engineer("Name", "ID", "Email", git);
    expect(newEmp.getGitHub()).toBe(git);
})

test("Get role from getType()", () =>{
    const role = "Engineer";
    const newEmp = new Engineer("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})