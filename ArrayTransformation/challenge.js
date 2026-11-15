const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter((num) => {
    return num % 2 === 0; 
  })
  .map((num) => {
    return num ** 2;      
  });
console.log(result);
