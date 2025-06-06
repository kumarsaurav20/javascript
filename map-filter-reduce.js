//Map:=> To perform operation on single element inside array

const arr = [1, 2, 3, 4]
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value * value;
})
console.log(a)

//Filter array =>To filter value from an array 
let arr2 = [4, 5, 6, 8, 1, 15, 14, 16]
let a2 = arr2.filter((a) => {
    return a < 10
})
console.log(a2)

//Array reduce method =>

let arr3 = [4, 5, 3, 7, 6, 8]
let a3 = arr3.reduce((h1 , h2)=>{
    return h1 + h2
})
console.log(a3)