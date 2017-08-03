Many of JavaScript’s features were borrowed from other languages. 
The syntax came from Java, functions came from Scheme, and prototypal inheritance came from Self.
JavaScript’s Regular Expression feature was borrowed from Perl.

A regular expression is the specification of the syntax of a simple language. 
Regular expressions are used with methods to search, replace, and extract information from strings. 
The methods that work with regular expressions are:
	regexp.exec
	regexp.test
	string.match
	string.replace
	string.search
	string.split

These will all be described in Chapter 8. 
Regular expressions usually have a significant performance advantage over equivalent string operations in JavaScript.

Regular expressions came from the mathematical study of formal languages. 
Ken Thompson adapted Stephen Kleene’s theoretical work on type-3 languages into a practical pattern 
matcher that could be embedded in tools such as text editors and programming languages.

The syntax of regular expressions in JavaScript conforms closely to the original formulations from Bell Labs, with 
some reinterpretation and extension adopted from Perl. 
The rules for writing regular expressions can be surprisingly complex because they interpret characters in some positions as operators, and 
in slightly different positions as literals. 

Worse than being hard to write, this makes regular expressions hard to read and dangerous to modify. 
It is necessary to have a fairly complete understanding of the full complexity of regular expressions to correctly read them.

To mitigate this, I have simplified the rules a little. 
As presented here, regular expressions will be slightly less terse, but they will also be slightly easier to use correctly.
And that is a good thing because regular expressions can be very difficult to maintain and debug.

Today’s regular expressions are not strictly regular, but they can be very useful. 
Regular expressions tend to be extremely terse, even cryptic. 
They are easy to use in their simplest form, but they can quickly become bewildering. 
JavaScript’s regular expressions are difficult to read in part because they do not allow comments or whitespace.

All of the parts of a regular expression are pushed tightly together, making them almost indecipherable. 
This is a particular concern when they are used in security applications for scanning and validation. 
If you cannot read and understand a regular expression, how can you have confidence that it will work correctly for all inputs?
Yet, despite their obvious drawbacks, regular expressions are widely used.
