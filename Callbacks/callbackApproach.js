const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
// Division by Zero Custom Error
const div = (a, b) => {
    if (b === 0) {
        throw new Error("DivisionByZeroError: Zero se divide nahi kar sakte!"); //errpr throw hokay catch kay pass jaya ga or execution stop ho jaya gii
    }
    return a / b;
};
function operate(a, b, callback) {
    return callback(a, b);
}
console.log("Add:", operate(10, 5, add));
console.log("Sub:", operate(10, 5, sub)); 
console.log("Mul:", operate(10, 5, mul)); 
console.log("Div:", operate(10, 5, div)); 
try {
    console.log(operate(10, 0, div));
} catch (error) {
    console.error("Error Caught:", error.message);
}