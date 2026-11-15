1. Spread Operator:

Yeh person object ki tamam top-level properties ko ek nayi {} brackets ke andar copy karta hai aur uske baad [key]: value ke zariye(given) key ko update ya overwrite kar deta hai.

Single level objects (jaise name aur age) ke liye yeh original object ko safe rakhta hai. Lekin agar object ke andar koi aur inner object hota, to outer copy ban-ne ke bawajood inner object ka memory reference same rehta.

2. Object.assign():

Object.assign({}, object, { [key]: value }) mein sab se pehle ek khaali target object {} banta hai. Phir source object ki properties us mein copy hoti hain, aur aakhir mein update wali property layer overlay ho jati hai.

Functionality ke lihaz se yeh pehle tareeqe (Spread) ki tarah hi kaam karta hai. Modern JavaScript mein Spread Operator ziada readable mana jata hai, lekin Object.assign() purane ES6/JavaScript engines par bhi bilkul same behavior deta hai.

Yeh bhi top-level properties ko safely copy karta hai, lekin inner/nested objects ka reference clone nahi karta.

3. Deep Copy Update (JSON.parse(JSON.stringify())):

JSON.stringify(object) pehle poore object ko ek plain JSON text (string) mein convert karta hai, jisse memory ke saare references completely khatam ho jaate hain. Phir JSON.parse(...) us string ko wapis ek brand new object mein convert kar deta hai.

Kyunke yeh memory reference bilkul tod deta hai, is liye is clone ke andar agar kitni bhi nested layers (objects ke andar objects ya arrays) hoon, unhein modify karne se original object par 0% farq padta hai.

Yeh tareeqa simple data (strings, numbers, booleans) ke liye best hai, lekin functions, undefined, ya Date objects ko drop ya alter kar deta hai.

4. Nested Update (Manual Spread & Object.assign():

Deep copy method (JSON) use kiye bina jab hum shallow copy tools (... ya Object.assign) se nested data update karte hain, to humein har nested layer ko alag se copy (unpack) karna parta hai.

updateNestedSpread pehle outer object ko unpack karta hai (...obj), phir address key ke andar ja kar inner object ko dubara unpack karta hai (...obj[parentKey]), aur phir city ko "Islamabad" se overwrite karta hai.

High-performance React/JavaScript applications mein yeh manual approach JSON.parse se boht fast hoti hai kyunke yeh poore object ko stringify karne ke bajaye sirf target key path ko hi clone karti hai.

Shallow Copy vs Deep Copy

Shallow Copy (Sath-Sath Copying):

Shallow Copy kisi bhi object ki sirf pehli (outermost/top) layer ko naye memory location par copy karti hai. Agar object ke andar koi secondary object ya array maujood ho, to Shallow Copy us nested object ka naya structure banane ke bajaye purane object ka memory pointer (reference) hi share karti hai. Iska matlab yeh hai ke top-level values (name, age) ko change karne se original safe rehta hai, lekin nested values (address.city) ko modify karne par original object bhi change (mutate) ho jata hai. Shallow copy banane ke aam tareeqay Spread Operator (...) aur Object.assign() hain.

Deep Copy (Ghebra Copying):

Deep Copy object ki top layer se le kar aakhri nested layer tak sabhi inner objects, sub-properties, aur arrays ko mukammal tor par independent (azad) memory address par re-create karti hai. In dono objects ke darmayan memory ka koi link ya reference nahi rehta. Deep Copy wale object ke kisi bhi level par aap chahe jitni bhi changes, additions, ya deletions kar lein, original object 100% untouched aur safe rehta hai. Deep Copy banane ke popular tareeqay JSON.parse(JSON.stringify()), modern built-in structuredClone(), ya Manual Recursion functions hain.
