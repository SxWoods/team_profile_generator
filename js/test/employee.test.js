//Should attempt to require the employee file 
const Employee = require("/java/employee");

test("Create new Employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
})

test("Name assigned through constructor", () => {
    const name = "Atticus";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
})

test("Name assigned through constructor", () => {
    const id = 5;
    const newEmp = new Employee("Name", id);
    expect(newEmp.id).toBe(id);
})

test("Email assigned through constructor", () =>{
    const email = "fake@email.com";
    const newEmp = new Employee("Name", "ID", email);
    expect(newEmp.email).toBe(email);
})

test("Get name from getName()", () => {
    const name = "Atticus";
    const newEmp = new Employee(name);
    expect(newEmp.getName()).toBe(name);
})

test("Get email from getID()", () => {
    const id = 5;
    const newEmp = new Employee("Name", id);
    expect(newEmp.getID()).toBe(id);
})

test("Get email from getEmail()", () =>{
    const email = "fake@email.com";
    const newEmp = new Employee("Name", "ID", email);
    expect(newEmp.getEmail()).toBe(email);
})

test("Get role from getType()", () =>{
    const role = "Employee";
    const newEmp = new Employee("Name", "ID", "email", "role");
    expect(newEmp.getType()).toBe(role);
})