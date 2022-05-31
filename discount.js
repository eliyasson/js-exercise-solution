/* Write a function that takes price and discount percentage as parameters and 
calculates the discounted price. 
The function should give an error message if the price or percentage are < 0. 
(e.g. If price = 30€, discount = 50%, new price should be 15€)

15 = 30 - (30 * (50 / 100)); 
*/
function myDiscount(price, percentage) {
    if (price <= 0 || percentage < 0) {
        newPrice = "price and percentage should be greater than 0";
    } else {
        newPrice = price - (price * percentage/100);
    
    }
    return newPrice;
    

}
console.log(myDiscount(30, 0));