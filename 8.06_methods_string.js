string.charAt(pos)
The charAt method returns the character at position pos in this string. 
If pos is less than zero or greater than or equal to string.length, it returns the empty string. 
JavaScript does not have a character type. 
The result of this method is a string:
	var name = 'Curly';
	var initial = name.charAt(0); // initial is 'C'
	charAt could be implemented as:
	String.method('charAt', function (pos) {
		return this.slice(pos, pos + 1);
	});



string.charCodeAt(pos)
The charCodeAt method is the same as charAt except that instead of returning a string, it returns an integer representation of 
	the code point value of the character at position pos in that string. 
If pos is less than zero or greater than or equal to string.length, it returns NaN:
	var name = 'Curly';
	var initial = name.charCodeAt(0); // initial is 67



string.concat(string…)
The concat method makes a new string by concatenating other strings together. 
It is rarely used because the + operator is more convenient:
	var s = 'C'.concat('a', 't'); // s is 'Cat'



string.indexOf(searchString, position)
The indexOf method searches for a searchString within a string. 
If it is found, it returns the position of the first matched character; otherwise, it returns –1. 
The optional position parameter causes the search to begin at some specified position in the string:
	var text = 'Mississippi';
	var p = text.indexOf('ss'); // p is 2
	p = text.indexOf('ss', 3); // p is 5
	p = text.indexOf('ss', 6); // p is -1



string.lastIndexOf(searchString, position)
The lastIndexOf method is like the indexOf method, except that it searches from the end of the string instead of the front:
	var text = 'Mississippi';
	var p = text.lastIndexOf('ss'); // p is 5
	p = text.lastIndexOf('ss', 3); // p is 2
	p = text.lastIndexOf('ss', 6); // p is 5



string.localeCompare(that)
The localCompare method compares two strings. 
The rules for how the strings are compared are not specified. 
If this string is less than that string, the result is negative. 
If they are equal, the result is zero. 
This is similar to the convention for the array.sort comparison function:
	var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
	m.sort(function (a, b) {
		return a.localeCompare(b);
	});
	// m (in some locale) is
	// ['a', 'A', 'aa', 'Aa', 'aaa', 'AAA']



string.match(regexp)
The match method matches a string and a regular expression. 
How it does this depends on the g flag. 
If there is no g flag, then the result of calling string.match(regexp) is the same as
calling regexp.exec(string). 
However, if the regexp has the g flag, then it produces an array of all the matches but excludes the capturing groups:
	var text = '<html><body bgcolor=linen><p>' + 'This is <b>bold<\/b>!<\/p><\/body><\/html>';
	var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
	var a, i;
	a = text.match(tags);
	for (i = 0; i < a.length; i += 1) {
		document.writeln(('// [' + i + '] ' + a[i]).entityify( ));
	}
	// The result is
	// [0] <html>
	// [1] <body bgcolor=linen>
	// [2] <p>
	// [3] This is
	// [4] <b>
	// [5] bold
	// [6] </b>
	// [7] !
	// [8] </p>
	// [9] </body>
	// [10] </html>



string.replace(searchValue, replaceValue)
The replace method does a search and replace operation on this string, producing a new string. 
The searchValue argument can be a string or a regular expression object. 
If it is a string, only the first occurrence of the searchValue is replaced, so:
	var result = "mother_in_law".replace('_', '-');
will produce "mother-in_law", which might be a disappointment.
If searchValue is a regular expression and if it has the g flag, then it will replace all occurrences.
If it does not have the g flag, then it will replace only the first occurrence.
The replaceValue can be a string or a function. 
If replaceValue is a string, the character $ has special meaning:
	// Capture 3 digits within parens
	var oldareacode = /\((\d{3})\)/g;
	var p = '(555)666-1212'.replace(oldareacode, '$1-');
	// p is '555-555-1212'
// 	Dollar sequence 	Replacement
//	$$ 					$
//	$& 					The matched text
// 	$number 			Capture group text
// 	$` 					The text preceding the match
// 	$' 					The text following the match
If the replaceValue is a function, it will be called for each match, and the string returned by the function will be used as the replacement text. 
The first parameter passed to the function is the matched text. 
The second parameter is the text of capture group 1, the next parameter is the text of capture group 2, and so on:
	String.method('entityify', function ( ) {
		var character = {
			'<' : '&lt;',
			'>' : '&gt;',
			'&' : '&amp;',
			'"' : '&quot;'
		};
	// Return the string.entityify method, which returns the result of calling the replace method.
	// Its replaceValue function returns the result of looking a character up in an object. 
	// This use of an object usually outperforms switch statements.
		return function ( ) {
			return this.replace(/[<>&"]/g, function (c) {
				return character[c];
			});
		};
	}( ));
	alert("<&>".entityify( )); // &lt;&amp;&gt;



string.search(regexp)
The search method is like the indexOf method, except that it takes a regular expression object instead of a string. 
It returns the position of the first character of the first match, if there is one, or –1 if the search fails. 
The g flag is ignored. 
There is no position parameter:
	var text = 'and in it he says "Any damn fool could';
	var pos = text.search(/["']/); // pos is 18
	string.slice(start,end)
The slice method makes a new string by copying a portion of another string. 
If the start parameter is negative, it adds string.length to it. 
The end parameter is optional, and its default value is string.length. 
If the end parameter is negative, then string.length is added to it. 
The end parameter is one greater than the position of the last character. 
To get n characters starting at position p, u se string.slice(p,p + n). 
Also see string.substring and array.slice, later and earlier in this chapter, respectively.
	var text = 'and in it he says "Any damn fool could';
	var a = text.slice(18);
	// a is '"Any damn fool could'
	var b = text.slice(0, 3);
	// b is 'and'
	var c = text.slice(-5);
	// c is 'could'
	var d = text.slice(19, 32);
	// d is 'Any damn fool'



string.split(separator, limit)
The split method creates an array of strings by splitting this string into pieces. 
The optional limit parameter can limit the number of pieces that will be split. 
The separator parameter can be a string or a regular expression.
If the separator is the empty string, an array of single characters is produced:
	var digits = '0123456789';
	var a = digits.split('', 5);
	// a is ['0', '1', '2', '3', '456789']
Otherwise, the string is searched for all occurrences of the separator. 
Each unit of text between the separators is copied into the array. 
The g flag is ignored:
	var ip = '192.168.1.0';
	var b = ip.split('.');
	// b is ['192', '168', '1', '0']
	var c = '|a|b|c|'.split('|');
	// c is ['', 'a', 'b', 'c', '']
	var text = 'last, first ,middle';
	var d = text.split(/\s*,\s*/);
	// d is [
	// 'last',
	// 'first',
	// 'middle'
	// ]
There are some special cases to watch out for. 
Text from capturing groups will be included in the split:
	var e = text.split(/\s*(,)\s*/);
	// e is [
	// 'last',
	// ',',
	// 'first',
	// ',',
	// 'middle'
	// ]
Some implementations suppress empty strings in the output array when the separator is a regular expression:
	var f = '|a|b|c|'.split(/\|/);
	// f is ['a', 'b', 'c'] on some systems, and
	// f is ['', 'a', 'b', 'c', ''] on others



string.substring(start,end)
The substring method is the same as the slice method except that it doesn’t handle the adjustment for negative parameters. 
There is no reason to use the substring method. 
Use slice instead.



string.toLocaleLowerCase( )
The toLocaleLowerCase method produces a new string that is made by converting this string to lowercase using the rules for the locale. 
This is primarily for the benefit of Turkish because in that language ‘I’ converts to ı, not ‘i’.



string.toLocaleUpperCase( )
The toLocaleUpperCase method produces a new string that is made by converting this string to uppercase using the rules for the locale. 
This is primarily for the benefit of Turkish, because in that language ‘i’ converts to ‘ ’, not ‘I’.



string.toLowerCase( )
The toLowerCase method produces a new string that is made by converting this string to lowercase.



string.toUpperCase( )
The toUpperCase method produces a new string that is made by converting this string to uppercase.



String.fromCharCode(char…)
The String.fromCharCode function produces a string from a series of numbers.
	var a = String.fromCharCode(67, 97, 116);
	// a is 'Cat'
