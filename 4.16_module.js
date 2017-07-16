We can use functions and closure to make modules. 
A module is a function or object that presents an interface but that hides its state and implementation. 
By using functions to produce modules, we can almost completely eliminate our use of global variables, thereby mitigating one of JavaScript’s worst features.

For example, suppose we want to augment String with a deentityify method. 
Its job is to look for HTML entities in a string and replace them with their equivalents.
It makes sense to keep the names of the entities and their equivalents in an object.
But where should we keep the object? 
	We could put it in a global variable, but global variables are evil. 
	We could define it in the function itself, but that has a runtime cost because the literal must be evaluated every time the function is invoked. 
The ideal approach is to put it in a closure, and perhaps provide an extra method that can add additional entities:

	String.method('deentityify', function ( ) {
		// The entity table. It maps entity names to characters.
		var entity = {
			quot: '"',
			lt: '<',
			gt: '>'
		};
	// Return the deentityify method.
	return function ( ) {
		// This is the deentityify method. 
		// It calls the string replace method, looking for substrings that start with '&' and end with ';'. 
		// If the characters in between are in the entity table, then replace the entity with the character from the table. 
		// It uses a regular expression (Chapter 7).
		return this.replace(/&([^&;]+);/g,
			function (a, b) {
				var r = entity[b];
			return typeof r === 'string' ? r : a;
			}
		);
	};
	}( ));

Notice the last line. 
We immediately invoke the function we just made with the ( ) operator. 
That invocation creates and returns the function that becomes the deentityify method.
	document.writeln('&lt;&quot;&gt;'.deentityify( )); // <">
The module pattern takes advantage of function scope and closure to create relationships that are binding and private. 
In this example, only the deentityify method has access to the entity data structure.
The general pattern of a module is a function that defines private variables and functions;
	creates privileged functions which, through closure, will have access to the private variables and functions; and 
	that returns the privileged functions or stores them in an accessible place.

Use of the module pattern can eliminate the use of global variables. 
It promotes information hiding and other good design practices. 
It is very effective in encapsulating applications and other singletons.
It can also be used to produce objects that are secure. 
Let’s suppose we want to make an object that produces a serial number:
	var serial_maker = function ( ) {
		Produce an object that produces unique strings. 
		A unique string is made up of two parts: 
			a prefix
			a sequence number

		// The object comes with methods for setting the prefix and sequence number, and a gensym method that produces unique strings.
		var prefix = '';
		var seq = 0;
		return {
			set_prefix: function (p) {
				prefix = String(p);
			},
			set_seq: function (s) {
			seq = s;
		},
		gensym: function ( ) {
				var result = prefix + seq;
				seq += 1;
				return result;
			}
		};
	};
	var seqer = serial_maker( );
	seqer.set_prefix = ('Q';)
	seqer.set_seq = (1000);
	var unique = seqer.gensym( ); // unique is "Q1000"

The methods do not make use of this or that. 
As a result, there is no way to compromise the seqer. 
It isn’t possible to get or change the prefix or seq except as permitted by the methods. 
The seqer object is mutable, so the methods could be replaced, but that still does not give access to its secrets. 
seqer is simply a collection of functions, and those functions are capabilities that grant specific powers to use or modify the secret state.
If we passed seqer.gensym to a third party’s function, that function would be able to generate unique strings, but 
would be unable to change the prefix or seq.