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
	backgroundImage = "url('data:image/png;base64,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')";
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
	player.style.backgroundPositionY = "-90px";
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