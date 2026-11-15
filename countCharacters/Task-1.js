const countCharacters=(text)=>{
    const count={};  //object initialize kiya
    const cleanText=text.toLowerCase().replaceAll(" ","");  //tolowercase say sab small letters may hogya text or replace all say space remove hogai
    for(let i=0; i<cleanText.length; i++){
        let character=cleanText[i];  //har character pick kiya bar bari
        if(count[character]){  //agar tu wo object may key tha tu phir oski value dhaki
            count[character]++;   //or value mai increment kar deya
        }
        else{ // agar object may key nai thi
            count[character]=1;  //tu character ko key bna kay 1 initialize kardeya
        }
    }
    return count;  //object return
}
console.log(countCharacters("Minahil Rani"));