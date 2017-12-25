function buildCoveTicketMaker(transport) {
  return function (name) {
    alert("Here is your transportation ticket via the " + transport + ".\nWelcome to the Cold Closures Cove, " + name + "!");
  };
}

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario");
var getBattleshipTicket = buildCoveTicketMaker("Battleship");
getBattleshipTicket("Luigi");
var getGiantSeagullTicket = buildCoveTicketMaker("Giant Seagull");
getGiantSeagullTicket("Bowser");