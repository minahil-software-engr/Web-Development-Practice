let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Error");
    }, 1000);

});

promise.catch((error) => {
    console.log(error);
});