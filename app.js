const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// This file will generate the final HTML. You don't need to touch this at all!
const render = require("./lib/htmlRenderer");
// This will be an array of all team member objects created
const teamMembers = [];
// This will be an array of the id values created for each object so there are no duplicates
const idArray = [];
// start()
// Do you want to add a team member? If so, choose a type:
   // Manager, Engineer, Intern, I'm Done
function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee type:",
      name: "type",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Finished"
      ]
    }
  ]).then( response => {
    if( response.type === "manager" ){
      createEmployee("manager")
    }
  })
}
// createManager()
   // ask all the manager questions, when done, go back to start()
function createEmployee(employeeType){
  inquirer.prompt([
    {
      type: "input",
      message: "Enter name:",
      name: "name"
    }
  ]).then( genericResponses => {
    if( employeeType === "manager" ){
      createManager(genericResponses)
    }
  });
}
function createManager(genericData){
  inquirer.prompt([
    {
      type: "input",
      message: "Enter name:",
      name: "name"
    }
  ]).then( response => {
    // process all the answers
    const managerObj = new Manager(genericData.name, genericData.email, response.officeNumber  )
    teamMembers.push(managerObj)
    start();
  })
}
// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage(){
  const html = render(teamMembers)
  fs.writeFile("output/index.htnl", html, err => {
  })
}