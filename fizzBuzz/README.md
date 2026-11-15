Method 1: Standard if-else Chain

Step 1: for loop i = 1 se shuru hota hai aur i = 100 tak increment (i++) karta hai.

Step 2: Sabse pehle i % 3 === 0 && i % 5 === 0  check hota hai. Agar yeh true hai, toh "FizzBuzz" print hota hai aur baki checks skip ho jaate hain.

Step 3: Agar pehli condition false ho, toh order-wise i % 3 === 0 ("Fizz") aur phir i % 5 === 0 ("Buzz") check hota hai.

Step 4: Agar koi bhi condition match na ho, toh else block chal kar original number i print kar deta hai.

Method 2: switch(true) Pattern

Step 1 : Standard switch variable match karne ke bajaye switch(true) use karta hai, jisme har case ek boolean condition evaluate karta hai.

Step 2: JS pehla aisa case dhoondta hai jiska result true ho. Sabse strict condition sabse upar rakhi jati hai.

Step 3 : Jaise hi pehla matching case milta hai, uska console.log() execute hota hai aur break statement execution ko outer loop par bhej deti hai.

Step 4: Jab saare cases false hote hain, toh default: statement run hokar plain number i print kar deti hai.

Method 3: String Concatenation

Step 1 : Har iteration ke start mein let output = "" initialize hota hai, jisse picchle number ka text clear ho jaye.

Step 2: Independent if statements run hoti hain:

3 se divide hone par "Fizz" add hota hai.

5 se divide hone par "Buzz" append hota hai.

15 aane par dono conditions execute hokar automatically "FizzBuzz" bana deti hain (bina 15 ko alag se check kiye).

Step 3:
Agar output mein text hai (Truthy), toh text print hota hai.

Agar output khali "" hai (Falsy), toh OR (||) operator next value i print kar deta hai.

Comparison of All 3 Methods
1. if-else Chain
Readability: High — Beginners aur har programmer ke liye samajhna sabse aasan hai.

Code Size: Lamba — Repeated conditions aur multiple blocks likhne padte hain.

Order Dependency: Strict — Multiples of 15 (% 3 aur % 5) ko pehle position par rakhna zaroori hai.

Scalability: Poor — Naye conditions (jaise 7 = "Bazz") add karne par code bohot complex ho jata hai.

2. switch(true) Pattern
Readability: Medium — Conditional evaluation ke liye switch use karna aam taur par unconventional lagta hai.

Code Size: Lamba  — Har check ke sath case aur break likhna padta hai.

Order Dependency: Strict — Sabse tight condition (15) ko sabse upar rakhna mandatory hai.

Scalability: Poor — Har combination ke liye naye cases add karne padte hain.

3. String Concatenation 
Readability: Highest — Sabse clean, modern aur smart technique hai.

Code Size: Shortest — Boht kam lines mein poora logic solve ho jata hai.

Order Dependency: Flexible — 15 ko alag se check nahi karna padta, string concatenation se "FizzBuzz" auto-combine ho jata hai.

Scalability: Excellent — Naya condition add karne ke liye bas 1 single line add karni padti hai.
