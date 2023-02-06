/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.16.2022
 *
 * (c) public domain
 **/

//function that will take your name and tell you if you are a jock ogth nerd or prep
function sortingHat(str){
  //this gives us the length of the string
  len = str.length;
  //mod of the string
  mod = len % 4;
  //begin the condtinals, if its divisible you are a jock
  if(mod == 0) {
    return "Jock"
  }
  // if the remainder is 1 then you are a goth
  else if (mod == 1) {
    return "Goth"
  }
  // if the remainder is 2 then you are a nerd
  else if (mod == 2) {
  return "Nerd"
  }
  //ifit is divisible by three you are a pre
  else if (mod == 3) {
  return "Prep"
  }
}
//This is what accepts your name, and when pressed adds your title to the pages html using jquery.
var myButton = document.getElementById("button")
myButton.addEventListener("click",function(){
  var name = document.getElementById("input").value;
  var title = sortingHat(name);
  newText = "<p> Your fate is decided, you are a " + title + "</p>";
  document.getElementById("output").innerHTML = newText;
})
