// get all the needed elements needed for the program
const Manager= require("./lib/Manager");
const Engineer= require("./lib/Engineer");
const Intern= require("./lib/Intern");
const inquirer= require("inquirer");
const path= require("path");
const fs= require("fs");

// make an output folder named output and then add the generated html file\

const output_dir= path.resolve(__dirname, "output")
const outputPath= path.join(output_dir, "team.html");
// this is how the html is going to be generated
const renderHtml= require("./src/template-page");
// make sure to have the members and ids into arrays that way we can just add
// the answers in the form and then push that to the html
const teamMembers= [];
const ids= [];

function appMenu(){
    function genManager(){
        console.log("Start building your team!")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: answer =>{
                    if (answer.length<=1){
                        console.log(" Please type more than one letter")
                    }
                    else{
                        return true
                    }
                }

            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
                validate: answer =>{
                    if (answer.match(/^\d+$/)){
                        return true
                    }
                    else{
                        console.log("Please enter a number, must be exactly one number")
                    }
                }
            
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",
                validate: answer =>{
                    if (answer.match(/\S+@\S+\.\S+/)){
                        return true
                    }
                    else{
                        console.log("Please enter a correct email address")
                    }
                }
            
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
                validate: answer =>{
                    if (answer.match(/^\d+$/)){
                        return true
                    }
                    else{
                        console.log("Please enter a number, must be exactly one number")
                    }
                }
            
            }
        ]).then(answers =>{
            const manager= new Manager(answers.managerName, answers.managerId, answers.managerEmail, managerOfficeNumber)
            teamMembers.push(manager);
            ids.push(answers.managerId);
            generateTeam();
        });
    }

    function generateTeam(){
        inquirer.prompt([
            {
                type:"list",
                name:"teamMemberChoices",
                message:"Which type of team member would you like to add",
                choices:[
                    "Engineer",
                    "Intern",
                    "I don't want to add anymore members"
                ]
            }
        ]).then(userChoice =>{
            switch(userChoice.teamMemberChoices){
                case "Engineer":
                    addEngineer();
                    break;
                    case "Intern":
                        addIntern();
                        break;
                    default:
                        createTeam();
            }
        });
    }

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            },
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?"
            }
        ])
    }
}
