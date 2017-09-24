//business logic
function translate(input) {
  if (input % 15 === 0) {
    return "ping-pong";
  } else if (input % 3 === 0) {
      return "ping";
  } else if (input % 5 === 0) {
      return "pong";
  } else {
      return input;
  }
};


//user logic
$(document).ready(function() {
  $("form#formPingPong").submit(function(event) {
    event.preventDefault();
    var input = parseFloat($("#input").val());
    if (input % 1 !== 0) {
      alert("Enter an integer greater than zero!"); //in case the user disregards initial directions.
    } else {
        for (var numberRange =1; numberRange <= input; numberRange++) {
        var userResult = translate(numberRange);
        $("ul.results-list").append("<li>" + translate(numberRange) + "</li>");
      }
      $("#result").show();
    }

    //$("li").prepend($(".ping").text(userResult()));

  });
});
