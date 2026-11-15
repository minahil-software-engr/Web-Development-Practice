const user3 = { name: "Ali", age: 30 };

const arrayFormat = Object.entries(user3);
const libraryString = JSON.stringify(arrayFormat);
localStorage.setItem('user_way3', libraryString);

const storedData3 = localStorage.getItem('user_way3');
const arrayData = JSON.parse(storedData3);
const parsedUser3 = Object.fromEntries(arrayData);

console.log('Way 3 Name:', parsedUser3.name);