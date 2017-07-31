A common error in JavaScript programs is to use an object when an array is required or an array when an object is required. 
The rule is simple: 
	when the property names are small sequential integers, you should use an array. 
	Otherwise, use an object.

JavaScript itself is confused about the difference between arrays and objects. 
The "typeof" operator reports that the type of an array is 'object', which isn’t very helpful.

JavaScript does not have a good mechanism for distinguishing between arrays and objects. 
We can work around that deficiency by defining our own is_array function:
	var is_array = function (value) {
		return value && typeof value === 'object' && value.constructor === Array;
	};

Unfortunately, it fails to identify arrays that were constructed in a different window or frame. 
If we want to accurately detect those foreign arrays, we have to work a little harder:
	var is_array = function (value) {
		return value && typeof value === 'object' && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
	};

	First, we ask if the value is truthy. 
		We do this to reject null and other falsy values.
	Second, we ask if the typeof value is 'object'. 
		This will be true for objects, arrays, and (weirdly) null. 
	Third, we ask if the value has a length property that is a number.
		This will always be true for arrays, but usually not for objects. 
	Fourth, we ask if the value contains a splice method. 
		This again will be true for all arrays. 
	Finally, we ask if the length property is enumerable (will length be produced by a for in loop?).
		That will be false for all arrays. 
		This is the most reliable test for arrayness that I have found. 

It is unfortunate that it is so complicated.
Having such a test, it is possible to write functions that do one thing when passed a single value and lots of things when passed an array of values.
