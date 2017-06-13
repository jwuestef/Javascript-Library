//check off specific todos by clicking
$("ul").on("click", "li", function() {      //makes it future-li proof
	$(this).toggleClass("completed");	
});

//click on X to delete todo
$("ul").on("click", "span", function(event) {   //makes it future-li proof
	$(this).parent().fadeOut(500, function() {  
		$(this).remove();
	});   
	event.stopPropagation();     //Will stop "higher" event listeners from firing
});  //Without this, clickng will also cause it to fire the li click listener too, and any other listeners higher in the HTML, such as on the ul, body, or html tags

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		//create a ew li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
})
