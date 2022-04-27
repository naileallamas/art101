/**
 * Author:    nailea llamas
 * Created:   04.27.2022
 *
 * (c) public domain
 **/

 //sortusername- a function that takes user input and sorts the letter of their name
 function sortUserName() {
   var userName = window.prompt("Declare yourself.");
   console.log("userName =", userName);
   //split string to array

   var nameArray = userName.split('');
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

 //Output
 document.writeln("You may enter: ", sortUserName());
