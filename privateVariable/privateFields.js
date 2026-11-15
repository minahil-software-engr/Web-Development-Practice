class Counter {
    #count = 0; 
    increment() {
        this.#count++; // Class ke andar kaam karega
        return this.#count;
    }
    getCount() {
        return this.#count;
    }
}
const myCounter = new Counter();
console.log(myCounter.increment()); 
console.log(myCounter.getCount());  