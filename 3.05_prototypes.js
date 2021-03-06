// Every object is linked to a prototype object from which it can inherit properties. 
// All objects created from object literals are linked to Object.prototype, an object that comes standard with JavaScript.
// When you make a new object, you can select the object that should be its prototype.
// The mechanism that JavaScript provides to do this is messy and complex, but it can be significantly simplified. 


// We will add a create method to the Object function. 
// The create method creates a new object that uses an old object as its prototype. 
// There will be much more about functions in the next chapter.

// if (typeof Object.create !== 'function') {
// 	    Object.create = function (o) {
// 			var F = function () {};
// 			F.prototype = o;
// 			return new F();
//  	};
// }
// var another_stooge = Object.create(stooge);

// The prototype link has no effect on updating. When we make changes to an object, the object’s prototype is not touched:
// 		another_stooge['first-name'] = 'Harry';
// 		another_stooge['middle-name'] = 'Moses';
// 		another_stooge.nickname = 'Moe';


// The prototype link is used only in retrieval. 
// If we try to retrieve a property value from an object, and if the object lacks the property name, 
// then JavaScript attempts to retrieve the property value from the prototype object. 
// And if that object is lacking the property, then it goes to its prototype, 
// and so on until the process finally bottoms out with Object.prototype. 

// If the desired property exists nowhere in the prototype chain, then the result is the undefined value. 
// This is called delegation.

// The prototype relationship is a dynamic relationship. 
// If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype:
// 		stooge.profession = 'actor';
// 		another_stooge.profession // 'actor'










