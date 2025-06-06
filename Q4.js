//filter for numbers divisible by 10 from a given array:

let arr = [20, 30, 50, 60, 2, 5, 6, 7]
let a = arr.filter((x) => {
    return x % 10 == 0;
})
console.log(a)