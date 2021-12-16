// generate the team's html with one big function
const generateTeam= team =>{
    // start with the manager
    const generateManager = manager =>{
        return `
        <div class="employee-card">
    <div class="card-header">
            <h2 class="name-title">${manager.getName()}</h2>
            <h3 class="job-title"><i class="lni lni-briefcase"></i> ${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="emp-list">
                <li class="list-item">ID:${manager.getId()}</li>
                <li class="list-item">Email:<a href = "mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-item">Office Number:${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
         `;
    };
    // next with the engineer
    const generateEngineer = engineer =>{
        return `
        <div class="employee-card">
    <div class="card-header">
            <h2 class="name-title">${engineer.getName()}</h2>
            <h3 class="job-title"><i class="lni lni-invention"></i> ${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="emp-list">
                <li class="list-item">ID:${engineer.getId()}</li>
                <li class="list-item">Email:<a href = "mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-item">Github:<a href= "https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
         `;
    };
// intern best for last
    const generateIntern = intern =>{
        return `
        <div class="employee-card">
    <div class="card-header">
            <h2 class="name-title"> ${intern.getName()}</h2>
            <h3 class="job-title"><i class="lni lni-graduation"></i> ${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="emp-list">
                <li class="list-item">ID:${intern.getId()}</li>
                <li class="list-item">Email:<a href = "mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-item">School:${intern.getSchool()}</li>
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
    // add engineer
    html.push(team
        .filter(employee => employee.getRole()=== "Engineer")
        .map(engineer => generateEngineer(engineer))
    // make sure to join the string that way we get the manager and this
        .join("")
    );
    // add intern
    html.push(team
        .filter(employee => employee.getRole()=== "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );
    // this basically just returns everything we just joined together in this function
    return html.join("")
};

// export function to generate the entire html page
// also defining what team is in this case it is the first half of the html that we are adding into with the functions above
module.exports= team =>{
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team B)</title>
    <link rel="stylesheet" href="./dist/stylesheet.css">
    <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet">
</head>
<body>
<div class="team-header-container">
    <div class="team-header">
        <h1>My Team</h1>
    </div>
</div>
            <div class="team-container">
                ${generateTeam(team)}
            </div>
</body>
</html>
`;
};