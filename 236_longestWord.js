//Longest length strinh

function findLongestWord(str) {

  var splitWord = [];
  var longest = 0;

  splitWord = str.split(" ");

  for (var i = 0; i < splitWord.length; i++) {
    if (splitWord[i].length > longest) {
      longest = splitWord[i].length;
    }
  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
