// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// More Conditional Tests:
// equality and inequality with strings
var color_1 = "red";
var color_2 = "black";
console.log(color_1 == color_2);
console.log(color_1 != color_2);
//  lower case function
var Name_1 = "Samra Khalil";
var Name_2 = "samra khalil";
console.log(Name_1.toLowerCase() == Name_2);
console.log(Name_1.toLowerCase() != Name_2);
//  Numerical tests involving equality and inequality
var number_1 = 20;
var number_2 = 25;
console.log(number_1 === number_2);
console.log(number_1 !== number_2);
console.log(number_1 > number_2);
console.log(number_1 < number_2);
console.log(number_1 >= number_2);
console.log(number_1 <= number_2);
// "and" and "or" operators
var x = 10;
var y = 20;
var z = 30;
console.log(x > y && y > z);
console.log(x < y && y < z);
console.log(x < y && y > z);
console.log(x > y || y < z);
console.log(x > y || y > z);
console.log(x < y || y < z);
// item is in a array
var colors = ["red", "yellow", "green", "black", "white"];
console.log(colors.includes("golden"));
console.log(!colors.includes("golden"));
console.log(colors.includes("black"));
console.log(!colors.includes("black"));
