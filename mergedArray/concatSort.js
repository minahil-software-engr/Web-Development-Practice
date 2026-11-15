function mergeConcatSort(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b); //pahly dono array ko concat karlay gay phir sort a or ab array kay pahly 2 nmbr hogay sort may callback function hay jab takk array nai khatam hoti yah chalay ga a -b hoga + kay liya ba -kay liya ab jab ba hoga replace hoga tuu ossay pichlay a say check hogay
}
console.log("Concat + Sort:", mergeConcatSort([1, 3, 5], [2, 4, 6]));
