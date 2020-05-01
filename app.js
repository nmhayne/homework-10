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

start();
// Do you want to add a team member? If so, choose a type:
// Manager, Engineer, Intern, I'm Done
function start() {
      inquirer
      .prompt([{
            type: "list",
            message: "Choose an employee type:",
            name: "type",
            choices: [
                  "Manager",
                  "Engineer",
                  "Intern",
                  "Finished"
            ]
      }])
      .then( response => {
            switch (response.type) {
                  
                  case "Manager":
                  createManager();
                  break;
                  
                  case "Engineer":
                  createEngineer();
                  break;
                  
                  case "Intern":
                  createIntern()
                  break;
                  
                  case "Finished":
                  renderHtmlPage();
                  break;
                  
            }
            
      })
}

// MANAGER CLASS
function createManager(){
      inquirer
      .prompt([{
            type: "input",
            message: "Enter name:",
            name: "name"
      },
      {
            type: "input",
            message: "Enter unique employee ID:",
            name: "ID"
      },
      {
            type: "input",
            message: "Enter employee email:",
            name: "email"
      },
      {
            type: "input",
            message: "Enter office number:",
            name: "office"
      }
      
])
.then( response => {
      
      // process all the answers
      const managerObj = new Manager(response.name, response.ID, response.email, response.office)
      teamMembers.push(managerObj);
      idArray.push(response.ID)
      start();
})
}

// ENGINEER CLASS
function createEngineer(){
      inquirer
      .prompt([{
            type: "input",
            message: "Enter name:",
            name: "name"
      },
      {
            type: "input",
            message: "Enter unique employee ID:",
            name: "ID"
      },
      {
            type: "input",
            message: "Enter employee email:",
            name: "email"
      },
      {
            type: "input",
            message: "Enter github username:",
            name: "github"
      }
      
])
.then( response => {
      
      // process all the answers
      const EngineerObj = new Engineer(response.name, response.ID, response.email, response.github)
      teamMembers.push(EngineerObj);
      idArray.push(response.ID);
      start();
})
}

// INTERN CLASS
function createIntern(){
      inquirer
      .prompt([{
            type: "input",
            message: "Enter name:",
            name: "name"
      },
      {
            type: "input",
            message: "Enter unique employee ID:",
            name: "ID"
      },
      {
            type: "input",
            message: "Enter employee email:",
            name: "email"
      },
      {
            type: "input",
            message: "Enter school name:",
            name: "school"
      }
      
])
.then( response => {
      
      // process all the answers
      const InternObj = new Intern(response.name, response.ID, response.email, response.school)
      teamMembers.push(InternObj);
      idArray.push(response.ID);
      start();
})
}


// STUDENT: This function will call the render function required near the top (line 12), 
// and pass INTO it the teamMembers area; from there, write the HTML returned back to a file 
// in a directory called output.
function renderHtmlPage() {
      const html = render(teamMembers)
      fs.writeFile("output/index.html", html, err => {
      })
}


// const testM = new Manager("Bob","420","manager.test@gmail.com","666");
// console.log(testM);
// const testE = new Engineer("Bobbert","420","engineer.test@gmail.com","bobbertGithub");
// console.log(testE);
// const testI = new Intern("Julia Bobberts","420","bob.test@gmail.com","NYU");
// console.log(testI);