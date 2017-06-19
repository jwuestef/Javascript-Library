var fs = require("fs");   //file system reader


/*
	request = prepare_the_request();
	send_request_asynchonously(request, function(response) {
		display(response)
	});
*/


getBulls("0.19_bulls.txt", function(bulls){

	//if(err) return done(err);

	console.log(bulls);

});

// RUN VIA COMMAND LINE:   node 0.19_callbacks.js







// getBulls(pathToFile, callback)
function getBulls(filePath, done){
	fs.readFile(filePath, function(err, bulls){    // tells the file system to read the file, which is located at filePath.
		// error handling             			// when it's done reading, it will run the following "callback" function. err is first parameter, any data returned is 2nd parameter
		if(err) return done(err);

		fs.readFile("0.19_bulls.dictionary", function(err, dict){
			// error handling
			if(err) return done(err);

			// do some logic here
			compareBulls(bulls, dict);

		});
	});


	// functions, the variable way
	var compareBulls = function(bulls, dict) {

		//turn the items from these files into arrays, then split them
		dict = dict.toString().split("\n");
		bulls = bulls.toString().split("\n").filter(function(bulls){
			// going over the dictionary, then it's checking if the bulls are located inside the dictionary. If it is, then it's returning that value
			return dict.indexOf(bulls) !== -1;
		});
		done(bulls);
	}

}





// =================================
// =================================
// =================================
// =================================
// =================================

//  ANOTHER  EXAMPLE  OF  CALLBACKS


console.log("Hey tell me your name?");
var printNameInThreeSeconds = setTimeout(function() {
	console.log("Bryce");
}, 3000);

console.log("Nice to meet you");



































