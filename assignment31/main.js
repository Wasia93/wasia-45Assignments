// No Users: Add an if test to Exercise 28 
// to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, 
// and make sure the correct message is printed.
var userNames = ["Admin", "Wasia", "Samra", "Ramsha"];
if (userNames.length === 0) {
    console.log("We need to find some users");
}
else {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var val = userNames_1[_i];
        if (val === "Admin") {
            console.log("Hello Admin,would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(val, ",Thank you for logging in"));
        }
    }
}
userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
