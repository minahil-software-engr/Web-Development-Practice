const { promisify } = require("util");

const wait = promisify(setTimeout);

console.log("Start");

wait(2000).then(() => {
    console.log("End");
});                                                                