let count = 10;

let intervalId = setInterval(() => {

    console.log(count);

    if (count === 0) {
        clearInterval(intervalId);
        return;
    }

    count--;

}, 1000);