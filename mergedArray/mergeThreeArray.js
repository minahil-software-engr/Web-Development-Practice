//two pointer wali logic
function mergeTwoPointer(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
}
function mergeThreeArrays(arr1, arr2, arr3) {  //bass yha pahly function pahli 2 array kay sath call hoga phir oska result 3 array kay sath call hoga
  let firstMerge = mergeTwoPointer(arr1, arr2);
  return mergeTwoPointer(firstMerge, arr3);
}
const a = [1, 5, 9];
const b = [2, 6, 10];
const c = [3, 4, 7, 8];
console.log("Challenge Output (Option A):", mergeThreeArrays(a, b, c));