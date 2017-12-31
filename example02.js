var witch  = "I'll get you, my pretty... and your little dog, too!";
var scarecrow = "Well, some people without brains do an awful lot of talking don't they?";
var glinda = "Be fone! Before someone drops a house on you!";
var dorothy = "There's no place like home.";
var lion = "Come on, get up and fight, you shivering junkyard!";
var wizard = "Do not arouse the wrath of the great and powerful Oz!";
var tinman = "Now I know I have a heart, because it's breaking.";

function countAll(string, letter) {
  
}

String.prototype.countAll = function (letter) {
  var letterCount = 0;
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i).toUpperCase() == letter.toUpperCase()) {
      letterCount++;
    }
  }
  return letterCount;
}

console.log(witch.countAll('a'));
console.log(scarecrow.countAll('a'));
console.log(glinda.countAll('a'));
console.log(dorothy.countAll('a'));
console.log(lion.countAll('a'));
console.log(wizard.countAll('a'));
console.log(tinman.countAll('a'));