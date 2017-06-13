var hasGlasses = false;
var isTall = false;
var likesCats = true;

console.log(hasGlasses);
console.log(isTall);
console.log(likesCats);

var likesDogs = false;
var hasDogs = false;
var petsDogs = true;

console.log("I like dogs is: " + likesDogs);
console.log("I have dogs is: " + hasDogs);
console.log("I pet dogs is: " + petsDogs);


console.log("I am a dog person: " + (petsDogs && likesDogs && hasDogs));


/*
Comparison Operators
  <    less than
  >    greater than
  <=   less than or equal to
  >=   greater than or equal to 
  ==   equal for value but not type 
  ===  equal value AND type
  &&   all comparisons must evaluate to true
  ||   at least one of the comparisons must evaluate to true
  
Increment
  number = (number) + (value to increment by)
  number += (value to increment by)
  number++  //increments by 1
  
Decrement
  number = (number) - (value to decrement by)
  number -= (value to decrement by)
  number--  //decrement by 1
*/
console.log(" ")
console.log("<!-- Comparison Operators -->")

console.log(2 < 6); //true
console.log(12 < 6);  //false
console.log(!(12 < 6)); //true

console.log(6 == "6");  //true
console.log(6 === "6");  //false


//Conditionals
console.log(" ")
console.log(" ")
console.log("<!-- Conditionals -->")

var isLoggedIn = false;
if (isLoggedIn === false) {
  console.log("You are NOT logged in.");
} else {
  console.log("You ARE logged in.");
}

var cuteCats = true;
if (cuteCats) {
  console.log("Of course cats are cute!");
} else {
  console.log("Dogs stink");
}


var speedLimit = 55;
var currentSpeed = 55;
//45mph is minimum or else people get mad
//anything over 65mph is a ticket

//Everything is fine - no one is mad an no ticket
//Everyone is mad but no ticket
//Ticket issued
if (currentSpeed - speedLimit === 0 || currentSpeed - speedLimit <= 10) {
  console.log("Everyone is happy");
} else if (speedLimit - currentSpeed >= 10) {
  console.log("Other drivers are angry at your slow driving");
} else if (currentSpeed > 65) {
  console.log("Ticket issued");
}


