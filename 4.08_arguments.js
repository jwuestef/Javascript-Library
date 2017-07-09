A bonus parameter that is available to functions when they are invoked is the arguments array.


It gives the function access to all of the arguments that were supplied with the invocation, 
including excess arguments that were not assigned to parameters. 
This makes it possible to write functions that take an unspecified number of parameters:
// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of the function does not interfere with the sum defined outside of the function. 
// The function only sees the inner one.
	var sum = function ( ) {
		var i, sum = 0;
		for (i = 0; i < arguments.length; i += 1) {
			sum += arguments[i];
		}
		return sum;
	};

	document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108


This is not a particularly useful pattern. In Chapter 6, we will see how we can add a similar method to an array.


Because of a design error, "arguments" is not really an array. 
It is an array-like object.
"arguments" has a length property, but it lacks all of the array methods. 
(We will see a consequence of that design error at the end of this chapter.)