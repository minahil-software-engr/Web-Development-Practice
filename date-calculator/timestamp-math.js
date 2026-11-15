function daysBetweenNative(startDateInput, endDateInput) {
  const startDate = new Date(startDateInput);
  const endDate = new Date(endDateInput);
  // 1. Difference in Milliseconds
  const diffInMs = Math.abs(endDate - startDate);
  // 2. Milliseconds in 1 Day (1000ms * 60s * 60m * 24h)
  const msInOneDay = 1000 * 60 * 60 * 24;
  // 3. Convert Ms to Days
  return Math.round(diffInMs / msInOneDay);
}

console.log(daysBetweenNative("2024-01-01", "2024-01-10")); 