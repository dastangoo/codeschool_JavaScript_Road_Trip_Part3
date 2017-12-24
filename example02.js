var numbers = [12, 4, 3, 9, 8, 6, 10, 1];
var results = [];

// for (var i = 0; i < numbers.length; i++) {
//   results[i] = coolFunction(numbers[i]);
// }
// 
// function coolFunction(num) {
//   return num * 2;
// }

// console.log(numbers);
// console.log(results);

var results = numbers.map(function (arrayCell) {return arrayCell * 2;}); 

console.log(numbers);
console.log(results);

