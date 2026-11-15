function calculateAgeFromBirthdate(birthdateInput) {
  const birthDate = new Date(birthdateInput);
  const currentDate = new Date();
  let calculatedAge = currentDate.getFullYear() - birthDate.getFullYear();

  // Step 2: Check Month difference
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();

  // Step 3: Agar is saal abhi birthday nahi aaya toh 1 minus karo
  const isBirthdayPendingThisYear =
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate());

  if (isBirthdayPendingThisYear) {
    calculatedAge--;
  }
  return calculatedAge;
}
console.log(calculateAgeFromBirthdate("2000-05-15"));