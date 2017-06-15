var express = require("express");		// takes the whole express module and loads it into an "express" variable
var app     = express();	//runs the default function of the "express" module, and assigns it to the variable "app"
var http    = require("http").Server(app);		//takes the http module, and runs a server wit the module, using variables/functiosn/traits/setup of the express module

app.use(express.static(__dirname + "/public"));  	// concatenates the main directory and adds /index to it, then tells express this will be a static location where it can find all files. We then tell express to use it.

app.get("/", function(req, res){	// when our express server receives a get request directed to the home page, it will call this function, with the request and response variable passed to it
	res.sendFile(__dirname + "/index.html");
});






http.listen(process.env.PORT || 3000, function() {
	console.log("listening on *:3000");
});