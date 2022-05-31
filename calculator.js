/* Write a simple calculator program that calculates 
the difference, sum or product of two numbers. 

The function takes as a parameter, the type of calculation to perform and two numbers.

Then based on the type of calculation given 
(addition, subtraction, multiplication, division), 
it performs the calculation and returns the result.
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
