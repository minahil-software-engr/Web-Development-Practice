1. Dot Notation (person.name)

Yeh JavaScript main object properties ko access karne ka sab se simple aur common tareeqah hai. Direct dot (.) laga kar key ka naam likha jata hai, jese person.name se "minahil" print hota hai.

2. Bracket Notation (person["name"])

Is main property ka naam string format main brackets [""] key andar dia jata hai. Yeh tab bohot kaam ata hai jab key ke naam main space ho, special characters hon, ya key kisi variable main store ho.

3. Object Destructuring (const {name, age} = person)

Yeh Modern JavaScript (ES6) ka feature hai. Is se hum object ki properties ko direct variables main extract (nikal) lete hain. Ab alag se person.name likhne ki zaroorat nahi rehti, direct name aur age ko variables ki tarah use kar sakte hain.

4. Modifying & Updating Objects (person.job = "engineer", delete person.city)

JavaScript objects mutable (change hone wale) hote hain. Nayi property add karne ke liye bas direct assign kar dete hain (person.job = "engineer"), aur kisi property ko remove karne ke liye delete keyword ka istemal hota hai (delete person.city).

Comparison & Comparison Paragraph
Dot Notation vs. Bracket Notation vs. Destructuring:

Pehle teeno code blocks ka maqsad aik hi hai—object se data read karna—lekin unka syntax aur usage different hai. Dot Notation sab se clean aur direct hai, lekin yeh dynamic keys (variables wale keys) ke saath kaam nahi karti. Bracket Notation ziada flexible hai kyun ke yeh variables aur special key names ko handle kar sakti hai. Dusri taraf, Destructuring code ko ziada readable aur short bana deti hai jab aap ko aik hi object se multiple values aik saath nikalni hon.

Property Access vs. Object Modification:

Pehle teen examples sirf data ko read (access) karne ke alag alag tareeqe dikhate hain, jabke chotha example object ko modify (change) karna sikhata hai. Is se pata chalta hai ke const se object declare hone ke bawajood uski andar ki values ko change, delete, ya nayi keys add ki ja sakti hain.
