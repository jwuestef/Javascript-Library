$(document).ready(function() {

	//add text to a div
	$("#divText").text("some text")

	//change color of text
	$("#styled").css({
		"color": "red"
	});

	//adding class to children
	$("#adding-class").children().addClass("meow-class");




});