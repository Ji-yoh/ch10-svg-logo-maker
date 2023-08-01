const { Triangle, Circle, Square, Shapes } = require('../lib/shapes.js') // import shapes classes

// jest tests to test that the SVG code strings are being created
// added test to check that the classes are being created
// toBe tests were failing due to incorrect order of constructor parameters..now fixed
describe('Shapes', () => {
  it('should create a new instance of the Shapes class', () => {
    const shapes = new Shapes()
    //const result = shapes.renderSvg()

    expect(shapes).toBeInstanceOf(Shapes)
  });

    describe('Triangle', () => {
        it('should create a new instance of the Triangle class', () => {
            const triangle = new Triangle()

            expect(triangle).toBeInstanceOf(Triangle)
        })

        it('should render the SVG string for a Triangle', () => {
            const triangle = new Triangle('Triangle', 'Red', 'ABC')
            const result = triangle.renderShape()

            expect(result).toBe("<polygon points=\"125,30 50,200 200,200\" fill=\"Red\"/>");
        })
    });

    describe('Circle', () => {
        it('should create a new instance of the Circle class', () => {
            const circle = new Circle()

            expect(circle).toBeInstanceOf(Circle)
        })

        it('should render the SVG string for a Circle', () => {
            const circle = new Circle('Circle', 'Green', 'ABC')
            const result = circle.renderShape()

            expect(result).toBe('<circle cx=\"55\" cy=\"75\" r=\"50\" fill=\"Green\"/>');
        })
    });

    describe('Square', () => {
        it('should create a new instance of the Square class', () => {
            const square = new Square()

            expect(square).toBeInstanceOf(Square)
        })

        it('should render the SVG string for a Square', () => {
            const square = new Square('Square', 'Yellow', 'ABC')
            const result = square.renderShape()

            expect(result).toBe('<rect x=\"100\" y=\"10\" width=\"300\" height=\"200\" fill=\"Yellow\"/>');
        })
    });
});