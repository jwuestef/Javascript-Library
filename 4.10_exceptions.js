JavaScript provides an exception handling mechanism. 

Exceptions are unusual (but not completely unexpected) mishaps that interfere with the normal flow of a program.
When such a mishap is detected, your program should throw an exception:
	var add = function (a, b) {
		if (typeof a !== 'number' || typeof b !== 'number') {
			throw {
				name: 'TypeError',
				message: 'add needs numbers'
			};
		}
		return a + b;
	}


The "throw" statement interrupts execution of the function. 
It should be given an exception object containing a "name" property that 
identifies the type of the exception, and a descriptive "message" property. 

You can also add other properties.
The "exception" object will be delivered to the "catch" clause of a "try" statement:
	// Make a try_it function that calls the new add
	// function incorrectly.
	var try_it = function ( ) {
		try {
			add("seven");
		} catch (e) {
			document.writeln(e.name + ': ' + e.message);
		}
	}
	try_it( );


If an exception is thrown within a "try" block, control will go to its "catch" clause.

A "try" statement has a single "catch" block that will catch all exceptions. 
If your handling depends on the type of the exception, then the exception handler will have to 
inspect the "name" to determine the type of the exception.