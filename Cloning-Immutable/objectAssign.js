const person={
    name:"minahil",
    age:19
}
const updateperson=(object,key,value)=>{ //nested ko change karay ga tu original may bhi change hoga isi liya shallow copy hay
    return Object.assign({},object,{[key]:value});
}
const copy=updateperson(person,"age",31);
console.log(person);
console.log("updated: ",copy);

