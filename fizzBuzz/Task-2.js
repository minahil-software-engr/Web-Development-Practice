const FizzBuzz=()=>{
    for(let i=1; i<=100; i++){ //loop chalaya 1 say 100 takk
        switch(true){  //switch may value di true ab yah value exact jss case say match hogai oski body chalay gii kukau yah true hay tu mtlb jo condition true hoi
            case i%3==0 && i%5==0:  //pahly check kiya kay wo number dono ka multiple hay kukay if if-else lgaya hay pahly agar 3 pay sirf check karti tu wo odhar hi stop ho jata pahly dono kay sath check kiya
                console.log("FizzBuzz");
                break;
            case i%3==0:  //phir dekha kiya 3 ka mltiple hay
                console.log("Fizz");
                break;
            case i%5==0:  //phir dekha kiya 5 ka multiple hay
                console.log("Buzz");
                break;
            default: //agar 3 5 ka nai hay tu exact number
                console.log(i);
        }
    }
}
FizzBuzz();
