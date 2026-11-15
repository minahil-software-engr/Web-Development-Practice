const numbers = [10, 25, 30, 45, 60];
// Filter pehle alag variable mein
const filtered = numbers.filter((number) => {
  return number > 30;
});
// Map baad mein alag variable mein
const result = filtered.map((number) => {
  return `Value: ${number}`;
});
console.log(result);
