// BECAUSE MANAGER EXTENDS EMPLOYEE
// WE REQUIRE EMPLOYEE
const Employee = require("./Employee");

// CLASS DECLARATION
class Intern extends Employee {
  
  // CONSTRUCTOR
  constructor(name,id,email,school){
      super(name,id,email);
      this.school=school;
    }
  
    getSchool() {
      return this.school;
    }
  
    getRole(){
      return "Intern";
  }
  }
  
  module.exports = Intern;