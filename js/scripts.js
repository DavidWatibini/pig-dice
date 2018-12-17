$(document).ready(function() {
  $("#button-roll").click(function() {
    var numbers = [1, 2, 3, 4, 5, 6]
    var randomSum = 0;
    var randomNumber = Math.floor(Math.random() * (numbers.length));
    if(randomNumber===1) {
      randomSum=0;
      alert("You just rolled a 1. pass dice to next player")
    } else if (randomNumber===2) {
      randomSum+=2;

    }
    $('#roll').text(numbers[randomNumber]);
    $('#toroll').text(numbers[randomNumber]);
  });
});

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
