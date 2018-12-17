//business logic//

var firstPlayer = "";
var secondPlayer = "";

var dice = function() {
  return Math.floor((Math.random() * 6)) + 1;
}

function Players() {
  this.diceRoll = 0;
  this.roundTotal = 0;
  this.totalScore = 0;
  this.playerName;
}


Players.prototype.roll = function() {
  if (this.diceRoll === 1) {
    this.roundTotal = 0;
    alert("oh! no " + this.playerName + ", you just rolled a 1!, allow next player to play ")
  } else {
    this.roundTotal += this.diceRoll;
  }
}

Players.prototype.hold = function(){
  this.totalScore+=this.roundTotal;
  this.roundTotal=0;
  alert(this.playerName + " please pass dice to next player")
  }

//user interface //

$(document).ready(function() {
  $("#play").click(function() {
    firstPlayer = new Players();
    secondPlayer = new Players();
    $(".content").show();
    $("#new-player").hide();
    $("#play").hide();
    $(".middle").hide();
    $("img").hide();

    var playerOneName = $("#firstPlayer").val();
    $("#playerOneName").text(playerOneName);

    var playerTwoName = $("#secondPlayer").val();
    $("#playerTwoName").text(playerTwoName);

    firstPlayer.playerName = playerOneName;
    secondPlayer.playerName = playerTwoName;

  });

  $("button#rolling").click(function() {
    firstPlayer.diceRoll = dice();
    $("#roll-1").text(firstPlayer.diceRoll);
    firstPlayer.roll();
    $("#total-roll-1").text(firstPlayer.roundTotal);
});
    $("button#hold").click(function() {
      firstPlayer.hold();
      $("#total-1").text(firstPlayer.totalScore);
      $("total-roll-1").empty();
      $("#roll-1").empty();

  });
});
