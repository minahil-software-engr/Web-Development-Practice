let initial_value=456; //khud say fixed number liya 
function RandomNumber(){ 
/*
yah constants number hay iska mtlb hum apni seed ko multiply karay gay takay aik bara numr ban jaya + karay gay takay wo 0 par stuck na ho jaya or % lay kay takay memory full na ho jaya wo itna zyada bara number na ban jaya
*/
    initial_value=(initial_value*1664525 + 1013904223)%4294967296;
//iskay sath devide iss wja say kiya kukay jiss say mod liya oskay sath devide karnay say yah hamay answer 0-0.999 may data  
    return initial_value/ 4294967296; 
}

// yha say sara Task 1 wala logic hay bass math.random() ki jgga hamny seededRandom function call kiya
const Secret_Number=Math.floor(RandomNumber()*100)+1;
Attemptsleft=7;
while(Attemptsleft>0){
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