function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("the size of the shirt is ".concat(size, " and it is saying ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I want to grow");
