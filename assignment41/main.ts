// Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), 
// which prints the name of each magician in the array.



let magiciansNames:string[] = ["Ali", "Babar", "Apana", "Zubia"];

function show_magicians(){
    for (let Magician of magiciansNames){
        console.log(Magician);
    }
}

show_magicians();