function getCryptoRandom(min, max) {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  
  // Array element ko range (min se max) mein scale karna
  return min + (array[0] % (max - min + 1));
}

console.log("Crypto Random:", getCryptoRandom(5, 15)); 