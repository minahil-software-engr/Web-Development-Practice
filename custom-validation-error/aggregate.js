let error1 = new Error("Name is missing");
let error2 = new Error("Age is invalid");
let errors = new AggregateError(
    [error1, error2],
    "Validation failed"
);
try {
    throw errors;
} catch (error) {

    console.log(error.message);

    console.log("Individual errors:");

    for (let err of error.errors) {
        console.log(err.message);
    }
}