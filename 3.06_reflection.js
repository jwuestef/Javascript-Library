// It is easy to inspect an object to determine what properties it has by attempting to
// retrieve the properties and examining the values obtained. 

// The typeof operator can be very helpful in determining the type of a property:
// 		typeof flight.number      // 'number'
// 		typeof flight.status      // 'string'
// 		typeof flight.arrival      // 'object'
// 		typeof flight.manifest      // 'undefined'

// Some care must be taken because any property on the prototype chain can produce a value:
// 		typeof flight.toString      // 'function'
// 		typeof flight.constructor      // 'function'

// There are two approaches to dealing with these undesired properties. 

// The first is to have your program look for and reject function values. 
// Generally, when you are reflecting, you are interested in data, and so you should be aware that some values could be functions.
// The other approach is to use the hasOwnProperty method, which returns true if the object has a particular property. 
// The hasOwnProperty method does not look at the prototype chain:
// 		flight.hasOwnProperty('number')      // true
// 		flight.hasOwnProperty('constructor')      // false

