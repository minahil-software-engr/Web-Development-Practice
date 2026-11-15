1. push() aur pop():

Index Change: NO

In methods se array ke indexes par koi change nahi aata. Kyunki dono operations array ke sab se aakhir (end) mein hotay hain, is liye baaki saare elements apni purany indexes par hi rehte hain.

push(): Existing elements ka index bilkul change nahi hota, bas aakhir mein ek naya index add ho jata hai.

pop(): Sirf aakhri index remove ho jata hai, baaki kisi element ka index disturb nahi hota.

Performance: Yeh sab se fast hota hai kyunki browser ko baaki items ke indexes rebuild nahi karne parte.

2. unshift() aur shift():

Index Change: ALL (100%)

In methods ki wajah se array ke har ek element ka index change ho jata hai. Kyunki operation array ke start (Index 0) par hota hai, is liye baaki tamaam elements ko majbooran apni jagah badalni parti hai.

unshift(): Index 0 par naya element aane ki wajah se purane saare elements 1 step aage ho jatay hain

shift(): Index 0 wala element remove hone ki wajah se baaki saare elements 1 step peeche aa jatay hain

Performance: Agar array bohot badi ho toh yeh slow hota hai kyunki har item ka index update karna parta hai.

3. splice()

Index Change: PARTIAL (Aage Wale Items)

splice() ka asar sirf un elements ke indexes par parta hai jo targeted position ke baad aate hain. Targeted index se pehle wale tamaam elements apni jagah unchanged rehte hain.

Adding Items: Jis position par item add hoga, us ke baad wale saare elements aage shift ho kar naye indexes le lenge.

Deleting Items: Jis position se items remove honge, us ke baad wale elements peeche shift ho kar khali jagah fill karenge.

Targeted Index Effect: Target point se pehle wale elements ka index safe rehta hai, sirf aage wale modify hotay hain.
