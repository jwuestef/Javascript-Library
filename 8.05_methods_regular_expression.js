regexp.exec(string)

The exec method is the most powerful (and slowest) of the methods that use regular expressions. 
If it successfully matches the regexp and the string, it returns an array. 
The 0 element of the array will contain the substring that matched the regexp. 
The 1 element is the text captured by group 1, the 2 element is the text captured by group 2, and so on. 
If the match fails, it returns null.
If the regexp has a g flag, things are a little more complicated. 
The searching begins not at position 0 of the string, but at position regexp.lastIndex (which is initially zero). 
If the match is successful, then regexp.lastIndex will be set to the position of the first character after the match. 
An unsuccessful match resets regexp.lastIndex to 0.
This allows youto search for several occurrences of a pattern in a string by calling exec in a loop. 
There are a couple things to watch out for. 
If you exit the loop early, you must reset regexp.lastIndex to 0 yourself before entering the loop again. 
Also, the ^ factor matches only when regexp.lastIndex is 0:
	// Break a simple html text into tags and texts.
	// (See string.replace for the entityify method.)
	// For each tag or text, produce an array containing
	// [0] The full matched tag or text
	// [1] The tag name
	// [2] The /, if there is one
	// [3] The attributes, if any
var text = '<html><body bgcolor=linen><p>' + 'This is <b>bold<\/b>!<\/p><\/body><\/html>';
	var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
	var a, i;
	while ((a = tags.exec(text))) {
		for (i = 0; i < a.length; i += 1) {
			document.writeln(('// [' + i + '] ' + a[i]).entityify( ));
		}
		document.writeln( );
	}
	// Result:
	// [0] <html>
	// [1]
	// [2] html
	// [3]
	// [0] <body bgcolor=linen>
	// [1]
	// [2] body
	// [3] bgcolor=linen
	// [0] <p>
	// [1]
	// [2] p
	// [3]
	// [0] This is
	// [1] undefined
	// [2] undefined
	// [3] undefined
	// [0] <b>
	// [1]
	// [2] b
	// [3]
	// [0] bold
	// [1] undefined
	// [2] undefined
	// [3] undefined
	// [0] </b>
	// [1] /
	// [2] b
	// [3]
	// [0] !
	// [1] undefined
	// [2] undefined
	// [3] undefined
	// [0] </p>
	// [1] /
	// [2] p
	// [3]



regexp.test(string)

The test method is the simplest (and fastest) of the methods that use regular expressions.
If the regexp matches the string, it returns true; otherwise, it returns false. 
Do not use the g flag with this method:
	var b = /&.+;/.test('frank &amp; beans');
	// b is true
test could be implemented as:
	RegExp.method('test', function (string) {
		return this.exec(string) !== null;
	});
