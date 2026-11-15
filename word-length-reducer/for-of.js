const wordList = ["apple", "banana"];
const wordLengthMap = {};
for (const currentWord of wordList) {
  wordLengthMap[currentWord] = currentWord.length;
}
console.log(wordLengthMap);