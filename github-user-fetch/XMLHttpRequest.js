function getUserXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/defunkt', true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log("XHR Name:", data.name); // Output: Chris Wanstrath
            } else {
                console.error("Error status:", xhr.status);
            }
        }
    };
    
    xhr.send();
}
getUserXHR();