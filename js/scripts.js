// back-end logic
var countUpToNumber = function(userInteger) {
  debugger;
  var numbersArray = [];
  for (var currentNumber = 1; currentNumber <= userInteger; currentNumber++) {
    numbersArray.push(currentNumber);
  }
  return numbersArray;
}

var replaceNumbers = function(numbersArray) {
  var replacedNumbers = numbersArray.map(function(number){
    if (number % 15 === 0) {
      return "ping-pong";
    } else if (number % 5 === 0) {
      return "pong";
    } else if (number % 3 === 0) {
      return "ping";
    } else {
      return number
    }
  });
  return replacedNumbers;
}

var pingPong = function(userNumberInput) {
  var userInteger = parseInt(userNumberInput);
  if (userInteger <= 0) {
    return false
  } else {
    var numbersArray = countUpToNumber(userInteger);
    return replaceNumbers(numbersArray);
  }



}

//front-end logic
$(document).ready(function() {
  $("#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("#userNumber").val();

    var results = pingPong(userNumberInput);
    if (!results) {
      $("#results-message").hide();
      $("#error-message").show();
    } else {
      $(".list").empty();
      results.forEach(function(result){
        $(".list").append("<ul class='list-unstyled'><li>" + result + "</li></ul>");
      });

      $("#error-message").hide();
      $("#results-message").show();
    }

  })
});
