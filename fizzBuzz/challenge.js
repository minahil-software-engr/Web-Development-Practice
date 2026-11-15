const fizzBuzzBazz=()=>{
    for(let i=1; i<=100; i++){ //loop chalaya 1 say 100 takk
        let output="";
        if(i%3==0){ //agar 3 ka multiple hay tuu
            output+="Fizz"; //output may  fizz concatenate hogya
        }
        if(i%5==0){  //agar 5 bhi multiple hay tu fizzbuzz warna sirf buzz
            output+="Buzz";
        }
        if(i%7==0){  //agar 7 bhi multiple hay tu fizzbuzzbazz warna sirf bazz
            output+="Bazz";
        }
        console.log(output||i);  //agar output "" hay tu exact number i
    }
}
fizzBuzzBazz();