// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.


let current_users:string[] = ["Admin","Wasia","Ramsha","Ali","Samra"];
let new_users: string[]= ["Admin","Wasia","Ayesha","Haris","Huraib"];
let current_users_lower:string[] = current_users.map(users=>users.toLowerCase())

for (let val of new_users){
    if (current_users_lower.includes(val.toLowerCase())){
        console.log(`Sorry ${val} has been taken`)
    }else{
        console.log(`$(val) is available`)
    }
    }