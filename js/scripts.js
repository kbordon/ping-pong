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
    var regularAndReverseArray = [];
    var replacedArray = replaceNumbers(numbersArray);
    var reversedArray = replacedArray.slice().reverse(); regularAndReverseArray.push(replacedArray,reversedArray);
    console.log(regularAndReverseArray);
    return regularAndReverseArray;

  }



}

//front-end logic

$(document).ready(function() {
  $("#pingpong-form").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("#user-number").val();

    var results = pingPong(userNumberInput);
    if (!results[1]) {
      $(".number-box,.ping-box,.pong-box,.ping-pong-box").hide();
      $(".number-list,.ping-list,.pong-list,.ping-pong-list").empty();
      $("#results-message").hide();
      $("#error-message").fadeIn();
    } else {
      $(".number-box,.ping-box,.pong-box,.ping-pong-box").hide();
      $(".number-list,.ping-list,.pong-list,.ping-pong-list").empty();
      results[1].forEach(function(result[1]){
        if (result[1] === "ping") {
          $(".ping-list").append("<ul class='list-unstyled'><li><em>" + result + "</em></li></ul>");
          $(".ping-box").fadeIn(400);
        } else if (result[1] === "pong") {
          $(".pong-list").append("<ul class='list-unstyled'><li><strong>" + result + "</strong></li></ul>");
          $(".pong-box").fadeIn(600);
        } else if (result[1] === "ping-pong") {
          $(".ping-pong-list").append("<ul class='list-unstyled'><li><em><strong>" + result + "</strong></em></li></ul>");
          $(".ping-pong-box").fadeIn(800);
        } else {
          $(".number-list").append("<ul class='list-unstyled'><li>" + result + "</li></ul>");
          $(".number-box").fadeIn(200);
        }
      });
      $("#error-message").hide();
      $("#results-message").show();
    }

  })
});
