function checkyear(year) {
    if (year %= 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        return(year + " is a leap year");
    } else {
        return(year + " is not a leap year");
    }   
}
const readline = require("readline-sync");
let year = parseInt(readline.question("Enter a year:"));
console.log(checkyear(year));