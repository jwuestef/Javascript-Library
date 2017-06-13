var empObject = {};

var johnQualls = {
	name: "John Qualls",
	age : 39,
	hairColor: "brown"
};

console.log(johnQualls);

// list all the keys of an object
console.log(Object.keys(johnQualls));



var theBryceIsRight = {
	name     		: "Bryce Green",
	age		 		: 55,
	vocation 		: "TA",
	email    		: "thebryceisright@gmail.com",
	greeting 		: function() {
							return "Greetings earthlings, I am " + this.name + ". I am here to learn you.";
						},
	contactMe		: function() {
							return "Contact me at " + this.email + ".";
						},
	introduction 	: function() {
							return this.greeting() + " " + this.contactMe();
						}
};

var bill = {
	name	: "Bill",
	age		: 20,
	vocation: "Visitor"
}

console.log( theBryceIsRight.greeting() );
console.log( theBryceIsRight.greeting.call(bill) );

console.log( theBryceIsRight.introduction() );




// Object Constructor
var paul = new Object;

paul.name = "Paul O'Connor";
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking banana-nut muffins"];

// Object Constructor Template
function Hotel(name, rooms, booked) {
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() {
		return "There are " + (this.rooms - this.booked) + " rooms left."
	};
};

var jw = new Hotel("JW Marriot", 300, 250);

console.log(jw);
console.log(jw.checkAvailability());

var jwExp = new Hotel("Mini J'Dubs", 100, 75);
var hotels = [jw, jwExp];
console.log(hotels[1].name);
for (var h in hotels) {
	console.log(hotels[h].checkAvailability());
}


console.log("====================================================")
console.log("====================================================")
console.log("  CHALLENGES  ")
console.log("====================================================")
console.log("====================================================")

function Person(name, age, favoriteShows) {
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;
	this.birthday = function() {
		this.age += 1;
	};
	this.compareShows = function(personToCompareTo) {
		var otherPersonShows = personToCompareTo.favoriteShows;
		var commonShows = []
		for (var i=0; i<this.favoriteShows.length; i++) {
			for (var j=0; j<otherPersonShows.length; j++){
				if (favoriteShows[i] === otherPersonShows[j]){
					commonShows.push(favoriteShows[i]);
				}
			}
		}
		if(commonShows.length === 0) {
			return "No shows in common";
		}
		return commonShows;
	};
	this.greeting = function() {
		var randomShow = favoriteShows[Math.floor(Math.random() * this.favoriteShows.length)];
		var message = "Hello, my name is " + this.name + " and I am " + this.age + " years old, and one of my favorite shows is " + randomShow + ".";
		return message;
	};
};

var abby = new Person("Abigail Adams", 21, ["The Munsters1", "The Munsters2", "The Munsters3", "The Munsters4", "The Munsters5"]);
var billy = new Person("Bill Binford", 22, ["Andy Griffith1", "Andy Griffith2", "Andy Griffith3", "The Munsters4", "Andy Griffith5"]);
var charlie = new Person("Charles Cantor", 23, ["M.A.S.H.1", "M.A.S.H.2", "M.A.S.H.3", "The Munsters4", "M.A.S.H.5"]);
var david = new Person("David Donaldson", 24, ["Gomer Pyle1", "Gomer Pyle2", "Gomer Pyle3", "The Munsters4", "Gomer Pyle5"]);
var eddy = new Person("Edward Engel", 25, ["Gilligan's Island1", "Gilligan's Island2", "Gilligan's Island3", "The Munsters4", "Gilligan's Island5"]);

console.log("Abby's initial age: " + abby.age);
abby.birthday();
console.log("After a birthday, Abby is : " + abby.age);

var commonShowsResult = abby.compareShows(billy)
for (var i=0; i<commonShowsResult.length; i++){
	console.log("A common show is: " + commonShowsResult[i]);
}

console.log(abby.greeting());


var arrayOfPersons = [abby, billy, charlie, david, eddy];
var arrayOfShows = ["The Munsters1", "The Munsters2", "The Munsters3", "The Munsters4", "The Munsters5", "Andy Griffith1", "Andy Griffith2", "Andy Griffith3", "The Munsters4", "Andy Griffith5"];

function createPerson(name, age) {
	this.name = name;
	this.age = age;
	this.favoriteShows = [
							arrayOfShows[Math.floor(Math.random()*arrayOfShows.length)],
							arrayOfShows[Math.floor(Math.random()*arrayOfShows.length)],
							arrayOfShows[Math.floor(Math.random()*arrayOfShows.length)],
							arrayOfShows[Math.floor(Math.random()*arrayOfShows.length)],
							arrayOfShows[Math.floor(Math.random()*arrayOfShows.length)]
						];

	this.birthday = function() {
		this.age += 1;
	};
	this.compareShows = function(personToCompareTo) {
		var otherPersonShows = personToCompareTo.favoriteShows;
		var commonShows = []
		for (var i=0; i<this.favoriteShows.length; i++) {
			for (var j=0; j<otherPersonShows.length; j++){
				if (favoriteShows[i] === otherPersonShows[j]){
					commonShows.push(favoriteShows[i]);
				}
			}
		}
		if (commonShows.length === 0) {
			commonShows = "No shows is common";
		}
		return commonShows;
	};
	this.greeting = function() {
		var randomShow = favoriteShows[Math.floor(Math.random() * this.favoriteShows.length)];
		var message = "Hello, my name is " + this.name + " and I am " + this.age + " years old, and one of my favorite shows is " + randomShow + ".";
		return message;
	};
}

var frank = new createPerson("Frank Figgy", 26);
console.log("Franks favorite shows are: " + frank.favoriteShows);

console.log("CREATING 5 PEOPLE");
console.log("CREATING 5 PEOPLE");
console.log("CREATING 5 PEOPLE");
console.log("CREATING 5 PEOPLE");
console.log("CREATING 5 PEOPLE");


function createName() {
	var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var name = "";
	for (var i=0; i<5; i++) {
		name += letters[Math.floor(Math.random()*letters.length)];
	}
	return name;
}

function createAge() {
	return Math.floor(Math.random()*50 + 1);
}


function createLotsOfPeople() {
	for (var i=0; i<5; i++){
		arrayOfPersons.push(new createPerson(createName(),createAge()));
	}
	return;
}

createLotsOfPeople();
console.log(arrayOfPersons);


console.log("======================================================");
console.log("======================================================");
console.log("======================================================");
console.log("======================================================");
console.log("======================================================");


var folks = [
				{
					name: "Abby",
					age: 15
				},
				{
					name: "Bobby",
					age: 37
				},
				{
					name: "Zane",
					age: 57
				},
				{
					name: "Mary",
					age: 33
				},
				{
					name: "Edward",
					age: 19
				},
				{
					name: "Randy",
					age: 25
				},
				{
					name: "Carl",
					age: 22
				},
				{
					name: "Kevin",
					age: 13
				},
				{
					name: "Nathan",
					age: 45
				}
			];




function checkForVowels(arr) {
	for (var i=0; i<arr.length; i++){
		if(arr[i]["name"][0] === "A" || arr[i]["name"][0] === "E" || arr[i]["name"][0] === "I" || arr[i]["name"][0] === "O" || arr[i]["name"][0] === "U") {
			arr.splice(i, 1);
		}
	}
	return arr;
}

console.log(checkForVowels(folks));




function findOldest(arr) {
	var oldestAge = arr[0]["age"];
	var oldestPerson;
	for (var i=0; i<arr.length; i++){
		if(arr[i]["age"] > oldestAge) {
			oldestAge = arr[i]["age"];
			oldestPerson = arr[i];
		}
	}
	return oldestPerson
}

console.log(findOldest(folks));




function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

console.log("Sorting folks by age, youngest to oldest:");
console.log(folks.sort(dynamicSort("age")));

console.log("Sorting folks by age, oldest to youngest:");
console.log(folks.sort(dynamicSort("age")).reverse());

console.log("multiArray: ");

function multiArray(arr) {
	var finalArray = [ [], [], [] ];

	for(var i=0; i<arr.length; i++){
		if(arr[i]["age"] < 20) {
			finalArray[0].push(arr[i]);
		} else if (arr[i]["age"] < 35) {
			finalArray[1].push(arr[i]);
		} else {
			finalArray[2].push(arr[i]);
		}
	}

	return finalArray;
}

console.log(multiArray(folks));


console.log("Sorting folks by name, alphabetical order:");
console.log(folks.sort(dynamicSort("name")));

