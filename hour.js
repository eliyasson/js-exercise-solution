/* Write a function that takes a parameter array of working hours 
(e.g. [4, 5, 7.5, 8.5, 9, 6]), 
the function should return the sum of the working hours.*/

function sumOfWorkingHour(hours) {
    let sum = 0
    for (let number of hours) { //for of loop
        sum = sum + number;
    }
         
    return sum;

}
console.log(sumOfWorkingHour([4, 5, 7.5, 8.5, 9, 6]));