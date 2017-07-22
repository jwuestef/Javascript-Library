JavaScript is conflicted about its prototypal nature. 
Its prototype mechanism is obscured by some complicated syntactic business that looks vaguely classical.
Instead of having objects inherit directly from other objects, an unnecessary level of indirection is inserted such that objects are produced by constructor functions.
When a function object is created, the Function constructor that produces the function object runs some code like this:
	this.prototype = {constructor: this};


The new function object is given a prototype property whose value is an object containing a constructor property whose value is the new function object. 
The prototype object is the place where inherited traits are to be deposited. 
Every function gets a prototype object because the language does not provide a way of determining which functions are intended to be used as constructors. 
The constructor property is not useful. 
It is the prototype object that is important.


When a function is invoked with the constructor invocation pattern using the new prefix, this modifies the way in which the function is executed. 
If the new operator were a method instead of an operator, it could have been implemented like this:
	Function.method('new', function ( ) {
		// Create a new object that inherits from the
		// constructor's prototype.
		 var that = Object.create(this.prototype);
		// Invoke the constructor, binding –this- to
		// the new object.
		 var other = this.apply(that, arguments);
		// If its return value isn't an object,
		// substitute the new object.
		return (typeof other === 'object' && other) || that;
	});

We can define a constructor and augment its prototype:
	var Mammal = function (name) {
		this.name = name;
	};
	Mammal.prototype.get_name = function ( ) {
		return this.name;
	};
	Mammal.prototype.says = function ( ) {
		return this.saying || '';
	};

Now, we can make an instance:
	var myMammal = new Mammal('Herb the Mammal');
	var name = myMammal.get_name( ); // 'Herb the Mammal'

We can make another pseudoclass that inherits from Mammal by defining its constructor function and replacing its prototype with an instance of Mammal:
	var Cat = function (name) {
		this.name = name;
		this.saying = 'meow';
	};
	// Replace Cat.prototype with a new instance of Mammal
	Cat.prototype = new Mammal( );
	// Augment the new prototype with
	// purr and get_name methods.
	Cat.prototype.purr = function (n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	};
	Cat.prototype.get_name = function ( ) {
		return this.says( ) + ' ' + this.name + ' ' + this.says( );
	};
	var myCat = new Cat('Henrietta');
	var says = myCat.says( ); // 'meow'
	var purr = myCat.purr(5); // 'r-r-r-r-r'
	var name = myCat.get_name( );
	// 'meow Henrietta meow'


The pseudoclassical pattern was intended to look sort of object-oriented, but it is looking quite alien. 
We can hide some of the ugliness by using the method method and defining an inherits method:
	Function.method('inherits', function (Parent) {
		this.prototype = new Parent( );
		return this;
	});

Our inherits and method methods return "this", allowing us to program in a cascade style. 
We can now make our Cat with one statement.
	var Cat = function (name) {
		this.name = name;
		this.saying = 'meow';
	}
	.inherits(Mammal)
	.method('purr', function (n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	})
	.method('get_name', function ( ) {
		return this.says( ) + ' ' + this.name + ' ' + this.says( );
	});


By hiding the prototype jazz, it now looks a bit less alien. 
But have we really improved anything? 
	We now have constructor functions that act like classes, but at the edges, there may be surprising behavior. 
	There is no privacy; all properties are public. 
	There is no access to super methods.
	Even worse, there is a serious hazard with the use of constructor functions. 
	If you forget to include the "new" prefix when calling a constructor function, then this will not be bound to a new object. 
	Sadly, this will be bound to the global object, so instead of augmenting your new object, you will be clobbering global variables. 
	That is really bad. 
	There is no compile warning, and there is no runtime warning.
	This is a serious design error in the language. 
	To mitigate this problem, there is a convention that:
		all constructor functions are named with an initial capital, and that nothing else is spelled with an initial capital. 
	This gives us a prayer that visual inspection can find a missing "new". 
	A much better alternative is to not use "new" at all.


The pseudoclassical form can provide comfort to programmers who are unfamiliar with JavaScript, but it also hides the true nature of the language. 
The classically inspired notation can induce programmers to compose hierarchies that are unnecessarily deep and complicated. 
Much of the complexity of class hierarchies is motivated by the constraints of static type checking. 
JavaScript is completely free of those constraints. 

In classical languages, class inheritance is the only form of code reuse.
JavaScript has more and better options.
