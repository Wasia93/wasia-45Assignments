// Animals: Think of at least three different animals that 
// have a common characteristic. Store the names of these animals
//  in a list, and then use a for loop to print out the name of
//  each animal. • Modify your program to print a statement about 
//  each animal, such as A dog would make a great pet. •
//   Add a line at the end of you// Animals:

// Animals:

let animals:string[] = ["Cat", "Dog", "lion"];

for(let animal of animals){
 console.log(animal);
}

console.log("\n");

for(let animal of animals){
    console.log(`A ${animal} would make a great pet`);
   }

console.log("\n");

console.log(`Cats and Dogs both enjoy playing with toys, each other or with their human families`);  
