function sumOfSquares(a, b) {
  var x = add(a * a, b * b);
  return x;
  function add(c, d) {
    var a = c + d;
    return a;
  }
}

console.log(sumOfSquares(2, 3));