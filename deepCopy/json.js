const jsondeepcopy=(object)=>{
    return JSON.parse(JSON.stringify(object));
};
const object={
    a:1,
    b:{c:2},
    d:[10,20]
};
const copy=jsondeepcopy(object);
copy.b.c=99;
console.log("copy: ",copy);
console.log("original object: ",object);