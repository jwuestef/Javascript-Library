//require is a part of node that helps me inport node_modules
//require also pulls from another javascript file that has an export

var express = require("express");
var app = express();   //express is the web-server builder, allowing node to act as a web server
var http = require("http").Server(app);

app.use(express.static(__dirname + "/public"));  //serves up the public directory for the front-end client

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});





http.listen(3000, function(){
	console.log("Basic server has begun on port 3000");
});