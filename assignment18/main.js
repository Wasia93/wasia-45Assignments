var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//part1
var favPlaces = ["paris", "london", "america", "france", "germany"];
//part2
console.log(favPlaces);
//part3
var favPlaces2 = __spreadArray([], favPlaces, true);
console.log(favPlaces2.sort());
//part4
console.log(favPlaces);
//part5
console.log(favPlaces2.sort().reverse());
//part6
console.log(favPlaces);
//part7
console.log(favPlaces.sort().reverse());
//part8
console.log(favPlaces.reverse());
//part9
console.log(favPlaces);
//part10
console.log(favPlaces.reverse());
