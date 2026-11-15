const reverseWithLoop=(text)=>{
    let reversedText="";
    for(let i=text.length-1; i>=0; i--){ //loop ko manay last index say chalaya hay
        reversedText+=text[i];  //reversedtext updtae hota jara hay or text kay har index ki value last say ismay concatenate horai hay
    }
    return reversedText;
};
let input=prompt("Enter any text: ");
let ReverseText=reverseWithLoop(input);
alert(`Your original text is: ${input}\nYour reverse text is: ${ReverseText}`);