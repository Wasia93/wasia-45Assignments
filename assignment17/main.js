// Assignment 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message 
// saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, 
//  print a message to that person letting them know you’re sorry you can’t invite
//   them to dinner.
// • Print a message to each of the two people still on your list,
//  letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.
// part 1
var dinnerList = ["ayesha", "wasia", "haris", "samra", "ramsha", "huraib"];
for (var _i = 0, dinnerList_1 = dinnerList; _i < dinnerList_1.length; _i++) {
    var val = dinnerList_1[_i];
    console.log("".concat(val, ", I can invite only two poeple for dinner"));
}
// part2
while (dinnerList.length > 2) {
    var remove = dinnerList.pop();
    console.log("sorry ".concat(remove, ", I can invite only 2 people"));
}
// part 3
for (var _a = 0, dinnerList_2 = dinnerList; _a < dinnerList_2.length; _a++) {
    var people = dinnerList_2[_a];
    console.log("".concat(people, ", You are invited to the dinner"));
}
// part 4
dinnerList.pop();
dinnerList.pop();
console.log("Final list = ", dinnerList);
