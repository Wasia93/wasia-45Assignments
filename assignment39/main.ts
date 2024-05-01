// City Names: Write a function called city_country() that takes 
// in the name of a city 
// and its country. The function should return a string formatted 
// like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs,
//  and print the value that’s returned.

function city_country(city:string,country:string): string {
    return `${city},${country}`
}

let value1 = city_country("Lahore" , "Pakistan");
let value2 = city_country("Doha" , "Qatar");
let value3 = city_country("Toronto" , "Canada");


console.log(value1);
console.log(value2);
console.log(value3);