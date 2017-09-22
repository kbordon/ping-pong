var countUpToNumber = function(userInteger) {
  debugger;
  for (var countStartNumber = 1; countStartNumber <= userInteger; countStartNumber++ ) {
    countUpNumbers.push(countStartNumber);
  }
  console.log(countUpNumbers);
}


var pingPong = function(userNumberInput) {
  var userInteger = parseInt(userNumberInput);
  var countUpNumbers = [];
  if (userInteger <= 0) {
    return false
  } else {
    countUpToNumber();
    return userNumberInput;
  }



}

//front-end logic
$(document).ready(function() {
  $("#pingPongForm").submit(function(event) {
    event.preventDefault();
    var userNumberInput = $("#userNumber").val();

    var result = pingPong(userNumberInput);
    if (!result) {
      $("#results").hide();
      $("#error-message").show();
    } else {
      $("#error-message").hide();
      $(".list").text(result);
      $("#results").show();
    }

  })
});
