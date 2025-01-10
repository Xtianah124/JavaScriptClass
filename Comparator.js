const prompt = require("prompt-sync")();

let numberOne = parseFloat(prompt("Enter first number: "))
let numberTwo = parseFloat(prompt("Enter second number: "))

if(numberOne === numberTwo){
    console.log("0")
} else if(numberOne > numberTwo){
    console.log("1")
}else{ console.log("-1")
}
