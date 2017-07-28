Every array has a length property. 

Unlike most other languages, JavaScript’s array length is not an upper bound. 
If you store an element with a subscript that is greater than or equal to the current length, the length will increase to contain the new element.
There is no array bounds error.

The length property is the largest integer property name in the array plus one. 
This is not necessarily the number of properties in the array:
	var myArray = [];
	myArray.length // 0
	myArray[1000000] = true;
	myArray.length // 1000001
	// myArray contains one property.

The [] postfix subscript operator converts its expression to a string using the expression’s toString method if it has one. 
That string will be used as the property name. 
If the string looks like a positive integer that is greater than or equal to the array’s current length and 
	is less than 4,294,967,295, then the length of the array is set to the new subscript plus one.

The length can be set explicitly. 
Making the length larger does not allocate more space for the array. 
Making the length smaller will cause all properties with a subscript that is greater than or equal to the new length to be deleted:
	numbers.length = 3;
	// numbers is ['zero', 'one', 'two']
A new element can be appended to the end of an array by assigning to the array’s current length:
	numbers[numbers.length] = 'shi';
	// numbers is ['zero', 'one', 'two', 'shi']
It is sometimes more convenient to use the push method to accomplish the same thing:
	numbers.push('go');
	// numbers is ['zero', 'one', 'two', 'shi', 'go']
