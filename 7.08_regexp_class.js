A regexp class is a convenient way of specifying one of a set of characters.

For example, if we wanted to match a vowel, we could write:
	(?:a|e|i|o|u)
but it is more conveniently written as the class [aeiou].

Classes provide two other conveniences.

The first is that ranges of characters can be specified. 
	So, the set of 32 ASCII special characters:
		! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
	could be written as:
		(?:!|"|#|\$|%|&|'|\(|\)|\*|\+|,|-|\.|\/|:|;|<|=|>|@|\[|\\|]|\^|_|` |\{|\||\}|~)
	but is slightly more nicely written as:
		[!-\/:-@\[-`{-~]
	which includes the characters from ! through / and : through @ and [ through ` and { through ~ 
	It is still pretty nasty looking.

The other convenience is the complementing of a class. 
	If the first character after the [ is ^, then the class excludes the specified characters.
	So [^!-\/:-@\[-`{-~] matches any character that is not one of the ASCII special characters.
