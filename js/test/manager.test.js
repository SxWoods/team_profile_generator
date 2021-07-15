//Should attempt to require employee file 
const Manager = require("jaca/manager");

test("Create a new Manager", () => {
    const newEmp = new Manager();
    expect(typeof(newEmp)).toBe("object");
})

test("Name assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Manager(name);
    expect(newEmp.name).toBe(name);
})

test("Name assigned through constructor", () => {
    const id = 5;
    const newEmp = new Manager("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Manager("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Github assigned through constructor", () =>{
    const officeNumber = 1;
    const newEmp = new Manager("Name", "ID", "email", officeNumber);
    expect(newEmp.officeNumber).toBe(officeNumber);
})

test("Get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Manager(name);
    expect(newEmp.getName()).toBe(name);
})

test("Get email from getID()", () => {
    const id = 5;
    const newEmp = new Manager("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Manager("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Get gitHub from getSchool", () => {
    const officeNumber = "Iowa"
    const newEmp = new Manager("Name", "ID", "Email", officeNumber);
    expect(newEmp.getOffice()).toBe(officeNumber);
})

test("Get role from getType()", () =>{
    const role = "Manager";
    const newEmp = new Manager("Name", "ID", "email", role);
    expect(newEmp.getType()).toBe(role);
})