Merging Sorted Arrays

Iss task mein many 2 pehle se sorted arrays ko aapas mein jod kar ek nayi sorted array banai hain, wo bhi bina unka order kharab kiye.

1. Two-Pointer Approach:

Yeh sab se smart aur fast tarika hai kyunki yeh dono arrays ke pehle se sorted hone ka poora faida uthata hai. Hum dono arrays par alag-alag do markers (i aur j) rakhte hain aur har step par sirf unhi do values ko compare karte hain. Isse humein poori array ko baar baar check nahi karna parta.

Step 1: i = 0 pehli array ke liye aur j = 0 doosri array ke liye set karte hain.

Step 2:Loop chalata hai jab tak dono arrays mein elements bachay hon. Jo element chhota hota hai, usko merged array mein daal kar uska pointer (i++ ya j++) aage barha dete hain.

Step 3: Jab koi ek array khatam ho jati hai, toh loop ruk jata hai. Phir doosri array ke bache hue saare bade elements ko .slice() aur .concat() ki madad se aakhir mein direct jod dete hain.

Performance O(n + m):Yeh sab se fast hai kyunki har element sirf ek hi baar check hota hai.

2. Concat + Sort Approach:

Yeh ek chhota aur seedha tarika hai jisme hum pehle dono arrays ko aapas mein mila dete hain aur phir JavaScript ke built-in `.sort()` function se poori array ko dobara zero se sort karte hain. Code likhne mein yeh 1 line ka hai, lekin yeh pehle se hui sorting ki mehnat ko zaya kar deta hai.

Step 1: .concat() se dono arrays ko mila kar ek bari unsorted array banate hain.

Step 2: .sort((a, b) => a - b) ka comparator function use karte hain taake numbers ki numeric sorting ho.

Step 3: Comparator function do numbers ko minus (a - b) karke faisla karta hai: agar answer negative ho toh a pehle aayega, agar positive ho toh b pehle aayega.

Performance:O((n + m)log(n + m)): Yeh slow hai kyunki yeh already sorted arrays ko bhi dobara se poora sort karta hai.

3. Recursive Approach:

Yeh functional programming ka tarika hai jisme koi for ya while loop nahi chalta. Function apne aap ko baar baar call karta hai. Har call mein dono arrays ke pehle elements (index 0) ko compare kiya jata hai, chhote number ko side par rakha jata hai, aur bachi hui array par dobara function chalaya jata hai.

Step 1: Sab se pehle check karte hain ke agar koi ek array khali ho jaye (length === 0), toh doosri array ko return kar do taake recursion ruk jaye.


Step 2: arr1[0] aur arr2[0] ko compare karte hain.
Step 3: Chhote element ko single array [arr1[0]] mein rakh kar bachi hui sliced array ke sath function ko dobara call kar dete hain.

Step 4: Aakhir mein saare return hote hue tukde .concat() ke zariye juddle chale jate hain aur final array ban jati hai.

Performance:O(n + m) Time toh kam leta hai, lekin zeyada bari arrays par Call Stack memory fill ho sakti hai aur error aa sakta hai.
