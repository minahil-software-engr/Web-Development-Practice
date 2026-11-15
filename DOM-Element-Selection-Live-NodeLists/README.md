TASK: SELECT ALL P TAGS AND COUNT THEM

1. Task ka Basic Purpose

Is task ka purpose page par mojood tamam p tags ko select karna aur unki total quantity count karna hai. HTML mein p tag paragraph ke liye use hota hai. JavaScript mein document.querySelectorAll ka use karke page ke tamam p elements select kiye jate hain. Phir length property ki madad se pata lagaya jata hai ke page par total kitne paragraphs mojood hain.

2. P Tag Kya Hai

HTML mein p tag paragraph create karne ke liye use hota hai. Jab page par multiple p tags hote hain to har p tag ek separate paragraph represent karta hai. Example ke taur par agar page mein do p tags hain to page par total do paragraphs honge. JavaScript in tamam paragraphs ko select karke unki quantity count kar sakti hai.

3. querySelectorAll ka Role

document.querySelectorAll ka purpose page se tamam matching elements ko select karna hai. Is task mein p selector use kiya gaya hai, isliye querySelectorAll page ke tamam p tags ko select karta hai. Agar page mein do p tags hain to dono select honge. Agar page mein five p tags hain to tamam five p tags select honge.

4. Selector ka Concept

querySelectorAll ke andar p likhne ka matlab hai ke program ko page ke tamam p elements select karne hain. Selector browser ko batata hai ke kis type ke elements find karne hain. Is case mein selector p hai, isliye sirf paragraph elements select honge.

5. length Property ka Role

querySelectorAll se selected elements ki list milti hai. Is list ki total quantity jaanne ke liye length property use ki jati hai. Agar page par do p tags hain to length ki value 2 hogi. Agar page par three p tags hain to length ki value 3 hogi. Is tarah length property total paragraphs ki number provide karti hai.

6. Console mein Count Print Karna

Program selected paragraphs ki length console mein print karta hai. Iska purpose ye verify karna hai ke page par kitne p tags mojood hain. Agar HTML mein do paragraphs hain to console mein total count 2 show hoga. Agar paragraph add kar diya jaye to count situation ke according change ho sakta hai, depending on selection method.

7. Method 1: querySelectorAll

Pehle method mein document.querySelectorAll use kiya gaya hai. Ye page ke tamam p tags ko select karta hai aur unki list return karta hai. Phir length property se total number of paragraphs find kiya jata hai. Ye method flexible hai kyun ke querySelectorAll CSS selectors ko support karta hai. Is wajah se hum sirf tag hi nahi balki classes, IDs aur different CSS-style selectors ke through bhi elements select kar sakte hain.

8. Method 2: getElementsByTagName

Doosre method mein getElementsByTagName use kiya gaya hai. Is method mein p tag ka naam provide kiya jata hai aur browser page ke tamam p elements ko select karta hai. Iske baad length property se total paragraphs count kiye jate hain. Ye method specifically tag name ke basis par elements select karta hai.

9. Method 3: getElementsByClassName

Teesre method mein getElementsByClassName use kiya gaya hai. Is method mein class name provide kiya jata hai. Tumhare example mein dono p tags ke paas text class hai. Isliye getElementsByClassName text class wale tamam elements ko select karta hai. Phir length property se selected elements ki total quantity find ki jati hai.

10. Three Methods ka Basic Difference

querySelectorAll CSS selector ke through elements select karta hai. getElementsByTagName tag name ke through elements select karta hai. getElementsByClassName class name ke through elements select karta hai. Teeno methods ka purpose multiple elements select karna hai, lekin inka selection method different hai.

11. Static NodeList Kya Hai

querySelectorAll jo result return karta hai usko static NodeList kaha jata hai. Static ka matlab hai ke selection ke time jo elements available hain, list unhi elements ko represent karti hai. Agar baad mein DOM mein new paragraph add ho jaye to pehle se bani hui querySelectorAll wali list automatically update nahi hoti.

12. Live HTMLCollection Kya Hai

getElementsByTagName aur getElementsByClassName live collection return karte hain. Live ka matlab hai ke agar DOM mein matching elements add ya remove hon to collection automatically update ho jati hai. Isliye agar new p tag page mein add kiya jaye to getElementsByTagName ki length increase ho sakti hai.

13. Static vs Live ka Simple Example

Start mein page par do paragraphs hain. querySelectorAll se static list banayi gayi aur getElementsByTagName se live list banayi gayi. Dono ki initial length 2 hogi.

Ab agar button press karke ek new paragraph add kiya jaye to page par total three paragraphs ho jayenge.

querySelectorAll ki purani static list ki length 2 hi rahegi kyun ke selection pehle ho chuki thi.

getElementsByTagName ki live list automatically update hogi aur uski length 3 ho jayegi.

14. Challenge ka Purpose

Challenge ka purpose live aur static collections ke behavior ko practically compare karna hai. Iske liye initially page par do paragraphs rakhe gaye hain. Button press karne par JavaScript ek new paragraph create karti hai aur container ke andar add karti hai. Iske baad dono lists ki length console mein print ki jati hai taake difference clearly samajh aaye.

15. New Paragraph Create Karna

Button click hone par JavaScript ek naya p element create karti hai. Us new paragraph mein text add kiya jata hai. Phir new paragraph ko container ke andar add kar diya jata hai. Iske result mein page par ek additional paragraph appear ho jata hai.

16. querySelectorAll ka Challenge mein Behavior

Challenge mein querySelectorAll ko button click hone se pehle call kiya gaya hai. Is wajah se uski static NodeList mein initial paragraphs ka selection store hota hai. Jab new paragraph baad mein add hota hai to existing static NodeList automatically update nahi hoti. Isliye uski length purani count hi show karti hai.

17. getElementsByTagName ka Challenge mein Behavior

getElementsByTagName live collection return karta hai. Jab new paragraph DOM mein add hota hai to live collection automatically update ho jati hai. Isliye new paragraph add hone ke baad getElementsByTagName ki length increase ho jati hai.

18. Button ka Role

Challenge mein Add New Paragraph button diya gaya hai. Button ka purpose page par dynamically ek new paragraph add karna hai. Jab button click hota hai to JavaScript new p element create karti hai aur container mein add kar deti hai. Iske baad console mein static aur live lists ki lengths compare ki jati hain.

19. getElementsByClassName ka Behavior

getElementsByClassName class ke basis par elements select karta hai. Tumhare example mein dono paragraphs ke paas text class hai, isliye dono paragraphs select hote hain. Ye method bhi live HTMLCollection return karta hai. Agar baad mein same class wala new element add ho to collection automatically update ho sakti hai.

20. querySelectorAll ka Advantage

querySelectorAll ka major advantage flexibility hai. Ye CSS selectors support karta hai, isliye different types ke elements ko easily select kiya ja sakta hai. Ye static NodeList return karta hai, jo useful ho sakti hai jab humein selection ka fixed snapshot chahiye.

21. getElementsByTagName ka Advantage

getElementsByTagName simple aur direct hai. Agar humein kisi specific HTML tag ke tamam elements select karne hon to ye method useful hai. Iska important feature ye hai ke ye live collection provide karta hai, jo DOM changes ke saath automatically update hoti hai.

22. getElementsByClassName ka Advantage

getElementsByClassName class ke basis par multiple elements select karne ke liye useful hai. Agar multiple elements ke paas same class ho to ye method un tamam elements ko select kar sakta hai. Ye bhi live collection return karta hai.

23. Static aur Live ka Main Difference

Static list DOM ka ek snapshot jaisi hoti hai. Selection hone ke baad agar new matching element add ho to existing static list automatically change nahi hoti.

Live list DOM ke saath connected rehti hai. Agar matching element add ya remove ho to live collection automatically update hoti hai.

24. Overall Comparison

querySelectorAll multiple elements ko CSS selector ke through select karta hai aur static NodeList return karta hai.

getElementsByTagName tag name ke through elements select karta hai aur live HTMLCollection return karta hai.

getElementsByClassName class name ke through elements select karta hai aur live HTMLCollection return karta hai.

Isliye querySelectorAll flexible selection aur static result ke liye useful hai, jabke getElementsByTagName aur getElementsByClassName dynamic DOM changes ke saath automatically update hone wali live collections provide karte hain.

25. Complete Logic

Sabse pehle page par p tags select kiye jate hain. querySelectorAll ke andar p selector dene se tamam paragraphs select ho jate hain. Phir length property se unki total quantity find ki jati hai aur console mein print ki jati hai. The Test mein isi kaam ko getElementsByTagName aur getElementsByClassName se bhi perform kiya gaya hai. Challenge mein ek button ke through dynamically new paragraph add kiya jata hai. Iske baad querySelectorAll ki static list aur getElementsByTagName ki live list compare ki jati hai. New paragraph add hone ke baad static list ki length same rehti hai, jabke live list ki length automatically increase ho jati hai.

