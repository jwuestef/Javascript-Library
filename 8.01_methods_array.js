array.concat(item…)
The concat method produces a new array containing a shallow copy of this array with the items appended to it. 
If an item is an array, then each of its elements is appended individually.
Also see array.push(item...) later in this chapter.
	var a = ['a', 'b', 'c'];
	var b = ['x', 'y', 'z'];
	var c = a.concat(b, true);
	// c is ['a', 'b', 'c', 'x', 'y', 'z', true]



array.join(separator)
The join method makes a string from an array. 
It does this by making a string of each of the array’s elements, and then concatenating them all together with a separator between them. 
The default separator is ','. 
To join without separation, use an empty string as the separator.
If you are assembling a string from a large number of pieces, it is usually faster to put the pieces into an array and 
join them than it is to concatenate the pieces with the + operator:
	var a = ['a', 'b', 'c'];
	a.push('d');
	var c = a.join(''); // c is 'abcd';



array.pop( )
The pop and push methods make an array work like a stack. 
The pop method removes and returns the last element in this array. 
If the array is empty, it returns undefined.
	var a = ['a', 'b', 'c'];
	var c = a.pop( ); // a is ['a', 'b'] & c is 'c'
pop can be implemented like this:
	Array.method('pop', function ( ) {
		return this.splice(this.length - 1, 1)[0];
	});



array.push(item…)
The push method appends items to the end of an array. Unlike the concat method, it modifies
the array and appends array items whole. It returns the new length of the array:
	var a = ['a', 'b', 'c'];
	var b = ['x', 'y', 'z'];
	var c = a.push(b, true);
	// a is ['a', 'b', 'c', ['x', 'y', 'z'], true]
	// c is 5;
push can be implemented like this:
	Array.method('push', function ( ) {
		this.splice.apply(
		this,
		[this.length, 0].
		concat(Array.prototype.slice.apply(arguments)));
		return this.length;
	});




array.reverse( )
The reverse method modifies the array by reversing the order of the elements. 
It returns the array:
	var a = ['a', 'b', 'c'];
	var b = a.reverse( );
	// both a and b are ['c', 'b', 'a']



array.shift( )
The shift method removes the first element from an array and returns it. 
If the array is empty, it returns undefined. shift is usually much slower than pop:
	var a = ['a', 'b', 'c'];
	var c = a.shift( ); // a is ['b', 'c'] & c is 'a'
shift can be implemented like this:
	Array.method('shift', function ( ) {
		return this.splice(0, 1)[0];
	});



array.slice(start,end)
The slice method makes a shallow copy of a portion of an array. 
The first element copied will be array[start]. It will stop before copying array[end]. 
The end parameter is optional, and the default is array.length. 
If either parameter is negative, array.length will be added to them in an attempt to make them nonnegative. 
If start is greater than or equal to array.length, the result will be a new empty array. 
Do not confuse slice with splice. 
Also see string.slice later in this chapter.
	var a = ['a', 'b', 'c'];
	var b = a.slice(0, 1); // b is ['a']
	var c = a.slice(1); // c is ['b', 'c']
	var d = a.slice(1, 2); // d is ['b']



array.sort(comparefn)
The sort method sorts the contents of an array in place. 
It sorts arrays of numbers incorrectly:
	var n = [4, 8, 15, 16, 23, 42];
	n.sort( );
	// n is [15, 16, 23, 4, 42, 8]
JavaScript’s default comparison function assumes that the elements to be sorted are strings.
It isn’t clever enough to test the type of the elements before comparing them, so it converts the numbers to strings as it 
	compares them, ensuring a shockingly incorrect result.
Fortunately, you may replace the comparison function with your own. 
Your comparison function should take two parameters and return 0 if the two parameters are equal, 
	a negative number if the first parameter should come first, and a positive number if the second parameter should come first. 
	(Old-timers might be reminded of the FORTRAN II arithmetic IF statement.)
	n.sort(function (a, b) {
		return a - b;
	});
	// n is [4, 8, 15, 16, 23, 42];
That function will sort numbers, but it doesn’t sort strings. 
If we want to be able to sort any array of simple values, we must work harder:
var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
	m.sort(function (a, b) {
		if (a === b) {
			return 0;
		}
		if (typeof a === typeof b) {
			return a < b ? -1 : 1;
		}
		return typeof a < typeof b ? -1 : 1;
	});
	// m is [4, 8, 15, 16, 23, 42, 'a', 'aa', 'bb']
If case is not significant, your comparison function should convert the operands to lowercase before comparing them. 
Also see string.localeCompare later in this chapter.
With a smarter comparison function, we can sort an array of objects. 
To make things easier for the general case, we will write a function that will make comparison functions:
	// Function by takes a member name string and returns a comparison function that can be used to sort an array of objects that contain that member.
	var by = function (name) {
		return function (o, p) {
			var a, b;
			if (typeof o === 'object' && typeof p === 'object' && o && p) {
				a = o[name];
				b = p[name];
				if (a === b) {
					return 0;
				}
				if (typeof a === typeof b) {
					return a < b ? -1 : 1;
				}
				return typeof a < typeof b ? -1 : 1;
			} else {
				throw {
					name: 'Error',
					message: 'Expected an object when sorting by ' + name;
				};
			}
		};
	};
	var s = [
		{first: 'Joe', last: 'Besser'},
		{first: 'Moe', last: 'Howard'},
		{first: 'Joe', last: 'DeRita'},
		{first: 'Shemp', last: 'Howard'},
		{first: 'Larry', last: 'Fine'},
		{first: 'Curly', last: 'Howard'}
	];
	s.sort(by('first')); // s is [
	//		{first: 'Curly', last: 'Howard'},
	//		{first: 'Joe', last: 'DeRita'},
	//		{first: 'Joe', last: 'Besser'},
	//		{first: 'Larry', last: 'Fine'},
	//		{first: 'Moe', last: 'Howard'},
	//		{first: 'Shemp', last: 'Howard'}
	// ]
The sort method is not stable, so:
	s.sort(by('first')).sort(by('last'));
is not guaranteed to produce the correct sequence. 
If you want to sort on multiple keys, you again need to do more work. 
We can modify by to take a second parameter, another compare method that will be called to break ties when the major key produces a match:
	// Function by takes a member name string and an optional minor comparison function and 
	// returns a comparison function that can be used to sort an array of objects that contain that member. 
	// The minor comparison function is used to break ties when the o[name] and p[name] are equal.
	var by = function (name, minor) {
		return function (o, p) {
			var a, b;
			if (o && p && typeof o === 'object' && typeof p === 'object') {
				a = o[name];
				b = p[name];
				if (a === b) {
					return typeof minor === 'function' ? minor(o, p) : 0;
				}
				if (typeof a === typeof b) {
					return a < b ? -1 : 1;
				}
				return typeof a < typeof b ? -1 : 1;
			} else {
				throw {
					name: 'Error',
					message: 'Expected an object when sorting by ' + name;
				};
			}
		};
	};
	s.sort(by('last', by('first'))); // s is [
	// {first: 'Joe', last: 'Besser'},
	// {first: 'Joe', last: 'DeRita'},
	// {first: 'Larry', last: 'Fine'},
	// {first: 'Curly', last: 'Howard'},
	// {first: 'Moe', last: 'Howard'},
	// {first: 'Shemp', last: 'Howard'}
	// ]



array.splice(start, deleteCount, item…)
The splice method removes elements from an array, replacing them with new items. 
The start parameter is the number of a position within the array. 
The deleteCount parameter is the number of elements to delete starting from that position. 
If there are additional parameters, those items will be inserted at the position. 
It returns an array containing the deleted elements.
The most popular use of splice is to delete elements from an array.
Do not confuse splicewith slice:
	var a = ['a', 'b', 'c'];
	var r = a.splice(1, 1, 'ache', 'bug');
	// a is ['a', 'ache', 'bug', 'c']
	// r is ['b']
splice can be implemented like this:
	Array.method('splice', function (start, deleteCount) {
		var max = Math.max,
		min = Math.min,
		delta,
		element,
		insertCount = max(arguments.length - 2, 0),
		k = 0,
		len = this.length,
		new_len,
		result = [],
		shift_count;
		start = start || 0;

		if (start < 0) {
			start += len;
		}
		start = max(min(start, len), 0);
		deleteCount = max(min(typeof deleteCount === 'number' ?
		deleteCount : len, len - start), 0);
		delta = insertCount - deleteCount;
		new_len = len + delta;

		while (k < deleteCount) {
			element = this[start + k];
			if (element !== undefined) {
				result[k] = element;
			}
			k += 1;
		}

		shift_count = len - start - deleteCount;
		if (delta < 0) {
			k = start + insertCount;
			while (shift_count) {
				this[k] = this[k - delta];
				k += 1;
				shift_count -= 1;
			}
			this.length = new_len;
		} else if (delta > 0) {
			k = 1;
			while (shift_count) {
				this[new_len - k] = this[len - k];
				k += 1;
				shift_count -= 1;
			}
		}
		for (k = 0; k < insertCount; k += 1) {
			this[start + k] = arguments[k + 2];
		}
		return result;
	});



array.unshift(item…)
The unshift method is like the push method except that it shoves the items onto the front of this array instead of at the end. 
It returns the array’s new length:
	var a = ['a', 'b', 'c'];
	var r = a.unshift('?', '@');
	// a is ['?', '@', 'a', 'b', 'c']
	// r is 5
unshift can be implemented like this:
	Array.method('unshift', function ( ) {
		this.splice.apply(this,
		[0, 0].concat(Array.prototype.slice.apply(arguments)));
		return this.length;
	});
