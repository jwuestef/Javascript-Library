function stringConcat(str1, str2) {
	console.log(str1 + str2);
	return
}
stringConcat("Meow", " says the cat");



function billTotal(waterBill, powerBill, rentBill) {
	var total = Number(waterBill) + Number(powerBill) + Number(rentBill);
	console.log("Your total bill is: $" + total);
	return
}
billTotal(5, 10, 15.5);



function totalCost(quantity, costEach) {
	var total = Number(quantity) * Number(costEach);
	total *= 1.07;
	console.log(quantity + " bottles of Coke will cost you " + total);
}
totalCost(100, 0.99);


function calc(arg1, operator, arg2) {
	var num1 = Number(arg1);
	var num2 = Number(arg2);
	var result;

	switch (operator) {
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "*":
			result = num1 * num2;
			break;
		case "/":
			result = num1 * num2;
			break;
		case "%":
			result = num1 % num2;
			break;
		default:
			result = "Invalid operator";
			break;
	}

	console.log("The result is: " + result);
	return
}

calc(2, "*", 5);


function soda(amount,price,tax){
	var total = amount * (price + (tax*0.01));
	return (amount + " sodas will cost you " + total);
}
console.log(soda(100, 0.99, 7));






/*
Functions
1. Reusable code = adheres to DRY (Don't Repeat Yourself)
2. Automates a process
3. Increases code integrity/security
4. Can have parameters and accept arguments, but aren't required
5. Has a function signature
6. Has a function body / scope / block of code
7. This is must be invoked in order to be used
*/

//Build a simple greeting function
var helloWorld = function() {
  console.log("Hello World");
};

helloWorld();


//helloWorld( whatIsThisStuffHere? )
//in the declaration it is a "parameter"
//in the invocation, it is an "argument"


// WILL NOT WORK because add() has not yet been defined
// The functional expression does NOT hoist, so only invocations below the declaration may use it
console.log(add(3,4));   

var add = function(a, b) {
  return (a + b);
}



// WILL WORK because add() has been defined in a global sense, 
// function declarations are hoisted to top of file, so the whole file can use it
console.log(add(3,4));    

function add(a, b) {
  return (a + b);
}



//functions can be layered
console.log(add(add(1,2),add(3,4)));




function multiplyNums(numOne, numTwo) {
  return numOne * numTwo;
}

console.log(multiplyNums(4,5));






