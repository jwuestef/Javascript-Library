A regexp choice contains one or more regexp sequences. 

The sequences are separated by the | (vertical bar) character. 

The choice matches if any of the sequences match. 

It attempts to match each of the sequences in order. 

So:
	"into".match(/in|int/)
matches the in in into. 

It wouldn’t match int because the match of in was successful.