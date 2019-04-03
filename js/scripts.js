
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var word  = $("input#pig_latin").val();



  function isVowel (symbol){
    if (symbol === "a" || symbol === "e" || symbol === "i" || symbol === "o" || symbol === "u" || symbol==="qu"){
      return true;
    }else{
      return false;
    }
  }
  if (isVowel(word.charAt(0))){
     word = word + "way";
  } else {



var position;
for (i=0; i < word.length; i++){
  if (isVowel(word[i])){
 position =i;
    break;
  }
}

word = word.substring(position, word.length) + word.substring(0, position) + "ay";

  
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
