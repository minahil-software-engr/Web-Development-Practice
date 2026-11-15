function mergeRecursive(arr1, arr2) {
  if (arr1.length === 0) return arr2; //ismay loop tu hota nai tu yah condition 
  if (arr2.length === 0) return arr1;
  if (arr1[0] < arr2[0]) {
    return [arr1[0]].concat(mergeRecursive(arr1.slice(1), arr2));
  } 
  else {
    return [arr2[0]].concat(mergeRecursive(arr1, arr2.slice(1)));
  }
}
console.log("Recursive:", mergeRecursive([1, 3, 5], [2, 4, 6]));
