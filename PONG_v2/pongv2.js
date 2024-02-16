let board = {width : 1000, height : 600}
let paddle1 = {x : 25, y : 300, width : 25, height : 200}
let paddle2 = {width : 25, height : 200, x : 0, y : 0 }
let control = {w : false, s: false, arrowUp : false, arrowDown : false}
let ball = {x : 400, y : 400, r : 25, dirX : 1, dirY : -1, speedX : -4, speedY : 0}
let gameInfo = {p1Scrore : 0, p2Score : 0, gameover : false}
let shadowOffset = 5

const canvasTag = document.getElementById("canvasPong");
const ctx = canvasTag.getContext("2d");

function initGame(){
	canvasTag.width = board.width
	canvasTag.height = board.height
	
	paddle1.x = 25
	paddle1.y = (board.height / 2) - (paddle1.height / 2)
	paddle2.x = board.width - 25 - paddle1.width
	paddle2.y = (board.height / 2) - (paddle1.height / 2)
	ball.x = board.width / 2
	ball.y = board.height / 2
}

function draw() {
	
	if (canvasTag.getContext) {
		drawElement()
		controlDetection()
		ballPhysic()
		requestAnimationFrame(draw)
	}
}

function drawElement(){
	ctx.clearRect(0 , 0, board.width, board.height);
	drawShadow()
	drawBall()
	drawPaddle(paddle1)
	drawPaddle(paddle2)
}

function drawShadow(){
	ctx.fillStyle = "rgb(0 0 0)";
	ctx.beginPath();
	ctx.arc(ball.x + shadowOffset, ball.y + shadowOffset, ball.r, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillRect(paddle1.x + shadowOffset, paddle1.y + shadowOffset, paddle1.width, paddle1.height);
	ctx.fillRect(paddle2.x + shadowOffset, paddle2.y + shadowOffset, paddle2.width, paddle2.height);
	
}

function drawBall(){
	
	ctx.beginPath();
	ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
	ctx.fillStyle = "rgb(255 0 0)";
	ctx.fill();
}

function drawPaddle(paddle){
	ctx.fillStyle = "rgb(0 0 0)";
	ctx.fillRect(paddle.x + shadowOffset, paddle.y + shadowOffset, paddle.width, paddle.height);
	ctx.fillStyle = "rgb(0 200 0)";
	ctx.fillRect(paddle.x , paddle.y, paddle.width, paddle.height);
}

function controlDetection(){
	if(control.w === true && paddle1.y > 10)
		paddle1.y -= 4
	if(control.s === true && paddle1.y < board.height  - 10 - paddle2.height)
		paddle1.y += 4
	if(control.arrowUp === true && paddle2.y > 10)
		paddle2.y -= 4
	if(control.arrowDown === true && paddle2.y < board.height - 10 - paddle2.height)
	paddle2.y += 4
}

function ballPhysic(){
	moveBall()
	sideRebound()
	paddleColision()
	goalDetection()
}

function moveBall(){
	if(ball.dirX > 0)
	ball.x += ball.speedX
if(ball.dirX < 0)
ball.x -= ball.speedX
if(ball.dirY > 0)
ball.y += ball.speedY
if(ball.dirY < 0)
ball.y -= ball.speedY
}

function sideRebound(){
	if(ball.y < ball.r){
		ball.dirY = 1
	}
	if(ball.y > board.height - ball.r){
		ball.dirY = -1
	}
}

function paddleColision(){
	if(ball.x - ball.r <= paddle1.x + paddle1.width && ball.y >= paddle1.y && ball.y <= paddle1.y + paddle1.height){
		changeAngle()
		ball.dirX = 1
	}
	if(ball.x + ball.r >= paddle2.x && ball.y >= paddle2.y && ball.y <= paddle2.y + paddle1.height){
		changeAngle()
		ball.dirX = -1
	}
}

function goalDetection(){
	if(ball.x < ball.r){
		changeAngle()
		ball.dirX = 1
	}
	if(ball.x > board.width - ball.r){
		changeAngle()
		ball.dirX = -1
	}
}

function changeAngle(){
	ball.speedX = Math.round(Math.random() * 10 + 2)
	ball.speedY = 10 - ball.speedX + 2
}

document.addEventListener("keydown", event => {
	if(event.key === "w")
		control.w = true
	if(event.key === "s")
		control.s = true
	if(event.key === "ArrowUp")
		control.arrowUp = true
	if(event.key === "ArrowDown")
		control.arrowDown = true
})

document.addEventListener("keyup", event => {
	if(event.key === "w")
		control.w = false
	if(event.key === "s")
		control.s = false
	if(event.key === "ArrowUp")
		control.arrowUp = false
	if(event.key === "ArrowDown")
		control.arrowDown = false
})

initGame()
draw()