Inheritance is an important topic in most programming languages.
In the classical languages (such as Java), inheritance (or "extends") provides two useful services. 

First, it is a form of code reuse.
	If a new class is mostly similar to an existing class, youonly have to specify the differences. 
	Patterns of code reuse are extremely important because they have the potential to significantly reduce the cost of software development. 
The other benefit of classical inheritance is that it includes the specification of a system of types. 
	This mostly frees the programmer from having to write explicit casting operations, which is 
	a very good thing because when casting, the safety benefits of a type system are lost.


JavaScript, being a loosely typed language, never casts. 
The lineage of an object is irrelevant. 
What matters about an object is what it can do, not what it is descended from.


JavaScript provides a much richer set of code reuse patterns. 
It can ape the classical pattern, but it also supports other patterns that are more expressive. 
The set of possible inheritance patterns in JavaScript is vast. 
In this chapter, we’ll look at a few of the most straightforward patterns. 
Much more complicated constructions are possible, but it is usually best to keep it simple.


In classical languages, objects are instances of classes, and a class can inherit from another class. 
JavaScript is a prototypal language, which means that objects inherit directly from other objects.