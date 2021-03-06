//business logic
function translate(input) {
  if (input % 15 === 0) {
    return "ping-pong";
  } else if (input % 3 === 0) {
      return "ping";
  } else if (input % 5 === 0) {
      return "pong";
  } else {
      return input; // for any integer greater than 0
  }
};

//user logic
$(document).ready(function() {
  $("form#formPingPong").submit(function(event) {
    event.preventDefault();
    var input = parseFloat($("#input").val());
    if (input % 1 !== 0 || input <= 0) {
      alert("Enter an integer greater than zero!"); //in case the user disregards initial directions.
      $("#result").hide();
      $("#rules").show();
      $("#reminder").hide();
    } else {
        $("ul.results-list").empty();//clear previous list when the next number is submitted.
        for (var numberRange =1; numberRange <= input; numberRange++) {
        var userResult = translate(numberRange);
        $("ul.results-list").append("<li>" + translate(numberRange) + "</li>");
      }
      $("#result").show();
      $("#reminder").show();
      $("#rules").hide();
    }
  });
});
