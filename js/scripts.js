$(document).ready(function() {
  $("form#input").submit(function(event){

  var sentenceInput = $("#scramble").val().toUpperCase();
  var letters = sentenceInput.split("");
  var letterLength = letters.length;

  for (i = 0; i < letterLength; i++ ) {

    if (letters[i] === "A" || letters[i] === "E" || letters[i] === "I" || letters[i] === "O" || letters[i] === "U") {
      letters[i] = letters[i].replace("A", "-");
      letters[i] = letters[i].replace("E", "-");
      letters[i] = letters[i].replace("I", "-");
      letters[i] = letters[i].replace("O", "-");
      letters[i] = letters[i].replace("U", "-");
    }
  };

  var sentenceScrambled = letters.join(" ");
  $("body").append("<h1>" + sentenceScrambled + "</h1>");







  event.preventDefault();
  });
});
