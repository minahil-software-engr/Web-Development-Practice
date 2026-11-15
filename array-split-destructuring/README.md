Approach 1: shift() method wala tareeqa

Sabse pehle spread syntax (...) use karke original array ka aik copy banaya jata hai taake original data mutate (change) na ho.

Phir shift() method ka use karke copy ki gayi array ka pehla element nikal liya jata hai, jo firstElement ban jata hai.

Baqi bachi hui array remainingElements ban jati hai aur function dono ko aik naye array mein return kar deta hai.

Approach 2: slice() method wala tareeqa

Isme array ko mutate kiye bagair direct indexing (inputSequence[0]) se pehla element hasil kiya jata hai.

Phir slice(1) method ka use karke index 1 se lekar aakhir tak ke saare elements ki aik nayi bachi hui array alag nikal li jati hai.

Yeh aik non-mutating tareeqa hai kyunki yeh original array ko bilkul bhi disturb nahi karta.

Approach 3: Array Destructuring aur Rest Operator (...) wala tareeqa

Yeh JavaScript ka sabse modern, clean aur professional tareeqa hai.

Isme square brackets ke andar destructuring ki jati hai jahan pehla variable pehla element pakar leta hai.

Aur rest operator (...remainingElements) baqi bachne wale saare elements ko khud ba khud aik nayi array mein pack kar deta hai.

Approach 4: Destructuring se Variables Swap karna

Isme do variables (firstValue = 10 aur secondValue = 20) ki values ko aapas mein badla jata hai.

Iske liye kisi extra temporary variable ki zaroorat nahi parti, balkay aik hi line mein array destructuring syntax se values foran swap ho jati hain.

Immutability Comparison Points

shift() method (Mutating approach): Yeh original array ko modify (change) kar deta hai, isliye iske liye pehle spread operator se clone banana lazmi hota hai warna data kharab ho sakta hai.

slice() method (Non-mutating approach): Yeh bilkul safe hai kyunki yeh original array ko bina change kiye uski aik nayi copy bana kar operations perform karta hai.

Rest Operator ... (Non-mutating approach): Yeh bhi completely safe aur immutable hai kyunki destructuring karte waqt original array apni jaga mehfooz rehti hai aur naye variables alag bante hain.
