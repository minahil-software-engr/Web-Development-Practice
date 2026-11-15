const privateStorage = new WeakMap(); 
class Counter {
    constructor() {
        privateStorage.set(this, { count: 0 });
    }
    increment() {
        let data = privateStorage.get(this); 
        data.count++;
        return data.count;
    }
    getCount() {
        return privateStorage.get(this).count;
    }
}
const myCounter = new Counter();
console.log(myCounter.increment()); 
console.log(myCounter.getCount()); 