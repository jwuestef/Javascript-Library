JavaScript’s syntax comes from C. 
In all other C-like languages, a block (a set of statements wrapped in curly braces) creates a scope. 
Variables declared in a block are not visible outside of the block. 

JavaScript uses the block syntax, but does not provide block scope: 
	a variable declared in a block is visible everywhere in the function containing the block. 
This can be surprising to programmers with experience in other languages.


In most languages, it is generally best to declare variables at the site of first use. 
That turns out to be a bad practice in JavaScript because it does not have block scope. 

It is better to declare all variables at the top of each function.
