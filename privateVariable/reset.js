function createCounter() {
    let count = 0; // PRIVATE VARIABLE

    return {
        increment: function() {
            count++; // Andar wala function count ko access kar sakta hai
            return count;
        },
        getCount: function() {
            return count; // Sirf value dekhne ke liye
        },
        reset: function() {
            count = 0;   // Count ko wapas 0 kar diya
            return count; // Updated 0 value return kar di
        }
    };
}
const myCounter = createCounter();
console.log(myCounter.getCount());   
console.log(myCounter.increment());  
console.log(myCounter.increment()); 
console.log(myCounter.reset());     
