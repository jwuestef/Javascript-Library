JavaScript arrays usually are not initialized. 
If you ask for a new array with [], it will be empty. 
If you access a missing element, you will get the undefined value. 
If you are aware of that, or if you will naturally set every element before you attempt to retrieve it, then all is well. 
But if you are implementing algorithms that assume that every element starts with a known value (such as 0), then you must prep the array yourself.

JavaScript should have provided some form of an Array.dim method to do this, but we can easily correct this oversight:
	Array.dim = function (dimension, initial) {
		var a = [], i;
		for (i = 0; i < dimension; i += 1) {
			a[i] = initial;
		}
		return a;
	};
	// Make an array containing 10 zeros.
	var myArray = Array.dim(10, 0);

JavaScript does not have arrays of more than one dimension, but like most C languages, it can have arrays of arrays:
	var matrix = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8]
	];
	matrix[2][1] // 7

To make a two-dimensional array or an array of arrays, you must build the arrays yourself:
	for (i = 0; i < n; i += 1) {
		my_array[i] = [];
	}
	// Note: Array.dim(n, []) will not work here.
	// Each element would get a reference to the same array, which would be very bad.

The cells of an empty matrix will initially have the value undefined. 
If you want them to have a different initial value, you must explicitly set them. 
Again, JavaScript should have provided better support for matrixes. 
We can correct that, too:
	Array.matrix = function (m, n, initial) {
		var a, i, j, mat = [];
		for (i = 0; i < m; i += 1) {
			a = [];
			for (j = 0; j < n; j += 1) {
				a[j] = initial;
			}
			mat[i] = a;
		}
		return mat;
	};

	// Make a 4 * 4 matrix filled with zeros.
	var myMatrix = Array.matrix(4, 4, 0);
	document.writeln(myMatrix[3][3]); // 0

	// Method to make an identity matrix.
	Array.identity = function (n) {
		var i, mat = Array.matrix(n, n, 0);
		for (i = 0; i < n; i += 1) {
			mat[i][i] = 1;
		}
		return mat;
	};
	myMatrix = Array.identity(4);
	document.writeln(myMatrix[3][3]); // 1