Invoking a function suspends the execution of the current function, passing control and parameters to the new function. 
In addition to the declared parameters, every function receives two additional parameters: 
		this - The this parameter is very important in object oriented programming, and its value is determined by the invocation pattern.
		and arguments.

There are four patterns of invocation in JavaScript: 
		the method invocation pattern, 
		the function invocation pattern, 
		the constructor invocation pattern, 
		and the apply invocation pattern. 

The patterns differ in how the bonus parameter this is initialized.

The invocation operator is a pair of parentheses that follow any expression that produces a function value. 
The parentheses can contain zero or more expressions, separated by commas. 

Each expression produces one argument value. 
Each of the argument values will be assigned to the function’s parameter names. 

There is no runtime error when the number of arguments and the number of parameters do not match. 
If there are too many argument values, the extra argument values will be ignored. 
If there are too few argument values, the undefined value will be substituted for the missing values. 

There is no type checking on the argument values: any type of value can be passed to any parameter

