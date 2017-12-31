var Tornado = function (category, affectedAreas, windGust) {
  this.category = category;
  this.affectedAreas = affectedAreas;
  this.windGust = windGust;
};


var cities = [["Kansas City", 464310], ["Topeka", 127939], ["Lenexa", 49398]];


Tornado.prototype.valueOf = function () {
  var sum = 0;
  for (var i = 0; i < this.affectedAreas.length; i++) {
    sum += this.affectedAreas[i][1];
  }
  return sum;
};

var twister = new Tornado("F5", cities, 220);
console.log(twister.valueOf());
cities.push(["Olathe", 130045]);
console.log(twister.valueOf());
