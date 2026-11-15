let promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Success");
    }, 1000);

});

promise.then((result) => {
    console.log(result);
});