const nestedNumbersList = [1, [2, 3], [4, [5, 6]]];
const flattenedWithSpreadAndConcat = [].concat(...nestedNumbersList);

console.log(flattenedWithSpreadAndConcat); 
