// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15.
// Add a print statement to the end of your program informing people that you found 
// a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one 
// new guest to the end of your list. • Print a new set of invitation messages, 
// one for each person in your list.



let guest =["samra","wasia","ramsha"]
for (let val of guest){
    console.log(`Hello ${val},I want to inform you that,I found a bigger dinner table,so I am inviting more guests now" `)
}
guest.splice(0,0,"haris");
console.log(guest)
guest.splice(2,0,"ali");
console.log(guest)

guest.splice(5,0,"danish")
console.log(guest)

for (let val of guest){
console.log(`${val},You are invited for dinner`)
}

