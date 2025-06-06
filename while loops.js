
const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n : ");
let i = 0;
while (i < n) { 
    console.log(i)
    i++;
}
/*
let i = 0;
while (True) { 
    console.log(i) 
}
*/
//If we run this code in browser it wil not stop its execution & Hang that browser: 