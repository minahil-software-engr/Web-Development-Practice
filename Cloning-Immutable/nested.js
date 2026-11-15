const person={
    name:"minahil",
    age:19,
    address:{city:"lahore"}
}
function updateNestedSpread(obj, parentKey, childKey, value) {  //spread say change kardeya nested bina original change kiya
  return {
    ...obj,
    [parentKey]: {
      ...obj[parentKey],
      [childKey]: value
    }
  };
}
function updateNestedWithAssign(obj, parentKey, childKey, value) {  //object assign say change kardeya nested bina original change kiya
  return Object.assign({}, obj, {
    [parentKey]: Object.assign({}, obj[parentKey], {
      [childKey]: value
    })
  });
}
console.log(person)
console.log(updateNestedSpread(person, "address", "city", "Islamabad"));
console.log(updateNestedWithAssign(person, "address", "city", "Sahiwal"));