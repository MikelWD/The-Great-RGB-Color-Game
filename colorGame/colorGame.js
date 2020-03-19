var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var pickedColor = pickColor();
var newGame = document.querySelector("#newGame");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var buttons = document.querySelectorAll("button");
var messageDisplay = document.querySelector("#messageDisplay");
rgbDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var num = 6;

for( var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if( clickedColor == pickedColor ){
			messageDisplay.textContent = "Correct!";
			newGame.textContent = "Play Again!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}



function changeColor(color){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(numb){
	var arr = [];
	for( var i = 0; i < numb; i++ ){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

newGame.addEventListener("click", function(){
	newGame.textContent = "New Colors";
	messageDisplay.textContent = " ";
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	for( var i = 0; i < numSquares; i++ ){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	for( var i = 0; i < squares.length; i++ ){
		if(i < 3){
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";

});
hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	rgbDisplay.textContent = pickedColor;
	for( var i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
});

