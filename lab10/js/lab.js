/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.9.2022
 *
 * (c) public domain
 **/
 var buttonEl = document.getElementById("my-button");
 console.log("Button:", buttonEl);

 // Create an event handler within the JS file that listens for a button click.
 buttonEl.addEventListener("click", function(){
 	console.log("Click");
 	// prompt the user to input their name with the prompt() function.
 	//var name = window.prompt("What is your name?");
   var inputEl = document.getElementById("my-input");
   var name = inputEl.value;
   console.log("name:", name);
 	// Use this input to change the text from ‘Hello, World!’ to ‘Hello’ + the user’s name

   // Find the element
 	var goodbyeWorld = document.getElementById("title");
   console.log("title:", goodbyeWorld);
   goodbyeWorld.innerHTML = "Greetings, " + sortUserName(name);

 });
 function sortUserName(name) {


   var nameArray = name.split('');
   console.log("nameArray =", nameArray);
   //sort the array

   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   //join array back to a string

   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   //nate that the above lines could have been done as a single line
   //  username.toLower().split("").sort().join("")

   return nameSorted;
  }
  sortUserName(name)
