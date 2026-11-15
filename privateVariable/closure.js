function createCounter() {
    let count = 0; // PRIVATE VARIABLE
    return {
        increment: function() {
            count++; // Andar wala function count ko access kar sakta hai
            return count;
        },
        getCount: function() {
            return count; // Sirf value dekhne ke liye
        }
    };
}
const myCounter = createCounter();
console.log(myCounter.getCount()); 
console.log(myCounter.increment()); 