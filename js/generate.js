//Returns role specific info as string
function roleSpecifics(teamMember){
    switch(teamMember.getType()){
        case 'Manager':
            return `Office number: ${teamMember.getOffice()}`;
        case 'Engineer':
            return `Github: <a href= "https://github.com/${teamMember.getGitHub()}" target= "_blank"> ${teamMember.getGitHub()}<a>`;
        case 'Intern':
            return `School: ${teamMember.getSchool()}`;
    }
}

//Creates HTML card based on team memeber
function cardCreator(teamMember){ 
    return `<div class="row">
    <div class="col s12 l4">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title center-align">${teamMember.getName()}</span>
          <span class="card-title center-align">${teamMember.getType()}</span>
          <P>ID: ${teamMember.getID()}</P>
          <p>Email: ${teamMember.getEmail()}</p>
          <p>${roleSpecifics(teamMember)}</p>
        </div>
      </div>
    </div>`
}

function generateFullHTML(teamArray){
    let employeeCards = "";
    for(i = 0; i<teamArray.length; i++){
        employeeCards += cardCreator(teamArray[i])
    };

    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Employee Tracker</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    </head>
    <body>
        <nav>
            <div class="nav-wrapper center-align">
              <a class="brand-logo">My Team</a>
            </div>
        </nav>
        ${employeeCards}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>
      `
}

module.exports = generateFullHTML;