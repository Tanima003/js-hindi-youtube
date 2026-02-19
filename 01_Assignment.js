const readline = require("readline-sync");


let number = parseInt(readline.question("enter a number"));
if(number%2 === 0){
    console.log("the number is even")
}
else{
    console.log("the number is odd")
}