const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getType(){
        return "Intern";
    }
}

module.exports = Intern;