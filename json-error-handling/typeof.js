// JSON data
let jsonData = '{"name":"Ali","age":20}';

// JSON string ko JavaScript object mein convert karo
let data = JSON.parse(jsonData);

// Data types check karo
if (
    typeof data.name === "string" &&
    typeof data.age === "number"
) {
    console.log("JSON data types are valid");
} else {
    console.log("JSON data types are invalid");
}