function capacityStatus(numPassengers, capacity) {
  
  function noSeats() {
    alert("No seats left, dude!");
    return false;
  }
  
  function seatsAvail() {
    alert("There are " + (capacity - numPassengers) + " seats left!");
    return true;
  }

  if (numPassengers == capacity) {
    noSeats();
  } else {
    seatsAvail();
  }
  
}

console.log(capacityStatus(20, 60));