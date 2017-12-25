function capacityStatus(numPassengers, capacity) {
  if (numPassengers == capacity) {
    noSeats();
  } else {
    seatsAvail();
  }
  
  var noSeats = function () {
    alert("No seats left, dude!");
    return false;
  }
  
  var seatsAvail = function () {
    alert("There are " + (capacity - numPassengers) + " seats left!");
    return true;
  }
}

console.log(capacityStatus(60, 60));