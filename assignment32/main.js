var current_users = ["Admin", "Wasia", "Ramsha", "Ali", "Samra"];
var new_users = ["Admin", "Wasia", "Ayesha", "Haris", "Huraib"];
var current_users_lower = current_users.map(function (users) { return users.toLowerCase(); });
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var val = new_users_1[_i];
    if (current_users_lower.includes(val.toLowerCase())) {
        console.log("Sorry ".concat(val, " has been taken"));
    }
    else {
        console.log("$(val) is available");
    }
}
