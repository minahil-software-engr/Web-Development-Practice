function daysBetweenDateFns(startDateInput, endDateInput) {
  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);

  // Built-in helper function
  return Math.abs(dateFns.differenceInDays(endDate, startDate));
}

console.log(daysBetweenDateFns("2024-01-01", "2024-01-10")); // Output: 9