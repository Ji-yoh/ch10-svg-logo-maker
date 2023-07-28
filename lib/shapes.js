// include inquirer prompts asking which shape and color
// MDN SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

// Notes:
// SVG can be created dynamically with JavaScript and injected into the HTML DOM. 
// This is done using SVG DOM methods and properties. 
// For example, the following JavaScript code creates a circle element in the SVG DOM using the createElementNS() method, and adds it to the HTML DOM using the appendChild() method:

// TODO: create classes for triangle, circle, and square, each shouild have a render() method
const logo = require("./index.js")

class Triangle {
    constructor(color) {
        this.color = color;
    }
    render() // this method should return a string of SVG code? it should render the shape
}

class Circle {
    constructor(color) {
        this.color = color;
    }
    render()
}

class Square {
    constructor(color) {
        this.color = color;
    }
    render()
}

function renderLogo(data) {
    const circleSVG = `<circle cx="55" cy="75" r="50" fill="blue"/>`
    const triangleSVG = `<polygon points="125,30 50,200 200,200" style="fill:red"/>`
    const squareSVG = `<rect x="100" y="10" width="300" height="200" style="fill:red"/>`
    
    if (data.shape == "Circle") {
        return `<svg width="300" height="200">
            ${circleSVG}
            <text x="40" y="80">${data.logo}</text>
            </svg>`
    }
    if (data.shape == "Triangle") {
        return `<svg width="300" height="200">
            ${triangleSVG}
            <text x="40" y="80">${data.logo}</text>
            </svg>`
    }
    if (data.shape == "Square") {
        return `<svg width="300" height="200">
            ${squareSVG}
            <text x="40" y="80">${data.logo}</text>
            </svg>`
    }
}

module.exports = Triangle, Circle, Square, renderLogo