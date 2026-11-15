1. Separate VariablesStep:

 numbers.filter() execution start karta hai aur number > 30 check karke ek alag memory variable filtered mein [45, 60] store karta hai

filtered.map() variable filtered par chalta hai aur har element ko string `Value: ${number}` mein convert karta hai.

Final transformed values variable result mein save hokar ["Value: 45", "Value: 60"] print hoti hain.

2. Direct ChainingStep:

numbers.filter() pehle background mein ek temporary intermediate array [45, 60] generate karta hai.

Next .map() method alag variable ke bajaye seedha usi temporary array ke output par apply hota hai.

String conversion complete karke final array result variable mein assign ho jata hai.

3. .reduce():

Initial value ek empty array [] (accumulator result) set hoti hai.

Single loop array ke har element (10, 25, 30, 45, 60) par chalta hai.

if (number > 30) check hota hai; pass hone par string direct accumulator array mein .push() ho jati hai.

Iteration khatam hote hi accumulator result return ho jata hai.

4. Chaining with .sort() :

numbers.filter() elements ko filter karke temporary array [45, 60] banata hai.

.sort((a, b) => b - a) intermediate array ko descending order (bade se chota) mein shift karke [60, 45] kar deta hai.

.map() sorted numbers ko convert karke final output ["Value: 60", "Value: 45"] banata hai.

Readability:

 Direct Chaining: Modern JavaScript ka industry standard hai. Linear flow (filter -> sort -> map) code parhte hi clear samajh aata hai

Separate Variables: Intermediate steps ko console.log se debug karne ke liye behtar hai, lekin faltu variables se code clutter hota hai.

.reduce() (Lowest): Logic complex hoti hai. Loop ke andar manual push aur state management ki waja se parhne mein sabse mushkil lagta hai.

Performance: 

.reduce(): Single-pass (O(N)) execution karta hai. Ek hi loop mein filtering aur mapping hoti hai, jisse temporary arrays ki extra memory cost bachti hai

Chaining & Separate Variables: Multi-pass execution karte hain (O(N) + O(N)). Filter alag memory space leta hai aur Map alag.

Chaining with .sort(): Sorting algorithm add hone se time complexity O(N log N) ho jati hai, jo execution cost ko sabse zyaada badha deti hai.
