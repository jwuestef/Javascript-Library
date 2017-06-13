var colors = ["red", "orange", "yellow"];

myForEach(colors, alert);

myForEach(colors, function() {
	console.log("hi")
});

myForEach(colors, function(blah) {
	console.log(blah);
});










function myForEach(arr, func) {
	//loop through array
	for (var i=0; i<arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}

//adds it as a method for all arrays
Array.prototype.myForEach = function(func) {
	for (var i=0; i<this.length; i++) {
		//call func for each item in array
		func(this[i]);
	}
}


var friends = ["charlie", "dave", "maddy", "caitlin"];
friends.myForEach(alert); //but we ususlly see it with an anonomous function
friends.myForEach(function(name) {
	console.log("I love " + name);
});