function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]); // Recursive Call
        }
        return arrCopy;
    }
    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]); // Recursive Call
        }
    }
    return objCopy;
}
const original= { a: 1, b: { c: 2 }, d: [10, 20] };
const copy= deepClone(original);
copy.b.c = 99;
console.log("original object: ",original);
console.log(copy);