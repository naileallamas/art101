/**
 * Author:    nailea llamas and vesper waddy
 * Created:   05.2.2022
 *
 * (c) public domain
 **/
 // Function will add to the number given
function addThree(x) {
  var adding = x + 3;
  return adding;
}

// Test function
console.log("This is 4 plus 3", addThree(4));
console.log("This is 2 plus 3", addThree(2));


array = [13, 5, 17, 800, 2]
console.log("My array", array);

var result = array.map(addThree);
// Should be [16,8, 20, 803, 5]
console.log("Adding 3 to all variables in array.", result);

var result = array.map(function(x){
  return x - 3;
 })
// Should return [ 10, 2 14, 797,-1]
console.log["This is the array after subtracting 3 from all variables", result];
