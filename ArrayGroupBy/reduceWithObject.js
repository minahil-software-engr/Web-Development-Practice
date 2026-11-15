const people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Zain", city: "Lahore" }
];
function groupByReduce(array, key) {
  return array.reduce((result, object) => {
    const groupKey = object[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(object);
    return result;
  }, {});
}
const result = groupByReduce(people, "city");
console.log(result);