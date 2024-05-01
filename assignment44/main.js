// Sandwiches: Write a function that accepts a array of items
//  a person wants on a sandwich.
//   The function should have one parameter
//    that collects as many items as the function call provides,
//     and it should print a summary of the sandwich
//      that is being ordered. Call the function three times,
//  using a different number of arguments each time.
function mySandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want ".concat(items, " sandwitch");
}
var sandwich1 = mySandwich("cheese", "veggies", "chicken");
console.log(sandwich1);
var sandwich2 = mySandwich("mushrooms", "cheese", "chicken");
console.log(sandwich2);
var sandwich3 = mySandwich("bbq chicken", "sauses", "iceberg");
console.log(sandwich3);
