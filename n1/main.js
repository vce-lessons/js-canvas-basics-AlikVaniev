let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerWidth;

document.body.appendChild(canv);

let X;
init();

function init() {
	X=100;
	loop();

}


function loop() {
	draw();

	requestAnimationFrame(loop);
}

function draw() {

ctx.clearRect(100, 100, window.innerWidth, window.innerHeight);
							/*x,y,width,height*/
ctx.fillRect(100, 100, 160, 120);

}