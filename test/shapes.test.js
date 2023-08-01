const { Triangle, Circle, Square, Shapes } = require('../lib/shapes.js') // import shapes classes

// jest tests to test that the SVG code strings are being created
describe('Shapes', () => {
  it('should render the complete SVG string', () => {
    const shapes = new Shapes('Triangle', 'Blue', 'OOO')
    const result = shapes.renderSvg()

    expect(result).toEqual('<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"300\" height=\"200\">' +
    '<polygon points=\"125,30 50,200 200,200\" fill=\"Blue\"/>' +
    '<text text-anchor=\"middle\" x=\"115\" y=\"180\" font-weight=\"bold\" font-size=\"28px\">OOO</text>' +
    '</svg>')
  });

    describe('Triangle', () => {
        it('should render the SVG string for a Triangle', () => {
            const triangle = new Triangle('Red')
            const result = triangle.renderShape()

            expect(result).toEqual('<polygon points=\"125,30 50,200 200,200\" fill=\"Red\"/>');
        })
    });

    describe('Circle', () => {
        it('should render the SVG string for a Circle', () => {
            const circle = new Circle('Green')
            const result = circle.renderShape()

            expect(result).toEqual('<circle cx=\"55\" cy=\"75\" r=\"50\" fill=\"Green\"/>');
        })
    });

    describe('Square', () => {
        it('should render the SVG string for a Square', () => {
            const square = new Square('Yellow')
            const result = square.renderShape()

            expect(result).toEqual('<rect x=\"100\" y=\"10\" width=\"300\" height=\"200\" fill=\"Yellow\"/>');
        })
    });
});