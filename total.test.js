const multiply = require("./total.js");

test('multiply two numbers', () =>{
    let numberOne = 2;
    let numberTwo = 4; //arrange
    let result = multiply(numberOne, numberTwo);//act
    let answer = 8;
    expect(result).toBe(answer);
})