When a function is not the property of an object, then it is invoked as a function:
var sum = add(3, 4); // sum is 7


When a function is invoked with this pattern, this is bound to the global object.
This was a mistake in the design of the language. 
Had the language been designed correctly, when the inner function is invoked, 
this would still be bound to the this variable of the outer function. 

A consequence of this error is that a method cannot employ an inner function to help it do its work because 
the inner function does not share the method’s access to the object as its this is bound to the wrong value. 

Fortunately, there is an easy workaround. 
If the method defines a variable and assigns it the value of this, the inner function will have access to this through that variable. 
By convention, the name of that variable is that:
// Augment myObject with a double method.
myObject.double = function ( ) {
	var that = this; // Workaround.
	var helper = function ( ) {
		that.value = add(that.value, that.value);
	};
	helper( ); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double( );
document.writeln(myObject.getValue( )); // 6