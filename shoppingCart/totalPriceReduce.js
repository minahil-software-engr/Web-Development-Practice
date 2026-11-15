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
const totalPriceReduce = () => {  //reduce function may har object ki prize or qunatity 8 hoti gyi or phir total may + hoti gyi
    return cart.reduce((result, item) => {  //jab finally saray object ho jaya gay tu final total return ho jaya ga
        return result + (item.prize * item.quantity);  //jo total ata phir function chalta ir woo total hota
    }, 0); 
}
addItem("laptop", 10000, 1);
addItem("mouse", 100, 5);
removeItem("mouse");
console.log(`total is: ${totalPriceReduce()}`);