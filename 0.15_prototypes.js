var name = "John Doe";

var greeting = "Hello" + name;

//template literal in ES6
var greet2 = `Hello ${name}`;

console.log(greeting);
console.log(greet2);




var obj = {
	name: "John Doe",
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
obj.greet.call({ name: "Jane Smith"});
obj.greet.apply({ name: "Jane Smith"});




var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person); //causes the Policeman to inherit everything the Person prototype has
var officer = new Policeman();
officer.greet();


