const currentSystemDate = new Date();
const currentYear = currentSystemDate.getFullYear();
const currentMonthIndex = (currentSystemDate.getMonth())+1; // January is 0, December is 11
const currentDayOfMonth = currentSystemDate.getDate();

console.log("Current Year:", currentYear);
console.log("Current Month:", currentMonthIndex );
console.log("Current Day:", currentDayOfMonth);