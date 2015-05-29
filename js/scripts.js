var findAndReplace = function(paragraph, wordToFind, wordToReplace) {

  paragraph = paragraph.replace(/[^\w\s?,.!'"]/g, "");

  if (paragraph.search(new RegExp(wordToFind, "i")) >= 0) {
    paragraph = paragraph.replace(new RegExp(wordToFind, "ig"), wordToReplace);
    return paragraph;
  } else {
    alert("The word was not found. Try again.");
  }
};


$(function() {
  $('form#find_and_replace').submit(function(event) {
    var paragraph = $('textarea#paragraph').val();
    var wordToFind = $('input#word_to_find').val();
    var wordToReplace = $('input#word_to_replace').val();

    var result = findAndReplace(paragraph, wordToFind, wordToReplace);

    if (result) {
      $('#results').show();
      $('.result').text(result);
    }

    event.preventDefault();
  });
});
