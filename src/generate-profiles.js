const fs = require('fs');
const generateHTML = require('./generateHTML');


let profiles = [];
let profilesHTML = ``;

function generateProfiles() {
    console.log(profiles);
    profiles.forEach((profile) => {
        if (profile.role === `Manager`) {
            profilesHTML += `<div class="col-auto p-3">
            <div class="card h-100" style="max-width: 250px;">
                <div class="card-header" style="color: white; background-color: rgb(120, 12, 114);">
                    <h2 style="font-size: 25px;">${profile.name}</h2>
                    <h2 style="font-size: 20px;"><i class="fas fa-mug-hot"></i>  ${profile.role}</h2>
                </div>
                <div class="card-body" style="background-color: rgb(181, 151, 179)">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">ID:
                            ${profile.id}</li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">Email: <a style="color: rgb(33, 146, 124);" href = "mailto:${profile.email}">${profile.email}</a></li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">Office
                            number: ${profile.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>`;
            return;
        } else if (profile.role === `Engineer`) {
            profilesHTML += `<div class="col-auto p-3">
            <div class="card h-100" style="max-width: 250px;">
                <div class="card-header" style="color: white; background-color: rgb(120, 12, 114); font-weight: bold;">
                    <h2 style="font-size: 25px;">${profile.name}</h2>
                    <h2 style="font-size: 20px;"><i class="fas fa-glasses"></i>  ${profile.role}</h2>
                </div>
                <div class="card-body" style="background-color: rgb(181, 151, 179)">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">ID:
                            ${profile.id}</li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">Email: <a style="color: rgb(33, 146, 124);" href = "mailto:${profile.email}">${profile.email}</a></li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">GitHub: <a style="color: rgb(33, 146, 124);" href = "https://github.com/${profile.email}">${profile.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
            return;
        } else if (profile.role === `Intern`) {
            profilesHTML += `<div class="col-auto p-3">
            <div class="card h-100" style="max-width: 250px;">
                <div class="card-header" style="color: white; background-color: rgb(120, 12, 114);">
                    <h2 style="font-size: 25px;">${profile.name}</h2>
                    <h2 style="font-size: 20px;"><i class="fas fa-user-graduate"></i>  ${profile.role}</h2>
                </div>
                <div class="card-body" style="background-color: rgb(181, 151, 179)">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">ID:
                            ${profile.id}</li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">Email: <a style="color: rgb(33, 146, 124);" href = "mailto:${profile.email}">${profile.email}</a></li>
                        <li class="list-group-item" style="color: rgb(33, 146, 124); font-size: 15px; font-weight: bold;">School: ${profile.school}</li>
                    </ul>
                </div>
            </div>
        </div>`;
            return;
        } else {
            return;
        }
    });
    const html = generateHTML.generateHTML(profilesHTML);
    writeToFile("./dist/emplyee-profiles.html", html);
    
};




// Function to write html file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else {
            
        };
    }
)};

module.exports = {
    profiles,
    generateProfiles
};
