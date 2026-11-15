async function getUserFetch(){
    try{
        const response=await fetch("https://api.github.com/users/defunkt");
        const data=await response.json();
        console.log(data.name);
    }
    catch(error){
        console.error(error);
    }
}
getUserFetch()