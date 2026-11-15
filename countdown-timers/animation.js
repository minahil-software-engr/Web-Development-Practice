let count = 5;
let lastTime = performance.now();

function countdown(currentTime) {

    if (currentTime - lastTime >= 1000) {

        console.log(count);

        count--;

        lastTime = currentTime;
    }

    if (count >= 0) {
        requestAnimationFrame(countdown);
    }
}

requestAnimationFrame(countdown);