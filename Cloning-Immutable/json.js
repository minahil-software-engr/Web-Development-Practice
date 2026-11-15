const person={
    name:"minahil",
    age:19
}
const updateperson=(object,key,value)=>{ //nested ko change karay ga tuu original may cahnge nai hoga
    const copy=JSON.parse(JSON.stringify(object));
    copy[key]=value;
    return copy;
}
console.log(person);
console.log("updated: ",updateperson(person,"age",31));