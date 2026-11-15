function capitalizeWordsWithRegex(sentenceInput) {
  return sentenceInput.replace(/\b\w/g, (firstLetter) => {
    return firstLetter.toUpperCase(); // Direct return!
  });
}
console.log(capitalizeWordsWithRegex("hello world from javascript"));