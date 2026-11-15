function failingPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            reject("Failed");
        }, 500);

    });

}

function retry(attempt = 1) {

    return failingPromise()
        .catch((error) => {

            console.log("Attempt " + attempt + " failed");

            if (attempt < 3) {
                return retry(attempt + 1);
            }

            throw error;
        });
}

retry()
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
        console.log("Giving up:", error);
    });