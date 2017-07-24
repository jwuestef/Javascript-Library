In a purely prototypal pattern, we dispense with classes. 
We focus instead on the objects. 

Prototypal inheritance is conceptually simpler than classical inheritance: 
	a new object can inherit the properties of an old object. 

This is perhaps unfamiliar, but it is really easy to understand. 
You start by making a useful object. 
You can then make many more objects that are like that one. 
The classification process of breaking an application down into a set of nested abstract classes can be completely avoided.
Let’s start by using an object literal to make a useful object:
	var myMammal = {
		name : 'Herb the Mammal',
		get_name : function ( ) {
			return this.name;
		},
		says : function ( ) {
			return this.saying || '';
		}
	};

Once we have an object that we like, we can make more instances with the "Object.create" method from Chapter 3. 
We can then customize the new instances:
	var myCat = Object.create(myMammal);
	myCat.name = 'Henrietta';
	myCat.saying = 'meow';
	myCat.purr = function (n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	};
	myCat.get_name = function ( ) {
		return this.says( ) + ' ' + this.name + ' ' + this.says( );
	};



This is differential inheritance. 
By customizing a new object, we specify the differences from the object on which it is based.
Sometimes is it useful for data structures to inherit from other data structures. 
Here is an example: 
	Suppose we are parsing a language such as JavaScript or TEX in which a pair of curly braces indicates a scope. 
	Items defined in a scope are not visible outside of the scope. 
	In a sense, an inner scope inherits from its outer scope. 
	JavaScript objects are very good at representing this relationship. 
	The block function is called when a left curly brace is encountered. 
	The parse function will look up symbols from scope, and augment scope when it defines new symbols:
		var block = function ( ) {
			// Remember the current scope. Make a new scope that
			// includes everything from the current one.
			var oldScope = scope;
			scope = Object.create(scope);

			// Advance past the left curly brace.
			advance('{');

			// Parse using the new scope.
			parse(scope);
			
			// Advance past the right curly brace and discard the
			// new scope, restoring the old one.
			advance('}');
			scope = oldScope;
		};