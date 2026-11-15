const Ajv = window.ajv7;
const ajv = new Ajv();
let jsonData = '{"name":"Ali","age":"20"}';
//let jsonData = '{"name":"Ali","age":20}';
let data = JSON.parse(jsonData);
const rules = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        age: {
            type: "number"
        }
    },
    required: ["name", "age"]
};
const validate = ajv.compile(rules);
const valid = validate(data);
if (valid) {
    console.log("JSON data is valid");
} else {
    console.log("JSON data is invalid");
    console.log(validate.errors);
}