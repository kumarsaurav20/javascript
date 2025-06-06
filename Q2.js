//Write a JS program to find whether the number is Divisible by 2 or not 
const prompt = require("prompt-sync")();
let num = prompt("Enter the number ")

if(num % 2==0 ){
    console.log("Number is divisible by 2")
}
else if(num % 2 ==1){
    console.log("Number is not dividible by 2")
}
else{
    console.log("Invalid Number")
}
console.log("Done")