const todayDate = new Date();
const localeFormattedDate = todayDate.toLocaleDateString("en-GB"); // 'en-GB' forces DD/MM/YYYY
console.log("Locale Format:", localeFormattedDate);