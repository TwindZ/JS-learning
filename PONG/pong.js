let paddleSpeed = 5
let ballBaseSpeed = 7
let paddleStartPosition = 350
let ballSpeedY = Math.floor((Math.random() * 10) + 1)
let ballSpeedX = 10 - ballSpeedY + 1
let paddleLeftTag = document.getElementById("paddleLeft")
let paddleRightTag = document.getElementById("paddleRight")
let ballTag = document.getElementById("ball")
let gameoverTag = document.getElementById("gameover")

let gameStat = {
	p1Name: "",
	p2Name: "",
	scorep1: 0,
	scorep2: 0
}

let ball = {
	posX : 500,
	posY : 500,
	diameter: 50,
	dirX : 1,
	dirY : 1,
	hitBoxLeft: 0,
	hitBoxRight: 0,
	hitBoxTop: 0,
	hitBoxBottom: 0,
}

let paddleLeft = {
	pos : 350,
	height: 300,
	dir1 : false,
	dir2 : false,
	hitBoxStart : 0,
	hitBoxEnd : 0,
	hitBoxX: 50 //a define width + posx
}
let paddleRight = {
	pos : 350,
	dir1 : false,
	dir2 : false,
	hitBoxStart : 0,
	hitBoxEnd : 0,
}
function gameOver(){
	gameoverTag.style.display = "block"
}

function faceOff(){
	let randnb = Math.random()
	if(randnb < 0.5)
		ball.dirX = 1
	else
		ball.dirX = -1
	randnb = Math.random()
	if(randnb < 0.5)
		ball.dirY = 1
	else
		ball.dirY = -1
	paddleLeft.pos = paddleStartPosition
	paddleRight.pos = paddleStartPosition
}

function hitBoxesUpdate(){
	ball.hitBoxLeft = ball.posX
	console.log("left :" + ball.hitBoxLeft)
	ball.hitBoxTop = ball.posY
	console.log("top :" + ball.hitBoxTop)
	ball.hitBoxBottom = ball.posX + (ball.diameter)
	console.log("Bottom :" + ball.hitBoxBottom)
	ball.hitBoxRight = ball.posY + (ball.diameter)
	console.log("Right :" + ball.hitBoxRight)

	paddleLeft.hitBoxStart = paddleLeft.pos
	console.log("Left start :" + paddleLeft.hitBoxStart)
	paddleLeft.hitBoxEnd = paddleLeft.pos + paddleLeft.height
	console.log("left end :" + paddleLeft.hitBoxEnd)

	paddleRight.hitBoxStart = paddleRight.pos
	console.log("Right start :" + paddleRight.hitBoxStart)
	paddleRight.hitBoxEnd = paddleRight.pos + paddleLeft.height// avoir const paddle size
	console.log("right end :" + paddleRight.hitBoxEnd)

}


function randAngle(){
	return Math.random();
}

function moveBall(){
	hitBoxesUpdate()
	if(ball.dirX > 0){
		ball.posX += ballSpeedX
	}
	if(ball.dirX < 0){
		ball.posX -= ballSpeedX
	}
	if(ball.dirY > 0){
		ball.posY += ballSpeedY
	}
	if(ball.dirY < 0){
		ball.posY -= ballSpeedY
	}
	if(ball.hitBoxLeft >= 900 && ball.hitBoxLeft <= 910/* width + posx de paddle right*/ && ball.posY + (ball.diameter / 2) >= paddleRight.hitBoxStart && ball.posY <= paddleRight.hitBoxEnd){
		ball.dirX = -1
		ballSpeedY = Math.floor((Math.random() * 10) + 1)
		ballSpeedX = 10 - ballSpeedY + 2
	}
	if(ball.posX > 960){
		ball.dirX = 0
		ball.dirY = 0
		gameOver()
	}

	if(ball.hitBoxLeft <= 50 && ball.hitBoxLeft >= 40/* width + posx de paddle left*/ && ball.posY + (ball.diameter / 2) >= paddleLeft.hitBoxStart && ball.posY <= paddleLeft.hitBoxEnd){
	ball.dirX = 1
	ballSpeedY = Math.floor((Math.random() * 10) + 1)
	ballSpeedX = 10 - ballSpeedY + 2

	}
	if(ball.posX <  5){
		ball.dirX = 0
		ball.dirY = 0
		gameOver()
	}
	if(ball.posY > 960)
		ball.dirY = -1
	if(ball.posY < 5)
		ball.dirY = 1

	ballTag.style.top = ball.posY + "px"
	ballTag.style.left = ball.posX + "px"
	paddleLeftTag.style.top = paddleLeft.pos + "px"
	requestAnimationFrame(moveBall);
	// console.log()
}

function movePaddles() {
	if (paddleLeft.dir1 === true) {
		if(paddleLeft.pos > 10)
			paddleLeft.pos -= paddleSpeed
	} else if (paddleLeft.dir2 === true) {
		if(paddleLeft.pos < 690)
			paddleLeft.pos += paddleSpeed
	}
	if (paddleRight.dir1 === true) {
		if(paddleRight.pos > 10)
			paddleRight.pos -= paddleSpeed
	} else if (paddleRight.dir2 === true) {
		if(paddleRight.pos < 690)
			paddleRight.pos += paddleSpeed
	}
		
	paddleLeftTag.style.top = paddleLeft.pos + "px"
	paddleRightTag.style.top = paddleRight.pos + "px"
	requestAnimationFrame(movePaddles);
}

document.addEventListener("keydown", event => {
	if(event.key === "w")
		paddleLeft.dir1 = true;
	if(event.key === "s")
		paddleLeft.dir2 = true;
	if(event.key === "ArrowUp")
		paddleRight.dir1 = true;
	if(event.key === "ArrowDown")
		paddleRight.dir2 = true;
});

document.addEventListener("keyup", event => {
	if(event.key === "w")
		paddleLeft.dir1 = false;
	if(event.key === "s")
		paddleLeft.dir2 = false;
	if(event.key === "ArrowUp")
		paddleRight.dir1 = false;
	if(event.key === "ArrowDown")
		paddleRight.dir2 = false;
});

faceOff()
movePaddles()
moveBall()