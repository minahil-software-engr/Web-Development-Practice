const person={
    name:"minahil",
    age:19
}
const updateperson=(object,key,value)=>{//nested ko change karay ga tu original may bhi change hoga isi liya shallow copy hay
    return{
        ...object,
        [key]:value
    }
}
const update=updateperson(person,"age",31);
console.log(person);
console.log("updated: ", update);