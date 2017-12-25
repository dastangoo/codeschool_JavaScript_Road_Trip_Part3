function buildCoveTicketMaker(transport) {
  var passengerNumber = 0;
  
  return function (name) {
    passengerNumber++;
    alert("Here is your transportation ticket via the " + transport + ".\nWelcome to the Cold Closure Cove, " + name + 
          "!" + "You are passenger #" + passengerNumber + ".");
  };
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario");

