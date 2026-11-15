const object={
    a:1,
    b:{c:2},
    d:[10,20]
}
const copy=structuredClone(object);
copy.b.c=99;
console.log("original object: ",object);
console.log("copy: ",copy);