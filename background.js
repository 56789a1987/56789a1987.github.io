let af, time = 0;
var backcolor = "hsl(" + (45 + Math.random() * 135) + ",75%,50%)";
const tail = 200,
canvas = document.querySelector("#background canvas"),
ctx = canvas.getContext("2d"),
createLasers = function(n) {
	const lasers = [];
	for (let i = 0; i < n; ++i) {
		lasers.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			s: Math.random() * 2 + 1,
			h: Math.random() * 360
		});
	}
	return lasers;
},
renderLaser = function(l) {
	ctx.save();
	const grad = ctx.createLinearGradient(l.x, l.y, l.x, l.y + tail);
	const a = (1 - (canvas.height - l.y) / canvas.height * .8) * .9;
	grad.addColorStop(0, "hsla(" + l.h + ",100%,100%," + a + ")");
	grad.addColorStop(1, "hsla(" + l.h + ",100%,75%,0)");
	ctx.strokeStyle = grad;
	ctx.lineWidth = 5;
	ctx.beginPath();
	let lx = l.x + l.s * (window.mx || 0) / 3, ly = l.y + l.s * (window.my || 0) / 3;
	ctx.moveTo(lx, ly);
	ctx.lineTo(lx, ly + tail);
	ctx.stroke();
	ctx.restore();
},
updateLaser = function(l) {
	l.y -= l.s * .3;
	if (l.y < -tail) {
		l.y = canvas.height + 20;
	}
},
render = function(lasers) {
	if(!window.pl){
		ctx.fillStyle = backcolor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		for (let l of lasers) {
			renderLaser(l);
			updateLaser(l);
		}
		let mx = window.mx || 0, my = window.my || 0;
		time ++;
		ctx.save();
		ctx.fillStyle = "rgba(255,255,255,.2)";
		for(var gx = 0; gx < canvas.width; gx += 20) ctx.fillRect(gx + (mx / 2 + time / 3) % 20, 0, 1, canvas.height);
		for(var gy = 0; gy < canvas.height + 20; gy += 20) ctx.fillRect(0, gy + (my / 2 - time / 3) % 20, canvas.width, 1);
		ctx.fillStyle = "rgba(255,255,255,.5)";
		for(var gx = 0; gx < canvas.width; gx += 100) ctx.fillRect(gx + (mx / 2 + time / 3) % 100, 0, 2, canvas.height);
		for(var gy = 0; gy < canvas.height + 100; gy += 100) ctx.fillRect(0, gy + (my / 2 - time / 3) % 100, canvas.width, 2);
		ctx.restore();
	}
	af = requestAnimationFrame(() => render(lasers));
},
init = function() {
	cancelAnimationFrame(af);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	render(createLasers(parseInt(window.innerWidth / 5.5)));
};
window.addEventListener("resize", init);
init();