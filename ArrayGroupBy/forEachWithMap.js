const people = [
  { name: "Ali", city: "Lahore" },
  { name: "Sara", city: "Karachi" },
  { name: "Zain", city: "Lahore" }
];
function groupByMap(array, key) {
  const map = new Map();
  array.forEach((object) => {
    const groupKey = object[key];
    if (!map.has(groupKey)) {
      map.set(groupKey, []);
    }
    map.get(groupKey).push(object);
  });
  return Object.fromEntries(map);
}
const result = groupByMap(people, "city");
console.log(result);