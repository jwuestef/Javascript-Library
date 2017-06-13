function sing() {
	console.log("twinkle wtinkle");
	console.log("how i wonder...")
}

//setInterval is a function that accepts a function as an argument
//and the interval on how often it is called
setInterval(sing, 1000)



setInterval(function() {
	console.log("Blah2");
	console.log("blah4");
}, 2000);