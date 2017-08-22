The worst of all of JavaScript’s bad features is its dependence on global variables. 
A global variable is a variable that is visible in every scope. 
Global variables can be a convenience in very small programs, but they quickly become unwieldy as programs get larger. 
Because a global variable can be changed by any part of the program at any time, they can significantly complicate the behavior of the program. 
Use of global variables degrades the reliability of the programs that use them.


Global variables make it harder to run independent subprograms in the same program.
If the subprograms happen to have global variables that share the same names, then 
they will interfere with each other and likely fail, usually in difficult to diagnose ways.


Lots of languages have global variables. 
For example, Java’s public static members are global variables. 
The problem with JavaScript isn’t just that it allows them, it requires them. 
JavaScript does not have a linker. 
All compilation units are loaded into a common global object.


There are three ways to define global variables. 
	The first is to place a var statement outside of any function:
		var foo = value;
	The second is to add a property directly to the global object. 
		The global object is the container of all global variables. 
		In web browsers, the global object goes by the name window:
			window.foo = value
	The third is to use a variable without declaring it. 
		This is called implied global:
			foo = value;

This was intended as a convenience to beginners by making it unnecessary to declare variables before using them. 
Unfortunately, forgetting to declare a variable is a very common mistake. 
JavaScript’s policy of making forgotten variables global creates bugs that can be very difficult to find.
