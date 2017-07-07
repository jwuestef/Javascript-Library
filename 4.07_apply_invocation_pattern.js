Because JavaScript is a functional object-oriented language, functions can have methods.


The apply method lets us construct an array of arguments to use to invoke a function.
It also lets us choose the value of this. 


The apply method takes two parameters.
	The first is the value that should be bound to this. 
	The second is an array of parameters.

// Make an array of 2 numbers and add them.
	var array = [3, 4];
	var sum = add.apply(null, array); // sum is 7


	
// Make an object with a status member.
	var statusObject = {
		status: 'A-OK'
	};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on statusObject,
// even though statusObject does not have a get_status method.
	var status = Quo.prototype.get_status.apply(statusObject);
 // status is 'A-OK'