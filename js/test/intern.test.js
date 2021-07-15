//Should attempt to require employee file 
const Intern = require("java/intern");

test("Create a new Intern", () => {
    const newEmp = new Intern();
    expect(typeof(newEmp)).toBe("object");
})

test("Name assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Intern(name);
    expect(newEmp.name).toBe(name);
})

test("Name assigned through constructor", () => {
    const id = 5;
    const newEmp = new Intern("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Intern("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github assigned through constructor", () =>{
    const school = "Iowa";
    const newEmp = new Intern("Name", "ID", "email", school);
    expect(newEmp.school).toBe(school);
})

test("Get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Intern(name);
    expect(newEmp.getName()).toBe(name);
})

test("Get email from getID()", () => {
    const id = 5;
    const newEmp = new Intern("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Intern("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Get gitHub from getSchool", () => {
    const school = "Iowa"
    const newEmp = new Intern("Name", "ID", "Email", school);
    expect(newEmp.getSchool()).toBe(school);
})

test("Get role from getType()", () =>{
    const role = "Intern";
    const newEmp = new Intern("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})