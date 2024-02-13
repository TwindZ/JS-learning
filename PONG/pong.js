let paddleSpeed = 20
let ballBaseSpeed = 5
let ballSpeed = ballBaseSpeed
let paddleLeftTag = document.getElementById("paddleLeft")
let paddleRightTag = document.getElementById("paddleRight")
let ballTag = document.getElementById("ball")

let ball = {
	posX : 200,
	posY : 400,
	dirX : 1,
	dirY : -1
}

let paddleLeft = {
	pos : 350,
	dir1 : false,
	dir2 : false
}
let paddleRight = {
	pos : 350,
	dir1 : false,
	dir2 : false
}

function randAngle(){
	return Math.random();
}

function moveBall(){
	if(ball.dirX > 0){
		ball.posX += (ballSpeed)
	}
	if(ball.dirX < 0){
		ball.posX -= ballSpeed
	}
	if(ball.dirY > 0){
		ball.posY += ballSpeed
	}
	if(ball.dirY < 0){
		ball.posY -= ballSpeed
	}
	if(ball.posX === 960)
		ball.dirX = -1
	if(ball.posX === 0)
		ball.dirX = 1
	if(ball.posY === 960)
		ball.dirY = -1
	if(ball.posY === 0)
		ball.dirY = 1

	ballTag.style.top = ball.posY + "px"
	ballTag.style.left = ball.posX + "px"
	paddleLeftTag.style.top = paddleLeft.pos + "px"
	requestAnimationFrame(moveBall);
	console.log()
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

movePaddles()
moveBall()