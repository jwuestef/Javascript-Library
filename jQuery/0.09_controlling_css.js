$(document).ready(function() {

	// checking value of CSS property
	console.log($("#read-css").css("font-size"));

	//changing value of CSS property
	$("#change-css-example").css("color", "blue");

	//changing multiple CSS property values using an object
	$("#change-css-object-example").css({
		"color": "green",
		"background-color": "yellow",
		"border": "2px solid red"
	})
});