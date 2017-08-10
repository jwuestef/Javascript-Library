There are four kinds of groups:

Capturing
	A capturing group is a regexp choice wrapped in parentheses. 
	The characters that match the group will be captured. 
	Every capture group is given a number.
	The first capturing "(" in the regular expression is group 1. 
	The second capturing "(" in the regular expression is group 2.

Noncapturing
	A noncapturing group has a "(?:" prefix. 
	A noncapturing group simply matches; it does not capture the matched text. 
	This has the advantage of slight faster performance.
	Noncapturing groups do not interfere with the numbering of capturing groups.

Positive lookahead
	A positive lookahead group has a "(?=" prefix. 
	It is like a noncapturing group except that after the group matches, the text is rewound to where the group started, effectively matching nothing. 
	This is not a good part.

Negative lookahead
	A negative lookahead group has a "(?!" prefix. 
	It is like a positive lookahead group, except that it matches only if it fails to match. 
	This is not a good part.
