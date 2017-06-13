function doMath(operator) {
  //TO DO - get value from input fields
  //TO DO - remember that info coming in from inputs are strings
  var numOne = parseInt(document.getElementById("numOne").value);
  var numTwo = parseInt(document.getElementById("numTwo").value);
  
  //TO DO - create a result variable
  //TO DO - create a conditional tree that handles all operators
  //TO DO - and says operator is not a function
  var result;
  switch (operator) {
    case "add":
      result = numOne + numTwo;
      break;
    case "subtract":
      result = numOne - numTwo;
      break;
    case "multiply":
      result = numOne * numTwo;
      break;
    case "divide":
      result = numOne / numTwo;
      break;
    case "modulus":
      result = numOne % numTwo;
      break;
    default:
      result = "<Invalid operator>";
      break;
  }
  
  //TO DO - send the result back to the DOM
  document.getElementById("resultText").innerHTML = "The result is:";
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").insertAdjacentHTML("afterend","<button onClick='history.go(0)'>Reset</button>");
}