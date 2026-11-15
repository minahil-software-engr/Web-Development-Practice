function getFirstAndRestWithSlice(inputSequence) {
  // Index 0 se pehla element aur slice(1) se baaki bache elements
  const firstElement = inputSequence[0];
  const remainingElements = inputSequence.slice(1);

  return [firstElement, remainingElements];
}

const numberSequenceSlice = [10, 20, 30, 40];
const partitionedArraySlice = getFirstAndRestWithSlice(numberSequenceSlice);

console.log(partitionedArraySlice);