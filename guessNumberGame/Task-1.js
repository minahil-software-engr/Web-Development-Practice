const Secret_Number=Math.floor(Math.random()*100)+1;
let Attemptsleft=7;
while(Attemptsleft>0){  
    alert(`your attempts is: ${Attemptsleft}`);
    let input=prompt("Enter your number(1-100): ");
    let number=Number(input); 
    if(number>100 || number<0){ 
        alert("invalid number!Enter your number between 1-100")
        continue;  
    }
    Attemptsleft--;
    if(number==Secret_Number){
        alert(`you win secret number is: ${Secret_Number}`);
        break; 
    }
    else if(Attemptsleft==0){
        alert(`game over! secret number is: ${Secret_Number}`);
    }
    else if(number>Secret_Number){
        alert("your guess number is too high");
    }
    else{
        alert("your guess number is too low")
    }
}
