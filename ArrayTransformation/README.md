1. forEach:

 numbers variable mein original array [1, 2, 3, 4, 5] save hota hai.

 Ek khali array const doubled = [] banaya jata hai jisme values insert hongi.

 numbers.forEach() array ke har item par बारी-बारी callback function execute karta hai.

 Iteration ke waqt num * 2 calculate hota hai aur .push() method se doubled array ke aakhir mein add hota rehta hai.

 Final output [2, 4, 6, 8, 10] console par print hota hai.

2. for loop:

Original array numbers aur empty array doubled initialize hote hain.

Index variable i = 0 se start hota hai aur i < numbers.length (5) tak chalta hai.

Loop har turn par current index ki value extract karta hai (numbers[i]).

Element ko 2 se multiply karke .push() se doubled mein store karta hai.

Complete array construct hone ke baad output print ho jata hai.

3. .map() :

Original array numbers define hota hai.

.map() background mein automatic ek naya empty array create kar leta hai (manual .push() ki zarurat nahi parti).

Array ke har item par callback function chalta hai aur return num * 2 value calculate karta hai.

Har returned value naye array mein same index par automatic place ho jati hai.

Transformed array doubled mein save hokar output [2, 4, 6, 8, 10] print hota hai

.4. .filter() + .map():

 numbers.filter() pehle execute hota hai. Ye har element par check karta hai: num % 2 === 0 (even condition).

Filter method ek temporary intermediate array return karta hai jisme sirf even numbers hote hain: [2, 4].

Immediately filter ke output par .map() apply ho jata hai.

.map() ka callback har element ka square nikalta hai (2**2 = 4, 4**2 = 16).

Final result [4, 16] variable result mein save hokar print hota hai.

Speed Comparison :

(for loop): Engine layer par simple loop operations sabse kam memory footprint aur function calls overhead leti hain, is waja se large datasets par for loop sabse fast hota hai.

 (forEach): Traditional loop se slightly slow hota hai kyun ke har iteration par ek nayi function call create hoti hai.

 (.map()): Speed mein forEach ke karib hota hai, lekin internal memory pre-allocation ki waja se dynamic array resizing (.push()) se zyaada optimized hota hai.

Immutability Comparison:

(.map()): .map() functional programming ka rule follow karta hai. Ye original array ko alter nahi karta aur na hi outer scope ko modify karta hai (zero side effects).

 (.filter().map()): Chaining process original dataset ko completely untouched rakhta hai aur aik fresh array calculate karke return karta hai.
 
 (forEach & for loop): Yeh dono methods direct immutability deliver nahi karte. In mein external variable (doubled) ko mutate (modify) karna parta hai (doubled.push()), jo code ko side-effects prone banata hai.
