//business logic
var possibleResults = ["ping", "pong", "ping-pong", "number"];
function translate(results) {
  var userResult = "";
  var results = possibleResults.toString().split("");
  for (var i=0; i < possibleResults.lenght; i++) {
    userResult = possibleResults[i] + userResult;
  }
  return userResult;
}

//user logic
$(document).ready(function() {
  $("form#formPingPong").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#input").val());
    var userResult = translate(input);
    var ping = input % 3;
    var pong = input % 5;
    var pingPong = input % 15;
    var number = parseInt(input);
    if (ping === 0) {
      alert("ping!");//to check it this whole thing works
    }
  });
});
