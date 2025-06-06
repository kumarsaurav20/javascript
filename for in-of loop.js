// latest for loop in JS (having only key and value)
let obj = {
    Saurav : 90,
    Amit : 85,
    MJ : 60,
    Ashish : 75,
    Prabhat : 30
}
for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])
    //console.log(a) This will only print Key not value 
}
//For-of loop
for(let b of "Saurav"){
    console.log(b)
}