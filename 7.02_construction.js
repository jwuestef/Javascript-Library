There are two ways to make a RegExp object. 
The preferred way, as we saw in them examples, is to use a regular expression literal.
Regular expression literals are enclosed in slashes. 
This can be a little tricky because slash is also used as the division operator and in comments.

There are three flags that can be set on a RegExp. 
They are indicated by the letters g, i, and m, as listed in Table 7-1. 
The flags are appended directly to the end of the RegExp literal:
	// Make a regular expression object that matches a JavaScript string.
	var my_regexp = /"(?:\\.|[^\\\"])*"/g;
Table 7-1. Flags for regular expressions
	Flag    Meaning
	 g       Global (match multiple times; the precise meaning of this varies with the method)
	 i       Insensitive (ignore character case)
	 m       Multiline (^ and $ can match line-ending characters)

The other way to make a regular expression is to use the RegExp constructor. 
The constructor takes a string and compiles it into a RegExp object. 
Some care must be taken in building the string because backslashes have a somewhat different meaning in regular expressions than in string literals. 
It is usually necessary to double the backslashes and escape the quotes:
	// Make a regular expression object that matches a JavaScript string.
	var my_regexp = new RegExp("\"(?:\\.|[^\\\\\\\"])*\"", 'g');

The second parameter is a string specifying the flags. 
The RegExp constructor is useful when a regular expression must be generated at runtime using material that is not available to the programmer.
RegExp objects contain the properties listed in Table 7-2.
Table 7-2. Properties of RegExp objects
	Property 	  Use
	 global      true if the g flag was used.
   ignoreCase    true if the i flag was used.
   lastIndex     The index at which to start the next exec match. Initially it is zero.
   multiline     true if the m flag was used.
    source       The source text of the regular expression.

RegExp objects made by regular expression literals share a single instance:
	function make_a_matcher( ) {
		return /a/gi;
	}
	var x = make_a_matcher( );
	var y = make_a_matcher( );

	// Beware: x and y are the same object!
	x.lastIndex = 10;
	document.writeln(y.lastIndex); // 10

