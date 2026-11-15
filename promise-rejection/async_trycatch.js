let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject("Error");
    }, 1000);

});

async function testPromise() {

    try {

        let result = await promise;

        console.log(result);

    } catch (error) {

        console.log(error);

    }
}

testPromise();