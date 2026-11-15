function randomEvenNumber(min, max) {
  let startEven;
  let endEven;
  if (min % 2 === 0) {
    startEven = min;
  } else {
    startEven = min + 1;
  }
  if (max % 2 === 0) {
    endEven = max;
  } else {
    endEven = max - 1;
  }
  // Total even numbers kitne hain range mein
  let totalEvenCount = Math.floor((endEven - startEven) / 2) + 1;

  return startEven + Math.floor(Math.random() * totalEvenCount) * 2;
}
console.log(randomEvenNumber(5, 15)); 