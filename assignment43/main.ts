// // Unchanged Magicians: 
// Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’
//   names. Because the original array will be unchanged,
//    return the new array and store it in a separate array.
//     Call show_magicians() with each array to show that you 
//     have one array of the original names and one array with 
//     the Great added to each magician’s name.

let magiciansNames:string[] = ["Ali","Babar",'sapna',"Ayesha"];
let Magicians2 = [...magiciansNames];
function show_magicians(greet: string){
let greetings = "";
for (let Magician of Magicians2){
    greetings += `${greet} ${Magician}\n`
}
return greetings;
}

let Magicians3 = show_magicians("Hello");
let myArray = Magicians3.split('\n')
console.log(myArray)
console.log(magiciansNames)

