/* Use reduce to calculate factorial of a given number from an array of given
array of first natural number .  */

let arr = [1, 2, 3, 4]
let n = arr.reduce((h1, h2) => {
    return h1 * h2 
})
console.log(n)