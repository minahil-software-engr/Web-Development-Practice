Method 1: Callback Pattern:

Math operations (add, sub, mul, div) ko independent individual functions ke taur par define kiya

operate(10, 5, add) call karte waqt add function run nahi hota, balki uska memory address (reference) as an argument operate ko milta hai.

operate function simple execution wrapper ka kaam karta hai. Inside operate, statement return callback(a, b) actual calculation trigger karti hai.

Division-by-zero check div function ke andar perform hota hai. Jab b === 0 hota hai, exception throw ho jati hai jo caller ka try...catch block handle karta hai.

Flexibility Rating: 10/10:
Direct functions pass karne ki wajah se operate function ko naye operations add karne ke liye modify nahi karna padta.
Inline arrow functions support hoti hain, jaise operate(10, 5, (a, b) => a % b).
Complete modularity aur Decoupled design structure offer karta hai.

Method 2: Object Mapping:

Standard math functions alag se define hoti hain aur unka reference ek key-value map (operationsMap) me store hota hai.

Caller function ko function reference ke bajaye String identifier pass karta hai.

operate function operationsMap[operationName] ke zariye map me se relevant function extract karta hai.

Access hone ke baad extracted function ko selectedFunction(a, b) se execute kiya jata hai.

Flexibility Rating: 7/10:
String-based inputs ke saath easily integrate ho jata hai.
Runtime par map extend kiya ja sakta hai.
User direct unknown functions pass nahi kar sakta; pehle key register karni padti hai.

Method 3: Internal Switch Statement:

Saari math logic (+, -, *, /) aur error validation ek hi function (operate) ke andar hardcode hoti hai.

Input String ("add", "sub", etc.) ke hisab se switch block corresponding case ko match karta hai.

Match hone par decision, validation, aur calculation on-the-spot function body ke andar hi perform hokar return hoti hai.

Match na hone par default case invalid operation handle karta hai.

Flexibility Rating: 3/10:
Calculation logic, flow control, aur execution logic tight coupling ka shikar hote hain.
Kisi bhi naye operation ke liye operate function ke main code ko manual edit karna padta hai.
Dynamic execution ya custom functions run karne ka koi rasta nahi rehta.
