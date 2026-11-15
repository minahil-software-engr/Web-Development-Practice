let jsonData = '{"age":20}';
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
try {
    let data = JSON.parse(jsonData);
    if (!("name" in data)) {
        throw new ValidationError("name key is missing");
    }
    console.log("JSON is valid");
}
catch (error) {
    console.log(error.name + ": " + error.message);
}