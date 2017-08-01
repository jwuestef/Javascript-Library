JavaScript provides a set of methods for acting on arrays. 
The methods are functions stored in Array.prototype. 
In Chapter 3, we saw that Object.prototype can be augmented.

Array.prototype can be augmented as well.
For example, suppose we want to add an array method that will allow us to do computation on an array:
	Array.method('reduce', function (f, value) {
		var i;
		for (i = 0; i < this.length; i += 1) {
			value = f(this[i], value);
		}
		return value;
	});

By adding a function to Array.prototype, every array inherits the method. 
In this case, we defined a reduce method that takes a function and a starting value. 
For each element of the array, it calls the function with an element and the value, and computes a new value. 
When it is finished, it returns the value. 

If we pass in a function that adds two numbers, it computes the sum. 
If we pass in a function that multiplies two numbers, it computes the product:
	// Create an array of numbers.
	var data = [4, 8, 15, 16, 23, 42];
	// Define two simple functions. 
		// One will add two numbers. 
		// The other will multiply two numbers.
	var add = function (a, b) {
		return a + b;
	};
	var mult = function (a, b) {
		return a * b;
	};
	// Invoke the data's reduce method, passing in the add function.
	var sum = data.reduce(add, 0); // sum is 108
	// Invoke the reduce method again, this time passing in the multiply function.
	var product = data.reduce(mult, 1);
	 // product is 7418880

Because an array is really an object, we can add methods directly to an individual array:
	// Give the data array a total function.
	data.total = function ( ) {
		return this.reduce(add, 0);
	};
	total = data.total( ); // total is 108

Since the string 'total' is not an integer, adding a total property to an array does not change its length. 

Arrays are most useful when the property names are integers, but they are still objects, and objects can accept any string as a property name.
It is not useful to use the Object.create method from Chapter 3 on arrays because it produces an object, not an array. 
The object produced will inherit the array’s values and methods, but it will not have the special length property.
