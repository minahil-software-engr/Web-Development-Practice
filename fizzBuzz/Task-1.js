const fizzBuzz=()=>{
    for(let i=1; i<=100; i++){ //loop chalaya 1 say 100 takk
        if(i%3==0 && i%5==0){  //pahly check kiya kay wo number dono ka multiple hay kukay if if-else lgaya hay pahly agar 3 pay sirf check karti tu wo odhar hi stop ho jata pahly dono kay sath check kiya
            console.log("FizzBuzz");
        }
        else if(i%3==0){ //phir dekha kiya 3 ka mltiple hay
            console.log("Fizz");
        }
        else if(i%5==0){  //phir dekha kiya 5 ka multiple hay
            console.log("Buzz");
        }
        else{ //agar 3 5 ka nai hay tu exact number
            console.log(i);
        }
    }
}
fizzBuzz();