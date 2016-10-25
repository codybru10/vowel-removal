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

// var scrambler = function(sentence) {
//   var noA = sentence.replace(/a/gi, "-");
//   var noE = noA.replace(/e/gi, "-");
//   var noI = noE.replace(/i/gi, "-");
//   var noO = noI.replace(/o/gi, "-");
//   var noU = noO.replace(/u/gi, "-");
//   var result = noU
//
//   return result;
// };
//
// var output = scrambler(sentenceInput)
//
// $("form#input").hide();
// $("body").append("<h1>" + output +  "</h1>");
