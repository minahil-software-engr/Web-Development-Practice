function countdown(count) {

    console.log(count);

    if (count > 0) {

        setTimeout(() => {
            countdown(count - 1);
        }, 1000);

    }
}

countdown(5);