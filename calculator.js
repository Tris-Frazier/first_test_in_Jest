const calculator = (operation, num1, num2) => {
    let result;

    if (operation === 'add'){
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        result = num1 / num2;
    }
    return result;
}

module.exports = calculator;