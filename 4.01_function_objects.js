Functions in JavaScript are objects. 
		Objects are collections of name/value pairs having a hidden link to a prototype object. 
		Objects produced from object literals are linked to Object.prototype. 

Function objects are linked to Function.prototype (which is itself linked to Object.prototype). 
Every function is also created with two additional hidden properties: 
		the function’s context
		the code that implements the function’s behavior.

Every function object is also created with a prototype property. 
Its value is an object with a constructor property whose value is the function. 
This is distinct from the hidden link to Function.prototype. 
The meaning of this convoluted construction will be revealed in the next chapter.

Since functions are objects, they can be used like any other value. 
		Functions can be stored in variables, objects, and arrays. 
		Functions can be passed as arguments to other functions, and functions can be returned from functions. 
		Also, since functions are objects, functions can have methods.
The thing that is special about functions is that they can be invoked
