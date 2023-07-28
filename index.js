const shapes = require("../shapes.js") // import shapes classes
const inquirer = require("inquirer")

class Logo {
    constructor(logo, shape, color) {
        this.logo = logo
        this.shape = shape
        this.color = color
    }
    logoPrompts() {
        inquirer.prompt([
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
        ])
    }
};

module.exports = Logo;
