function completelyFlattenArray(targetArray) {
  let fullyFlattenedList = [];

  for (const currentElement of targetArray) {
    if (Array.isArray(currentElement)) {
      // Agar element khud ek array hai, toh deep flattening ke liye wapas wahi function call hoga
      fullyFlattenedList = fullyFlattenedList.concat(completelyFlattenArray(currentElement));
    } else {
      // Normal values ko direct store karenge
      fullyFlattenedList.push(currentElement);
    }
  }
  return fullyFlattenedList;
}
const nestedNumbersList = [1, [2, 3], [4, [5, 6]]];
const fullyFlattenedNumbers = completelyFlattenArray(nestedNumbersList);

console.log(fullyFlattenedNumbers); 