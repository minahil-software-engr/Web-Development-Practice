function getFirstAndRestWithShift(inputSequence) {
  // Array clone kar rahe hain taaki original input Sequence change/mutate na ho
  const sequenceCopy = [...inputSequence];
  const firstElement = sequenceCopy.shift(); // Array se pehla element nikal deta hai
  const remainingElements = sequenceCopy;

  return [firstElement, remainingElements];
}

const numberSequenceShift = [10, 20, 30, 40];
const partitionedArrayShift = getFirstAndRestWithShift(numberSequenceShift);
console.log(partitionedArrayShift);