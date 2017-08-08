A regexp factor can be a character, a parenthesized group, a character class, or an escape sequence.

All characters are treated literally except for the control characters and the special characters:
	\ / [ ] ( ) { } ? + * | . ^ $
which must be escaped with a \ prefix if they are to be matched literally. 

When in doubt, any special character can be given a \ prefix to make it literal. 
	The \ prefix does not make letters or digits literal.

An unescaped . matches any character except a line-ending character.

An unescaped ^ matches the beginning of the text when the lastIndex property is zero. 

It can also match line-ending characters when the m flag is specified.

An unescaped $ matches the end of the text. 

It can also match line-ending characters when the m flag is specified.
