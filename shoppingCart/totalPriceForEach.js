let cart=[];
const addItem=(name,prize,quantity)=>{
    cart.push({name:name,prize:prize,quantity:quantity});
    console.log(cart);
}
const removeItem=(name)=>{
    cart=cart.filter((item)=>{
        return item.name!=name;
    });
     console.log(cart);
}
const totalPriceForEach=()=>{
    let total=0;
    cart.forEach((item)=>{  //for each loop may callback function chala jabtakk saray object nai ho jatay or har object ki prize or quantity multiply hokay add hoti gyi total may
        total+=item.prize*item.quantity;
    });
    return total;
}
addItem("laptop",10000,1);
addItem("mouse",100,5);
addItem("mobile",1000,3);
removeItem("mouse");
console.log(`total is:  ${totalPriceForEach()}`);