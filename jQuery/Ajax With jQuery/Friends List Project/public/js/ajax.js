var $friends = $("#friends");	//declaring variable
var $name = $("#name");	//declaring variable
var $age = $("#age");	//declaring variable

var friendTemplate = "" + 
	"<li>" + 
	"<p><strong>Name:</strong> {{ name }}</p>" + 
	"<p><strong>Age:</strong> {{ age }}</p>" + 
	"<button id='{{ id }}' class='remove'>X</button>" +
	"</li>";	//declaring variable/template for Mustasche to fill in later

function addFriend(friend) { 	// declaring function addFriend
	$friends.append(Mustache.render(friendTemplate, friend));	//fills in the friendTemplate with values from the friend variable, renders that result to HTML-understandable format, and appends it to the $friends (ul) section
}	//closes function




$(document).ready(function() {	// when the document has been read and is loaded... it calls the function, which is...

	$.ajax({	//starts an ajax call, passing the object of properties (of said request)...
		type: "GET",	//the type of the ajax request
		url: "http://rest.learncode.academy/api/learncode/friends",	//the url that we're making the call to
		success: function(friends){		//on success, we'll run this function. The data we received will be passed to the function and we'll call it "friends"
			$.each(friends, function(i, friend){	//loops through each friend in the friends result, and runs the following function with said friend and index passed to it
				addFriend(friend);		//calls the addFriend function on that individual friend. (said addFriend function will append the friend to the ul #friends)
			});		//closes the each-loop
		},  	//closes the success code block
		error: function() {		// on ajax call failure, this function will happen
			alert("Error loading friends");		//display an alert to the user
		}	//close the error code block
	});		// close the entire ajax code block



	$("#add-friend").on("click", function(){	//adds an event listener to the #add-friend (button), so when it's clicked, said function will run

		var friend = {		//starts the "friend" variable declaration
			name: $name.val(),		//the "name" key will get the value from the name form field
			age: $age.val()		//the "age" key will get the value from the age form field
		};		// closes the "friend" variable declaration

		$.ajax({	
			type: "POST",
			url: "http://rest.learncode.academy/api/learncode/friends",
			data: friend,
			success: function(newFriend){
				addFriend(newFriend);
			},
			error: function() {
				alert("Error saving friend");
			}
		});
	});



	//.delegate allows you to remove items that were loaded by other students
	$friends.delegate(".remove", "click", function() {

		var $li = $(this).closest("li");

		// AJAX DELETE function - click the .remove class button and the id identifies what to delete
		$.ajax({
			type: "DELETE",
			url: "http://rest.learncode.academy/api/learncode/friends/" + $(this).attr("id"),
			success: function() {
				$li.fadeOut(300, function() {
					$(this).remove();
				});
			}
		});

	});








});