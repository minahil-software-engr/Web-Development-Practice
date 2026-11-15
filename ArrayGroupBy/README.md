Code 1: groupByReduce (Standard Reduce)

Code {} (khali object) se kaam shuru karta hai jise hum accumulator kehte hain.

Har bande par ja kar uski city nikalta hai.

if (!result[groupKey]) check karta hai ke kya "Lahore" naam ki list pehle se bani hui hai? Agar nahi bani, to ek khali list [] bana deta hai.

Object ko us city wali list mein .push() karta hai aur updated result agle step ke liye return kar deta hai.

Code 2: groupByMap (forEach + Map)

Ek naya Map() data structure banata hai jo keys aur values ko fast store karta hai.

Array ke har item par loop chalata hai.

map.has() check karta hai ke key majood hai ya nahi; agar nahi hai to map.set() se khali array set karta hai.

map.get().push() se item daalta hai, aur aakhir mein Object.fromEntries(map) Map ko standard JS Object mein convert kar deta hai.

Code 3: Lodash (_.groupBy)

CDN link se browser mein Lodash ka engine load hota hai.

_.groupBy() function ke andar saari looping, key extraction, checking, aur array push ka kaam background mein khud hi 1 line mein ho jata hai.

Code 4: groupByNested (Challenge: Nested Keys)

getNestedValue function "address.city" ko tod kar ["address", "city"] ki list banata hai.

Pehle inner reduce object ke andar address tak jata hai, phir uske andar se city ki value ("Lahore") nikal kar lata hai.

Jab deep value mil jati hai, to baaqi logic bilkul Code 1 ki tarah empty array bana kar item push kar deta hai.

All Methods Comparison

Teeno tarikon aur nested challenge ka aapas mein comparison:

Performance & Speed: Map method bade datasets par speed ke hisaab se sabse fast hota hai kyunki map lookups quick hote hain, jabki normal reduce medium scale data ke liye standard aur best hai.

Code Simplicity: Lodash code likhne mein sabse chota (1 line) hai, lekin iske liye external script load karni padti hai. Vanilla JS methods (reduce aur Map) kisi library ke bina natively chalte hain.

Nested Handling: Simple reduce, Map, aur Lodash sirf seedhi keys ("city") par chalte hain, jabki groupByNested deep aur complex structures ("address.city") ko extract karke group karne ki salahiyat rakhta hai.
