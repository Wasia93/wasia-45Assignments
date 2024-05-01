// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program 
// stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name
//  of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var guest = ["samra", "wasia", "ramsha"];
guest.splice(2, 1, "haris");
console.log(guest);
var guest1 = ("ramsha");
console.log("".concat(guest1, " is not attending dinner"));
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var val = guest_1[_i];
    console.log("".concat(val, ",You are invited for dinner"));
}
