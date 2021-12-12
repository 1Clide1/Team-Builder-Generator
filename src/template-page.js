const Employee = require("../lib/Employee");

// generate the team's html with one big function
const generateTeam= team =>{
    // start with the manager
    const generateManager = manager =>{
        return `
        <div class="employee-card">
    <div class="header">
            <h2 class="title">${manager.getName()}</h2>
            <h3 class="title">${manager.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="emp-list">
                <li class="list item">ID:${manager.getId()}</li>
                <li class="list item">Email:<a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list item">Office Number:${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
         `;
    };
    // next with the engineer
    const generateEngineer = engineer =>{
        return `
        <div class="employee-card">
    <div class="header">
            <h2 class="title">${engineer.getName()}</h2>
            <h3 class="title">${engineer.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="emp-list">
                <li class="list item">ID:${engineer.getId()}</li>
                <li class="list item">Email:<a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list item">Github:<a href= "https://github.com/${engineer.getGithub()}" target"_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
         `;
    };
// intern best for last
    const generateIntern = intern =>{
        return `
        <div class="employee-card">
    <div class="header">
            <h2 class="title"> ${intern.getName()}</h2>
            <h3 class="title">${intern.getRole()}</h3>
        </div>
        <div class="body">
            <ul class="emp-list">
                <li class="list item">ID:${intern.getId()}</li>
                <li class="list item">Email:<a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list item">School:${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
         `;
    };
    // get the generated html and push that into the actual html
    // make an array that way it's easier to put what i need in there
    const html= [];
    // add manager
    html.push(team
        .filter(employee => employee.getRole()=== "Manager")
        .map(manager => generateManager(manager))
        );
    html.push(team
        .filter(employee => employee.getRole()=== "Engineer")
        .map(engineer => generateEngineer(engineer))
        // make sure to join the string that way we get the manager and this
        .join("")
        );
    html.push(team
        .filter(employee => employee.getRole()=== "Intern")
        .map(intern => generateIntern(intern))
        .join("")
        );
};

// export function to generate the entire html page
module.exports= team =>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team</title>
</head>
<body>
<div class"team-header-container">
    <div class"team-header">
        <h1 class="team title">My Team</h1>
    </div>
</div>
    <div class"container">
        <div class="flex-row">
            <div class"team-container">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
`;
};