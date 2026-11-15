function mergeTwoPointer(arr1, arr2) {
  let merged = [];  //MERGED array bnai
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {  //condition chalai array 1 kay elements takk saray or array 2 kay
    if (arr1[i] < arr2[j]) {// agar array1 ka element chota hay array2 say tu
      merged.push(arr1[i]); //array1 ka element merge may ajay ga
      i++;  //ab array 1 ka next element check hogana
    } else {
      merged.push(arr2[j]); //warna array2 ka kukay humnay sort ka bhi kheyal rakhna hana
      j++;  //array2 ka next
    }
  }
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));  //jo bach jaya gay wo woi hogay jo large element thay yah tu dono array khali hogi yah don masay 1 or onmy jo element hogay onhy concat karlay gay
}
console.log("Two Pointer:", mergeTwoPointer([1, 3, 5], [2, 4, 6]));