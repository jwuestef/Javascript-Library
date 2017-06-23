A value in an object can be updated by assignment. 


If the property name already exists in the object, the property value is replaced:
stooge['first-name'] = 'Jerome';


If the object does not already have that property name, the object is augmented:
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';

flight.equipment = {
	model: 'Boeing 777'
};
flight.status = 'overdue';