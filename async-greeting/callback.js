function delayedGreeting(name, callback) {

    setTimeout(() => {
        callback("Hi, " + name);
    }, 1000);

}

delayedGreeting("Ali", (msg) => {
    console.log(msg);
});