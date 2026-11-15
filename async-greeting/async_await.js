function delayedGreeting(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi, " + name);
        }, 1000);

    });
}
async function showGreeting() {

    let msg = await delayedGreeting("Ali");

    console.log(msg);
}

showGreeting();