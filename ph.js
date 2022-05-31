/* Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)
*/

function myPh (ph) {
    if (ph > 7 && ph <= 14) {
        result = "alkaline";
    } else if (ph < 7 && ph > 0) {
        result = "acidic";
    } else if (ph == 7) {
        result = "neutral";
    } else {
        result = "ph should be between 0 and 14";

    }
    return result;

}
console.log(myPh(14));