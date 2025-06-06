//Program to add first n Natural Number
let sum = 0
const prompt = require("prompt-sync")();
let n = prompt("Enter the Value of n ");

for (let i = 0; i < n; i++) {
    sum += (i + 1)
    //console.log((i + 1), "+")
}
console.log("sum of first " + n + " natural numbers is " + sum)

//cosole.log(i)