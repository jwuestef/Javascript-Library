$(document).ready(function() {

	// * is a global selector
	$("*").click(function(e){
		console.log(e.target);
		console.log("The X coordinates are: " + e.pageX);

		//restricts event info to only the item that was clicked and not parent elements
		e.stopPropagation();
	})


});