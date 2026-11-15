const countCharacters=(text)=>{
    const count=new Map();  //new map bnaya
    const cleanText=text.toLowerCase().replaceAll(" ",""); //tolowercase say sab small letters may hogya text or replace all say space remove hogai
    for(let i=0; i<cleanText.length; i++){
        let character=cleanText[i]; //har character pick kiya bar bari
        if(count.has(character)){  //agar tu wo object may key tha tu phir oski value dhaki
            count.set(character,count.get(character)+1);  //or set kiya pahly character or phir oski value get karkay increment 
        }
        else{ // agar object may yah key nai thi
            count.set(character,1); //tu character ko key bna kay 1 initialize kardeya
        }
    }
    return count;
}
console.log(countCharacters("Minahil Rani"));