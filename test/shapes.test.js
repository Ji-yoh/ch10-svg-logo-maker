const { Triangle, Circle, Square, Shapes } = require('../lib/shapes.js') // import shapes classes

// jest tests to test that the SVG code strings are being created
describe('Shapes', () => {
  it('should render the complete SVG string', () => {
    const shapes = new Shapes('Triangle', 'Blue', 'OOO')
    const result = shapes.renderSvg(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <polygon points="125,30 50,200 200,200" fill="Blue"/>
    <text text-anchor="middle" x="115" y="180" font-weight="bold" font-size=28px>OOO</text>
    </svg>`)

    expect(result).toEqual(true);
  })

    describe('Triangle', () => {
        it('should render the SVG string for a Triangle', () => {
            const triangle = new Triangle('Red')
            const result = triangle.renderShape(`<polygon points="125,30 50,200 200,200" fill="Red"/>`)

            expect(result).toEqual(true);
        })
    })

    describe('Circle', () => {
        it('should render the SVG string for a Circle', () => {
            const circle = new Circle('Green')
            const result = circle.renderShape(`<circle cx="55" cy="75" r="50" fill="Green"/>`)

            expect(result).toEqual(true);
        })
    })

    describe('Square', () => {
        it('should render the SVG string for a Square', () => {
            const square = new Square('Yellow')
            const result = square.renderShape(`<rect x="100" y="10" width="300" height="200" fill="Yellowno"/>`)

            expect(result).toEqual(true);
        })
    })
})