function capitalizeWordsWithLoop(sentenceInput) {
  const wordsList = sentenceInput.split(" ");
  const capitalizedWordsList = [];

  for (const singleWord of wordsList) {
    const capitalizedWord = singleWord[0].toUpperCase() + singleWord.slice(1);
    capitalizedWordsList.push(capitalizedWord);
  }

  return capitalizedWordsList.join(" ");
}

console.log(capitalizeWordsWithLoop("hello world from javascript"));