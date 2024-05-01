// // Unchanged Magicians: 
// Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’
//   names. Because the original array will be unchanged,
//    return the new array and store it in a separate array.
//     Call show_magicians() with each array to show that you 
//     have one array of the original names and one array with 
//     the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magiciansNames = ["Ali", "Babar", 'sapna', "Ayesha"];
var Magicians2 = __spreadArray([], magiciansNames, true);
function show_magicians(greet) {
    var greetings = "";
    for (var _i = 0, Magicians2_1 = Magicians2; _i < Magicians2_1.length; _i++) {
        var Magician = Magicians2_1[_i];
        greetings += "".concat(greet, " ").concat(Magician, "\n");
    }
    return greetings;
}
var Magicians3 = show_magicians("Hello");
var myArray = Magicians3.split('\n');
console.log(myArray);
console.log(magiciansNames);
