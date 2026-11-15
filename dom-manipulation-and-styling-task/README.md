TASK: CHANGE THE TEXT COLOR OF ALL P TAGS

1. Task ka Basic Purpose

Is task ka purpose page par mojood tamam p tags ka text color change karna hai. Jab user Change Color button par click karega to tamam paragraphs ka text blue ho jayega. Is task mein document.querySelectorAll ka use karke tamam p tags select kiye jate hain. Phir selected paragraphs par loop chala kar unka style.color blue set kiya jata hai. The Test mein isi kaam ko teen different methods se perform kiya gaya hai: normal for loop, forEach aur CSS class toggle.

2. HTML mein Paragraphs ka Role

HTML mein p tag paragraph create karne ke liye use hota hai. Tumhare HTML mein teen p tags hain, isliye page par teen paragraphs display hote hain. Button ka purpose color change karna hai. JavaScript button ke click event ko detect karti hai aur phir tamam paragraphs ka color change karti hai.

3. Button ka Role

Button user ko color change karne ka control deta hai. Jab button click hota hai to JavaScript ka click event execute hota hai. Click event ke andar paragraphs select kiye jate hain aur unka color blue kiya jata hai.

4. querySelectorAll ka Role

document.querySelectorAll('p') page ke tamam p tags ko select karta hai. Tumhare page mein teen paragraphs hain, isliye querySelectorAll teenon paragraphs ko select karega. Is selection ka result NodeList hota hai. Phir isi NodeList par loop ya forEach chalaya jata hai.

5. NodeList Kya Hai

NodeList selected elements ka collection hota hai. Jab querySelectorAll('p') use kiya jata hai to tamam p elements NodeList mein aa jate hain. Tumhare case mein NodeList mein teen paragraph elements hain. Hum NodeList ke har element ko access karke uska color change karte hain.

6. Method 1: Normal For Loop

Pehle method mein normal for loop use kiya gaya hai. Button click hone ke baad sabse pehle page ke tamam p tags select kiye jate hain. Uske baad loop zero index se start hota hai aur paragraphs ki total length tak chalta hai. Har iteration mein paragraphs ke current element ko access kiya jata hai aur uska text color blue set kar diya jata hai.

7. Normal For Loop ki Working

Jab button click hota hai to click event execute hota hai. Phir querySelectorAll('p') tamam paragraphs ko select karta hai. Suppose NodeList mein teen paragraphs hain, to uski length 3 hogi. Loop i = 0 se start hota hai. Pehli iteration mein first paragraph select hota hai aur uska color blue hota hai. Doosri iteration mein second paragraph ka color blue hota hai. Teesri iteration mein third paragraph ka color blue hota hai. Jab loop complete ho jata hai to tamam paragraphs blue ho jate hain.

8. paragraphs[i] ka Role

paragraphs[i] ka matlab hai NodeList ke current index wale paragraph ko access karna. Agar i ki value 0 hai to first paragraph access hoga. Agar i ki value 1 hai to second paragraph access hoga. Agar i ki value 2 hai to third paragraph access hoga. Is tarah loop har paragraph ko one by one access karta hai.

9. style.color ka Role

style.color ka use kisi element ke text ka color change karne ke liye hota hai. Jab paragraph ka style.color blue set kiya jata hai to us paragraph ka text blue ho jata hai. Is task mein direct inline styling ke through color apply kiya gaya hai.

10. Normal For Loop ka Complete Flow

User button click karta hai. JavaScript click event detect karti hai. querySelectorAll('p') tamam paragraphs select karta hai. For loop NodeList ke har paragraph par run hota hai. Har paragraph ka style.color blue set hota hai. Loop complete hone ke baad tamam paragraphs blue nazar aate hain.

11. Method 2: forEach

Doosre method mein normal for loop ki jagah forEach use kiya gaya hai. querySelectorAll('p') se tamam paragraphs select kiye jate hain. Phir forEach NodeList ke har paragraph par function execute karta hai. Har paragraph ka color blue set kar diya jata hai.

12. forEach ki Working

Button click hone ke baad paragraphs select hote hain. forEach automatically NodeList ke har paragraph ko one by one access karta hai. Pehle paragraph par function run hota hai aur uska color blue hota hai. Phir second paragraph par function run hota hai aur uska color blue hota hai. Phir third paragraph par function run hota hai aur uska color blue hota hai. Is tarah tamam paragraphs blue ho jate hain.

13. forEach ka Advantage

forEach normal for loop ke comparison mein short aur readable hota hai. Ismein humein manually index manage karne ki zaroorat nahi hoti. forEach automatically collection ke har element par function execute karta hai. Multiple elements par same operation perform karne ke liye ye convenient method hai.

14. Normal For Loop aur forEach ka Difference

Normal for loop mein index manually manage kiya jata hai. Humein starting value, condition aur increment define karna hota hai. forEach mein ye kaam automatically hota hai. Isliye forEach ka code generally simple aur easy to read hota hai. Dono methods ka result is task mein same hai, yani tamam paragraphs blue ho jate hain.

15. Method 3: CSS Class Toggle

Teesre method mein direct style.color set karne ke bajaye CSS class use ki gayi hai. HTML ke style section mein blue-text naam ki CSS class banayi gayi hai. Is class ke andar color blue define kiya gaya hai. JavaScript button click hone par tamam paragraphs ko select karti hai aur classList.toggle ke through blue-text class add ya remove karti hai.

16. CSS Class ka Role

CSS mein blue-text class define ki gayi hai. Is class ka purpose paragraph ka text blue karna hai. JavaScript directly color define nahi karti. JavaScript sirf paragraph ke saath blue-text class ko add ya remove karti hai. Color ka actual rule CSS ke andar define hota hai.

17. classList.toggle ka Role

classList.toggle ka purpose CSS class ko add ya remove karna hai. Agar paragraph ke paas blue-text class nahi hai to toggle us class ko add kar dega. Isse paragraph blue ho jayega. Agar paragraph ke paas already blue-text class hai to toggle us class ko remove kar dega. Isse paragraph wapas normal color mein aa jayega.

18. CSS Class Toggle ki Working

Jab user pehli baar Toggle Color button press karta hai to tamam paragraphs select hote hain. forEach har paragraph par run hota hai. classList.toggle blue-text class add karta hai. CSS ke according paragraphs blue ho jate hain.

Jab user button dobara press karta hai to blue-text class remove ho jati hai. Isliye paragraphs ka color wapas normal ho jata hai. Isi wajah se is method ko toggle kaha jata hai.

19. CSS Class Toggle ka Advantage

CSS class toggle ka main advantage ye hai ke styling JavaScript ke andar directly define nahi hoti. Styling CSS file ya style section mein rakhi jati hai aur JavaScript sirf class ko control karti hai. Isse HTML, CSS aur JavaScript ka kaam properly separate rehta hai. Agar future mein blue ke bajaye koi aur styling karni ho to CSS class ko change kiya ja sakta hai.

20. CSS Class Toggle ka Difference

Normal loop aur forEach mein directly style.color ko blue set kiya gaya hai. Iska matlab JavaScript directly element ki styling change kar rahi hai.

CSS class toggle mein JavaScript direct color set nahi karti. JavaScript sirf CSS class ko add ya remove karti hai aur actual color CSS class ke andar define hota hai.

21. Three Methods ka Comparison

Normal for loop mein NodeList ke har element ko index ke through access kiya jata hai aur directly color blue set kiya jata hai.

forEach mein NodeList ke har element par automatically function run hota hai aur directly color blue set kiya jata hai.

CSS class toggle mein NodeList ke har element par blue-text class add ya remove hoti hai. Actual color CSS ke andar define hota hai.

Normal for loop zyada traditional aur basic method hai.

forEach simple aur readable method hai.

CSS class toggle styling ko JavaScript se separate rakhne ke liye better approach hai.

22. Direct Styling aur CSS Class ka Difference

Direct styling mein JavaScript khud element ki style property change karti hai. Is task mein style.color blue directly set kiya gaya hai.

CSS class approach mein JavaScript sirf class ko control karti hai. Actual styling CSS mein hoti hai. Ye approach large projects mein zyada organized hoti hai kyun ke styling aur functionality separate rehti hain.

23. Challenge ka Purpose

Challenge mein requirement hai ke direct style change karne ke bajaye CSS class toggle ki jaye. Iska matlab ye hai ke JavaScript mein directly color blue set nahi karna. Instead, ek CSS class banayi jati hai jo blue color define karti hai. Button click hone par JavaScript class ko toggle karti hai.

24. Challenge ki Working

User Toggle Color button press karta hai. JavaScript tamam p tags select karti hai. forEach ke through har paragraph ko one by one access kiya jata hai. Har paragraph par classList.toggle use hota hai. Agar blue-text class pehle se nahi hai to class add hoti hai aur text blue ho jata hai. Agar class already present hai to class remove hoti hai aur text normal color mein aa jata hai.

25. Complete Logic

Is task ka basic logic ye hai ke button click hone par tamam p tags select kiye jate hain. Phir NodeList ke har paragraph par loop chalaya jata hai. Normal for loop mein paragraphs[i] ke through current paragraph access hota hai aur style.color blue set hota hai. forEach method mein har paragraph automatically access hota hai aur uska style.color blue set hota hai. Challenge mein direct style change karne ke bajaye blue-text CSS class ko toggle kiya jata hai. Class add hone par text blue hota hai aur class remove hone par text wapas normal ho jata hai.

