
// The "for in" statement can loop over all of the property names in an object. 
// The enumeration will include all of the properties — including functions and prototype properties that you might not be interested in,
// so it is necessary to filter out the values you don’t want. 

// The most common filters are the "hasOwnProperty" method and using "typeof" to exclude functions:
// var name;
// for (name in another_stooge) {
// 		if (typeof another_stooge[name] !== 'function') {
// 			document.writeln(name + ': ' + another_stooge[name]);
// 		}
// }


// There is no guarantee on the order of the names, so be prepared for the names to appear in any order. 
// If you want to assure that the properties appear in a particular order, 
// it is best to avoid the "for in" statement entirely, and instead make an array containing the names of the properties in the correct order:
// var i;
// var properties = [
// 		'first-name',
// 		'middle-name',
// 		'last-name',
// 		'profession'
// ];
// for (i = 0; i < properties.length; i += 1) {
// 		document.writeln( properties[i] + ': ' + another_stooge[properties[i]] );
// }


// By using "for" instead of "for in", we were able to get the properties we wanted, 
// without worrying about what might be dredged up from the prototype chain, 
// and we got them in the correct order.


