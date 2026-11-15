function getNestedValue(object, path) {
  return path.split(".").reduce((result, currentKey) => {
    return result[currentKey];
  }, object);
}
function groupByNested(array, path) {
  return array.reduce((result, object) => {
    const groupKey = getNestedValue(object, path);
    if (!groupKey) return result;
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(object);
    return result;
  }, {});
}
const people = [
  { name: "Ali", address: { city: "Lahore" } },
  { name: "Sara", address: { city: "Karachi" } },
  { name: "Zain", address: { city: "Lahore" } }
];
const result = groupByNested(people, "address.city");
console.log(result);