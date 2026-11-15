let text = prompt("Enter a string:");
//reduce loop chalta rhay ga jab tak array kay tamam elements nai ho jatay orr har element cuurent value hoga or jo result aya ga next loop may woi result hoga
let reversedBySplitReduce = text.split("").reduce((result, currentValue) => {
    return currentValue + result;
}, "");  //split Ek poori String ko tor kar Array banana.
alert(`Your original text is: ${text}\nYour reverse text is: ${ reversedBySplitReduce}`);