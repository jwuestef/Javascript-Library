$(function() {   // in jQuery, this is an even easier way of writing $(document).ready(
	//by id - this adds a css class
	$("#example").addClass("highlight");

	//by class
	$(".example-two").css("border", "4px solid gray");

	//by element
	$("h5").click(function() {
		$(this).fadeOut("slow", "linear");
	});

	//https://jqueryui.com/draggable
	//$("#draggable").draggable()
	$("#id-combo-demo, .class-combo-demo, #draggable").draggable();

	$("li:contains('sad')").click(function() {
		$(this).hide();
	});

});