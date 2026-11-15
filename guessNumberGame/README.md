is task mei hamain ek Guess the Number game banana tha, jisme computer 1 se 100 ke darmiyan ek random secret number chuney ga aur user ko usay 7 koshishon  mei guess karna hoga.

Har ghalat attempt par program user ko ishara deta hai ke unka guess kiya hua number original secret number se Too High hai ya Too Low

Agar user 7 attempts ke andar sahi number guess kar leta hai, toh screen par jeetne ka congratulatory message aur total lagne wali attempts show hoti hain.

Lekin agar user 7 attempts mei sahi number na pehchan paye, toh game over ka message aata hai aur sath mei real secret number display kar diya jata hai.

Is game ko banane ke liye manay random number generation ke 3 alag alag tareeqay  istemal kiye aur unka aasapas mei comparison kiya.


Method 1 (Math.random): Sab se pehlay humne JavaScript ka in-built function Math.random() use kiya. Ye function hamesha 0 se 1 ke darmiyan koi na koi decimal value (jaise 0.4521) generate karta hai.

Is decimal value ko 100 se multiply kiya gaya taake range 0 se 99.99 tak chale jaye, phir Math.floor() lagaya gaya taake point ke baad wale numbers khatam ho jayein aur pure integers ban jayein.

Aakhir mei +1 add kiya gaya taake range 0-99 se badal kar exact 1 se 100 ban jaye. Ye method bilkul simple hai aur aam games mei sab se zyada use hota hai.


Method 2 : Doosre tareeqay mei humne apna custom mathematical formula istemal kiya jise Linear Congruential Generator kehte hain.

Isme ek fixed ya current time wala number as a seed  liya jata hai. Humne isme formula (initial_value * 1664525 + 1013904223) % 4294967296 lagaya taake ek boht bara unpredictable number ban sake.

Phir us ko 4294967296 se divide karke 0 se 1 ke darmiyan decimal float hasil kiya, aur phir same Method 1 ki tarah * 100 aur + 1 karke 1 se 100 mei convert kar liya.

Is method ki sab se khas baat ye hai ke agar hum same seed value bar bar dein, toh har dafa bilkul same numbers ki sequence generate hogi. Ye tareeqay developers game ki testing aur debugging ke liye use karte hain.

Method 3 (Web Crypto API): Teesri technique mei humne browser ki advance security API crypto.getRandomValues() ka istemal kiya.

Iske liye pehlay Uint32Array(1) ka ek container banaya jo 32-bit unsigned integer store kar sakta hai.

Crypto API Operating System ke hardware-level noise aur entropy se secure random number utha kar is array mei daal deti hai.

Phir humne array ki value par Modulo operator [0] % 100 lagaya taake answer 0 se 99 ke darmiyan mile, aur aakhir mei + 1 add karke final range 1 se 100 kar di. Ye sab se secure aur professional tareeqah hai jo banking aur cryptography mei use hota hai.

Comparison (Aapas mei muqabla): Randomness ke mamle mei Crypto API sab se best aur unbeatable hai kyun ke iske numbers ko koi guess ya predict nahi kar sakta, jabke Math.random() ki randomness aam istemal ke liye achi hai lekin theoretical level par predictable hoti hai. Seeded generator ki randomness sab se kam hoti hai kyun ke fixed seed se hamesha same sequence banti hai.

Speed ke lihaaz se Math.random() sab se fast aur lightweight hai. Seeded generator custom math calculations ki wajah se thora sa slow hota hai. Crypto API teeno mei sab se slow hoti hai kyun ke is mei OS level ke security checks aur heavy background processing ho rahi hoti hai.
