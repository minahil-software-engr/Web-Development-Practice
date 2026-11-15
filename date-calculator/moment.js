function daysBetweenMoment(startDateInput, endDateInput) {
  const startDate = moment(startDateInput);
  const endDate = moment(endDateInput);

  // Built-in .diff method directly gives days
  return Math.abs(endDate.diff(startDate, "days"));
}

console.log(daysBetweenMoment("2024-01-01", "2024-01-10")); 