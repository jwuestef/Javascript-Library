// A string literal can be wrapped in single quotes or double quotes. 
// It can contain zero or more characters. 
// The \ (backslash) is the escape character. 

// JavaScript was built at a time when Unicode was a 16-bit character set, 
// so all characters in JavaScript are 16 bits wide. JavaScript does not have
// a character type. To represent a character, make a string with just one character in it.

// The escape sequences allow for inserting characters into strings that are not normally
// permitted, such as backslashes, quotes, and control characters. The \u convention
// allows for specifying character code points numerically.
// "A" === "\u0041"

// Strings have a length property. For example, "seven".length is 5.
// Strings are immutable. Once it is made, a string can never be changed. 
// But it is easy to make a new string by concatenating other strings together with the + operator.

// any Unicode character except
// " and \ and control character

// string literal
// " "

// escape character
// ' ' any Unicode character except ' and \ and control character

// escaped character  \
// 		"   double quote
// 		'   single quote
// 		\   backslash
// 		/   slash
// 		b   backspace
// 		f   formfeed
// 		n   new line
// 		r   carriage return
// 		t   tab
// 		u   4 hexadecimal digits


// Two strings containing exactly the same characters in the same order are considered
// to be the same string. So:
// 'c' + 'a' + 't' === 'cat'
// is true.

// Strings have methods (see Chapter 8):
// 'cat'.toUpperCase( ) === 'CAT'
