const numbers = [10, 25, 30, 45, 60];
const result = numbers
  .filter((number) => {
    return number > 30;
  })
  .map((number) => {
    return `Value: ${number}`;
  });
console.log(result);