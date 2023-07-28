// create classes for triangle, circle, and square, each shouild have a render() method
// include inquirer prompts asking which shape and color

class Shapes {
    constructor(name) {
        name = this.name
    }
}
class Triangle extends Shapes {
    constructor(name) {
        super(name)
    }
    render()
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