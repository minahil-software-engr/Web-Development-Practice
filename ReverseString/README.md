Method 1: Loop se Reverse String

Sab se pehle function banaya jata hai jisme user ki di hui string parameter ke taur par aati hai.
Ek khali string banai jati hai jisme reverse text store hoga.
for loop ko string ke last index se chalaya jata hai.
Har iteration mein last character uthaya jata hai aur reverse string mein add kiya jata hai.
Loop last index se first index tak chalta hai.
Jab loop khatam hota hai to reverse string tayar ho jati hai.
Function reverse string return karta hai aur result display kar diya jata hai.

Method 2: Recursion se Reverse String

Sab se pehle function banaya jata hai.
Base condition lagai jati hai ke agar string khali ho jaye to function ruk jaye.
Function khud ko baar baar call karta hai aur har call mein string ka pehla character alag hota jata hai.
Jab string khali ho jati hai to function reverse order mein return hona shuru hota hai.
Har character akhir mein add hota jata hai aur reverse string ban jati hai.
Aakhir mein reverse string return karke display kar di jati hai.

Method 3: Split + Reduce

Sab se pehle user se string li jati hai.
split() string ko characters ki array mein convert kar deta hai.
reduce() array ke har element par ek ek karke kaam karta hai.
currentValue current character hota hai aur result pehle se bana hua reverse result hota hai.
Har iteration mein current character ko result ke aage add kiya jata hai jis se reverse string banti rehti hai.
Jab tamam elements process ho jate hain to final reverse string mil jati hai.
Aakhir mein original aur reverse text display kar diya jata hai.

Method 4: Palindrome Check

Sab se pehle string ko reverse kiya jata hai.
Phir original string aur reverse string ko compare kiya jata hai.
Agar dono same hon to true return hota hai.
Agar same na hon to false return hota hai.
Result user ko display kar diya jata hai.

Performance Comparison (Long Strings)

1. Loop Method
Yeh sab se fast aur efficient method hai.
Memory bhi kam use karta hai.
Long strings ke liye yeh best choice hai.
2. Recursion Method
Yeh samajhne mein achha hai lekin long strings ke liye suitable nahi hai.
Har character ke liye function dobara call hota hai jis se memory zyada use hoti hai.
Bohat lambi string par stack overflow ka error bhi aa sakta hai.
3. Split + Reduce Method
Yeh code chhota aur readable hota hai.
Pehle string ko array mein convert karta hai phir reduce() chalata hai.
Is wajah se loop ke muqable mein thori zyada memory aur time use karta hai.
Performance loop se kam hoti hai lekin recursion se behtar ho sakti hai.
