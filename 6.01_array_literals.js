Array literals provide a very convenient notation for creating new array values. 
An array literal is a pair of square brackets surrounding zero or more values separated by commas. 
An array literal can appear anywhere an expression can appear. 

The first value will get the property name '0', the second value will get the property name '1', and so on:
	var empty = [];
	var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	empty[1] // undefined
	numbers[1] // 'one'
	empty.length // 0
	numbers.length // 10

The object literal:
	var numbers_object = {
		'0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
	};
produces a similar result. 

Both numbers and number_object are objects containing 10 properties, and those properties have exactly the same names and values. 
But there are also significant differences. 
numbers inherits from Array.prototype, whereas number_object inherits from Object.prototype, so numbers inherits a larger set of useful methods. 
Also, numbers gets the mysterious length property, while number_object does not.

In most languages, the elements of an array are all required to be of the same type.
JavaScript allows an array to contain any mixture of values:
	var misc = [ 'string', 98.6, true, false, null, undefined, ['nested', 'array'], {object: true}, NaN, Infinity ];
	misc.length // 10
