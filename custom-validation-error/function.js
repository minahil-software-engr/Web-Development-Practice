function ValidationError(message) {
    return new Error(message);
}
function validateNotEmpty(input) {
    if (input === "") {
        throw ValidationError("String cannot be empty");
    }
    return true;
}

try {
    validateNotEmpty("");
} catch (error) {
    console.log("Error: " + error.message);
}