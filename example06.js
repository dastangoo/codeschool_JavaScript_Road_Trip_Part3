function capacityStatus(numPassengers, capacity) {
  
  var noSeats = function () {
    alert("No seats left, dude!");
    return false;
  }
  
  var seatsAvail = function () {
    alert("There are " + (capacity - numPassengers) + " seats left!");
    return true;
  }

  if (numPassengers == capacity) {
    noSeats();
  } else {
    seatsAvail();
  }
  
}

console.log(capacityStatus(60, 60));