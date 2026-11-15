const operate=(a, b, operation)=> {
    switch (operation) {  //opration ko jo value case say match kr gyi oski bdy run hogi
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "mul":
            return a * b;
        case "div":
            if (b === 0) {
                throw new Error("DivisionByZeroError: Zero se divide nahi kar sakte!");
            }
            return a / b;
        default:
            console.log("invalid operation");
    }
}
console.log("Add:", operate(10, 5, "add")); // Output: 15
console.log("Sub:", operate(10, 5, "sub")); // Output: 5
console.log("Mul:", operate(10, 5, "mul")); // Output: 50
console.log("Div:", operate(10, 5, "div")); // Output: 2
try {
    console.log(operate(10, 0, "div"));
} catch (error) {
    console.error("Error Caught:", error.message);
}