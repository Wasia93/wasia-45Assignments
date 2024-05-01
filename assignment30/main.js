var userNames = ["Admin", "Wasia", "Ramsha", "Samra"];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var users = userNames_1[_i];
    if (users == "Admin")
        console.log("Hello Admin,Would you like to see a status report?");
    else {
        console.log("Hello ".concat(users, ",Thank you for logging in again."));
    }
}
