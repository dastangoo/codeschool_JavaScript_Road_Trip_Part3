var shoe = { size: 6, gender: "women", construction: "slipper" };
console.log(shoe);

var magicShoe = Object.create(shoe);
magicShoe.jewels = "ruby";
magicShoe.travelAction = "click heels";
magicShoe.actionsRequired = 3;
console.log(magicShoe);
console.log(Object.prototype.isPrototypeOf(shoe));
console.log(shoe.isPrototypeOf(magicShoe));
console.log(magicShoe.isPrototypeOf(shoe));
console.log(Object.prototype.isPrototypeOf(magicShoe));

var mensBoot = Object.create(shoe);
console.log(mensBoot);