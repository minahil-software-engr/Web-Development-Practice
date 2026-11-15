let cart = [];
const addItem = (name, prize, quantity) => {
    cart.push({ name: name, prize: prize, quantity: quantity });
    console.log(cart);
}
const removeItem = (name) => {
    cart = cart.filter((item) => {
        return item.name != name;
    });
    console.log(cart);
}
const totalPriceReduce = () => {
    return cart.reduce((result, item) => {
        return result + (item.prize * item.quantity);
    }, 0); 
}
const applyDiscount=(code)=> {
  let currentTotal = totalPriceReduce();  //total nikala function call karkay
  if (code === "SAVE10" && currentTotal > 100) { //conditions lgai
    let discount = currentTotal * 0.10; 
    let finalTotal = currentTotal - discount;
    console.log(`Discount mila! Pehle total $${currentTotal} tha, ab $${finalTotal} hai.`);
  } else if (currentTotal <= 100) {
    console.log(`Discount ke liye total $100 se zyada hona zaroori hai. Abhi total: $${currentTotal}`);
  } else {
    console.log("Invalid coupon code.");
  }
}
addItem("laptop", 10000, 1);
addItem("mouse", 100, 5);
console.log(`total is: ${totalPriceReduce()}`);
applyDiscount("SAVE10");
