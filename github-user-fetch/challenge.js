async function fetchWithTimeout(url, timeout = 3000) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out after 3 seconds')), timeout)
    );
    try {
        const response = await Promise.race([fetchPromise, timeoutPromise]);
        const data = await response.json();
        
        console.log("Challenge User Name:", data.name);
    } catch (error) {
        console.error("Challenge Error:", error.message);
    }
}
fetchWithTimeout('https://api.github.com/users/defunkt', 3000);