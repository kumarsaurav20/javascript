//Use logical operator to find wether the user age lies between 10 and 20
const prompt = require("prompt-sync")();
let a = prompt("Hey whats your age ? ");
//a = Number.parseInt(a);

if (a < 0) {
    console.log("This is an Invalid age");
}
else if (a < 9) {
    console.log("You are a Kid");
}
else if (a >=10 && a <= 20) {
    console.log("Valid Age :");
}
else {
    console.log("This is an Invalid Age");
}
console.log("Done")