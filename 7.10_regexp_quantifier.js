A regexp factor may have a regexp quantifier suffix that determines how many times the factor should match. 
A number wrapped in curly braces means that the factor should match that many times. 

So, 
	/www/ matches the same as /w{3}/
	{3,6} will match 3, 4, 5, or 6 times
	{3,} will match 3 or more times
	? is the same as {0,1}
	* is the same as {0,}
	+ is the same as {1,}

Matching tends to be greedy, matching as many repetitions as possible up to the limit, if there is one. 

If the quantifier has an extra ? suffix, then matching tends to be lazy, attempting to match as few repetitions as possible. 

It is usually best to stick with the greedy matching.