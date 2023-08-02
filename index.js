const { Triangle, Circle, Square, Shapes } = require('./lib/shapes.js') // import shapes classes
const inquirer = require('inquirer')
const fs = require('fs/promises')

// originally coded questions in inquirer.prompt, but moved to const questions
// revision- moving prompts out of questions variable since select prompt is not working


function writeSvgFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Logo created successfully!")
        }
    })
} 

function initialize() {
    inquirer.prompt([
        {
            type: "input",
            name: "logo",
            message: "Input 3 alphanumeric characters to create a logo:"
        },
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like to use?",
            choices: ["Triangle", "Circle", "Square"]
        },
        {
            type: "input",
            name: "color",
            message: "What color would you like to use?"
        }
     ]).then((answers) => { // switch cases might be helpful here
        console.log(answers)
        switch(answers.shape) {
            case "Triangle":
                const triangle = new Triangle(answers.shape, answers.color, answers.logo);
                writeSvgFile("./output/logo.svg", triangle.renderSvg());
                break;
            case "Circle":
                const circle = new Circle(answers.shape, answers.color, answers.logo);
                writeSvgFile("./output/logo.svg", circle.renderSvg());
                break;
            case "Square":
                const square = new Square(answers.shape, answers.color, answers.logo)
                writeSvgFile("./output/logo.svg", square.renderSvg());
                break;
        }
     })
};

initialize();