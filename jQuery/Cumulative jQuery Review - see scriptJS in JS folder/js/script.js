$(function() {
	$(".gallery").css("display", "none");   //LEAVE UNTIL THE MAKING AN IMAGE SLIDER EXERCISE   or .hide()

// ====================================
// 		CSS SELECTORS
// ====================================


// $("p").css("background-color", "rgba(180, 180, 30, 0.8)")

// $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)")

// $("#list").css("background-color", "rgba(180, 180, 30, 0.8)")

// $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)")

// $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8)")

// $("form").children(":password").css("background-color", "rgba(180, 180, 30, 0.8)")

// $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")



//FILTER IS VERY POWERFUL
/* $("#list").find("ul > li").filter(function(index){     //you can pass filter a function, it gets the index of the element you're working with: 0,1,2,3
	//should make something that returns a boolean value. Anything that returns false will be filtered out. Anything remaining can be styled/affected/givenCommands
	return index % 3 === 0;
  }).css("background-color", "rgba(180, 180, 30, 0.8)")
*/

// $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)")  //eq() filters by index value. Putting in a negative starts counting backwards from the end

//NOT - ALSO VERY POWERFUL
// $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)")   //same as filter, but keeps the falsey values instead
/* $("#list").find("ul > li").not(function(index){     //you can pass filter a function, it gets the index of the element you're working with: 0,1,2,3
	//should make something that returns a boolean value. Anything that returns TRUE will be filtered out
	return index % 3 === 0;
  }).css("background-color", "rgba(180, 180, 30, 0.8)")
*/




// ====================================
// 		DOM MANIPULATION
// ====================================


// $("ul ul:first").append("<li>I'm going to be the last subitem</li>");
// which is the same as:   (just backwards order)
// $("<li>I'm going to be the last subitem too!</li>").appendTo($("ul ul:first"));

// $("ul ul:first").prepend("<li>I'm going to be the first subitem</li>");
// $("<li>I'm going to be the first subitem too!</li>").prependTo($("ul ul:first"));

// $(".red-box").after("<div class='red-box'>Another Red</div>") //inserts another box as a sibling, immediately after the selected red-box
// $(".blue-box").before("<div class='blue-box'>Another Blue</div>") //inserts another box as a sibling, immediately before the selected blue-box

/*
	First Variant           		Equivalent
source.append(target) 		target.appendTo(source)
source.prepend(target) 		target.prependTo(source)
source.after(target) 		target.insertAfter(source)
source.before(target) 		target.insertBefore(source)
*/

// We can also pass functions into .before   (in fact, we can pass functions into pretty much anything, as long as it has a return that sends the appropriate value + formatting for the result)
// $(".blue-box").before(function() {
// 	return "<div class='blue-box'>Blue Friend</div>"
// });

// We can also MOVE the red element as such:
// $(".blue-box").before($(".red-box"));     // Be careful when moving multiple items, jQuery will clone the .blue-box as many times as needed to put each .red-box before a .blue-box. one-to-one

// $("li").replaceWith("<li>Replaced</li>");

// $("li").replaceWith(function() {
// 	return "<li>Replaced via function</li>"
// });

// will actually move li:first out of the UL and replace the first p
// var firstListItem = $("li:first");
// $("p:first").replaceWith(firstListItem);

// $(".red-box, .blue-box").replaceWith(function() {
//	return "<div class='green-box'>Green</div>";
// });

// Same idea as append vs appendTo.... replaceAll just swaps the order:
// $("<div class='green-box'>Green</div>").replaceAll(".red-box, .blue-box");

//REMOVING ELEMENTS
// $("li").remove();
// $("form").children().not(":text, br, textarea").remove();

// var detactedListItem = $("li").detach();
// $("#content").append(detactedListItem);    //technically, we could also do the exact same thing using .remove, but BAD IDEA b/c any event listeners on that item will be lost

// $("p:first").empty()   //doesn't remove the item, but just removes the inner html & text inside the element


//MANIULATING ATTR, PROP, VAL,
// var specialLink = $("#special-link");
// console.log(specialLink.attr("href"));     //logs:   /url
// specialLink.attr("href", "http://www.google.com")   //sets a new value for said attribute

// to do something for checked, selected, required, etc...
// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked"));   //logs:   true

// var textInput = $("input:text");   
// textInput.val("Peter Sommerhoff");  // if there are multiple input:text areas, then the .val() will only look at and/or change the value of the FIRST one, leaving the other unaffected
// console.log(textInput.val());   //logs:   Peter Sommerhoff

// var rangeInput = $("input[type='range'");
// console.log(rangeInput.val())    //logs:   7





// ====================================
// 		MAKING AN IMAGE SLIDER
// ====================================
/*
	var galleryImage = $(".gallery").find("img").first();
	var images = [
		"images/laptop-mobile_small.jpg",
		"images/laptop-on-table_small.jpg",
		"images/people-office-group-team_small.jpg"
	];

	var i=0;
	setInterval(function() {
		i = (i+1) % images.length;   // 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2 ...

		galleryImage.fadeOut(1000, function() {
			$(this).attr("src", images[i]);  //callback tells it, after it fades out, set the src attr to be the next image
		});

		galleryImage.fadeIn(1000);

	}, 3000);
*/


// ====================================
// 		CHANGING CSS PROPERTIES
// ====================================

// var redBox = $(".red-box");
// console.log(redBox.css("width"));
// console.log(redBox.width());

// redBox.css("background-color", "#AA7700");
// $("p").css("font-size", "19px");
// redBox.css("width", "+=2px");

// var properties = $("p").css(["font-size", "line-height", "color"]);
// console.log(properties);
// console.log(properties["font-size"]);

// redBox.css("user-select", "none")    // jQuery adds vendor prefixes for us!

// $("a").addClass("fancy-link");

// $("p:first").addClass("large emphasize");

// $("li li").addClass(function(index){
// 	$(this).addClass("item-" + index);
// });


// $("div").addClass(function(index, currentClass) {
// 	if(currentClass === "dummy") {
// 		return "red-box";
// 	}
// });

// $(".red-box").removeClass("red-box");  //but this is usually chained with....
// $(".red-box").removeClass("red-box").addClass("blue-box");



// ====================================
// 		DATA
// ====================================


// var gallery = $(".gallery");
// var images = [
// 	"images/laptop-mobile_small.jpg",
// 	"images/laptop-on-table_small.jpg",
// 	"images/people-office-group-team_small.jpg"
// ];

// gallery.data("availableImages", images);  //associate data with an element
// console.log(gallery.data("availableImages"));

// gallery.data("name", "The Awesome Gallery");
// console.log(gallery.data())  //access ALL of the data available for that element

// gallery.removeData("name");
// console.log(gallery.data());  // "name" is now gone

// var firstPar = $("p:first");
// console.log(firstPar.data("mydata"));


//CHANGING CONTENTS

// var firstPar = $("p:first");
// console.log(firstPar.text());
// console.log(firstPar.html());    // text and html will use only the FIRST element, if multiple p's are selected

// firstPar.text("<strong>Hello World</strong>") //will actually display the <strong> on page
// firstPar.html("<strong>Hello World</strong>") //but html will run the tags, and display the text bolded

// firstPar.html(firstPar.html() + " This was just appended!");  //better just to use string concatenation, rather than append-stuff, which would create a whole new child element




// ====================================
// 		EVENTS AND EVENT HANDLERS
// ====================================

//click events
// $("#btn-click").click(function(event){
// 	alert("Button was clicked");
// 	console.log(event);
// });

// $(".red-box").click(function() {
// 	$(this).fadeTo(1000, 0.5);
// });

// $(".red-box").click();  //will execute our own click event - Must be AFTER we add the click event listener


//hover events
// $("#btn-hover").hover(function(event){
// 	alert("Button was hovered");  //fires twice, once for when the mouse enters, and when the mouse leaves
// });

// $(".green-box").hover(function() {
// 	$(this).text("I was hovered");
// });

// var blueBox = $(".blue-box");
// blueBox.mouseenter(function() {
// 	$(this).stop().fadeTo(500, 0.7);  //Add in the stop function so it stops any current animation, such as if the user repeatedly hovers the mouse in and back out constantly, it will take a while for the animations to catch up
// });
// blueBox.mouseleave(function() {
// 	$(this).stop().fadeTo(500, 1);
// });

//hover (handlerIn, handlerOut)    basically the same as mouseenter and mouseleave, just shorthand
								// blueBox.hover(function() {}, function() {});
// blueBox.hover(function() {
// 	$(this).stop().fadeTo(500, 0.7);
// }, function() {
// 	$(this).stop().fadeTo(500, 1);
// });


//.on("click", function() {...})
// $("html").on("click keydown hover", function() {
// 	console.log("Something happened");
// });

// var gallery = $(".gallery");
// var images = [
// 	"images/laptop-mobile_small.jpg",
// 	"images/laptop-on-table_small.jpg",
// 	"images/people-office-group-team_small.jpg"
// ];
// var i=0;
// gallery.find("img").on("click", function() {
// 	i = (i+1) % images.length;
// 	$(this).fadeOut(function() {
// 		$(this).attr("src", images[i]);
// 	})
// });


// $("p").on("click", function(){
// 	$(this).slideUp();
// });
// // but future paragraph tags will not have that click listener
// $("#content").append("<p>This is a dynamically added parapraph</p>") //won't slide up


//DELEGATED EVENTS
// $("#content").on("click", "p", function(){   // says to add the click listener to p tags inside #content
// 	$(this).slideUp();
// });
// $("#content").append("<p>This is a dynamically added parapraph</p>") //won't slide up

// $("body").on("mouseenter", "li > ul", function(){   //all nested ul's inside an li, which are inside the body, will turn color when mouse enters
// 	$(this).css("color", "red");
// });

// can pass data to functions
// $("#btn-click").click({user: "Peter", domain: "http://www.google.com"}, function(event){
// 	greetUser(event.data);
// });
// function greetUser(userData){
// 	username = userData.user || "Anonymous";
// 	domain = userData.domain || "http://www.udemy.com";
// 	alert("Welcome back " + username + " from " + domain + "!");
// }



//KEYPRESS is EVIL - Don't use!!!!!!! Cross-browser compatibility issues of when exactly it fires and lack of documentation
// use keydown and keyup instead 
// $("html").keydown(function() {
// 	console.log(event.which);
// });

// var ARROW_RIGHT = 39;
// $("html").keydown(function(event) {
// 	if (event.which == ARROW_RIGHT) {
// 		$(".blue-box").stop().animate({
// 			marginLeft: "+=10px"
// 		}, 50)
// 	}
// });


//FOCUS AND BLUR
// var inputFields = $("input:text, input:password, textarea");
// inputFields.focus(function() {
// 	$(this).css("box-shadow", "0 0 4px #666")
// });
// inputFields.blur(function() {
// 	$(this).css("box-shadow", "none");
// });

// $("input:text").blur(function() {
// 	var text = $(this).val();
// 	if(text.length < 3){
// 		$(this).css("box-shadow", "0 0 4px red")
// 	} else {
// 		$(this).css("box-shadow", "0 0 4px green")
// 	}
// })


//SELECTIONS
// $("#checkbox").change(function() {
// 	var isChecked = $(this).is(":checked");    //or could use  .prop("checked")
// 	if (isChecked) {
// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px green");   //adding the label to the selection, then adding a shadow around both
// 	} else {
// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px red");   //adding the label to the selection, then adding a shadow around both
// 	}
// });

// $("#selection").change(function() {
// 	var selected = $(this).find(":selected").text();   //find all the selected elements, which, for a selection tag, will be the ONE selected option
// 	alert(selected)
// });


//SUBMIT EVENT  -  and verification
// $("#form").submit(function(event) {
// 	var textarea = $("#message");
// 	if(textarea.val().trim() == ""){    //trim() trims empty whitespaces
// 		textarea.css("box-shadow", "0 0 4px red");
// 		event.preventDefault();   //stops the normal behavior, stops the form from submitting
// 	} else {
// 		// form will be submitted.
// 	}
// });


//FORM VALIDATION
	// $("#form").submit(function(event) {
	// 	var name = $("#name").val();
	// 	var password = $("#password").val();
	// 	var message = $("#message").val();
	// 	var checked = $("#checkbox").is(":checked");

	// 	validateNameField(name, event);
	// 	validatePasswordField(password, event);
	// 	validateMessageField(message, event);
	// 	validateCheckboxField(checked, event);
	// });

	// function validateNameField(name, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidName(name)){
	// 		$("#name-feedback").text("Please enter at least two characters");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#name-feedback").text("");
	// 	}
	// }
	// function isValidName(name){
	// 	return name.length >= 2;
	// }

	// function validatePasswordField(password, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidPassword(password)){
	// 		$("#password-feedback").text("Please enter at least two characters");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#password-feedback").text("");
	// 	}
	// }
	// function isValidPassword(password){
	// 	return password.length >= 2;
	// }

	// function validatePasswordField(password, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidPassword(password)){
	// 		$("#password-feedback").text("Please enter at least six characters, with at least 1 number");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#password-feedback").text("");
	// 	}
	// }
	// function isValidPassword(password){
	// 	return password.length >= 6 && /.*[0-9].*/.test(password);
	// }

	// function validateMessageField(message, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidMessage(message)){
	// 		$("#message-feedback").text("Please enter a message");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#message-feedback").text("");
	// 	}
	// }
	// function isValidMessage(message){
	// 	return message.trim() != "";
	// }

	// function validateCheckboxField(isChecked, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isChecked){
	// 		$("#checkbox-feedback").text("Please agree to this!");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#checkbox-feedback").text("");
	// 	}
	// }


//FORM VALIDATION - making the above example have fast-feedback
	// var form = $("#form");
	// enableFastFeedback(form);

	// form.submit(function(event) {
	// 	var name = $("#name").val();
	// 	var password = $("#password").val();
	// 	var message = $("#message").val();
	// 	var checked = $("#checkbox").is(":checked");

	// 	validateNameField(name, event);
	// 	validatePasswordField(password, event);
	// 	validateMessageField(message, event);
	// 	validateCheckboxField(checked, event);
	// });

	// function enableFastFeedback(formElement){
	// 	var nameInput = formElement.find("#name");
	// 	var passwordInput = formElement.find("#password");
	// 	var messageInput = formElement.find("#message");
	// 	var checkboxInput = formElement.find("#checkbox");

	// 	nameInput.blur(function(event) {
	// 		var name = $(this).val();
	// 		validateNameField(name, event);

	// 		if(!isValidName(name)){
	// 			$(this).css({"box-shadow": "0 0 4px red", "border": "1px solid red"});
	// 		} else {
	// 			$(this).css({"box-shadow": "0 0 4px green", "border": "1px solid green"});
	// 		}
	// 	});

	// 	passwordInput.blur(function(event) {
	// 		var password = $(this).val();
	// 		validatePasswordField(password, event);

	// 		if(!isValidPassword(password)){
	// 			$(this).css({"box-shadow": "0 0 4px red", "border": "1px solid red"});
	// 		} else {
	// 			$(this).css({"box-shadow": "0 0 4px green", "border": "1px solid green"});
	// 		}
	// 	});

	// 	messageInput.blur(function(event) {
	// 		var message = $(this).val();
	// 		validateMessageField(message, event);

	// 		if(!isValidMessage(message)){
	// 			$(this).css({"box-shadow": "0 0 4px red", "border": "1px solid red"});
	// 		} else {
	// 			$(this).css({"box-shadow": "0 0 4px green", "border": "1px solid green"});
	// 		}
	// 	});

	// 	checkboxInput.change(function(event){
	// 		var isChecked = $(this).is(":checked");
	// 		validateCheckboxField(isChecked, event);

	// 		if(!isChecked){
	// 			$(this).add("label[for='cb']").css({"box-shadow": "0 0 4px red", "border": "1px solid red"});
	// 		} else {
	// 			$(this).add("label[for='cb']").css({"box-shadow": "0 0 4px green", "border": "1px solid green"});
	// 		}
	// 	});
	// }


	// function validateNameField(name, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidName(name)){
	// 		$("#name-feedback").text("Please enter at least two characters");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#name-feedback").text("");
	// 	}
	// }
	// function isValidName(name){
	// 	return name.length >= 2;
	// }

	// function validatePasswordField(password, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidPassword(password)){
	// 		$("#password-feedback").text("Please enter at least two characters");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#password-feedback").text("");
	// 	}
	// }
	// function isValidPassword(password){
	// 	return password.length >= 2;
	// }

	// function validatePasswordField(password, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidPassword(password)){
	// 		$("#password-feedback").text("Please enter at least six characters, with at least 1 number");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#password-feedback").text("");
	// 	}
	// }
	// function isValidPassword(password){
	// 	return password.length >= 6 && /.*[0-9].*/.test(password);
	// }

	// function validateMessageField(message, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isValidMessage(message)){
	// 		$("#message-feedback").text("Please enter a message");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#message-feedback").text("");
	// 	}
	// }
	// function isValidMessage(message){
	// 	return message.trim() != "";
	// }

	// function validateCheckboxField(isChecked, event){   //including the event is needed to be able to use the event.preventDefault() to keep it from being submitted
	// 	if(!isChecked){
	// 		$("#checkbox-feedback").text("Please agree to this!");
	// 		event.preventDefault();
	// 	} else {
	// 		$("#checkbox-feedback").text("");
	// 	}
	// }





// ====================================
// 		AJAX
// ====================================

// $.get() $.post() $.ajax() $.getJSON()

//LOAD  -  .load() gets files for your own server
// $("#code").load("hs/script.js");    //retrieves this file!;   //CREATES ISSUE WITH CROSS ORIGIN REQUEST - CHROME DOESNT LIKE
// $("#code").load("idontexist.php", function(response, status){
// 	if (status == "error") {
// 		alert("Could not find file!");
// 	}
// 	console.log(response);
// });

//JSON  $.getJSON()
// var flikrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"  //we had to add in ?jsoncallback=? to tell it what format we wanted

// $.getJSON(flikrApiUrl, {
// 	//options for API, usually found in that website's API docs
// 	tags: "sun, beach",
// 	tagmode: "any",
// 	format: "json"
// }).done(function(data) { //if the request is successful, data the server came back with
// 	//console.log(data);  //look at the data in the console and figure out the path to get to the photos
// 	$.each(data.items, function(index, item){
// 		//console.log(item);  //again, look at what we have...
// 		$("<img>").attr("src", item.media.m).appendTo("#flickr");

// 		if(index == 4){
// 			return false;  //jumps out of the .each function, so we only get 5 images
// 		}
// 	});
// }).fail(function() { //if the request fails
// 	alert("Ajac call failed");
// })


//JSON   $.getJSON()     (more)
// var pokeapiUrl = "http://pokeapi.co/api/v2/generation/1";
// var pokemonByName = "http://pokeapi.co/api/v2/pokemon/";

// $.getJSON(pokeapiUrl).done(function(data){
// 	console.log(data);
// 	$.each(data.pokemon_species, function(index, pokemon){
// 		var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
// 		var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
// 		var par = $("<p>").html("Pokemon species no. " + (index+1) + " is ").append(link);

// 		link.click(function(event){
// 			$.getJSON(pokemonByName + pokemon.name).done(function(details){
// 				console.log(details);
// 				var pokemonDiv = $("#pokemon-details");
// 				pokemonDiv.empty();
// 				pokemonDiv.append("<h2>" + name + "</h2>");
// 				pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
// 				pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
// 				pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
// 				pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
// 			});
// 			event.preventDefault();
// 		});

// 		par.appendTo("#pokemon");
// 	})
// }).fail(function() {
// 	console.log("Request to PokeApi failed.");
// }).always(function() {    //ALWAYS gets run regardless of whether success or failure
// 	console.log("Pokemon is awesome!")
// });





});   // END OF DOCUMENT