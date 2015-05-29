var findAndReplace = function(sentence, wordToFind, wordToReplace) {

  sentence = sentence.replace(/[^\w\s?,.!'"]/g, ""); //do I need an anchor ^ before \w like [^\w\s]
  sentence = sentence.replace(new RegExp(wordToFind, "ig"), wordToReplace);
  return sentence;
};
