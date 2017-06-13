var age=18;

if(age <= 15.5) {
	console.log("No driving for you!");
} else if (age <=16) {
	console.log("You can drive, but only if you have a learner's permit and there is a parent in the vehicle.");
} else if (age < 18) {
	console.log("You can drive without a parent, but they're still the boss");
} else if (age < 21) {
	console.log("You can drive, but you can't drink")
} else if (age < 25) {
	console.log("You can drive, and drink, but not with a rental car");
} else {
	console.log("You can do what you want, ha!");
}



var colts = 24;
var patriots = 20;

if (colts > patriots) {
	console.log("We win!");
} else if (colts < patriots) {
	console.log("We lose :(");
} else if (colts === patriots) {
	console.log("Good tie game.");
} else {
	console.log("Invalid scores");
}




for (var i=1; i<=100; i++) {
	if (i%3===0 && i%5===0) {
		console.log("FizzBuzz");
	} else if (i%3===0) {
		console.log("Fizz");
	} else if (i%5===0) {
		console.log("Buzz");
	} else {
		console.log(i);
	}
}




// //prompt for user interaction
// var userInput = prompt("What is your input?");
// console.log(userInput);
// console.log(typeof userInput);
// //parseInt is how to convert a string type into a number type
// var convertedInput = parseInt(userInput);
// console.log(convertedInput);
// console.log(typeof convertedInput);


var userName = prompt("Please enter your name: ");

console.log(greeting(userName.toLowerCase()));


function greeting(name) {
  switch (name) {
    case "jeremy":
      return "That's me!";
    case "james":
    case "joey":
      return "Why is my teacher on my computer?";
    case "aaron":
      return "Hey right-hand neighbor!";
    case "mackenzie":
      return "Hey left-hand neighbor!";
    case "leon":
    case "nina":
      return "You're two seats away from me!";
    default:
      return "Hey there " + name.charAt(0).toUpperCase() + name.slice(1) + ", fellow coder!";
  }
}