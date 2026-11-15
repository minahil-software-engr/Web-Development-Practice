const isPalindrome = (text) => {
    let reversed = "";
    // Text ko reverse karne ka loop
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    if (text === reversed) {
        return true;  // Agar original aur reverse barabar hain
    } else {
        return false; // Agar barabar nahi hain
    }
}
let input = prompt("enter any text: ");
let isMatch = isPalindrome(input);
alert(`Your original text is: ${input}\nIs Palindrome: ${isMatch}`);