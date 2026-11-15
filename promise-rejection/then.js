let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Error");
    }, 1000);

});

promise.then(
    (result) => {
        console.log(result);
    },
    (error) => {
        console.log(error);
    }
);