var myArray = ["This", "array", "inherits", "properties", "from", "the", "Array", "prototype!"];
console.log(myArray);
var myObject = {};
console.log(myObject);
var myString = "I am secretly a child of the String prototype."
console.log(myString);
var myNumber = 6;
console.log(myNumber);
function myFunction() {
  return "Functions have secret properties too!";
}
console.log(myFunction);
console.log(myArray.hasOwnProperty());
console.log(myObject.hasOwnProperty());
console.log(myString.hasOwnProperty());
console.log(myFunction.hasOwnProperty());

console.log(myString.charAt(5));