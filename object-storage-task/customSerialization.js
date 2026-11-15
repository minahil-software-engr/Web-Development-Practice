const user2 = { name: "Ali", age: 30 };
const customString = `name:${user2.name}|age:${user2.age}`;
localStorage.setItem('user_way2', customString);
const storedData2 = localStorage.getItem('user_way2');
const parsedUser2 = {};
storedData2.split('|').forEach(pair => {
  const [key, value] = pair.split(':');
  parsedUser2[key] = key === 'age' ? Number(value) : value;
});
console.log('Way 2 Name:', parsedUser2.name); 