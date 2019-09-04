window.playgame = function(){

window.gamestartcall && window.gamestartcall();
try{
	if(typeof window.audioCtx == "undefined"){
		window.audioCtx = new AudioContext();
	};
	var beep = function(freq){
		var oscillator = audioCtx.createOscillator();
		var gainNode = audioCtx.createGain();
		oscillator.connect(gainNode);
		gainNode.connect(audioCtx.destination);
		oscillator.type = "square";
		oscillator.frequency.value = parseInt(freq);
		gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
		gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + .01);
		oscillator.start(audioCtx.currentTime);
		gainNode.gain.exponentialRampToValueAtTime(1e-3, audioCtx.currentTime + 1);
		oscillator.stop(audioCtx.currentTime + 1);
	}
}
catch(e){ console.log(e); };
var mute = false, playScoreSound = function(){
	if(mute) return;
	beep && beep(440 * Math.pow(2, 3 / 12));
	beep && setTimeout(function() { beep(440 * Math.pow(2, 10 / 12)); }, 100);
};

setTimeout(function(){
	layer.style.opacity = 1;
	layer.style.transform = "scale(1,1)";
	playing = 0;
	if(navigator.vibrate) navigator.vibrate(500);
}, 100);

var exit = function(){
	document.body.removeChild(layer);
	document.removeEventListener("keydown", tap);
	document.body.style.overflow = "";
	playing = -1;
	window.gameexitcall && window.gameexitcall();
};

document.body.style.overflow = "hidden";
var layer = document.createElement("div");
with(layer.style){
	position = "absolute";
	top = left = 0;
	height = width = "100%";
	zIndex = 999;
	transition = "all 1s";
	opacity = 0;
	transform = "scale(0,0)";
	fontFamily = "sans-serif";
	overflow = "hidden";
};
document.body.appendChild(layer);
var gamelayer = document.createElement("div");
with(gamelayer.style){
	position = "absolute";
	top = left = 0;
	height = width = "100%";
};
layer.appendChild(gamelayer);
var randcol = function(){
	var str = "#";
	for(var i = 0; i < 6; i ++) str += parseInt(Math.random() * 16).toString(16);
	return str;
};
var setBg = function(){
	var colors = ["51,255,102", "102,204,255", "255,153,255", "255,153,102", "204,102,255"];
	layer.style.background = "linear-gradient(rgba(" + colors[parseInt(Math.random() * colors.length)] + ",.9), rgba(255,255,255,.75))";
};
setBg();

var buttonlayer = document.createElement("div");
with(buttonlayer.style){
	position = "absolute";
	top = right = 0;
};
layer.appendChild(buttonlayer);
var addButton = function(text, color, func){
	var elem = document.createElement("div");
	with(elem.style){
		margin = "5px 5px 0 0";
		border = "1px solid #FFF";
		float = "right";
		fontSize = "18px";
		padding = "5px";
		borderRadius = "5px";
		color = "#FFF";
		opacity = .8;
		cursor = "pointer";
	};
	elem.style.background = color;
	elem.innerHTML = text;
	buttonlayer.appendChild(elem);
	var f = function(e){ e.preventDefault(); e.cancelBubble = true; func(); };
	elem.addEventListener("mousedown", f);
	elem.addEventListener("touchstart", f);
	return elem;
};
addButton("退出", "#FF3300", function(){ exit(); });
var pausebtn = addButton("暂停", "#666", function(){
	pause = !pause;
	pausebtn.style.background = pause ? "#FC0" : "#666";
	pausebtn.style.color = pause ? "#000" : "#FFF";
});
var mutebtn = addButton("静音", "#666", function(){
	mute = !mute;
	mutebtn.style.background = mute ? "#FC0" : "#666";
	mutebtn.style.color = mute ? "#000" : "#FFF";
});
var scmeter = addButton("0", "#007FFF", function(){});
buttonlayer.appendChild(document.createElement("br"));
var animbtn = addButton("性能", "#666", function(){
	anim = !anim;
	animbtn.style.background = anim ? "#FC0" : "#666";
	animbtn.style.color = anim ? "#000" : "#FFF";
});
var movebtn = addButton("移动", "#666", function(){
	move = !move;
	movebtn.style.background = move ? "#FC0" : "#666";
	movebtn.style.color = move ? "#000" : "#FFF";
});
var dragbtn = addButton("拖拽", "#666", function(){
	drag = !drag;
	dragbtn.style.background = drag ? "#FC0" : "#666";
	dragbtn.style.color = drag ? "#000" : "#FFF";
});

var ty = 100, my = 0, ds = 0, sc = 0, playing = -1, time = 0;
var pause = false, move = false, drag = false, anim = false;
var player = document.createElement("div");
with(player.style){
	position = "absolute";
	left = "155px";
	top = (ty - 45) + "px";
	width = "90px";
	height = "80px";
	//background = "#FFF";
	backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAC0CAYAAABsb0igAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA5LTAzVDEzOjE5OjAxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wOS0wM1QxMzoyMDoxMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOS0wM1QxMzoyMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNmY3OTU1My1lZTI0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')";
	backgroundPositionX = "-720px";
};
gamelayer.appendChild(player);
var tap = function(e){
	e.cancelBubble = true;
	e.preventDefault();
	if(playing == 0) playing = 1, frame();
	if(playing == 1 && !drag && !pause) ds = -10;
	if(playing == 2){
		playing = 3;
		var lt = document.querySelectorAll(".bar").length, nw = 0;
		document.querySelectorAll(".bar").forEach(function(b){
			var ww = layer.offsetWidth, wh = layer.offsetHeight;
			nw ++;
			setTimeout(function(){ b.querySelector("#pipe_up").style.top = (- wh * 2) + "px"; }, nw * 200);
			setTimeout(function(){ b.querySelector("#pipe_down").style.top = wh + "px"; }, nw * 200 + 100);
			setTimeout(function(){ gamelayer.removeChild(b); }, nw * 200 + 1100);
		});
		setTimeout(function(){
			playing = sc = time = ds = 0;
			ty = 100;
			scmeter.innerHTML = 0;
			frame();
			layer.style.transition = "";
			player.style.backgroundPositionY = 0;
			setBg();
		}, lt * 200 + 1200);
	};
};
layer.addEventListener("mousedown", tap);
document.addEventListener("keydown", tap);
layer.addEventListener("touchstart", function(e){
	if(drag) my = e.touches[0].pageY;
	tap(e);
});
layer.addEventListener("mousemove", function(e){ if(drag) my = e.pageY; });
layer.addEventListener("touchmove", function(e){ if(drag) my = e.touches[0].pageY; });
var gameover = function(){
	playing = 2;
	player.style.backgroundPositionY = "-80px";
	layer.style.transition = "all .1s";
	for(var s = 0; s < 5; s ++) (function(){
		var z = s;
		setTimeout(function(){
			layer.style.top = layer.style.left = (10 - z * 2.5) * (z % 2 == 1 ? 1 : -1) + "px";
		}, z * 100);
	})();
	if(navigator.vibrate && !mute) navigator.vibrate(500);
};

var frame = function(){
	if(playing == 1 && pause){
		requestAnimationFrame(frame);
		return false;
	};
	time ++;
	var ww = layer.offsetWidth, wh = layer.offsetHeight;
	if(time % 90 == 45){
		var bar = document.createElement("div"), bx = ww + 36, by = 100 + Math.random() * (wh - 200);
		bar.setAttribute("data-x", bx);
		bar.setAttribute("data-y", by);
		bar.setAttribute("data-move", Math.random() > .5 ? 1 : -1);
		bar.className = "bar";
		with(bar.style){
			position = "absolute";
			width = "36px";
			height = "100%";
		};
		bar.style.left = bx + "px";
		bar.style.top = by + "px";
		gamelayer.appendChild(bar);
		var pipe_up = document.createElement("div"), pipe_down = document.createElement("div");
		pipe_up.id = "pipe_up", pipe_down.id = "pipe_down";
		with(pipe_up.style){
			position = "absolute";
			height = width = "100%";
			left = 0;
			top = (- wh * 2) + "px";
			opacity = 1;
			if(!anim) transition = "all 1s";
		};
		with(pipe_down.style){
			position = "absolute";
			height = width = "100%";
			left = 0;
			top = wh + "px";
			opacity = 1;
			if(!anim) transition = "all 1s";
		};
		bar.appendChild(pipe_up), bar.appendChild(pipe_down);
		var pipe_up_l = document.createElement("div"), pipe_down_l = document.createElement("div");
		var pipe_up_b = document.createElement("div"), pipe_down_b = document.createElement("div");
		pipe_up_b.id = "pipe_up_b", pipe_down_b.id = "pipe_down_b";
		with(pipe_up_l.style){
			position = "absolute";
			height = "100%";
			width = "8px";
			left = "14px";
			bottom = "24px";
			background = "linear-gradient(90deg, #000, #FFF)";
			border = "1px solid #333";
			boxSizing = "border-box";
			boxShadow = "0 0 4px #000";
		};
		with(pipe_down_l.style){
			position = "absolute";
			height = "100%";
			width = "8px";
			left = "14px";
			top = "24px";
			background = "linear-gradient(90deg, #000, #FFF)";
			border = "1px solid #333";
			boxSizing = "border-box";
			boxShadow = "0 0 4px #000";
		};
		with(pipe_up_b.style){
			position = "absolute";
			height = width = "48px";
			left = "-6px";
			bottom = 0;
			borderRadius = "50%";
			background = randcol();
			backgroundImage = "repeating-conic-gradient(" + randcol() + " 0 30deg, " + randcol() + " 0 60deg, " + randcol() + " 0 90deg)";
			boxShadow = "0 0 4px #000";
		};
		with(pipe_down_b.style){
			position = "absolute";
			height = width = "48px";
			left = "-6px";
			top = 0;
			borderRadius = "50%";
			background = randcol();
			backgroundImage = "repeating-conic-gradient(" + randcol() + " 0 30deg, " + randcol() + " 0 60deg, " + randcol() + " 0 90deg)";
			boxShadow = "0 0 4px #000";
		};
		pipe_up.appendChild(pipe_up_l), pipe_down.appendChild(pipe_down_l);
		pipe_up.appendChild(pipe_up_b), pipe_down.appendChild(pipe_down_b);
		setTimeout(function(){ pipe_up.style.top = (- wh - 60) + "px", pipe_down.style.top = "60px"; }, 10);
	};
	player.style.backgroundPositionX = - 80 * (9 - parseInt(time / 4) % 10) + "px";
	player.style.transform = "rotate(" + (- Math.atan2(3, ds) / Math.PI * 180 + 90) / 3 + "deg)";
	if(drag) ds = (my - ty) * .1;
	else ds += .5;
	ty += ds;
	if(ty < 0) ty = ds = 0;
	if(ty > wh && playing != -1) gameover();
	document.querySelectorAll(".bar").forEach(function(b){
		var bx = Number(b.getAttribute("data-x")), by = Number(b.getAttribute("data-y")), mv = Number(b.getAttribute("data-move"));
		bx -= 3;
		if(move) by += 2 * mv;
		if(by < 100 || by > wh - 100) mv = - mv;
		b.setAttribute("data-x", bx), b.setAttribute("data-y", by), b.setAttribute("data-move", mv);
		b.style.left = bx + "px", b.style.top = by + "px";
		if(!anim) b.querySelector("#pipe_up_b").style.transform = "rotate(-" + time + "deg)", b.querySelector("#pipe_down_b").style.transform = "rotate(" + time + "deg)";
		if(bx > 164 && bx < 200){
			if(ty < by - 60 || ty > by + 60){
				b.style.filter = "brightness(0)";
				playing != -1 && gameover();
			};
		};
		if(bx < 164 && !b.hasAttribute("data-pass")){
			b.setAttribute("data-pass", 1);
			b.querySelector("#pipe_up").style.top = (- wh - 150) + "px";
			b.querySelector("#pipe_down").style.top = "150px";
			b.querySelector("#pipe_up").style.opacity = b.querySelector("#pipe_down").style.opacity = .25;
			playScoreSound();
			sc++;
			scmeter.innerHTML = sc;
		};
		if(bx < -36) gamelayer.removeChild(b);
	});
	player.style.top = (ty - 45) + "px";
	if(playing == 1) requestAnimationFrame(frame);
};

}