console.log(greetDeclerationFunction("Ali"));
console.log(greetDeclerationFunction()); // Work karega 
function greetDeclerationFunction(name) {
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello, Guest";
    }
}
// console.log(greet3("Usman")); // ERROR
const greetArrowFunction = (name) => {
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello, Guest";
    }
};
console.log(greetArrowFunction("Usman"));
console.log(greetArrowFunction());