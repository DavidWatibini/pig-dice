function gameOn("", "") {
  this.player1 = "";
  this.player2 = "";
}

function Players(swichPlayer) {
  this.diceRoll = 0;
  this.roundTotal = 0;
  this.totalScore = 0;
  this.swichPlayer = swichPlayer;
  this.playerName;
}
var diceRoll = function() {
  return Math.floor(Math.random() * 6) + 1;
}

Players.prototype.RollingOne = function() {
  if (this.diceRoll === 1) {
    this.totalScore = 0;
    this.roundTotal = 0;
    this.diceRoll=0;
    alert("oh! no " + this.playerName + ", you just rolled a 1!, allow next player to play ")
  } else {
    this.roundTotal += this.diceRoll;
  }
}

Players.prototype.hold = function () {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
  this.diceRoll=0;
}

Players.prototype.newGame = function () {
    location.reload();
  }

//user interface //

$(document).ready(function() {
  $("#play").click(function() {
    $(".content").show();
    $("#new-player").hide();
    $("#play").hide();
    $(".middle").hide();
    $("img").hide();

  });
});
