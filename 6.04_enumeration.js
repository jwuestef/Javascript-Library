Since JavaScript’s arrays are really objects, the "for in" statement can be used to iterate over all of the properties of an array. 
Unfortunately, "for in" makes no guarantee about the order of the properties, and most array applications expect the elements to be produced in numerical order. 
Also, there is still the problem with unexpected properties being dredged up from the prototype chain.

Fortunately, the conventional "for" statement avoids these problems. 
JavaScript’s "for" statement is similar to that in most C-like languages. 
It is controlled by three clauses—the first initializes the loop, the second is the while condition, and the third does the increment:
	var i;
	for (i = 0; i < myArray.length; i += 1) {
		document.writeln(myArray[i]);
	}