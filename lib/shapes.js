// include inquirer prompts asking which shape and color
// MDN SVG tutorial https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started

// TODO: create classes for triangle, circle, and square, each shouild have a render() method
// rewrote to include parent class Shapes with inherited properties and method, need to test if SVG string renders correctly
class Shapes {
    constructor(shape, color, logo) {
        this.shape = shape;
        this.color = color;
        this.logo = logo;
    }
    renderSvg() {
        if (this.shape === "Triangle") {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${this.renderShape()}
            <text text-anchor="middle" x="115" y="180" font-weight="bold" font-size="28px">${this.logo}</text>
            </svg>`
        } else if (this.shape === "Circle") {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${this.renderShape()}
            <text text-anchor="middle" x="40" y="80" font-weight="bold" font-size="28px">${this.logo}</text>
            </svg>`
        } else if (this.shape === "Square") {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${this.renderShape()}
            <text text-anchor="middle" x="200" y="120" font-weight="bold" font-size="28px">${this.logo}</text>
            </svg>`
        }
    }
}

class Triangle extends Shapes {
    constructor(shape, color, logo) {
        super(shape, color, logo);
    }
    renderShape() {
        if (this.shape === "Triangle") {
            return `<polygon points="125,30 50,200 200,200" fill="${this.color}"/>`
        }
        
    } // this method should return a string of SVG code, it should render the shape
}

class Circle extends Shapes {
    constructor(shape, color, logo) {
        super(shape, color, logo);
    }
    renderShape() {
        if (this.shape === "Circle") {
            return `<circle cx="55" cy="75" r="50" fill="${this.color}"/>`
        }
    }
}

class Square extends Shapes {
    constructor(shape, color, logo) {
        super(shape, color, logo);
    }
    renderShape() { 
        if (this.shape === "Square") {
            return `<rect x="100" y="10" width="300" height="200" fill="${this.color}"/>`
        }
    }
}
// removed redundant code from each class and extra function for rendering the logo, moved to index.js

module.exports = { Triangle, Circle, Square, Shapes } // export classes