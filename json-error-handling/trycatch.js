//let jsondata='{"name":"minahil","age":19}';
let jsonData = '{"name":"Ali", "age":20';
try{
    let result=JSON.parse(jsonData);
    console.log("json is valid");
    console.log(result);
}
catch(error){
    console.log("error: ",error.message);
}
