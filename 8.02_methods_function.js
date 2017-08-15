function.apply(thisArg, argArray)

The apply method invokes a function, passing in the object that will be bound to this and an optional array of arguments. 
The apply method is used in the apply invocation pattern (Chapter 4):
	Function.method('bind', function (that) {
		// Return a function that will call this function as though it is a method of that object.
		var method = this,
		slice = Array.prototype.slice,
		args = slice.apply(arguments, [1]);
		return function ( ) {
		return method.apply(that,
		args.concat(slice.apply(arguments, [0])));
		};
	});

	var x = function ( ) {
		return this.value;
	}.bind({value: 666});

	alert(x( )); // 666
