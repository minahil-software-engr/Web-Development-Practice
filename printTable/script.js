const printTable = (number) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

const input = prompt("Enter a number:");
const num = Number(input);

if (input !== null && !isNaN(num)) {
  printTable(num);
} else {
  console.log("it is not valid number.");
}
