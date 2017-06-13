var high = "BigTime High School";
var year1 = 1994;

console.log("I graduated from " + high + " in " + year1);

var year = 2004;
var make = "Mercury";
var model = "Sable";

var stringy = "I drive a " + year + " " + make + " " + model;
console.log(stringy);

var lowerString = "help!!!!";
console.log(lowerString);
console.log(lowerString.toUpperCase());


//Strings
//Strings are characters or letters that aren't variables or numbers

//Variables? What are they?
//Variables are placeholders in memory for information
//Abstraction - variables allow us to represent information

//Conventions of variables
//1. They tell a story (understandable to human)
//2. Variables are cased in several ways: 1. Pascal 2. Snake 3. Camel
//  Pascal Casing - UsersService
//  Snake Casing - first_name_followed_by_last_name   
//    API_BASE - using Snake casing and using all caps is an indicator to other 
//    developers that this is reserved, don't touch this.
//  Camel Casing - firstName, lastName

var words = "I can type anything in here I want and the JS runtime won't use it";

var firstName = "Jeremy";
var lastName = "Smith";
//command to print to the screen
console.log("Hey welcome to intro weekend!");
//String Concatenation - think of it as adding strings together
console.log(firstName, lastName);
console.log(firstName + " " + lastName);

catFirstName = "Daisy";
catLastName = "Mewing";
catBreed = "American Shorthair";

console.log("Meow, my name is " + catFirstName + " " + catLastName + ", and I am an " + catBreed + "!");




//length property on a String

var fullName = "Jeremy Smith";
console.log(fullName + " is " + fullName.length + " characters long!");

//Methods on a String - methods are used to manipulate the string.
console.log(fullName.toUpperCase() + ", go clean your room NOW!");
console.log(fullName);  //shows that .toUpperCase() doesn't affect the original
console.log(fullName.toLowerCase() + " blah blah blah");

//How can I reverse a string?
//Pattern Implemented - Builder Pattern uses method or function chaining
//Chaining is when functions are "piggy backed" on each other, execute sequentially

//can be entered multi-line for easier reading
var reversedName = fullName
                    .split("")  //splits it to an array
                    .reverse()  //it reverses the contents of the array
                    .join("");  //joins the array back together into a string
console.log(reversedName);

var firstName = "Jeremy";
var splitName = firstName.split("");
console.log("firstName is type: " + typeof firstName);
console.log("splitName is type: " + typeof splitName);  //it's an array object