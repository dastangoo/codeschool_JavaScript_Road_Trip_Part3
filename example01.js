var aquarium = {
  Nemo: { type: "fish", species: "clownfish", length: 3.7 },
  Marlin: { type: "fish", species: "clownfish", length: 4.1 },
  Dory: { type: "fish", species: "blue tang", length: 6.2 },
  Peach: { type: "echinoderm", species: "starfish", length: 5.3 },
  "Color Castle": { type: "einvironment", species: "coquina", moves: false },
  "Dragon Statue": { type: "einvironment", material: "plastic", moves: false },
  
  addCritter: function (name, type, species, length) {
    this[name] = { type: type, species: species, length: length };
  }
};

aquarium.takeout = function (name) {
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp;
}

aquarium.countFish = function () {
  var numFish = 0;
  for (key in this) {
    if (this[key].type == "fish") {
      numFish++;
    }
  }
  return numFish;
}

var poorDoory = aquarium.takeout("Dory");
console.log(poorDoory);
console.log(aquarium.countFish());