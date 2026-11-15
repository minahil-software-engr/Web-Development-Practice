const numbers = [10, 25, 30, 45, 60];
// Single array pass mein filtering aur mapping dono ek saath
const result = numbers.reduce((result, number) => {
  if (number > 30) {
    result.push(`Value: ${number}`);
  }
  return result;
}, []);
console.log(result);
