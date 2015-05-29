var findAndReplace = function(sentence, wordToFind, wordToReplace) {
  sentence = sentence.replace(new RegExp(wordToFind, "ig"), wordToReplace);
  return sentence;
};
