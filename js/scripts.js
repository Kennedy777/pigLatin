
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var word  = $("input#pig_latin").val();
    var wordBreak = word.split(" ");
    var newArray =  [];


// for(j=0; j< wordBreak.length, j++){
//      var word1 = wordBreak(j);
//      console.log(word1);


wordBreak.forEach(function(word1){



  function isVowel (symbol){
    if (symbol === "a" || symbol === "e" || symbol === "i" || symbol === "o" || symbol ==="u"){
      return true;
    }else{
      return false;
    }
  }
  if (isVowel(word1.charAt(0))){
     word1 = word1 + "way";
  }else{

var position;
for (i=1; i < word1.length; i++){
  if (word1.charAt(i)=== "a" || word1.charAt(i) === "e" || word1.charAt(i) === "i" || word1.charAt(i) === "o" || word1.charAt(i) === "y" || word1.charAt(i) === "u"){
 position =i;
    break;

} else if (word1.charAt(i)==="u" && word1.charAt(i-1)!=="q"){
  postion=i;
  break;
}
// else if (word.charAt(i)==="y" && i > 0){
//   postion=i;
//   break;
// }
}
  word1 = word1.substring(position, word1.length) + word1.substring(0, position) + "ay";
  newArray.push(word1);
  console.log(newArray);
}


 // }
// });
});

  });
});
