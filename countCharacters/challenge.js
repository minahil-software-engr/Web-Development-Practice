const countCharacters=(text)=>{
    const count={}; //object initialize kiya
    let maxCount=0; //pahly 0 initialize kiya
    let mostFrequentCharacter="";  //isko bhi initialize kiya
    const cleanText=text.toLowerCase().replaceAll(" ",""); //tolowercase say sab small letters may hogya text or replace all say space remove hogai
    for(let i=0; i<cleanText.length; i++){
        let character=cleanText[i];  //har character pick kiya bar bari
        if(count[character]){ //agar tu wo object may key tha tu phir oski value dhaki
            count[character]++;  //or value mai increment kar deya
        }
        else{ // agar object may key nai thi
            count[character]=1; //tu character ko key bna kay 1 initialize kardeya
        }
        if (count[character]>maxCount){  //agar key ki value max say bari hay tuu
        maxCount=count[character]; //max update kardeya
        mostFrequentCharacter=character;  //or key jo hay wo most frequent character
        }
    }
    return (`${mostFrequentCharacter}: ${maxCount}`);
}
console.log(countCharacters("Minahil Rani"));