function greetDeclaration(name) {  //arguments built in key word hota saray arguments lata
    console.log("Declaration Arguments:", arguments);
    console.log("Total arguments passed:", arguments.length);
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello, Guest";
    }
}
const greetArrow = (name, ...args) => {  //args likhna parta parameter kay badd saray arguments lata
    console.log("Extra arguments:", args);
    console.log("Extra arguments count:", args.length);
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello, Guest";
    }
};
console.log(greetDeclaration("Ali", "Extra1", "Extra2"));
console.log(greetDeclaration());
console.log(greetArrow("Usman", "Extra1", "Extra2"));
console.log(greetArrow());