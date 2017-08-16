number.toExponential(fractionDigits)
The toExponential method converts this number to a string in the exponential form. 
The optional fractionDigits parameter controls the number of decimal places. 
It should be between 0 and 20:
	document.writeln(Math.PI.toExponential(0));
	document.writeln(Math.PI.toExponential(2));
	document.writeln(Math.PI.toExponential(7));
	document.writeln(Math.PI.toExponential(16));
	document.writeln(Math.PI.toExponential( ));
	// Produces
	3e+0
	3.14e+0
	3.1415927e+0
	3.1415926535897930e+0
	3.141592653589793e+0



number.toFixed(fractionDigits)
The toFixed method converts this number to a string in the decimal form. 
The optional fractionDigits parameter controls the number of decimal places. 
It should be between 0 and 20. 
The default is 0:
	document.writeln(Math.PI.toFixed(0));
	document.writeln(Math.PI.toFixed(2));
	document.writeln(Math.PI.toFixed(7));
	document.writeln(Math.PI.toFixed(16));
	document.writeln(Math.PI.toFixed( ));
	// Produces
	3
	3.14
	3.1415927
	3.1415926535897930
	3



number.toPrecision(precision)
The toPrecision method converts this number to a string in the decimal form. 
The optional precision parameter controls the number of digits of precision. 
It should be between 1 and 21:
	document.writeln(Math.PI.toPrecision(2));
	document.writeln(Math.PI.toPrecision(7));
	document.writeln(Math.PI.toPrecision(16));
	document.writeln(Math.PI.toPrecision( ));
	// Produces
	3.1
	3.141593
	3.141592653589793
	3.141592653589793



number.toString(radix)
The toString method converts this number to a string. 
The optional radix parameter controls radix, or base. 
It should be between 2 and 36. 
The default radix is base 10. 
The radix parameter is most commonly used with integers, but it can be used on any number.
The most common case, number.toString( ), can be written more simply as String(number):
	document.writeln(Math.PI.toString(2));
	document.writeln(Math.PI.toString(8));
	document.writeln(Math.PI.toString(16));
	document.writeln(Math.PI.toString( ));
	// Produces
	11.001001000011111101101010100010001000010110100011
	3.1103755242102643
	3.243f6a8885a3
	3.141592653589793
