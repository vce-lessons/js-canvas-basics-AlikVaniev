let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerWidth;

document.body.appendChild(canv);

let x;
let y;
init();

function init() {
	x=30;
	y=30;
	loop();

}


function loop() {
	draw();

	requestAnimationFrame(loop);
}

function draw() {

ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
ctx.beginPath();
ctx.fillStyle ='rgb(255,0,0)';						
ctx.arc(x++, y++, 20, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

}// Your code here