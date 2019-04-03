
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var word  = $("input#pig_latin").val();



  function isVowel (symbol){
    if (symbol === "a" || symbol === "e" || symbol === "i" || symbol === "o" || symbol ==="u"){
      return true;
    }else{
      return false;
    }
  }
  if (isVowel(word.charAt(0))){
     word = word + "way";
  }else{

var position;
for (i=0; i < word.length; i++){
  if (word.charAt(i)=== "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o"){
 position =i;
    break;

} else if (word.charAt(i)==="u" && word.charAt(i-1)!=="q"){
  postion=i;
  break;
 }
}

  word = word.substring(position, word.length) + word.substring(0, position) + "ay";

// if(word.charAt(i-1)==="q") {
//   word = word.splice(2) + word.charAt(0) + word.charAt(1) + "ay";
// }
//   }

// && word.charAt(i-1)!== "q"){
 // position=i;
 // break;




// var Qu;
// if(word.charAt(0)==="q"){
// word = word.splice(2) + word.charAt(0) + word.charAt(1) + "ay";
// }
}


// function isQ (symbol){
//   if (symbol==="q"){
//   return true;
// }else{
//   return false;
// }
// }
//
// if (isQ(word.charAt(0))){
//   word = word.splice(2) + word.charAt(0) + word.charAt(1) + "ay";
// }

    //
    console.log(word);

  });
});
