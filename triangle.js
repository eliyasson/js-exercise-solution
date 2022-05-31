// Write a function that calculates the area of a triangle 

function area(base, height) {
    let area = (base * height) / 2;
    if(base <= 0 || height <= 0) { 
        result = ("The variable should be positive");

    } else {
        
        result = ("The area of the triangle is " + area);
    }
    return result;
    

}
console.log(area(10, 10));