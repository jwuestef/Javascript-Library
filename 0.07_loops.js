var counting = 10;

while(counting >= 0) {
	if(counting !== 0) {
		console.log(counting);
	} else {
		console.log("blast off");
	}
	counting--;
}




//While loops will execute code for a determined set of iterations
//MUST BE CAREFUL!!  You can end up staring into the face of infinity...and lose!

//To control our looping - use a loop control varialbe
//While loops have three parts to the lcv
//Assign the starting case for the lcv
//Assign the ending case for lcv
//Then increment or decrement to the end case

function divider() {
  console.log("======================================");
}

divider();

var lcv = 0;
while (lcv < 10) {
  console.log("Kenny G!");
  lcv++
}

divider();

var i = 0;
while (i <= 10) {
  console.log(i);
  i += 2;
}

divider();

var i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

divider();

var cars = ["Elantra", "Lambo", "Tesla", "Porshe", "Civic", "Delorean"];
var i = 0;
while (i < cars.length) {
  console.log(cars[i]);
  i++;
}

divider();

i = 0;
while (true) {
  if (i === 20) {
    break;
  }
  console.log(i);
  i++;
}






//For loops - same concept as while loops, just written differently
//Still need to have a loop-control-variable

function divider() {
  console.log("=======================");
}

divider();

for (var i=0; i<=10; i++) {
  console.log(i);
}

divider();

var cars = ["Elantra", "Lambo", "Tesla", "Porsche", "Civic", "Delorean", "i3"];
for (var i=0; i<cars.length; i++) {
  console.log(cars[i]);
}

divider();

var cars = ["Elantra", "Lambo", "Tesla", "Porsche", "Civic", "Delorean", "i3"];
for (var eachCar in cars) {
  console.log(cars[eachCar]);
}