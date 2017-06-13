$(document).ready(function() {

	// content to be added
	var content = "<p style='color: red'>You can add me anywhere in the DOM using different jQuery methods!</p>";
	var content2 = "You can add me anywhere in the DOM using different jQuery methods!";

	//append
	$("#append-example").append(content);

	//prepend
	$("#prepend-example").prepend(content);

	//before
	$("#before-example").before(content);

	//after
	$("#after-example").after(content);

	//html
	$("#html-example").html(content);

	//text
	$("#text-example").text(content2);

});