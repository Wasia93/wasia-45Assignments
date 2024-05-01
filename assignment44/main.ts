// Sandwiches: Write a function that accepts a array of items
//  a person wants on a sandwich.
//   The function should have one parameter
//    that collects as many items as the function call provides,
//     and it should print a summary of the sandwich
//      that is being ordered. Call the function three times,
//  using a different number of arguments each time.


function mySandwich(...items: string[]){
return `I want ${items} sandwich`;
}

let sandwich1 = mySandwich("cheese","veggies","chicken")
console.log(sandwich1)

let sandwich2 = mySandwich("mushrooms","cheese","chicken")
console.log(sandwich2)

let sandwich3 = mySandwich("bbq chicken","sauses","iceberg")
console.log(sandwich3)