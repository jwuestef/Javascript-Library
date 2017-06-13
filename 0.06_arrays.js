//Index and Arrays

                //0 1 2 3 4 5 6 7 8 9 10 11 12 13
//var fullName = "J a m e s   H a n d s  h  o  e";
// var fullName = "James Handshoe";
// console.log(fullName.length);
// console.log(fullName[0].toLowerCase());
// console.log(fullName);

// var studentName1 = "Jack";
// var studentName2 = "James";
// var studentName3 = "Jill";
// var studentName4 = "Jimmy Jack";

//                 //  0        1      2          3
// var studentNames = ["Jack", "James", "Jill", "Jimmy Jack"];
// console.log(studentNames[2]);

// var arrayOfCars = ["Ford", "GMC", "Chevy", "Subaru", "Honda"];





// Quick ternary operator example:

var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access granted' : secondCheck ? 'Access granted' : 'Access denied';
  
console.log(access); // logs "Access granted" || "Access denied"



// Arrays


var students = ["Harrison", "Rose", "Ben", "Caitlyn", "Kay"];

students[-1]="Steve";
students[-5]="Meow";
console.log(students);
console.log("---");

// PUSH - adds on to end
students.push("Aaron");
console.log(students);
console.log("---");

// POP - removes last
students.pop();
console.log(students);
console.log("---");

//SHIFT - removes first element off array
//UNSHIFT("Jim", "Bill") - adds Jim and Bill to the front of the array


//FOR IN - same basic thing as a forEach

for (var stu in students) {          // ShortHand of....  for (var i=0; i<students.length; i++) 
	console.log(stu, "is", students[stu]);
}

console.log("---");

// FOR EACH
students.forEach(function(student) {
	console.log(student);
});

console.log("---");

