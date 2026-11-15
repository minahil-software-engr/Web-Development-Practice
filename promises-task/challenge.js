let promise1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("First Promise");
    }, 1000);

});

let promise2 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Second Promise");
    }, 2000);

});

Promise.all([promise1, promise2])
    .then((results) => {

        console.log(results);

    });