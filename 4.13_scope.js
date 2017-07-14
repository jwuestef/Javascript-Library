Scope in a programming language controls the visibility and lifetimes of variables and parameters. 
This is an important service to the programmer because it reduces naming collisions and provides automatic memory management:
var foo = function ( ) {
	var a = 3, b = 5;
	var bar = function ( ) {
		var b = 7, c = 11;
		// At this point, a is 3, b is 7, and c is 11
		a += b + c;
		// At this point, a is 21, b is 7, and c is 11
	};
	// At this point, a is 3, b is 5, and c is not defined
	bar( );
	// At this point, a is 21, b is 5
};


Most languages with C syntax have block scope. 
All variables defined in a block (a list of statements wrapped with curly braces) are not visible from outside of the block. 
The variables defined in a block can be released when execution of the block is finished. 
This is a good thing.


Unfortunately, JavaScript does not have block scope even though its block syntax suggests that it does. 
This confusion can be a source of errors.


JavaScript does have function scope. 
That means that the parameters and variables defined in a function are not visible outside of the function, and 
that a variable defined anywhere within a function is visible everywhere within the function.


In many modern languages, it is recommended that variables be declared as late as possible, at the first point of use. 
That turns out to be bad advice for JavaScript because it lacks block scope. 
So instead, it is best to declare all of the variables used in a function at the top of the function body.
