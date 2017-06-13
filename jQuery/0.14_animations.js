$(document).ready(function() {

	//animate
	$("#animate").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		});
	});

	//with time parameter
	$("#animate-time").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		})
	});

	//with callback
	$("#animate-callback").click(function() {
		$(this).animate({
			"height": "200px",
			"width": "300px"
		}, 2500, function() {
			$(this).animate({"background-color": "red"})
		})
	});


})