// Animals: Think of at least three different animals that 
// have a common characteristic. Store the names of these animals
//  in a list, and then use a for loop to print out the name of
//  each animal. • Modify your program to print a statement about 
//  each animal, such as A dog would make a great pet. •
//   Add a line at the end of you// Animals:
// Animals:
var animals = ["Cat", "Dog", "lion"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet"));
}
console.log("\n");
console.log("Cats and Dogs both enjoy playing with toys, each other or with their human families");