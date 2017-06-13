$(document).ready(function() {

	//removing classes
	$(".font-color-change").removeClass("font-color-change");

	//adding classes
	$("#add-class").addClass("font-color-change");

	//toggle classes
	//target the button and hve it perform a function on click
	$("#toggle-button").click(function() {
		$("#toggle-class p").toggleClass("font-color-change");
	})
});