if (true) {
  var test1 = true; // use "var" to define variable
}
console.log(test1); // alerts "true", the variable lives even outside the scope / code block


if (true) {
  let test2 = true; // use "let" instead of "var"
}
//console.log(test2);   // ERROR, test2 is not defined, the variable only exists inside the scope / code block





//with "var", even inside code blocks, can affect global variables
var test3 = [0,1,2];
if (true) {
  var test3 = 10;
}
console.log(test3); // 10

//with "let", it won't affect global variables when inside a code block / scope
let test4 = [0,1,2];
if (true) {
  let test4 = 10;
}
console.log(test4); // [0,1,2] 