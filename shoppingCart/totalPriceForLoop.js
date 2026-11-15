let cart=[];
const addItem=(name,price,quantity)=>{
    cart.push({name:name,price:price,quantity:quantity}); //push say object add hogya array may
    console.log(cart);
}
const removeItem=(name)=>{
    cart=cart.filter((item)=>{  //filter may callback function chala or jab condition true ho wo cart may jata gya
        return item.name!=name;
    });
     console.log(cart);
}
function totalPriceForLoop() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;  //har object ki prize or quantity multiply hoii or add hoti gyi total may
  }
  return total;
}
addItem("laptop",10000,1);
addItem("mouse",100,5);
removeItem("mouse");
console.log(`total is:  ${totalPriceForLoop()}`);