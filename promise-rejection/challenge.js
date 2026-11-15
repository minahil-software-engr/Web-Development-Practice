let promise1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Fast Success");
    }, 1000);

});

let promise2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Slow Error");
    }, 2000);

});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });