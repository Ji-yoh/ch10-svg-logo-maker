// include inquirer prompts asking which shape and color
// MDN SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

// Notes:
// SVG can be created dynamically with JavaScript and injected into the HTML DOM. 
// This is done using SVG DOM methods and properties. 
// For example, the following JavaScript code creates a circle element in the SVG DOM using the createElementNS() method, and adds it to the HTML DOM using the appendChild() method:

// TODO: create classes for triangle, circle, and square, each shouild have a render() method
const logo = require("./index.js")

class Shapes {
    constructor(name) {
        name = this.name
    }
} 
class Triangle extends Shapes {
    constructor(name) {
        super(name)
    }
    render() // this method should return a string of SVG code? it should render the shape
}

class Circle extends Shapes {
    constructor(name) {
        super(name)
    }
    render()
}

class Square extends Shapes {
    constructor(name) {
        super(name)
    }
    render()
}

module.exports = Triangle, Circle, Square, Shapes