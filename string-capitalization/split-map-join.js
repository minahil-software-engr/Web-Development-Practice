function capitalizeWordsWithMap(sentenceInput) {
  return sentenceInput
    .split(" ")
    .map((singleWord) => singleWord[0].toUpperCase() + singleWord.slice(1))
    .join(" ");
}

console.log(capitalizeWordsWithMap("hello world from javascript"));