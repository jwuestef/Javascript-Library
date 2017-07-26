An "array" is a linear allocation of memory in which elements are accessed by integers that are used to compute offsets. 
Arrays can be very fast data structures. 

Unfortunately, JavaScript does not have anything like this kind of array.
Instead, JavaScript provides an object that has some array-like characteristics. 

It converts array subscripts into strings that are used to make properties. 
It is significantly slower than a real array, but it can be more convenient to use. 
Retrieval and updating of properties work the same as with objects, except that there is a special trick with integer property names. 

Arrays have their own literal format. 
Arrays also have a much more useful set of built-in methods, described in Chapter 8.