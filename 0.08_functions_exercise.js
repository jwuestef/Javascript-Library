function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
// SHORTER OPTION
// function isEven(num) {
//     return num % 2 === 0
// }


function factorial(num) {
	if (num === 0) {
		return 1
	}
	var sum = 1;
	for (i=num; i>0; i--) {
		sum *= i;
	}
	return sum;
}


function kebabToSnake(str) {
	str = str.replace(/-/g, "_");
	return str;
}