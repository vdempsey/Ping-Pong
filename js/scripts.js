//business logic

function translate(input) {
  var possibleResults = ["ping", "pong", "ping-pong"];
  var userResult = "";
  var results = input.toString();
  for (var i=0; i < input.length; i++) {
      userResult = possibleResults[i][parseInt(results[i])] + userResult;
  }
  return userResult;
};


//user logic
$(document).ready(function() {
  $("form#formPingPong").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var userResult = translate(input);
    var ping = parseInt(input) % 3;
    var pong = parseInt(input) % 5;
    var pingPong = parseInt(input) % 15;
    var number = parseInt(input);
    var zeroOrBelow = parseInt(input);
    if (input <= 0) {
      alert("Please enter the number greater than 0");
    } else if (pingPong === 0 && input > 0) {
      $("ul").prepend($(".ping").push(userResult));
      $("#result").show();
      //$(".pingPong").text(userResult.charAt(2));
      //alert("PingPong!");//to check it this whole thing works
    //} else if (pong === 0 && input > 0) {
    //  $("ul").prepend($(".ping").push(userResult));
    //  $("#result").show();
      //alert("Pong!");
      //$("#result").show();
      //$(".pong").text(userResult.charAt(0)).show();
    } else if (ping === 0 && input > 0) {
      alert("Ping");
    } else if (input > 0) {
      alert("your number is ...");
    }

    //$("#result").show();
    //$("li").prepend($(".ping").text(userResult()));

  });
});
