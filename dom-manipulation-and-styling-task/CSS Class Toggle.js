const button = document.getElementById('myButton');

button.addEventListener('click', function() {
   
    const paragraphs = document.querySelectorAll('p');
 
    paragraphs.forEach(function(p) {
        p.classList.toggle('blue-text');
    });
});
