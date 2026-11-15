const countCharacters=(text)=>{
    const array=new Array(256).fill(0); //pahly 256 ki array bnai sabmay 0 rakh deya
    const cleanText=text.toLowerCase().replaceAll(" ","");
    for(let i=0; i<cleanText.length; i++){
        const index=cleanText.charCodeAt(i);  //jo bhi character aya osko ascii may kar leya
        array[index]++; //jo bhi ascii nmr aya wo array ka index hoya or oski value ko increment kar deya
    }
    const count={};
    for(let y=0; y<256; y++){
        if(array[y]>0){ //ab jin jin ki alue 0 say bari thi onko uthaya
            const character=String.fromCharCode(y); //onkay index ko doabara alphabet may kar deya
            count[character]=array[y]; //osko as a key or oskay index par jo value thi start may osko value bna deya ob ject may
        }
    }
    return count;
}
console.log(countCharacters("Minahil Rani"));