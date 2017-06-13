// Whitespace can take the form of formatting characters or comments. Whitespace is
// usually insignificant, but it is occasionally necessary to use whitespace to separate
// sequences of characters that would otherwise be combined into a single token. For
// example, in:

var that = this;

// the space between var and that cannot be removed, but the other spaces can be
// removed.



// JavaScript offers two forms of comments:
// 	 	block comments formed with /* */
// 	 	line-ending comments starting with //

// Comments should be used liberally to improve the readability of your programs. 
// Take care that the comments always accurately describe the code. 
// Inaccurate comments are worse than no comments.

// The /* */ form of block comments came from a language called PL/I. PL/I chose
// those strange pairs as the symbols for comments because they were unlikely to occur
// in that language’s programs, except perhaps in string literals. In JavaScript, those
// pairs can also occur in regular expression literals, so block comments are not safe for
// commenting out blocks of code. For example:

// /*   <-- without the //
var rm_a = /a*/.match(s);
// */   <-- without the //

// causes a syntax error. So, it is recommended that /* */ comments be avoided
// and // comments be used instead


//      ALWAYS USE //
//       AVOID /**/ 