const prompt = require("prompt-sync")();

let numberOne = parseFloat(prompt("Enter first number: "))
let numberTwo = parseFloat(prompt("Enter second number: "))

let firstSquare = numberOne**2
let secondSquare = numberTwo**2
console.log(`The first square is: ${firstSquare}`)
console.log(`The second square is: ${secondSquare}`)

let sum = firstSquare + secondSquare
console.log(`The sum is: ${sum}`)

let difference = firstSquare - secondSquare
console.log(`The difference is: ${difference}`)


