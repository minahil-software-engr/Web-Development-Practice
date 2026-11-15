Step 1: Hoisting :

Is hissay mein humne dekha ke functions ko declare karne se pehle call kar sakte hain ya nahi

Function Declaration: JavaScript execution se pehle pooray function ko memory mein top par le jati hai (is process ko Hoisting kehte hain). Is wajah se aap function ko code mein likhne se pehle bhi call kar sakte hain.

Arrow Function: Arrow functions const ya let variable ke andar store hote hain. Inki hoisting nahi hoti (Technical zaban mein yeh Temporal Dead Zone mein hote hain). Isliye inko pehle define karna zaroori hai, warna Error aayega.

Comparison: Declaration pehle call ho sakti hai, Arrow Function pehle call nahi ho sakta.

Step 2: this Keyword :

Is hissay mein humne dekha ke object ke andar this kaise kaam karta hai

Function Declaration: Iska apna Dynamic this hota hai. Jab aap user.greetDeclaration() call karte hain, toh this ka matlab automatic user object ban jata hai. Isliye this.userName se "Zeeshan" mil jata hai.

Arrow Function: Iska apna koi this nahi hota (Lexical this). Yeh this ko apne se bahar walay scope (Window/Global) se dhoondhta hai. Isliye object ke andar this.userName likhne se "Zeeshan" nahi milta, aur hume majbooran direct user.userName likhna padta hai.

Comparison: Object methods ke liye Function Declaration mein this chalega, Arrow Function mein this.userName nahi chalega.

Step 3: Extra Arguments vs Rest Parameter:

Is hissay mein extra values ("Extra1", "Extra2") ko handle karne ka farq dikhaya gaya hai

Function Declaration: Isme JavaScript background mein built-in arguments object deti hai. Aap parameter mein (name) likhein ya na likhein, arguments ke andar saare inputs ("Ali", "Extra1", "Extra2") save hote hain.

Arrow Function: Arrow function ke paas built-in arguments nahi hota. Extra values lene ke liye hume ...args (Rest Parameter) likhna padta hai. name pehli value "Usman" le leta hai aur args baaki bachi hui values (["Extra1", "Extra2"]) ko array mein rakhta hai.

Comparison: Declaration mein arguments hamesha sab kuch (total) rakhta hai, Arrow Function mein ...args pehle parameter ke baad bachi hui values rakhta hai.

Step 4: Default Parameters :

Is last part mein humne function ko khali call (greet()) karke check kiya

Modern JavaScript (ES6) mein Default Parameter (name = "Guest") ka feature dono functions mein bilkul ek jaisa kaam karta hai.

Jab aap greetDeclaration("Ali") ya greetArrow("Usman") call karenge, toh given name print hoga.

Jab aap parameter nahi bhejenge (greetDeclaration() ya greetArrow()), toh dono automatic name ki value "Guest" set kar denge. Is se hume if...else likhne ki zaroorat nahi padti.

Comparison: Default parameter ka behavior dono mein 100% same hai.

