// Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), 
// which prints the name of each magician in the array.
var magiciansNames = ["Ali", "Babar", "Apana", "Zubia"];
function show_magicians() {
    for (var _i = 0, magiciansNames_1 = magiciansNames; _i < magiciansNames_1.length; _i++) {
        var Magician = magiciansNames_1[_i];
        console.log(Magician);
    }
}
show_magicians();
