class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validateNotEmpty(input) {

    if (input === "") {
        throw new ValidationError("String cannot be empty");
    }
    return true;
}
try {
    validateNotEmpty("");
} catch (error) {
    console.log(error.name + ": " + error.message);
}