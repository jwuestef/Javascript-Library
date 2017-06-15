$(document).ready(function() {
	$.ajax({
		type: "GET",
		url:"http://swapi.co/api/people/",
		// success: function(data) {           // BETTER NOT TO INCLUDE RESOLUTIONS IN THE REQUEST. INSTEAD USE DEFERRED PROMISES, THE .DONE and .FAIL below.
		// 	console.log(data.results[0].name);
		// },
		// error: function() {
		// 	alert("Error loading data");
		// }
	}).done(function(data) {   //if ajax call finishes successfully
		console.log(data);
	}).fail(function(){   //if the ajax call fails to finish for some reason.
		alert("The ajax call messed up.")
	})



	console.log("This will be in the log before the ajax call.");
});