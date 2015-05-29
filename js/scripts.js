var findAndReplace = function(paragraph, wordToFind, wordToReplace) {
  paragraph = paragraph.replace(/[^\w\s?,.!'"]/g, "");
  paragraph = paragraph.replace(new RegExp(wordToFind, "ig"), wordToReplace);
  return paragraph;
};

$(function() {
  $('form#find_and_replace').submit(function(event) {
    $('#results').show();
    var paragraph = $('textarea#paragraph').val();
    var wordToFind = $('input#word_to_find').val();
    var wordToReplace = $('input#word_to_replace').val();
    var result = findAndReplace(paragraph, wordToFind, wordToReplace);
    $('.result').text(result);

    event.preventDefault();
  });
});
