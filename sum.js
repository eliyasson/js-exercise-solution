/* Create a program that:
Calculates the sum of 1+2+3+4...+98+99
Prints the sum of 1+2+3+4...+98+99
Output: "The sum is 4950"

&&
Calculates the sum of 1+3+5+7...+99+101
Prints the sum of 1+3+5+7...+99+101
Output: "The sum is 2601"
*/

let number = 0;
for (let num = 1; num < 100; num++) {
    number = number + num;
}

console.log(number);
console.log("------------------------------------");

let number2 = 0;
for (let num = 1; num < 102; num += 2) {
    number2 = number2 + num;
}

console.log(number2);
