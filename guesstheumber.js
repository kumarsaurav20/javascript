const prompt = require("prompt-sync")()

let a = Math.random() * 100;
a = Number.parseInt(a)
let inp;
let score = 100;

while (inp != a) {
    score = score - 1;
    inp = prompt("Enter The Number : ");
    if (inp == a) {
        console.log("Congratulation! You guess the correct number : ")
        console.log(`You guess the actual number in ${100 - score} chances`)
    }
    else if (inp > a && inp < 100) {
        console.log("Your number is greater than the actual Number. ")
    }
    else if (inp < a && inp > 0) {
        console.log("Your Number is smaller than the actual Number. ")
    }
    else {
        console.log("Enter Number between 1 to 100. ")
    }
}
