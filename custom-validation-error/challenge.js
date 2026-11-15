class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
function validatePositive(number) {
    if (number <= 0) {
        throw new ValidationError("Number must be positive");
    }
    return true;
}
try {
    validatePositive(-5);
} catch (error) {
    console.log(error.name + ": " + error.message);
}