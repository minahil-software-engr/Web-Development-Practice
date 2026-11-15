Approach 1: toLocaleDateString("en-GB") ka Tareeqa

new Date() se aaj ki current date aur time ka aik object banaya jata hai.

.toLocaleDateString("en-GB") method date ko regional ya local formatting ke mutabiq string mein convert karta hai.

Isme "en-GB" (United Kingdom format) pass karne se JavaScript automatically date ko DD/MM/YYYY (Day/Month/Year) ke standard format mein set kar deta hai.

Approach 2: toISOString() ka Tareeqa

new Date() se current date object banaya jata hai.

.toISOString() method date ko standard ISO 8601 format (jaise 2026-08-07T...) mein badal deta hai.

Yeh universal format UTC timezone par mabni hota hai, jo aam tor par APIs, databases, aur backend servers ke sath data interchange karne ke liye use hota hai.

Approach 3: Manual Component Extraction (Alag-alag values nikalna)

new Date() se system date object liya jata hai.

.getFullYear() se current saal, .getDate() se din, aur .getMonth() + 1 se mahina nikal kar alag variables mein store kiya jata hai.

Yahan + 1 isliye lagaya jata hai kyunki JavaScript mein months ki counting 0 (January) se shuru hoti hai, isliye exact month number ke liye aik step aage barhana parta hai.

Approach 4: Custom Template Format (YYYY-MM-DD)

Template literals (backticks `) aur string interpolation (${}) ka use karke date ke parts ko jora jata hai.

Isme getFullYear(), getMonth() + 1, aur getDate() ko minus (-) sign ke sath combine karke aik custom string banayi jati hai.

Yeh bina kisi complex library ke apni marzi ka format banane ka aik aasan tareeqa hai.

Approach 5: Challenge Way with padStart (Padded Custom Format)

Isme single-digit numbers (jaise date ya month agar 1 se 9 ke darmiyan ho) ke sath padding ki jati hai taake format hamesha two digits (05, 09) mein rahe.

.toString() ya String() se date/month ko string banakar .padStart(2, "0") lagaya jata hai, jo length 2 poori karne ke liye shuru mein zero add kar deta hai.

Aakhir mein ${day}/${month}/${year} ke zariye aik clean, professional aur fix DD/MM/YYYY string print hoti hai.

Comparison & Formatting Points

toLocaleDateString: Bohot asaan aur one-liner hai, lekin iska output browser ya locale configuration par depend kar sakta hai agar properly specify na kiya jaye.

toISOString: Databases aur servers ke liye sabse reliable aur standard hai, lekin yeh local time ke bajaye hamesha UTC time aur lamba string format deta hai.

Manual Extraction & Custom Template (YYYY-MM-DD): Isme aapko poora control milta hai, lekin iska nuqsaan yeh hota hai ke single-digit months/days ke sath 0 nahi aata (jaise 8 ki jagah 08 nahi hoga), jis se format thora kharab lag sakta hai.

Challenge Way (padStart): Yeh custom formatting ka sabse behtareen aur professional tareeqa hai kyunki yeh manual control bhi deta hai aur padStart ki wajah se single digits ko automatically fix karke uniform look (DD/MM/YYYY) ensure karta hai.
