/* You want to buy something from an online shop. 
The seller charges different prices for shipping cost based on location. 
The shipping cost is 5€ for EU,  15€ for US & Canada, 20€ else where. 
Write a function that takes the cost of the product and location. 
It should print the amount of money you have to pay as:
"You have to pay a total of 35€, 30€ for the product and 5€ for shipping"
*/

function myShippingCost(product, location) {
    if (location == "eu") {
        price = 5 + product;
    }else if (location == "us" || location == "united state" || location == "canada") {
            price = 15 + product;
    }else {
        price = 20 + product;
    }
    return price;
}

console.log(myShippingCost(30, "ethiopia"));