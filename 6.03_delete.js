Since JavaScript’s arrays are really objects, the delete operator can be used to remove elements from an array:
	delete numbers[2];
	// numbers is ['zero', 'one', undefined, 'shi', 'go']

Unfortunately, that leaves a hole in the array. 
This is because the elements to the right of the deleted element retain their original names. 
What you usually want is to decrement the names of each of the elements to the right.

Fortunately, JavaScript arrays have a splice method. 
It can do surgery on an array, deleting some number of elements and replacing them with other elements. 
	The first argument is an ordinal in the array. 
	The second argument is the number of elements to delete. 
	Any additional arguments get inserted into the array at that point:
		numbers.splice(2, 1);
		// numbers is ['zero', 'one', 'shi', 'go']

The property whose value is 'shi' has its key changed from '4' to '3'. 
Because every property after the deleted property must be removed and reinserted with a new key, this might not go quickly for large arrays.