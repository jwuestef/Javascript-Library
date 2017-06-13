$(document).ready(function() {
	//next
	$("#p-one").next().css({border: "2px solid blue"});

	//prev
	$("#list-two").prev().css({border: "2px solid red"});

	//parent
	$("#p-two").parent().css({border: "2px solid yellow"});

	//children
	$("#div-two").children().css({"font-style", "italic"});

	//find
	$("#find").find("#facebook").css("background-color", "yellow");
	//another way to accomplish this would be
	// $("#find #facebook").css("background-color", "yellow");

	//closest
	$("#twitter-button").closest("li").css("background-color", "yellow");


})