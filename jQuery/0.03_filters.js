$(document).ready(function() {
	//first and last
	$("#example-one li:first").css({border: "2px solid blue"});
	$("#example-one li:last").css({border: "2px solid red"});

	//odd and even
	$("#example-two li:odd").css("background-color", "#eee");
	$("#example-two li:even").css("background-color", "#ccc");

	//not
	    //target all li's inside #not-example for #list-item-three
	    $("#not-example li:not('#list-item-three')").css({border: "2px solid yellow"});

	//less than and greater than
	$("#example-four li:lt(5)").css("background-color", "yellow");
	$("#example-four li:gt(4)").css("border", "2px solid red");
});