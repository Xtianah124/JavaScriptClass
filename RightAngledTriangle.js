const prompt = require("prompt-sync")();

userInput = prompt("Enter a number: ");

for(let index = 1; index < userInput; index++){
    process.stdout.write("*")
    console.log("*");
}