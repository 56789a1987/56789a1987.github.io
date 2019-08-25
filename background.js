let time = 0, showBackground = true;
const bgContainer = document.getElementById("background"),
canvas = document.querySelector("#background canvas"),
ctx = canvas.getContext('2d'),
resize = function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
},
backgrounds = [
	function(){
		render = function(){
			time ++;
			let w = canvas.width, h = canvas.height;
			ctx.fillStyle = "#022";
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = "#033";
			for(var gx = 0; gx < w; gx += 20) ctx.fillRect(gx + (time / 3) % 20, 0, 1, h);
			for(var gy = 0; gy < h + 20; gy += 20) ctx.fillRect(0, gy + (-time / 3) % 20, w, 1);
			ctx.fillStyle = "#044";
			for(var gx = 0; gx < w; gx += 100) ctx.fillRect(gx + (time / 3) % 100, 0, 2, h);
			for(var gy = 0; gy < h + 100; gy += 100) ctx.fillRect(0, gy + (-time / 3) % 100, w, 2);
			if(showBackground) requestAnimationFrame(render);
		}
		render();
	},
	function(){
		var cd = new Array();
		const render = function(){
			for(var i = 0; i < Math.ceil(canvas.width / 700); i ++) cd.push({ x: canvas.width * Math.random(), y: 0, h: canvas.height * Math.random() * 1.5});
			ctx.fillStyle = "rgba(0,0,0,.1)", ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "#00FF00", ctx.font = '20px "Helvetica Neue", Helvetica, sans-serif';
			cd.forEach(function(o, i) {
				var code = 12353 + Math.random() * 179;
				if(code >= 12439) code += 6;
				let text = String.fromCharCode(code);
				ctx.fillText(text, o.x, o.y);
				o.y += 20;
				if(o.y > o.h) cd.splice(i, 1);
 			});
			if(showBackground) setTimeout(render, 30);
		}
		render();
	},
	function(){
		var ls = new Array();
		const render = function(){
			for(var i = 0; i < Math.ceil(canvas.width / 700); i ++) if(time % 8 === 0){
				let x = canvas.width * Math.random(), y = canvas.height * Math.random(), h = Math.random() * 360, s = 2 + Math.random() * 10, l = 50 + Math.random() * 50;
				for(var j = 0; j < 6; j ++) ls.push({ x: x, y: y, d: j * 60, sp: s * .75, h: h, s: s, l: l, ds: -1.5});
			}
			ctx.fillStyle = "rgba(0,0,0,.05)", ctx.fillRect(0, 0, canvas.width, canvas.height);
			ls.forEach(function(l, i) {
				ctx.lineWidth = 2, ctx.strokeStyle = "hsla(" + l.h + ",100%,50%," + l.l / 100 + ")", ctx.beginPath(), ctx.strokeRect(l.x, l.y, l.s, l.s);
				let rad = l.d * Math.PI / 180;
				l.x += l.sp * Math.cos(rad), l.y += l.sp * Math.sin(rad) + l.ds, l.l --, l.ds += .07;
				if(l.l < 0) ls.splice(i, 1);
 			});
			time ++;
			if(showBackground) requestAnimationFrame(render);
		}
		render();
	},
	function(){
		var ls = new Array();
		const render = function(){
			for(var i = 0; i < Math.ceil(canvas.width / 700); i ++) if(time % 2 === 0) ls.push({ x: canvas.width * Math.random(), y: canvas.height  * Math.random(), d: Math.floor(Math.random() * 6) * 60, sp: 2 + Math.random() * 5, h: Math.random() * 90 + 180, s: 5 + Math.random() * 18 , l: Math.floor(100 + Math.random() * 50)});
			ctx.fillStyle = "rgba(0,0,0,.05)", ctx.fillRect(0, 0, canvas.width, canvas.height);
			ls.forEach(function(l, i) {
				ctx.beginPath(), ctx.lineWidth = 2, ctx.strokeStyle = "hsl(" + l.h + ",100%,50%)", ctx.strokeRect(l.x, l.y, l.s, l.s), ctx.closePath();
				let rad = l.d * Math.PI / 180;
				if(l.l % 20 === 0) l.d += Math.floor(Math.random() * 3) * 60 - 60;
				l.x += l.sp * Math.cos(rad), l.y += l.sp * Math.sin(rad), l.l --;
				if(l.l < 0) ls.splice(i, 1);
 			});
			time ++;
			if(showBackground) requestAnimationFrame(render);
		}
		render();
	},
	function(){
		var cd = new Array();
		const render = function(){
			for(var i = 0; i < Math.ceil(canvas.width / 700); i ++) if(time % 4 === 0) cd.push({ x: canvas.width / 2, y: canvas.height + 20, vx: (Math.random() - .5) * canvas.width / 100, vy: -Math.random() * Math.sqrt(canvas.height) * .7, c: String.fromCharCode(Math.random() * 93 + 33), h: Math.random() * 360}), cd.push({ x: canvas.width / 2, y: canvas.height + 20, vx: (Math.random() - .5) * canvas.width / 100, vy: -Math.random() * Math.sqrt(canvas.height) * .7, c: String.fromCharCode(Math.random() * 94 + 161), h: Math.random() * 360});
			ctx.fillStyle = "rgba(0,0,0,.2)", ctx.fillRect(0, 0, canvas.width, canvas.height), ctx.font = '20px "Helvetica Neue", Helvetica, sans-serif';
			cd.forEach(function(o, i) {
				ctx.fillStyle = "hsl(" + o.h + ",100%,50%)";
				ctx.fillText(o.c, o.x, o.y);
				o.x += o.vx, o.y += o.vy, o.vy += .15;
				if(o.y > canvas.height + 20) cd.splice(i, 1);
 			});
			time ++;
			if(showBackground) requestAnimationFrame(render);
		}
		render();
	}
];
window.addEventListener("resize", resize);
resize();
let bi = Math.floor(backgrounds.length * Math.random());
window.showBg = function(){
	showBackground = true;
	bgContainer.style.display = "block";
	let bg = backgrounds[bi];
	bg();
}
window.hideBg = function(){
	showBackground = false;
	bgContainer.style.display = "none";
}
window.showBg();