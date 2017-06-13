function Dog(name, age){
	this.name = name,
	this.age = age,
	this.bark = function(){
		console.log(this.name + " just barked!")
	}
}

var rusty = new Dog("Rusty", 3);
rusty.bark();   //  Rusty just barked!




function Car(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.numWheels = 4;
}

//with .call
function Motorcycle(make, model year){
	Car.call(this, make, model, year);
	this.numWheels = 2;
}

//with .apply (same as .call, but only takes 2 arguments)
function Motorcycle(make, model year){
	Car.apply(this, [make, model, year]);
	this.numWheels = 2;
}
//with .apply, we can skip rewriting all of the arguments just by using the arguments keyword
function Motorcycle(make, model year){
	Car.apply(this, arguments);
	this.numWheels = 2;
}




function Person(name){
	this.name = name;
}
var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor;  //true
colt.isInstructor;  //true




function Person(name){
	this.name = name;
	this.sayHi = function(){
		return "Hi " + this.name;
	}
}

elie = new Person("Elie");
elie.sayHi();  //Hi Elie

//If we were to construct 1000+ people, it would be very inefficient to define 1000+
//similar sayHi functions. It would be much better to define the sayHi function
//as part of the whole Person prototype

function Person(name){
	this.name = name;
}

Person.prototype.sayHi = function(){
	return "Hi " + this.name;
}

elie = new Person("Elie");
elie.sayHi();  //Hi Elie




//exercise
function Vehicle(make, model, year){
	this.make = make;
	this.model = model;
	this.year = year;
	this.isRunning = false;
}
Vehicle.prototype.turnOn = function(){
	this.isRunning = true;
}
Vehicle.prototype.turnOff = function(){
	this.isRunning = false;
}
Vehicle.prototype.honk = function(){
	if(this.isRunning){
		return "beep";
	}
}








