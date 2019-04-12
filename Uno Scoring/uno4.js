// INPUT NUMBERS
var inputNumber1 = document.querySelector("#inputNumber1");
var inputNumber2 = document.querySelector("#inputNumber2");
var inputNumber3 = document.querySelector("#inputNumber3");
var inputNumber4 = document.querySelector("#inputNumber4");
var inputNumber5 = document.querySelector("#inputNumber5");
var inputNumber6 = document.querySelector("#inputNumber6");
var inputNumber7 = document.querySelector("#inputNumber7");
var inputNumber8 = document.querySelector("#inputNumber8");

//ADD BUTTONS
var add1 = document.querySelector("#add1");
var add2 = document.querySelector("#add2");
var add3 = document.querySelector("#add3");
var add4 = document.querySelector("#add4");

//Score Display
var p1ScoreDisplay = document.querySelector("#p1ScoreDisplay");
var p2ScoreDisplay = document.querySelector("#p2ScoreDisplay");
var p3ScoreDisplay = document.querySelector("#p3ScoreDisplay");
var p4ScoreDisplay = document.querySelector("#p4ScoreDisplay");

//Decision
var p1Decision = document.getElementById("p1Win");
var p2Decision = document.getElementById("p2Win");
var p3Decision = document.getElementById("p3Win");
var p4Decision = document.getElementById("p4Win");


//Sum
var p1Sum = 0;
var p2Sum = 0;
var p3Sum = 0;
var p4Sum = 0;

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
			p3ScoreDisplay.classList.add("loserColor");
			p4ScoreDisplay.classList.add("loserColor");
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
			p3ScoreDisplay.classList.add("loserColor");
			p4ScoreDisplay.classList.add("loserColor");
			gameOver = true;
		}
	}
});

add3.addEventListener("click", function(){
	if(!gameOver){
		addP3();
		if(p3Sum >= winningScore){
			p3ScoreDisplay.classList.add("winnerColor");
			p3Decision.textContent = "Player 3 Wins!";
			p1ScoreDisplay.classList.add("loserColor");
			p2ScoreDisplay.classList.add("loserColor");
			p4ScoreDisplay.classList.add("loserColor");
			gameOver = true;
		}
	}		
});

add4.addEventListener("click", function(){
	if(!gameOver){
		addP4();
		if(p4Sum >= winningScore){
			p4ScoreDisplay.classList.add("winnerColor");
			p4Decision.textContent = "Player 4 Wins!";
			p1ScoreDisplay.classList.add("loserColor");
			p2ScoreDisplay.classList.add("loserColor");
			p3ScoreDisplay.classList.add("loserColor");
			gameOver = true;
		}
	}
});

resetButton.addEventListener("click", function(){
		//Sum
		p1Sum = 0;
		p2Sum = 0;
		p3Sum = 0;
		p4Sum = 0;
		//Score Display
		p1ScoreDisplay.textContent = 0;
		p2ScoreDisplay.textContent = 0;
		p3ScoreDisplay.textContent = 0;
		p4ScoreDisplay.textContent = 0;
		//Decision
		p1Decision.textContent =  null;
		p2Decision.textContent =  null;
		p3Decision.textContent =  null;
		p4Decision.textContent =  null;
		//Winner Color
		p1ScoreDisplay.classList.remove("winnerColor");
		p2ScoreDisplay.classList.remove("winnerColor");
		p3ScoreDisplay.classList.remove("winnerColor");
		p4ScoreDisplay.classList.remove("winnerColor");
		//Loser Color
		p1ScoreDisplay.classList.remove("loserColor");
		p2ScoreDisplay.classList.remove("loserColor");
		p3ScoreDisplay.classList.remove("loserColor");
		p4ScoreDisplay.classList.remove("loserColor");
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
function addP3(){
	var x = Number(inputNumber5.value);
	var y = Number(inputNumber6.value);
	p3Sum = document.querySelector("#p3ScoreDisplay").textContent = x + y;
}
function addP4(){
	var x = Number(inputNumber7.value);
	var y = Number(inputNumber8.value);
	p4Sum = document.querySelector("#p4ScoreDisplay").textContent = x + y;
}
