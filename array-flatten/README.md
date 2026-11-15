Approach 1: Reduce aur Concat ka Tareeqa

Yeh tareeqa aik functional approach hai jo array ke har element par aik aik karke step-by-step chalta hai.

Isme aik khaali array (accumulator) shuru ki jati hai jo aage chal kar saara data ikattha karti hai.

.concat() ka function har element ko us khaali array ke sath aapas mein jorta jata hai.

Yeh sirf pehli level ki nested brackets ko kholta hai aur andar wali deep brackets ko apni hi jaga par chor deta hai.

Approach 2: Spread Operator aur Concat ka Tareeqa

Isme spread syntax ka use karke target array ke elements ko bahar nikal kar khol diya jata hai.

Phir .concat() un sab nikle hue elements ko aapas mein mila kar ek nayi single-level array bana deta hai.

Yeh likhne mein bohot chhota, saaf-suthra aur aasan tareeqa hai jo sirf aik level tak brackets ko open karta hai.

Approach 3: Built-in flat() Method

Yeh JavaScript ka apna official aur native tareeqa hai jo specially array ko flatten karne ke liye banaya gaya hai.

Isme bracket ke andar number likh kar batana parta hai ke kitni depth yaani levels tak brackets kholni hain.

Iske liye kisi manual loop ya lambi logic likhne ki zaroorat nahi parti, yeh sab kuch backend par khud handle karta hai.

Approach 4: Complete Deep Flatten (Recursion / Loop wala tareeqa)

Yeh tareeqa infinite depth yani jitni marzi lambi nested brackets hon, un sab ko mukammal khatam karne ke liye use hota hai.

Isme loop ke zariye har aik element ko check kiya jata hai ke wo khud aik aur array hai ya nahi.

Agar koi element khud array nikle, toh function khud ko dobara call karke uske andar wali brackets ke andar chalajata hai.

Agar normal number ho, toh usay seedha aakhri result wali list mein push karke save kar liya jata hai.

Performance Comparison Points

Built-in flat() method: Yeh sabse zyada fast aur behtareen hai kyunki yeh JavaScript ke apne engine ke andar optimize hua hota hai.

Spread aur Concat: Chhote aur normal size ki arrays ke liye yeh kaafi fast aur asaan memory management ke sath kaam karta hai.

Reduce method: Spread aur built-in flat ke muqable mein thora slow ho sakta hai kyunki yeh baar baar naye function calls aur variables banata hai.

Recursive function: Yeh complete flattening ke liye zaroori hai, lekin agar array bohat zyada deep ho toh continuous function calls ki wajah se memory par bohot bojh parta hai.
