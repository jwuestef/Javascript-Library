/*

Closures - essentially just functions
	variables inside of functions can not be used outside 

*/


var init = function() {

	var name = "Summer";
	
	function displayName(){
		console.log(name);
	}
	
	displayName();
}


init();  // --> Summer
// console.log(name)  //ERROR - name not defined




var friend = {};

var setAge = function(myAge){
	var birthday = "5/16/2017";
	return {
		getAge: function(){
			console.log(myAge);
			return myAge;
		}
	}
}

friend.age = setAge(55);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.birthday);











