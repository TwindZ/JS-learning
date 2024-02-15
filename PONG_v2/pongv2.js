let paddle1 = {x : 25, y : 300, width : 25, height : 200}
let paddle2 = {x : 750, y : 300, width : 25, height : 200}
let control = {w : false, s: false, arrowUp : false, arrowDown : false}
let ball = {x : 0, y : 0, r : 0}
let board = {width : 800, height : 800}

const canvas = document.getElementById("canvasPong");
const ctx = canvas.getContext("2d");

function draw() {
	
	if (canvas.getContext) {
	drawElement(ctx)
	controlDetection()
	requestAnimationFrame(draw)
	}
}

function drawElement(ctx){
	ctx.clearRect(0 , 0, board.width, board.height);

	ctx.fillStyle = "rgb(0 0 0)";
	ctx.strokeRect(0, 0, board.width, board.height)
	
	ctx.fillStyle = "rgb(200 0 0)";
	ctx.fillRect(paddle1.x , paddle1.y, paddle1.width, paddle1.height);

	ctx.fillStyle = "rgb(0 200 0)";
	ctx.fillRect(paddle2.x , paddle2.y, paddle2.width, paddle2.height);
}

function controlDetection(){
	if(control.w === true && paddle1.y > 0){
		paddle1.y -= 4
	}
	if(control.s === true && paddle1.y < board.height - paddle2.height){
		paddle1.y += 4
	}
	if(control.arrowUp === true && paddle2.y > 0){
		paddle2.y -= 4
	}
	if(control.arrowDown === true && paddle2.y < board.height - paddle2.height){
		paddle2.y += 4
	}
}

document.addEventListener("keydown", event => {
	if(event.key === "w")
		control.w = true;
	if(event.key === "s")
		control.s = true;
	if(event.key === "ArrowUp")
		control.arrowUp = true;
	if(event.key === "ArrowDown")
		control.arrowDown = true;
});

document.addEventListener("keyup", event => {
	if(event.key === "w")
		control.w = false;
	if(event.key === "s")
		control.s = false;
	if(event.key === "ArrowUp")
		control.arrowUp = false;
	if(event.key === "ArrowDown")
		control.arrowDown = false;
});

draw();