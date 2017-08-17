object.hasOwnProperty(name)

The hasOwnProperty method returns true if the object contains a property having the name.
The prototype chain is not examined. 
This method is useless if the name is hasOwnProperty:
	var a = {member: true};
	var b = Object.create(a); // from Chapter 3
	var t = a.hasOwnProperty('member'); // t is true
	var u = b.hasOwnProperty('member'); // u is false
	var v = b.member; // v is true
