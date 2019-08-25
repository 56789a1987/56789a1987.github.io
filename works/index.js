let lst = 0, tt = 0, showBackground = true;
window.onscroll = function(){
	var bar = document.querySelector(".topbar"), bh = bar.offsetHeight, st = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	tt += lst - st, lst = st
	if(tt > 0) tt = 0;
	if(tt < -bh) tt = -bh;
	bar.style.top = tt + "px";
}
const getStore = function(k){ return typeof(Storage) !== "undefined" ? localStorage.getItem(k) : false; },
setStore = function(k, v){ typeof(Storage) !== "undefined" && localStorage.setItem(k, v); }
let darkBg, hideItem = false, newWindow;
const toggleBackground = function(){
	darkBg = darkBg == "true" ? "false" : "true";
	setStore("dark_bg", darkBg);
	document.body.classList.toggle("dark");
	document.getElementById("menu_themedarkcolor").classList.toggle("menuselected");
},
toggleItems = function(){
	hideItem = !hideItem;
	document.getElementById("container").style.display = hideItem ? "none" : "block";
	document.getElementById("menu_hideitems").classList.toggle("menuselected");
}
particlesJS("background", {"particles": {"number": {"value": 80,"density": {"enable": true,"value_area": 800}},"color": {"value": "#7F7F7F"},"shape": {"type": "circle","stroke": {"width": 0,"color": "#000000"},"polygon": {"nb_sides": 5},"image": {"src": "","width": 100,"height": 100}},"opacity": {"value": 0.5,"random": false,"anim": {"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size": {"value": 3,"random": true,"anim": {"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked": {"enable": true,"distance": 150,"color": "#7F7F7F","opacity": 0.4,"width": 1},"move": {"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract": {"enable": false,"rotateX": 600,"rotateY": 1200}}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": true,"mode": "grab"},"onclick": {"enable": false,"mode": "push"},"resize": true},"modes": {"grab": {"distance": 400,"line_linked": {"opacity": 1}},"bubble": {"distance": 400,"size": 40,"duration": 2,"opacity": 8,"speed": 3},"repulse": {"distance": 200,"duration": 0.4},"push": {"particles_nb": 4},"remove": {"particles_nb": 2}}},"retina_detect": true});
const showBg = function(){
	document.getElementById("background").style.display = "block";
	if(pJSDom.length > 0 && !showBackground) pJSDom[0].pJS.fn.vendors.start();
	showBackground = true;
	if(typeof(Storage) !== "undefined") localStorage.setItem("showBackground", "true");
	document.getElementById("menu_backgroundfx").classList.add("menuselected");
},
hideBg = function(){
	showBackground = false;
	if(pJSDom.length > 0){
		cancelRequestAnimFrame(pJSDom[0].pJS.fn.checkAnimFrame);
		cancelRequestAnimFrame(pJSDom[0].pJS.fn.drawAnimFrame);
		pJSDom[0].pJS.fn.particlesEmpty();
		pJSDom[0].pJS.fn.canvasClear();
	}
	if(typeof(Storage) !== "undefined") localStorage.setItem("showBackground", "false");
	document.getElementById("menu_backgroundfx").classList.remove("menuselected");
	document.getElementById("background").style.display = "none";
},
openWindow = function(){
	newWindow = true;
	if(typeof(Storage) !== "undefined") localStorage.setItem("newWindow", "true");
	document.querySelectorAll(".item a").forEach(function(e){ e.setAttribute("target", "_blank"); });
	document.getElementById("menu_newwindow").classList.add("menuselected");
},
currentWindow = function(){
	newWindow = false;
	if(typeof(Storage) !== "undefined") localStorage.setItem("newWindow", "false");
	document.querySelectorAll(".item a").forEach(function(e){ e.removeAttribute("target"); });
	document.getElementById("menu_newwindow").classList.remove("menuselected");
}

let hs = false,
harlem = function(){
	if(hs) return;
	hs = true;
	(function(){function c(){var e=document.createElement("link");e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",f);e.setAttribute("class",l);document.body.appendChild(e)}function h(){var e=document.getElementsByClassName(l);for(var t=0;t<e.length;t++){document.body.removeChild(e[t])}}function p(){var e=document.createElement("div");e.setAttribute("class",a);document.body.appendChild(e);setTimeout(function(){document.body.removeChild(e)},100)}function d(e){return{height:e.offsetHeight,width:e.offsetWidth}}function v(i){var s=d(i);return s.height>e&&s.height<n&&s.width>t&&s.width<r}function m(e){var t=e;var n=0;while(!!t){n+=t.offsetTop;t=t.offsetParent}return n}function g(){var e=document.documentElement;if(!!window.innerWidth){return window.innerHeight}else if(e&&!isNaN(e.clientHeight)){return e.clientHeight}return 0}function y(){if(window.pageYOffset){return window.pageYOffset}return Math.max(document.documentElement.scrollTop,document.body.scrollTop)}function E(e){var t=m(e);return t>=w&&t<=b+w}function S(){var e=document.createElement("audio");e.setAttribute("class",l);e.src=i;e.loop=false;e.addEventListener("canplay",function(){setTimeout(function(){x(k)},500);setTimeout(function(){N();p();for(var e=0;e<O.length;e++){T(O[e])}},15500)},true);e.addEventListener("ended",function(){N();h();window.he&&window.he()},true);e.innerHTML=" <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";document.body.appendChild(e);e.play()}function x(e){e.className+=" "+s+" "+o}function T(e){e.className+=" "+s+" "+u[Math.floor(Math.random()*u.length)]}function N(){var e=document.getElementsByClassName(s);var t=new RegExp("\\b"+s+"\\b");for(var n=0;n<e.length;){e[n].className=e[n].className.replace(t,"")}}var e=30;var t=30;var n=350;var r=350;var i="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake.mp3";var s="mw-harlem_shake_me";var o="im_first";var u=["im_drunk","im_baked","im_trippin","im_blown"];var a="mw-strobe_light";var f="//s3.amazonaws.com/moovweb-marketing/playground/harlem-shake-style.css";var l="mw_added_css";var b=g();var w=y();var C=document.getElementsByTagName("*");var k=null;for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){if(E(A)){k=A;break}}}if(A===null){console.warn("Could not find a node of the right size. Please try a different page.");return}c();S();var O=[];for(var L=0;L<C.length;L++){var A=C[L];if(v(A)){O.push(A)}}})();
}
window.he = function(){ hs = false; }

var menulst = [
{ text: "深色主题", id: "menu_themedarkcolor", color: "#999", click: toggleBackground },
{ text: "背景特效", id: "menu_backgroundfx", color: "#0DF", click: function(){ showBackground ? hideBg() : showBg(); }},
{ text: "隐藏项目", id: "menu_hideitems", color: "#0F6", click: toggleItems },
{ text: "新窗口打开", id: "menu_newwindow", color: "#FC0", click: function(){ newWindow ? currentWindow() : openWindow(); }},
{ text: "Hue-rotate", id: "menu_huerotate", color: "#F30", click: function(){
	document.querySelectorAll(".topbar, #container, #background").forEach(function(e){ e.classList.toggle("hue"); });
	document.getElementById("menu_huerotate").classList.toggle("menuselected");
}},
{ text: "Harlem Shake", color: "#F3F", click: harlem }
], filterlst = [];
const addMenu = function(_opt, _node){
	var e = document.createElement("div");
	e.className = "menuitem", e.style.borderColor = _opt.color, e.innerHTML = _opt.text, document.querySelector(_node).appendChild(e), e.addEventListener("click", _opt.click);
	if(_opt.id) e.id = _opt.id;
}
menulst.forEach(function(e){ addMenu(e, ".menu.md"); });

const addItem = function(_opt){
	var e = [
		'<div class="item">',
		'<a href="' + _opt.link + '"><img src="' + _opt.image + '" class="img" /></a>',
		'<div class="tag">' + _opt.tag + '</div>',
		'<a href="' + _opt.link + '" class="desc_title">' + _opt.title + '</a>',
		'<div class="desc">' + _opt.description + '</div>',
		'<div class="desc_auth">',
		'<div class="desc_label" style="border-color:' + _opt.author_color + ';color:' + _opt.author_color + ';">' + _opt.author + '</div>',
		'<img src="' + _opt.author_img + '" />',
		'</div>',
		'</div>'
	];
	document.getElementById("container").innerHTML += e.join("");
};
document.querySelector(".menubtn").addEventListener("click", function(){
	document.querySelector(".menu.md").classList.toggle("menuopen");
	if(document.querySelector(".menu.mf").classList.contains("menuopen")) document.querySelector(".menu.mf").classList.remove("menuopen");
});

var proj = [
{
	link: "arc",
	image: "arc/thumb.png",
	tag: "JavaScript",
	title: "环形时钟 ArcClock",
	description: "基于 JavaScript 和 Canvas 元素创建的环形极地时钟效果",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "nyan",
	image: "nyan/06.png",
	tag: "JavaScript",
	title: "Nyan Cat",
	description: "纯 JavaScript 彩虹猫动画 (^ω^)",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
	{
	link: "canvas_clock",
	image: "canvas_clock/thumb.png",
	tag: "JavaScript",
	title: "Canvas 点阵时钟",
	description: "带动画的 Canvas 点阵时钟效果",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "fountain_input",
	image: "fountain_input/example.png",
	tag: "JavaScript",
	title: "Canvas 字符喷泉",
	description: "基于 Canvas 的彩色字符喷泉效果 <span style=\"text-decoration:line-through;\">(粘贴效果更佳)</span>",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "gradient",
	image: "gradient/thumb.png",
	tag: "JavaScript",
	title: "渐变颜色编码生成",
	description: "选定两个颜色并设置中间颜色数，生成中间颜色及编码",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "ascii/text.html",
	image: "ascii/text_example.png",
	tag: "JavaScript",
	title: "ASCII 文字效果",
	description: "多种基于 ASCII 的文字(字母和数字)效果",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "file2wave",
	image: "file2wave/thumb.png",
	tag: "JavaScript",
	title: "Wave 音频文件生成",
	description: "两种方法生成音频文件 <span style=\"text-decoration:line-through;\">(请谨慎开大音量)</span><br><br>1. Bytebeat 算法音乐<br>2. 任意文件补充 Wave 文件头 <span style=\"text-decoration:line-through;\">(无用技巧)</span>",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "../code/#text_glitch",
	image: "images/text_glitch.png",
	tag: "JavaScript",
	title: "Text Glitch",
	description: "JavaScript 和 CSS 实现的文字闪动效果 <span style=\"text-decoration:line-through;\">(慎入)</span>",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "number",
	image: "number/thumb.png",
	tag: "JavaScript",
	title: "*A*B 猜数字",
	description: "带图形界面的 *A*B 型逻辑猜数字，支持键盘操作<br><br>A - 相同的数字，相同的位置<br>B - 相同的数字，不同的位置",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "ascii/ascii_art.html",
	image: "ascii/ascii_art_example.png",
	tag: "JavaScript",
	title: "ASCII Art (测试)",
	description: "图片转 ASCII Art 字符画 (建议选择明暗对比强烈的图像)",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "css_demo",
	image: "css_demo/thumb.png",
	tag: "CSS",
	title: "纯 CSS 折叠菜单",
	description: "基于 HTML 表单控件和 CSS 选择器实现的折叠菜单效果",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "breakform/break_form.zip",
	image: "breakform/thumb.png",
	tag: "C#",
	title: "Break Form!",
	description: "使用 C# 及 Windows 表单控件制作的简易打砖块游戏。<br><br>需要 .NET Framework 3.5",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
},
{
	link: "OC/20190720214958.jpg",
	image: "OC/20190720214958_s.png",
	tag: "Eternal Love",
	title: "你和我",
	description: "大家好！我叫夜明，一只来自于小马国的小马，喜欢星空。<br><br>来和我看吗? _(:з」∠)_",
	author: "夜明",
	author_color: "#00BFFF",
	author_img: "OC/portrait-2.png"
},
{
	link: "OC/polyethylene_z.png",
	image: "OC/polyethylene_zt.png",
	tag: "Lovely",
	title: "Polyethylene 同人图",
	description: "大家好！我是午夜_Midnight，我为 Polyethylene 画了一幅同人图。<br><br>(Polyethylene 真可爱)",
	author: "午夜_Midnight",
	author_color: "#0066FF",
	author_img: "images/20190729171416.jpg"
},
{
	link: "OC/polyethylene_m.png",
	image: "OC/polyethylene_s.png",
	tag: "var's go!",
	title: "Polyethylene",
	description: "大家好！我叫聚乙烯，一只来自于计算机世界的小马。<br><br>搭建了这个页面，分享部分制作或整理的项目，以及随笔、灵感…",
	author: "Polyethylene",
	author_color: "#077777",
	author_img: "OC/portrait-1.png"
}
];

let auth = [[], []];
proj.forEach(function(t){
	addItem(t);
	if(auth[0].indexOf(t.author) < 0) auth[0].push(t.author), auth[1].push(t.author_color);
});
document.getElementById("container").innerHTML += '<div style="float: left; width: 100%; height: 10px;"></div>';
const setFilter = function(n){ 
	document.querySelectorAll(".item").forEach(function(m){
		m.style.display = "block";
		if(n != "" && m.querySelector(".desc_label").innerHTML != n) m.style.display = "none";
	});
	document.querySelectorAll(".menu.mf .menuitem").forEach(function(e){ e.id === "filter_" + n ? e.classList.add("menuselected") : e.classList.remove("menuselected"); });
}
addMenu({ text: "显示全部", id:"filter_", color: "#999", click: function(){ setFilter(""); }}, ".menu.mf");
auth[0].forEach(function(e, i){ addMenu({ text: e, id: "filter_" + e, color: auth[1][i], click: function(){ setFilter(e); }}, ".menu.mf"); });
document.getElementById("filter_").classList.add("menuselected");
document.querySelector(".filterbtn").addEventListener("click", function(){
	document.querySelector(".menu.mf").classList.toggle("menuopen");
	if(document.querySelector(".menu.md").classList.contains("menuopen")) document.querySelector(".menu.md").classList.remove("menuopen");
});
let mx, my;
document.querySelectorAll(".item").forEach(function(m){
	var down = function(){
		var rx = ((mx - m.offsetLeft) / m.offsetWidth - .5) * 12, ry = -((my - m.offsetTop) / m.offsetHeight - .5) * 16;
		m.style.setProperty("--mx", rx + "deg"), m.style.setProperty("--my", ry + "deg");
	}
	m.addEventListener("mousedown", function(e){ mx = e.pageX, my = e.pageY, down(); });
	m.addEventListener("touchstart", function(e){ mx = e.touches[0].pageX, my = e.touches[0].pageY, down(); });
});
if(typeof(Storage) != "undefined"){
	if(localStorage.getItem("showBackground") == null || localStorage.getItem("showBackground") == "true") showBg();
	else hideBg();
	if(getStore("dark_bg") == null) setStore("dark_bg", "false");
	darkBg = getStore("dark_bg");
	if(darkBg == "true") darkBg = !darkBg, toggleBackground();
	if(localStorage.getItem("newWindow") == null) setStore("newWindow", "false");
	if(getStore("newWindow") == "true") openWindow();
}