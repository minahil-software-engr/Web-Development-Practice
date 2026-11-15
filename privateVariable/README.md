1. Closure Method:

Is mein private variable outer function ke andar let ya const se banta hai. Inner functions (jo object ki shakal mein return hote hain) is variable ko apne Closure Scope mein yaad rakhte hain.

Variable direct global scope mein accessible nahi hota. Bahar se agar myCounter.count access karne ki koshish karein toh undefined milta hai.

Is variable ko access ya update sirf wohi inner functions kar sakte hain jo parent function ke andar bane hon aur bahar return hue hon.

Yeh functional programming ka sab se core pattern hai. Is mein kisi extra syntax (jaise Class ya Hash #) ki zaroorat nahi hoti.

2. Modern Class Private Fields:

Yeh JavaScript (ES6+) ka official Hard Private feature hai. Class ke andar variable ke naam ke aage Hash symbol (#) lagaya jata hai.

Yeh sab se strict privacy provide karta hai. Agar aap class ke bahar se myCounter.#count likhne ki koshish bhi karein, toh JavaScript compile/parse time par hi Syntax Error phenk deta hai.

Symbol # wale variables ko sirf class ke apne internal methods (this.#count) ke zariye read ya update kiya ja sakta hai.

Modern, clean aur readable syntax hai jo Object-Oriented Programming (OOP) ke encaspsulation principle par bilkul fit baithta hai.

3. WeakMap Storage Method:

Is technique mein private data ko class ke object ke andar rakhne ke bajaye ek bahar pari WeakMap Storage (Locker) mein rakha jata hai, jahan Class Instance (this) ko as a Key use kiya jata hai.

Private data object ke structure ka hissa hi nahi hota, balki external storage mein chhupa hota hai. Direct property access par undefined milta hai.

Class ke internal methods privateStorage.get(this) karke apne specific instance ka data nikalte hain aur update karte hain.

Soft/Automatic Memory Management (Garbage Collection). Jab counter object destroy hota hai, toh WeakMap se uska private data bhi memory se khud-ba-khud delete ho jata hai.

Comparison

Privacy Strictness:

Class # Fields: Sab se ziada strict hai (Direct access par fatal SyntaxError aata hai).

Closure & WeakMap: High privacy hain (Direct access par koi error nahi aata, balki undefined milta hai).

Memory & Performance:

Closure: Har naya counter instance banne par inner functions ki nayi copies banti hain, jo memory thodi ziada leti hain.

Class # Fields: Prototype-based performance milti hai, memory efficient hai kyunki methods ek hi baar memory mein share hote hain.

WeakMap: Memory leakage se bachata hai kyunki WeakMap garbage collection ko support karta hai, lekin extra dictionary lookup ki wajah se thoda overhead hota hai.

Syntax & Readability:

Class # Fields: Sab se modern, saf-suthra aur parhne mein aasan hai.

Closure: Classic JavaScript pattern hai, functions ko samajhna aasan hai lekin zyada nesting se messy ho sakta hai.

WeakMap: Puraana/Workaround pattern hai jo # fields aane se pehle use hota tha, iska code samajhna thoda complex hota hai.
