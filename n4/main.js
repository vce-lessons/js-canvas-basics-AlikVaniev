let canv = document.createElement('canvas');
let ctx = canv.getContext('2d');

canv.width = window.innerWidth;
canv.height = window.innerHeight 	;

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
  ctx.beginPath();
       ctx.moveTo(canv.width / 2 - 100, canv.height / 2 - 100);
       ctx.lineTo(canv.width / 2 + 100, canv.height / 2 - 100);
       ctx.lineTo(canv.width / 2 + 100, canv.height / 2 + 100);
       ctx.lineTo(canv.width / 2 - 100, canv.height / 2 + 100);
       ctx.lineTo(canv.width / 2 - 100, canv.height / 2 - 100);
       ctx.stroke();
  ctx.closePath();
}
