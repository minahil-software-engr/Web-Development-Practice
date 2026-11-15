const staticList = document.querySelectorAll('p');
const liveList = document.getElementsByTagName('p');
const addBtn = document.getElementById('addBtn');
const container = document.getElementById('container');

addBtn.addEventListener('click', () => {
    
    const newP = document.createElement('p');
    newP.textContent = "Naya Paragraph";
    container.appendChild(newP);

    console.log("-------------------");
    console.log("Button click ke baad:");
    console.log("querySelectorAll (Static) length:", staticList.length); // Purani count hi rahegi
    console.log("getElementsByTagName (Live) length:", liveList.length);     // Barh jayegi!
});