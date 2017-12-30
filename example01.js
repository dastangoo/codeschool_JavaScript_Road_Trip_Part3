var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"];
var myBox = {
  height: 6,
  width: 8,
  length: 10,
  volume: 480,
  material: "cardboard",
  contents: booksArray
};

console.log(myBox.width);
console.log(myBox.material);
console.log(myBox.contents);

myBox.width = 12;
console.log(myBox.width);
console.log(myBox);

myBox.volume = myBox.height * myBox.width * myBox.length;
console.log(myBox);

myBox.contents.push("On The Road");
console.log(myBox)
console.log(booksArray);

myBox.weight = 24;
console.log(myBox);

myBox.destination1 = "Orlando";
myBox.destination2 = "Miami";

console.log(myBox);

console.log(myBox["volume"]);
console.log(myBox["material"]);

myBox["# of stops"] = 2;
console.log(myBox);

console.log(myBox["# of stops"]);


for (var i = 1; i <= myBox["# of stops"]; i++) {
  console.log(myBox["destination"+i]);
}

delete myBox.contents;
console.log(myBox);

console.log(booksArray);

console.log(delete myBox.nonExistentProperty);

myBox["# of Books"] = 0;
console.log(myBox);


function addBook(box, name, writer) {
  box["# of Books"]++;
  box["book" + box["# of Books"]] = {title: name, author: writer}
   
}

console.log(myBox);
addBook(myBox, "Great Expectations", "Charles Dickens");
console.log(myBox["book" + myBox["# of Books"]]);
console.log(myBox);
addBook(myBox, "The Remains of the Day", "Kazu Ishiguro");
addBook(myBox, "Peter Pan", "J. M. Barrie");
console.log(myBox);
addBook(myBox, "On the Road", "Jack Kerouac");
console.log(myBox.book1.title);
console.log(myBox["book3"]["author"]);