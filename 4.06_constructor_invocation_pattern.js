JavaScript is a prototypal inheritance language. 
That means that objects can inherit properties directly from other objects. 

The language is class-free.
This is a radical departure from the current fashion. 
Most languages today are classical.

Prototypal inheritance is powerfully expressive, but is not widely understood.
JavaScript itself is not confident in its prototypal nature, so it offers an object-making syntax that is 
	reminiscent of the classical languages. 

Few classical programmers found prototypal inheritance to be acceptable, 
	and classically inspired syntax obscures the language’s true prototypal nature. 

It is the worst of both worlds.
If a function is invoked with the new prefix, 
	then a new object will be created with a hidden link to the value of the function’s prototype member, 
	and this will be bound to that new object.

The new prefix also changes the behavior of the return statement. 
We will see more about that next.

// Create a constructor function called Quo.
// It makes an object with a status property.
	var Quo = function (string) {
		this.status = string;
	};

// Give all instances of Quo a public method called get_status.
	Quo.prototype.get_status = function ( ) {
		return this.status;
	};

// Make an instance of Quo.
	var myQuo = new Quo("confused");
	document.writeln(myQuo.get_status( )); // confused

	
Functions that are intended to be used with the "new" prefix are called constructors. 
By convention, they are kept in variables with a capitalized name. 

If a constructor is called without the "new" prefix, very bad things can happen without a compile-time or runtime warning, 
	so the capitalization convention is really important.

Use of this style of constructor functions is not recommended. 
We will see better alternatives in the next chapter