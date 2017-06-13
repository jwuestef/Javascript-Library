var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number'");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;
		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;
		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function() {
	reset()
});

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset()
})

function reset() {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}





var lis = document.querySelectorAll("li");

for (var i=0; i<lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("selected");
	})

	lis[i].addEventListener("mouseout", function() {
		this.classList.remove("selected");
	})

	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
}

