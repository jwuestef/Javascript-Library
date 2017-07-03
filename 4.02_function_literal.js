Function objects are created with function literals:
		// Create a variable called add and store a function
		// in it that adds two numbers.
		var add = function (a, b) {
			return a + b;
		};



A function literal has four parts:

	The first part is the reserved word function.

	The optional second part is the function’s name. 
		The function can use its name to call itself recursively. 
		The name can also be used by debuggers and development tools to identify the function. 
		If a function is not given a name, as shown in the previous example, it is said to be anonymous.

	The third part is the set of parameters of the function, wrapped in parentheses.
		Within the parentheses is a set of zero or more parameter names, separated by commas.
		These names will be defined as variables in the function. 
		Unlike ordinary variables, instead of being initialized to undefined, 
		they will be initialized to the arguments supplied when the function is invoked.

	The fourth part is a set of statements wrapped in curly braces. 
		These statements are the body of the function. 
		They are executed when the function is invoked.



A function literal can appear anywhere that an expression can appear. 
Functions can be defined inside of other functions. 
An inner function, of course, has access to its own parameters and variables. 
An inner function also enjoys access to the parameters and variables of the functions it is nested within. 


The function object created by a function literal contains a link to that outer context. 
This is called "closure". 
This is the source of enormous expressive power.

