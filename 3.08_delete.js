The "delete" operator can be used to remove a property from an object. 
It will remove a property from the object if it has one.

It will not touch any of the objects in the prototype linkage.
Removing a property from an object may allow a property from the prototype linkage to shine through:
another_stooge.nickname // 'Moe'
// Remove nickname from another_stooge, revealing the nickname of the prototype.
delete another_stooge.nickname;
another_stooge.nickname // 'Curly'


