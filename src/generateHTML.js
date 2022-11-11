
function generateHTML(html) { 
    console.log(html)
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <title>Employee Profiles</title>
    </head>
    <body style="background-color: rgb(213, 239, 235);">
        <div class="container-fluid" style="background-color: rgb(33, 146, 124);">
            <div class="row align-tems-center justify-content-center">
                <div class="col-auto py-5">
                    <h1 style="font-size: 30px; color: white;">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row g-3 justify-content-center">
            ${html}
            </div>
        </div>
    </body>    
    </html>`
};

module.exports = {
    generateHTML
};