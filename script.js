var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var rstButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var scoreCap = 5;
var gameover = false;


p1Button.addEventListener("click", function(){
	if (!gameover) {
		p1Score++;
		if (p1Score === scoreCap) {
			p1Display.classList.add("winner");
			gameover = true;
		}
		document.getElementById("p1Score").textContent = p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	if (!gameover) {
		p2Score++;
		if (p2Score === scoreCap) {
			p2Display.classList.add("winner");
			gameover = true;
		}	
		document.getElementById("p2Score").textContent = p2Score;
	}
});

rstButton.addEventListener("click", function(){
	reset();
});

function reset(){
	document.getElementById("p1Score").textContent = "0";
	p1Score = 0;
	document.getElementById("p2Score").textContent = "0";
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover = false;
}

numInput.addEventListener("change", function(){
	winScoreDisplay.textContent = numInput.value;
	scoreCap = Number(numInput.value);
	reset();
})


