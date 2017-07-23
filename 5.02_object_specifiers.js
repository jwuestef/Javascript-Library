It sometimes happens that a constructor is given a very large number of parameters.
This can be troublesome because it can be very difficult to remember the order of the arguments. 

In such cases, it can be much friendlier if we write the constructor to accept a single object specifier instead. 
That object contains the specification of the object to be constructed. So, instead of:
	var myObject = maker(f, l, m, c, s);
we can write:
	var myObject = maker({
		first: f,
		last: l,
		state: s,
		city: c
	});


The arguments can now be listed in any order, arguments can be left out if the constructor is smart about defaults, and the code is much easier to read.

This can have a secondary benefit when working with JSON (see Appendix E). 
JSON text can only describe data, but sometimes the data represents an object, and it would be useful to associate the data with its methods. 
This can be done trivially if the constructor takes an object specifier because 
we can simply pass the JSON object to the constructor and it will return a fully constituted object.