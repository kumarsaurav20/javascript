let num = [2, 5, 34, 50, 4]

//for (let i = 0; i < num.length; i++) {
//  console.log(num[i])
//}

//For each loop :
num.forEach((Element) => {
    console.log(Element * Element)
})

//Array From :
let name = "Saurav"
let arr = Array.from(name)
console.log(arr)

//for ... of 
for (let item of num) {
    console.log(item) //This will print items of array  
}

//for ... in
for (let item in num) {
    console.log(item) //This will print numbering of items of arrayS
}