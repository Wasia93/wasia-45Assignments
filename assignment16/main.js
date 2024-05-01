var guest = ["samra", "wasia", "ramsha"];
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var val = guest_1[_i];
    console.log("Hello ".concat(val, ",I want to inform you that,I found a bigger dinner table,so I am inviting more guests now\" "));
}
guest.splice(0, 0, "haris");
console.log(guest);
guest.splice(2, 0, "ali");
console.log(guest);
guest.splice(5, 0, "danish");
console.log(guest);
for (var _a = 0, guest_2 = guest; _a < guest_2.length; _a++) {
    var val = guest_2[_a];
    console.log("".concat(val, ",You are invited for dinner"));
}
