1. Plain Object Way
Is approach mein hum JavaScript ka standard Plain Object use karte hain.
Step 1: Lowercase aur spaces remove karke text ko clean kiya jata hai.
Step 2: String ke har character par loop chalta hai.
Step 3: Object key check karta hai: agar count[character] pehle se majood hai toh uski value +1 increment kar deta hai, warna key ko 1 se initialize karta hai.Result: Fast, lightweight, aur general web development ke liye sabse popular approach hai.

2. Built-in Map Way
Yeh JavaScript ka actual Hash-Map Data Structure implementation hai.
Step 1: Standard object {} ki jagah new Map() ka instance banaya jata hai.
Step 2: Loop ke andar built-in methods se decision liya jata hai
:count.has(character)= Check karta hai ki key pehle se hai ya nahi.
count.get(character)=Current count read karta hai.
count.set(character, value)= Nayi value write/update karta hai.
Result: Key-value pairs dynamic, insertion-ordered, aur heavy operations ke liye highly optimized hote hain.

3. Array of ASCII Codes Way 
Yeh sabse low-level aur direct memory access wali method hai.
Step 1: Fixed 256 size ka numeric array banaya jata hai jisme har index par pehle 0 hota hai.
Step 2: charCodeAt(i) se letter ka numeric ASCII code  nikala jata hai.
Step 3: Direct array index update hota hai 
Step 4: Second loop mein array ko scan karke non-zero values ko String.fromCharCode(y) se wapas characters mein convert karke plain object bana kar return kiya jata hai.
Result: Isme koi hash lookup overhead nahi hota, isiliye sabse fast execute hoti hai.

4. The Challenge
Yeh code Plain Object approach par base karta hai lekin single pass mein maximum frequency nikalta hai.
Step 1: Sabse bade count ko track karne ke liye maxCount = 0 aur mostFrequentCharacter = "" initialize hote hain.
Step 2: Frequency update karte waqt hi ek if condition check karti hai: if (count[character] > maxCount).
Step 3: Agar kisi character ka count ab tak ke sabse bade count se bada hota hai, toh woh dynamic tareeqe se maxCount aur mostFrequentCharacter ko update kar deta hai.Result: Bina doosra loop chalaye, sirf O(N) time complexity mein sabse zyada aane wala letter aur uska count return kar deta hai.

Performance Comparison (10,000 Characters):

Jab hum 10,000 characters ki string par in teeno methods ko test karte hain, toh results yeh hotay hain:
Array of Char Codes — Winner  (~0.5 ms)Direct ASCII code  se index access karta hai.Isme koi string hashing ya key lookup nahi hota, isiliye yeh sabse fast aur lightweight hai.
Plain Object  — Balanced (~2.0 ms)String keys (jaise count['a']) banata hai.Modern JS engines isey kafi optimize karte hain, isiliye yeh fast bhi hai aur parhne mein sabse aasan hai.
Built-in Map — Third Place  (~3.0 ms)Har character par .has(), .get(), aur .set() ke functions call hote hain.In function calls aur extra memory overhead ki wajah se yeh thoda slow ho jata hai.
 Array maximum performance ke liye best hai, Object daily coding ke liye best hai, aur Map specialized data structures ke liye.
