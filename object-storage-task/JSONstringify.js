const user1 = { name: "Ali", age: 30 };
const jsonString = JSON.stringify(user1);
localStorage.setItem('user_way1', jsonString);
const storedData1 = localStorage.getItem('user_way1');
const parsedUser1 = JSON.parse(storedData1);
console.log('Way 1 Name:', parsedUser1.name); 