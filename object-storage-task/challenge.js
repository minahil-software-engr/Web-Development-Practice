const userObj = { name: "Ali", age: 30 };
localStorage.setItem('user', JSON.stringify(userObj));

console.log('Before Removal:', localStorage.getItem('user')); 

localStorage.removeItem('user');
const checkData = localStorage.getItem('user');
console.log('After Removal:', checkData); 
