const fizzBuzz=()=>{
    for(let i=1; i<=100; i++){ //loop chalaya 1 say 100 takk
        let output="";
        if(i%3==0){  //agar 3 ka multiple hay tuu
            output+="fizz";  //output may  fizz concatenate hogya
        }
        if(i%5==0){  //agar 5 bhi multiple hay tu fizzbuzz warna sirf buzz
            output+="Buzz";
        }
        console.log(output||i); //agar output "" hay tu exact number i
    }
}
fizzBuzz();