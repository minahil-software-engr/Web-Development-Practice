function delayedGreeting(name) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Hi, " + name);
        }, 1000);

    });

}

delayedGreeting("Ali")
    .then((msg) => {
        console.log(msg);
    });