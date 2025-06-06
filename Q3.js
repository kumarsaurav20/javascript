//WAP to print try again until the user enters the correct number :
const prompt = require("prompt-sync")()
let cn = 5
let i 
while (i != cn) {
    console.log("Try Again")
    i = prompt("Enter a number :")
}
console.log("You have entered a correct number")