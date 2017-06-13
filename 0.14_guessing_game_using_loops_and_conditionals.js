/*
Guessing Game App - 30 minutes
Gameplay:
  1. computer has a guess (hard code this)
  2. user has a guess (hard code this)
  3. user guess can only be between 1 and 10 - handle any condition outside these values
  4. provide the user friendly nudges to the answer
*/

var computerGuess = Math.floor((Math.random() * 10) + 1);
var userGuess = 0;
var guessCount = 3;

while (guessCount > 0) {
  userGuess = prompt("Please guess a number between 1 and 10");
  userGuess = parseInt(userGuess);
  
  while (userGuess < 1 || userGuess > 10 || isNaN(parseFloat(userGuess)) ) {
    alert("Error! Invalid choice, please choose a number BETWEEN 1 AND 10");
    userGuess = prompt("Please guess a number between 1 and 10");
    userGuess = parseInt(userGuess);
  }
  
  if (userGuess < computerGuess) {
    if (guessCount !== 1) {
      alert("Guess a little HIGHER");
    } else {
      alert("Game over, the correct answer was: " + computerGuess);
    }
  } else if (userGuess > computerGuess) {
    if (guessCount !== 1) {
      alert("Guess a little LOWER");
    } else {
      alert("Game over, the correct answer was: " + computerGuess);
    }
  } else if (userGuess === computerGuess) {
    alert("You guessed correctly! You win!");
    break;
  } else {
    alert("Error in userGuess vs computerGuess if/else checks");
  }
  
  guessCount--;
}


