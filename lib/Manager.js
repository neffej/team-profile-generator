const Employee = require('./Employee')
const managerCard = require('../src/managerCard')

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

    writeFile(){
        fs.appendFile('./dist/index.html', managerCard,(err) =>
        err ? console.error(err) : console.log ('Card appended!'))
    }

    getRole(){
        return "Manager"
    }
}

module.exports = Manager