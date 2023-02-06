/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.17.2022
 *
 * (c) public domain
 **/
 // empty array
const finalArray = [];
const completeArray = [];
 // Create a "FizzBuzz" function similar to how we did in class.

function FizzBuzzBoom(){
// Loop through numbers 1 to 200, listing them as you go
  for (i = 1; i <= 200; i++) {
    //resets array to be empty
    var finalArray = []
     // If the number is a multiple of 3, if should print "Fizz!"
    if ( i % 3 == 0){
      finalArray.push("Fizz");
     }
    //multiple of 5
    if ( i % 5 == 0){
      finalArray.push("Buzz");
     }
    //multiple of 7
    if ( i % 7 == 0){
      finalArray.push("Boom");
     }
    //else nothing gets pushed
    else{
      finalArray.push("")
    }
   //This makes the original array into a string
    var combineWord = finalArray.join("")

    //We then add our word to our final array if the len is > 0
    if (combineWord.length > 0) {
      //completeArray.push(combineWord);
      //puts on page
      $("#output").append("<p>" + combineWord + "<br>" +"</p>");
    }
    else{
      //completeArray.push(i);
      $("#output").append("<p>" + i + "<br>" +"</p>");
    }

}
}
FizzBuzzBoom()
