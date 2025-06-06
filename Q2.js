//create an array of square of a given number :
const prompt = require("prompt-sync")()

// let arr2 = []
// let n2 = prompt("Enter value for Square : ")
// square = [n2] * [n2]
// console.log(n2 + "," + square)

//If array is given:
let arr = [1, 2, 3, 20, 5, 8]
let n = arr.map((x) => {
    return x * x
})
console.log(n)