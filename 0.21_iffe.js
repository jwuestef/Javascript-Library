
//  Immediately Invoked Function Expressions

//start off with function wrapped with (), and then a () afterwards to call it
// BEWARE, ; are very important!


var x = "hey guys";   // semi-colon REQUIRED!!!!! Otherwise, it thinks that "hey guys" is a function, since () comes after it.
					  // the line before the (function printNum ..... HAS to end in a semi-colon!!
(function printNum(){
	var a = 5;
	console.log(a);
})();

// printNum();     CAN'T CALL OUTSIDE OF () scope - error - printNum not defined




//create an iffe that counts from 1-10

(function countOneToTen(){
	for(var i=1; i<=10; i++){
		console.log(i);
	}
})()












var smartCar = {};

var smartCarMPG = function(totalMiles, totalGallons){

	return{

		calculateMpg: function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};

};

smartCar.mpg = smartCarMPG(150, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());










































