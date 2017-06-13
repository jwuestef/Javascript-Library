function printReverse(inputArray) {
	var endArray = [];
	for (var i=inputArray.length-1; i>=0; i--) {
		console.log(inputArray[i]);
	}
}

//printReverse([1,2,3,4]);



 function isUniform(inputArray) {
 	var firstItem = inputArray[0];
 	for (var i=1; i < inputArray.length; i++) {
 		if (inputArray[i] !== firstItem) {
 			return false;
 		}
 	}
 	return true;
 }

 //console.log(isUniform(["b", "h", "b"]));



 function sumArray(inputArray) {
 	sum = 0;
 	inputArray.forEach(function(val) {
 		sum += val;
 	});
 	return sum;
 }

 //console.log(sumArray([1,2,3]));



 function max(inputArray) {
 	var result = inputArray[0];
 	inputArray.forEach(function(val) {
 		if (val > result) {
 			result = val;
 		}
 	})
 	return result;
 }

 //console.log(max([10, 3, 10, 4]));