function greetDeclaration(name = "Guest") {  //agar name may value hay tu wo value warna name may guest dall data
    return "Hello, " + name;
}
const greetArrow = (name = "Guest") => {
    return "Hello, " + name;
};
console.log(greetDeclaration("Ali")); 
console.log(greetDeclaration());  
console.log(greetArrow("Usman")); 
console.log(greetArrow());           