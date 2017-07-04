When a function is stored as a property of an object, we call it a method. 
When a method is invoked, this is bound to that object. 

If an invocation expression contains a refinement 
	(that is, a . dot expression or [subscript] expression), 
	it is invoked as a method:
		// Create myObject. 
		// It has a value and an increment method. 
		// The increment method takes an optional parameter. 
		// If the argument is not a number, then 1 is used as the default.

		var myObject = {
			value: 0,
			increment: function (inc) {
			this.value += typeof inc === 'number' ? inc : 1;
			}
		};
		myObject.increment();
		document.writeln(myObject.value); // 1
		myObject.increment(2);
		document.writeln(myObject.value); // 3



A method can use this to access the object so that it can retrieve values from the object or modify the object. 
The binding of this to the object happens at invocation time. 
This very late binding makes functions that use this highly reusable. 
Methods that get their object context from this are called public methods.


