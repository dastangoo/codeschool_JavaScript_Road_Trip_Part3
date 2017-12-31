var shoe = { size: undefined, gender: undefined, construction: undefined };
console.log(shoe);

var mensBoot = Object.create(shoe);
mensBoot.size = 12;
mensBoot.gender = "men";
mensBoot.construction = "boot";
console.log(mensBoot);

var flipFlop = Object.create(shoe);
flipFlop.size = 5;
flipFlop.gender = "women";
flipFlop.construction = "flipFlop";
console.log(flipFlop);