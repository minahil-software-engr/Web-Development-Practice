const nestedNumbersList = [1, [2, 3], [4, [5, 6]]];

const flattenedWithReduceAndConcat = nestedNumbersList.reduce(
  (accumulatedList, currentElement) => {
    return accumulatedList.concat(currentElement);
  },
  []
);

console.log(flattenedWithReduceAndConcat); 
