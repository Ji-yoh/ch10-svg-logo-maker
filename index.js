const Shapes = require('./lib/shapes.js') // import shapes classes
const inquirer = require('inquirer')
const fs = require('fs/promises')

// originally coded questions in inquirer.prompt, but moved to const questions
const questions = [
                    {
                        type: "input",
                        name: "logo",
                        message: "Input 3 alphanumeric characters to create a logo:"
                    },
                    {
                        type: "select",
                        name: "shape",
                        message: "Which shape would you like to use?",
                        choices: ["Triangle", "Circle", "Square"]
                    },
                    {
                        type: "input",
                        name: "color",
                        message: "What color would you like to use?"
                    }
                 ];
/*
function writeSvgFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Logo created successfully!")
        }
    })
} */

function initialize() {
    const answers = inquirer.prompt(questions)
    .then((answers) => {
    // should store user responses in variables
    const logo = answers.logo;
    const shape = answers.shape;
    const color = answers.color;
    console.log(answers)
    // const svg = new Shapes(shape, color, logo);
    // writeSvgFile("logo.svg", svg.render(answers))    

    })

}

initialize();