function capitalizeLongWordsOnly(sentenceInput) {
  return sentenceInput
    .split(" ")
    .map((singleWord) => {
      // Condition: Agar length 3 se bari ho tabhi capitalize karo
      if (singleWord.length > 3) {
        return singleWord[0].toUpperCase() + singleWord.slice(1);
      }
      return singleWord; // Chote words ko waisa hi rehne do
    })
    .join(" ");
}

console.log(capitalizeLongWordsOnly("this is a quick test for javascript"));