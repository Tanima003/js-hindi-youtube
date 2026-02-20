const readline = require("readline-sync");
let age = parseInt(readline.question("Enter your age:"));
if (age < 18) {
    console.log("You are a minor");
}
if(age>= 18 && age < 59) {
    console.log("You are an adult");

}
if(age >= 59) {
    console.log("You are a senior citizen");
}
else{
    console.log("Invalid input");
}