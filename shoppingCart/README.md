Method 1: Traditional for Loop:

Yeh sab se basic tareeqa hai jisme hum explicit index counter (i = 0) chala kar array ki length tak loop chalate hain.

Har step par cart[i] ke zariye current object ko pakda jata hai, aur cart[i].price * cart[i].quantity nikaal kar bahar rakhe total variable mein add kiya jata hai.

forEach aur .reduce() ke muqable mein isme ziada code likhna padta hai (i++, cart.length), jis ki waja se typo ya index out-of-bound hone ka chance ziada hota hai. Isme ek alag se external variable (let total = 0) banana padta hai aur aakhir mein manual return total karna padta hai.

Method 2: .forEach()

Yeh JavaScript ka higher-order method hai jo array ke har item (object) par baari-baari automatic callback function execute karta hai.

Isme i index counter manual likhne ki zaroorat nahi parti; JavaScript direct har object ko variable item mein pass kar deta hai. Phir function ke andar item.price * item.quantity kar ke bahar rakhe variable total ko update kiya jata hai.

for loop se ziada clean aur parhne mein aasan hai kyunke index direct manage nahi karna padta. Lekin for loop ki tarah isme bhi ek external variable (let total = 0) banana padta hai aur manual return total likhna padta hai.

Method 3: .reduce()

Yeh functional programming technique hai jo poori array ke items par process karke aakhir mein ek single aggregate value (final total sum) return karti hai.

Isme 2 main parameters hotay hain—result (accumulator) aur item (current element). Initial value , 0 di jaati hai. Har iteration par result + (item.price * item.quantity) return hota hai jo agle step ka starting result ban jata hai.

Teeno methods mein sab se best aur modern approach hai. Iska sab se bara faida yeh hai ke isme for loop ya forEach ki tarah alag se let total = 0 variable declare nahi karna padta, aur na hi aakhir mein manual return total likhna padta hai—yeh single final amount ko directly return kar deta hai.

The Challenge: applyDiscount(code)

totalPriceReduce() ko call karta hai taake Shopping Cart ki current bill amount nikaal sake.

Pehle check hota hai ke daala gaya coupon code "SAVE10" sahi hai AUR cart ka total $100 se barha hai ya nahi.

Agar dono conditions sahi (true) hongi, to 10% discount calculate hota hai (currentTotal * 0.10) aur usko total amount se minus karke final discounted total console par dikhaa diya jata hai.

Agar coupon code sahi ho lekin total amount 100 ya us se kam ho, to error message print hota hai ke discount ke liye bill 100 se ziada hona zaroori hai.Agar coupon code galat daala jaye to "Invalid coupon code" ka message screen par print ho jata hai.
