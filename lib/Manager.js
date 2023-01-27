const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getRole(){
        console.log("manager")
        return "Manager"
    }
}

module.exports = Manager