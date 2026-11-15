Approach 1: Capitalize Long Words Only (map + if-else)

.split(" ") ka use karke poore sentence ko space ke base par alag-alag words ki array mein tod diya jata hai.

.map() har word par aik aik karke loop chalata hai, aur if (singleWord.length > 3) ki condition check karta hai ke word 3 letters se bara hai ya nahi.

Agar word 3 letters se bara ho, toh singleWord[0].toUpperCase() + singleWord.slice(1) se uska pehla letter capital kar diya jata hai.

Chote words (jaise "is", "a") ko bina change kiye waisa hi return kar diya jata hai, aur aakhir mein .join(" ") sab ko wapas sentence bana deta hai.

Approach 2: Capitalize All Words Using a Traditional for...of Loop

.split(" ") se sentence ko words ki array mein convert karke wordsList mein store kiya jata hai.

Aik empty array capitalizedWordsList banayi jati hai taake modified words ko save kiya ja sake.

for...of loop ke zariye har aik word ko utha kar uska pehla letter .toUpperCase() se bara kiya jata hai aur baaki hissa .slice(1) se jor diya jata hai.

Naye capitalized word ko .push() se nayi list mein dala jata hai, aur aakhir mein .join(" ") karke final sentence return hota hai.

Approach 3: Capitalize All Words Using Regular Expressions (regex)

Yeh aik single-line aur advance tareeqa hai jo .replace() method aur Regular Expression (/\b\w/g) ka use karta hai.

\b word boundary aur \w word character ko match karta hai, yani yeh har word ke pehle letter ko target kar leta hai (g ka matlab global/sare words).

Jaise hi pehla letter match hota hai, callback function firstLetter.toUpperCase() chalta hai jo usay foran capital kar deta hai.

Isme array banane (split) ya join karne ki zaroorat nahi parti, direct string par kaam hota hai.

Approach 4: Capitalize All Words Using map() Method

Yeh approach Approach 1 jaisi hi hai lekin isme koi if-else condition nahi hoti.

.split(" ") se words alag kiye jate hain, aur .map() har word ke pehle letter ko uppercase karke baaki hissay ke sath .slice(1) se mila deta hai.

Yeh functional programming ka bohot clean aur popular tareeqa hai jab aapko sentence ke har aik word ka pehla letter capital karna ho.

Comparison & Performance Points

Regex Approach (replace): Sabse short aur concise code hai. Yeh performance ke lihaaz se kaafi fast hota hai kyunki yeh array conversion (split/join) ke bagair direct string par operations perform karta hai.

map Method (Approach 4): Readable aur clean hai. Chhote se medium sentences ke liye bohot acha hai, lekin array banne ki wajah se yeh regex ke muqable mein thora zyada memory use karta hai.

Traditional for...of Loop (Approach 2): Bohot aasan aur beginner-friendly hai. Iski performance large datasets par achi hoti hai kyunki yeh native loops use karta hai, lekin iska code thora lamba likhna parta hai.

Conditional Capitalization (map + if-else - Approach 1): Yeh tab use hota hai jab aapko specific rules lagane hon (jaise sirf 3 letters se bare words capital karne hon). Yeh customized logic ke liye best hai lekin conditional checks ki wajah se baqion se thora mukhtalif maqsad ke liye hai.
