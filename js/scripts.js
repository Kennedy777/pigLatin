
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

  if (!isVowel(word.charAt(0)) && !isVowel(word.charAt(1)) && !isVowel(word.charAt(2))){
    word=word.slice(3) + word.charAt(0) + word.charAt(1)+ word.charAt(2) + "ay";
  }


  if (!isVowel(word.charAt(0)) && !isVowel(word.charAt(1))){
    word = word.slice(2) + word.charAt(0) + word.charAt(1) + "ay";
  }
   else if (!isVowel(word.charAt(0))) {
    word = word.slice(1) + word.charAt(0) + "ay";
  }
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
