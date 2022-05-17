/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.16.2022
 *
 * (c) public domain
 **/


function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if(mod == 0) {
    return "Jock"
  }
  else if (mod == 1) {
    return "Goth"
  }
  else if (mod == 2) {
  return "Nerd"
  }
  else if (mod == 3) {
  return "Prep"
  }
}

var myButton = document.getElementById("button")
myButton.addEventListener("click",function(){
  var name = document.getElementById("input").value;
  var title = sortingHat(name);
  newText = "<p> Your fate is decided, you are a " + title + "</p>";
  document.getElementById("output").innerHTML = newText;
})
