const reverseWithRecursion=(text)=> {
    // Jab string khali ho jaye
    if (text === "") return "";
    
    // str[0] se pehla character access hoga
    return reverseWithRecursion(text.substring(1)) + text[0];
};
let input=prompt("Enter any text: ");
let ReverseText=reverseWithRecursion(input);
alert(`Your original text is: ${input}\nYour reverse text is: ${ReverseText}`);