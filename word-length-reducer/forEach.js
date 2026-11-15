const wordList = ["apple", "banana"];
const wordLengthMap = {};
wordList.forEach((currentWord) => {
  wordLengthMap[currentWord] = currentWord.length;
});
console.log(wordLengthMap);
