function assignTorpedo(name, passengerArray) {
  var torpedoAssignment;
  for (var i = 0; i < passengerArray.length; i++) {
    if (passengerArray[i] == name) {
      return function () {
        alert("Ahoy, " + name + "!\nMan your post at Torpedo #" + (i+1) + "!");
      }
    }
  }
}

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers);
console.log(giveAssignment());
