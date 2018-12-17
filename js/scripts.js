function gameOn("","") {
  this.player1 = "";
  this.player2 = "";
}
var diceRoll= function () {
  return Math.floor(Math.random() * 6)+1;

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
