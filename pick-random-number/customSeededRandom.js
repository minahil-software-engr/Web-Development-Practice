function customSeededRandom(seed, min, max) {
  let pseudoRandom = (seed * 9301 + 49297) % 233280;
  let normalized = pseudoRandom / 233280; // 0 se 1 ke darmiyan value
  
  return Math.floor(normalized * (max - min + 1)) + min;
}

console.log("Custom Seeded:", customSeededRandom(12345, 5, 15)); // Same seed par same result dega