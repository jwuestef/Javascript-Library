The good news about scope is that inner functions get access to the parameters and
variables of the functions they are defined within (with the exception of this and arguments). 
This is a very good thing.

Our "getElementsByAttribute" function worked because it declared a results variable, and 
the inner function that it passed to "walk_the_DOM" also had access to the results variable.
A more interesting case is when the inner function has a longer lifetime than its outer function.

Earlier, we made a "myObject" that had a value and an increment method. 
Suppose we wanted to protect the value from unauthorized changes.
Instead of initializing "myObject" with an object literal, we will initialize "myObject" by calling a function that returns an object literal. 
That function defines a value variable.
That variable is always available to the increment and "getValue" methods, but 
the function’s scope keeps it hidden from the rest of the program:
	var myObject = function ( ) {
		var value = 0;
		return {
			increment: function (inc) {
				value += typeof inc === 'number' ? inc : 1;
			},
			getValue: function ( ) {
				return value;
			}
		};
	}( );


We are not assigning a function to "myObject". 
We are assigning the result of invoking that function. 

Notice the ( ) on the last line. 
The function returns an object containing two methods, and those methods continue to enjoy the privilege of access to the value variable.


The Quo constructor from earlier in this chapter produced an object with a status property and a get_status method. 
But that doesn’t seem very interesting. 
Why would you call a getter method on a property you could access directly? 
It would be more useful if the status property were private. 
So, let’s define a different kind of quo function to do that:
	// Create a maker function called quo. It makes an
	// object with a get_status method and a private
	// status property.
	var quo = function (status) {
		return {
			get_status: function ( ) {
				return status;
			}
		};
	};
	// Make an instance of quo.
	var myQuo = quo("amazed");
	document.writeln(myQuo.get_status( ));

This quo function is designed to be used without the new prefix, so the name is not capitalized. 
When we call quo, it returns a new object containing a "get_status" method. 
A reference to that object is stored in "myQuo". 
The "get_status" method still has privileged access to quo’s status property even though quo has already returned.
"get_status" does not have access to a copy of the parameter; it has access to the parameter itself. 
This is possible because the function has access to the context in which it was created. 
This is called closure.

Let’s look at a more useful example:
	// Define a function that sets a DOM node's color
	// to yellow and then fades it to white.
	var fade = function (node) {
		var level = 1;
		var step = function ( ) {
			var hex = level.toString(16);
			node.style.backgroundColor = '#FFFF' + hex + hex;
			if (level < 15) {
				level += 1;
				setTimeout(step, 100);
			}
		};
		setTimeout(step, 100);
	};
	fade(document.body);
We call fade, passing it "document.body" (the node created by the HTML <body> tag).
"fade" sets level to 1. 
It defines a step function. 
It calls setTimeout, passing it the step function and a time (100 milliseconds). 
It then returns — fade has finished.
Suddenly, about a 10th of a second later, the step function gets invoked. 
It makes a base 16 character from fade’s level. 
It then modifies the background color of fade’s node. 
It then looks at fade’s level. 
If it hasn’t gotten to white yet, it then increments fade’s level and uses setTimeout to schedule itself to run again.
Suddenly, the step function gets invoked again. 
But this time, fade’s level is 2. 
fade returned a while ago, but its variables continue to live as long as they are needed by one or more of fade’s inner functions.

It is important to understand that the inner function has access to the actual variables
of the outer functions and not copies in order to avoid the following problem:
	// BAD EXAMPLE
	// Make a function that assigns event handler functions to an array of nodes the wrong way.
	// When you click on a node, an alert box is supposed to display the ordinal of the node.
	// But it always displays the number of nodes instead.
	var add_the_handlers = function (nodes) {
		var i;
		for (i = 0; i < nodes.length; i += 1) {
			nodes[i].onclick = function (e) {
				alert(i);
			};
		}
	};
	// END BAD EXAMPLE

The add_the_handlers function was intended to give each handler a unique number (i). 
It fails because the handler functions are bound to the variable i, not the value of the variable i at the time the function was made:
	// BETTER EXAMPLE
	// Make a function that assigns event handler functions to an array of nodes the right way.
	// When you click on a node, an alert box will display the ordinal of the node.
	var add_the_handlers = function (nodes) {
		var i;
		for (i = 0; i < nodes.length; i += 1) {
			nodes[i].onclick = function (i) {
				return function (e) {
					alert(e);
				};
			}(i);
		}
	};
Now, instead of assigning a function to onclick, we define a function and immediately invoke it, passing in i. 
That function will return an event handler function that is bound to the value of i that was passed in, not to the i defined in add_the_ handlers. 
That returned function is assigned to onclick.