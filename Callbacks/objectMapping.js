const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
    if (b === 0) {
        throw new Error("DivisionByZeroError: Zero se divide nahi kar sakte!");
    }
    return a / b;
};
const operationsMap = {  //object bnaya
    add: add,
    sub: sub,
    mul: mul,
    div: div
};
function operate(a, b, operationName) {
    const selectedFunction = operationsMap[operationName];  //object key kry ki value access ki
    return selectedFunction(a, b);
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