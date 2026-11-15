const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    const paragraphs = document.querySelectorAll('p');
    
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "blue";
    }
});
