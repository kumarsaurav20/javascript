//WAP to print the marks of a student in an obj= {Saurav: 98 , Amit:70, MJ: 75 } using for loop
let marks = {
    Saurav: 98,
    Amit: 70,
    MJ: 75
}
//using for loops 
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("Marks of : " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
//using for n loops
for(let key in marks){
    console.log("The marks of "+ key +" are "+ marks[key])
}
