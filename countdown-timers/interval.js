let count = 5;

let intervalId = setInterval(() => {

    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(intervalId);
    }

}, 1000);