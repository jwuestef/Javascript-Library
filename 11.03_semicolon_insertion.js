JavaScript has a mechanism that tries to correct faulty programs by automatically inserting semicolons. 
Do not depend on this. 
It can mask more serious errors.
It sometimes inserts semicolons in places where they are not welcome. 
Consider the consequences of semicolon insertion on the return statement. 
If a return statement returns a value, that value expression must begin on the same line as the return:
	return {
		status: true
	};


This appears to return an object containing a status member. 
Unfortunately, semicolon insertion turns it into a statement that returns undefined. 
There is no warning that semicolon insertion caused the misinterpretation of the program. 
The problem can be avoided if the { is placed at the end of the previous line and not at the beginning of the next line:
	return {
		status: true
	};