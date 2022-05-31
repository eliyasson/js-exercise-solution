/* Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)
*/

function myCalculator(number1, operator, number2) {
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
    
}
console.log(myCalculator(100, '*', 3));