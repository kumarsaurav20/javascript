//Keep numbers adding to the array in 1 until 0 is added to it:
const prompt = require("prompt-sync")()
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a ;
do {
     a = prompt("Enter a number :")
    a = Number.parseInt(a)
    arr.push(a)
} while (a != 0);
console.log(arr)