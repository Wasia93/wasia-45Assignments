// // Assignment no 3:
// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase,
//   uppercase, and titlecase.
var personName = "Eric";
//in lowercase
console.log('lowercase:', personName.toLowerCase());
//in  Uppercase
console.log('uppercase:', personName.toUpperCase());
//in title case
console.log('title case;', personName.replace(/\b\w/g, function (c) { return c.toLocaleUpperCase(); }));
