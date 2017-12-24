var greeting = function () {
  alert("Thanks for visiting the Badlands!\nWe hope your stay is...better than most.");
};


function closeTerminal(message) {
  message();
}

closeTerminal(greeting);