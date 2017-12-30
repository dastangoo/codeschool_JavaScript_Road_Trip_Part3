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


// function addCritter(container, name, type, species, length) {
//   container[name] = { type: type, species: species, length: length };
// }
// 
// function addToy(container, name, type, material, moves) {
//   container[name] = { type: type, material: material, moves: moves };
// }

console.log(aquarium);
aquarium.addCritter("Bubbles", "fish", "yellow tang", 5.6);
console.log(aquarium);

aquarium.takeout = function (name) {
  this[name].name = name;
  var temp = this[name];
  delete this[name];
  return temp;
}

var fishOutofWater = aquarium.takeout("Marlin");
console.log(fishOutofWater);
console.log(aquarium);

var toy = aquarium.takeout("Dragon Statue");
console.log(toy);