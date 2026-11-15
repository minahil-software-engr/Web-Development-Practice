const wordList = ["apple", "banana", "watermelon", "kiwi"];
const longestWord = wordList.reduce((longestWordSoFar, currentWord) => {
  if (currentWord.length > longestWordSoFar.length) {
    return currentWord; // Agar current word lamba hai, toh isko return karo
  } else {
    return longestWordSoFar; // Warna purane lamba word ko hi retain rakho
  }
}, "");
console.log(longestWord);