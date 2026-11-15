function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log("Start");

wait(2000).then(() => {
    console.log("End");
});