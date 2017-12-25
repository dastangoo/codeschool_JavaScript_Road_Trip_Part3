var sweetAnnouncement = function () { alert("ATTENTION!\n CUPCAKES.\n\n...THAT IS ALL.")};
sweetAnnouncement();


var fruits = [ "Apple", "Orange", "Pineapple", "Cranberry", "Pomegrante" ];
var fruitJuice = fruits.map(function (fruit) { return "\n" + fruit + " juice"; });
alert(fruitJuice);