// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the 
// list has actually been modified.


let magicianNames: string[]=["Ali","Haris","Danish","Ramsha"];
function make_great(greet:string){
    for( let val of magicianNames){
console.log(greet,val);
    }
};
make_great("The great");