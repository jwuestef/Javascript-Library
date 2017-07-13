A recursive function is a function that calls itself, either directly or indirectly. 

Recursion is a powerful programming technique in which a problem is divided into a set of
similar subproblems, each solved with a trivial solution. 

Generally, a recursive function calls itself to solve its subproblems.

The Towers of Hanoi is a famous puzzle. 
	The equipment includes three posts and a set of discs of various diameters with holes in their centers. 
	The setup stacks all of the discs on the source post with smaller discs on top of larger discs. 
	The goal is to move the stack to the destination post by moving one disc at a time to another post,
	never placing a larger disc on a smaller disc. This puzzle has a trivial recursive solution:
		var hanoi = function (disc, src, aux, dst) {
			if (disc > 0) {
				hanoi(disc - 1, src, dst, aux);
				document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
				hanoi(disc - 1, aux, src, dst);
			}
		};
		hanoi(3, 'Src', 'Aux', 'Dst');

	It produces this solution for three discs:
		Move disc 1 from Src to Dst
		Move disc 2 from Src to Aux
		Move disc 1 from Dst to Aux
		Move disc 3 from Src to Dst
		Move disc 1 from Aux to Src
		Move disc 2 from Aux to Dst
		Move disc 1 from Src to Dst

The hanoi function moves a stack of discs from one post to another, using the auxiliary post if necessary. 
It breaks the problem into three subproblems. 
	First, it uncovers the bottom disc by moving the substack above it to the auxiliary post. 
	It can then move the bottom disc to the destination post. 
	Finally, it can move the substack from the auxiliary post to the destination post. 

The movement of the substack is handled by calling itself recursively to work out those subproblems.
The hanoi function is passed the number of the disc it is to move and the three posts it is to use. 
When it calls itself, it is to deal with the disc that is above the disc it is currently working on. 
Eventually, it will be called with a nonexistent disc number. 
In that case, it does nothing. 
That act of nothingness gives us confidence that the function does not recurse forever.
Recursive functions can be very effective in manipulating tree structures such as the browser’s Document Object Model (DOM). 
Each recursive call is given a smaller piece of the tree to work on:
	// Define a walk_the_DOM function that visits every node of the tree in HTML source order, starting from some given node. 
	// It invokes a function, passing it each node in turn. 
	// walk_the_DOM calls itself to process each of the child nodes.
	var walk_the_DOM = function walk(node, func) {
		func(node);
		node = node.firstChild;
		while (node) {
		walk(node, func);
		node = node.nextSibling;
		}
	};

	// Define a getElementsByAttribute function. 
	// It takes an attribute name string and an optional matching value. 
	// It calls walk_the_DOM, passing it a function that looks for an attribute name in the node. 
	// The matching nodes are accumulated in a results array.
	var getElementsByAttribute = function (att, value) {
		var results = [];
		walk_the_DOM(document.body, function (node) {
			var actual = node.nodeType === 1 && node.getAttribute(att);
			if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
				results.push(node);
			}
		});
		return results;
	};


Some languages offer the tail recursion optimization. 
This means that if a function returns the result of invoking itself recursively, then 
the invocation is replaced with a loop, which can significantly speed things up. 
Unfortunately, JavaScript does not currently provide tail recursion optimization. 
Functions that recurse very deeply can fail by exhausting the return stack:
	// Make a factorial function with tail recursion. 
	// It is tail recursive because it returns the result of calling itself.
	// JavaScript does not currently optimize this form.
	var factorial = function factorial(i, a) {
		a = a || 1;
		if (i < 2) {
			return a;
		}
		return factorial(i - 1, a * i);
	};
	document.writeln(factorial(4)); // 24
	