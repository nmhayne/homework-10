// BECAUSE MANAGER EXTENDS EMPLOYEE
// WE REQUIRE EMPLOYEE
const Employee = require("./Employee");

// CLASS DECLARATION
class Manager extends Employee{
    
    // CONSTRUCTOR FUNCTION
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber=officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager; 