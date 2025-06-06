//Array Methods 
let num = [4, 5, 6, 7]
b = num.shift() // shift Method(Removes an  element start from an array :)
console.log(b, num)

//Unshift Method (Returns new array & add in starting of array )
c = num.unshift(10)
console.log(num, c)

//concat Method (to join values of two array)
let num1 = [1, 2, 3, 4, 5, 6]
let num2 = [7, 8, 9, 10]
let newArray = num1.concat(num2)
console.log(newArray)

//Sort Method (Returns array in numerical order whether it is of how many digit)
let num3 = [8, 9, 5, 1, 3, 2, 4, 7, 6, 552]
num3.sort()
console.log(num3)


//If user want sort in ascending Order
let compare = (a, b) => {
    return a - b        //Compare is a function used to sort array in ascending order:
}                       //for decending Order use (return b - a in compare function: )

let num4 = [8, 9, 5, 1, 3, 2, 4, 7, 6, 552, 225, 330]
num4.sort(compare)
console.log(num4)

//Spice & Slice 
