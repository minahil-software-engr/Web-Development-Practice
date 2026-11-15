async function getUserAxios(){
    try{
        const response=await axios.get("https://api.github.com/users/defunkt");
        console.log(response.data.name);
    }
    catch(error){
        console.error(error);
    }
}
getUserAxios()