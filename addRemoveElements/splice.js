let fruitsArray=["apple","mango","banana","orange","peach"];
console.log(`initial array: ${fruitsArray}`);
fruitsArray.splice(1,0,"grapes"); //splice may paranthesis may pahly index likhty phir dltcount or phir value
console.log(`after add: ${fruitsArray}`); //ismay pahlay 1 index par dlt khuch bhi  nai hoa or 1 index par grapes agya
fruitsArray.splice(2,1); //ismay 2 index par 1 value dlt hogai
console.log(`after remove: ${fruitsArray}`);