const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getOffice(){
        return this.officeNumber;
    }

    getType(){
        return "Manager";
    }
}

module.exports = Manager;