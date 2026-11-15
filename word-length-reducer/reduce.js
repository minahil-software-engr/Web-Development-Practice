const wordList = ["apple", "banana"];
const wordLengthMap = wordList.reduce((lengthMap, currentWord) => {
  lengthMap[currentWord] = currentWord.length;
  return lengthMap;
}, {});
console.log(wordLengthMap);