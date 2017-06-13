$(document).ready(function() {

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var displaySum = document.getElementById("display-sum");

numOne.addEventListener("keyup", addValues);
numTwo.addEventListener("keyup", addValues);


function addValues() {
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	displaySum.innerHTML = "Your sum is: " + (one + two);
}


});