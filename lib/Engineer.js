const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer