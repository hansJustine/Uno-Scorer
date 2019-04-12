// INPUT NUMBERS
var inputNumber1 = document.querySelector("#inputNumber1");
var inputNumber2 = document.querySelector("#inputNumber2");

//ADD BUTTONS
var add1 = document.querySelector("#add1");
var add2 = document.querySelector("#add2");

//Score Display
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");

//Decision
var p1Decision = document.getElementById("p1Win");
var p2Decision = document.getElementById("p2Win");

//Sum
var p1Sum = 0;
var p2Sum = 0;

var gameOver =  false;
var winningScore = 500;
var resetButton = document.getElementById("reset");


add1.addEventListener("click", function(){
	if(!gameOver){
		add();
		if(p1Sum >= winningScore){
			p1ScoreDisplay.classList.add("winnerColor");
			p1Decision.textContent = "Player 1 Wins!";
			p2ScoreDisplay.classList.add("loserColor");
			gameOver = true;
		}
	}		
});

add2.addEventListener("click", function(){
	if(!gameOver){
		addP2();
		if(p2Sum >= winningScore){
			p2ScoreDisplay.classList.add("winnerColor");
			p2Decision.textContent = "Player 2 Wins!";
			p1ScoreDisplay.classList.add("loserColor");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
		//Sum
		p1Sum = 0;
		p2Sum = 0;
		//Score Display
		p1ScoreDisplay.textContent = 0;
		p2ScoreDisplay.textContent = 0;
		//Decision
		p1Decision.textContent =  null;
		p2Decision.textContent =  null;
		//Winner Color
		p1ScoreDisplay.classList.remove("winnerColor");
		p2ScoreDisplay.classList.remove("winnerColor");
		//Loser Color
		p1ScoreDisplay.classList.remove("loserColor");
		p2ScoreDisplay.classList.remove("loserColor");
		gameOver = false;
});


function add(){
	var x = Number(inputNumber1.value);
	var y = Number(inputNumber2.value);
	p1Sum = document.querySelector("#p1ScoreDisplay").textContent = x + y;
}
function addP2(){
	var x = Number(inputNumber3.value);
	var y = Number(inputNumber4.value);
	p2Sum = document.querySelector("#p2ScoreDisplay").textContent = x + y;
}
