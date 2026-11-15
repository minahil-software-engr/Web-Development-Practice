function getCryptoRandomNumber() {
    const randomValues = new Uint32Array(1);
//Ye browser mein ek special container banata hay jo Unsigned 32-bit Integers hold kar sakta hay.
    crypto.getRandomValues(randomValues);
    // Modulo % 100 se 0-99 milega, +1 karne se 1-100 tak ka integer milega
    return (randomValues[0] % 100) + 1; 
}
// Fixed: Directly assign kar diya kyu ke function 1-100 return kar raha hay
const Secret_Number = getCryptoRandomNumber();
let Attemptsleft = 7;
while (Attemptsleft > 0) {
    alert(`your attempts is: ${Attemptsleft}`);
    let input=prompt("Enter your number between 1-100: ");
    let number=Number(input);
    if(number>100 || number<0){
        alert("Invalid number! enter number between 1-100");
        continue;  
    }
    Attemptsleft--;
    if(number==Secret_Number){
        alert(`you win! Secret number is: ${Secret_Number}`);
        break;
    }
    else if(Attemptsleft==0){
        alert(`game over! secret number is: ${Secret_Number}`);
    }
    else if(number>Secret_Number){
        alert("your guess  number is too high");
    }
    else{
        alert("your guess number is too low");
    }
}