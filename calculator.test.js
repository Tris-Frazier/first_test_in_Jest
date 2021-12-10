const calculator = require('./calculator');

describe(calculator, () => {
    let num1;
    let num2;

    beforeEach(() => {
        num1 = 10;
        num2 = 2;
    });

    //Test 1 add function
    it('should add two numbers together', () => {
        expect(calculator('add', num1, num2)).toBe(num1 + num2);
    });

    //Test 2 subtract function
    it('should subtract two numbers', () => {
        expect(calculator('subtract', num1, num2)).toBe(num1 - num2);
    });

    //Test 3 muliply function
    it('should multiply two numbers', () => {
        expect(calculator('multiply', num1, num2)).toBe(num1 * num2);
    });

    //Test 4 divide function
    it('should divide two numbers', () => {
        expect(calculator('divide', num1, num2)).toBe(num1 / num2);
    });
})