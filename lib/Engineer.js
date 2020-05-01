// BECAUSE MANAGER EXTENDS EMPLOYEE
// WE REQUIRE EMPLOYEE
const Employee = require("./Employee");

// CLASS DECLARATION
class Engineer extends Employee {
  
  // CONSTRUCTOR FUNCTION
  constructor(name,id,email,github){
    super(name,id,email);
    this.github=github;
  }
  
  getGithub() {
    return this.github;
  }
  
  getRole(){
    return "Engineer";
}
}

module.exports = Engineer;