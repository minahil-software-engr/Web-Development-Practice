function getFirstAndRest(inputSequence) {
  // Array destructuring with rest operator (...)
  const [firstElement, ...remainingElements] = inputSequence;

  return [firstElement, remainingElements];
}

const numberSequence = [10, 20, 30, 40];
const partitionedArray = getFirstAndRest(numberSequence);
console.log(partitionedArray);