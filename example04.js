function Shoe(shoeSize, shoeColor, forGender, constructStyle) {
  this.size = shoeSize;
  this.color = shoeColor;
  this.gender = forGender;
  this.construction = constructStyle;
}

// beachShoe.putOn();

// Shoe.prototype = {
//   putOn: function () { alert("Shoe's on, dood!"); },
//   takeOff: function () { alert("Uh, what's that smell?"); }
// };

Shoe.prototype = {
  putOn: function () { alert("Your " + this.construction + "'s'" + "on, dood!")},
  takeOff: function () { alert("Phew! Somebody's size " + this.size + "'s' are gragrant!") }
};

var beachShoe = new Shoe(10, "blue", "women", "flipflop");


// console.log(beachShoe.gender);
// console.log(beachShoe.putOn());
// 
// console.log(beachShoe.hasOwnProperty("construction"));
// 
// console.log(beachShoe.putOn());
// 
// console.log(beachShoe.takeOff());

console.log(beachShoe);