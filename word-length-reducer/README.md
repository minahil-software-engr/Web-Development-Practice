1. for...of :

Outer memory mein empty object wordLengthMap = {} initialize hota hai.

for...of loop array ke actual elements ("apple", "banana") ko bina kisi index management ke directly pickup karta hai.

Object bracket notation wordLengthMap["apple"] = 5 se directly key-value pair write hota hai.

Iteration complete hone par direct object output milta hai.2.

.forEach()

Outer memory mein global wordLengthMap = {} tayyar hota hai.

.forEach() internal loop chala kar har item ke liye callback function run karta hai.

Callback function outer scope se wordLengthMap ko access karke mutates (update) karta hai

Execution finish hone par scope function destroy hota hai aur output print hota hai.

3. .reduce() :

Initial value {} callback ke second argument ke taur par pass hokar lengthMap (accumulator) banti hai.

Single iteration ke andar key-value assign hota hai (lengthMap["apple"] = 5).

Updated lengthMap explicitly return hokar agli iteration ke liye accumulator ban jati hai.

Bina kisi external variable ke pura result single line assignment mein store hota hai.

4. .reduce() :

Initial accumulator longestWordSoFar ko "" (empty string) par rakha jata hai

"apple" (5 > 0) accumulator banta hai, fir "banana" (6 > 5) naya champion banta hai.Step 3 (Pass 3 & 4): "watermelon" (10 > 6) lead leta hai, fir "kiwi" (4 > 10) fail hone par "watermelon" hi retains rehta hai.Step 4: Final retained string "watermelon" return hoti hai.

Performance Comparison :

Execution Speed (for...of is Fastest): for...of Sabse teez execute hota hai kyunki JavaScript Engine (V8) ise directly machine level par optimize karta hai

Function Call Overhead: .forEach() aur .reduce() har element par ek naya callback function call karte hain (N function executions). for...of mein zero function call overhead hota hai.

Scope & Side Effects: .reduce() pure state management follow karta hai aur outer variable par depend nahi hota. for...of aur .forEach() ko execution ke liye outer scope variable (wordLengthMap) ko mutate karna padta hai.

Memory Efficiency: Teeno methods space complexity O(N) follow karte hain agar direct object update kiya jaye. Leikin .reduce() ke andar agar { ...acc } spread operator use kiya jaye toh memory allocation kafi heavy ho jati hai.Best Use Case Verdict: Speed aur large data (100k+ items) ke liye for...of best hai, jabki clean data transformation ke liye .reduce() best practice hai.
