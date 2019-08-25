//ArcClock.js
var newArcClock = function (_element) {
	var started = false;
	var canvas = _element;
	if (typeof canvas.getContext == "undefined") return;
	var ctx = canvas.getContext('2d');
	var gradintCanvas = document.createElement("canvas");
	gradintCanvas.setAttribute("height", "1");
	gradintCanvas.setAttribute("width", "360");
	var gctx = gradintCanvas.getContext('2d');
	var _def = {
			thickness: 35,
			fontSize: 16,
			roundCap: false,
			font: "Consolas",
			boldFont: true,
			textColor: "#000000",
			padding: 4,
			textPadding: .5,
			fillColors: ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#FF00FF", "#FF0000"],
			order: ["Seconds", "Minutes", "Hours", "Day", "Date", "Month"],
			texts: [" second", " seconds", " minute", " minutes", " hour", " hours", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "th", "st", "nd", "rd", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			twentyFourHours: true,
			autoFlipTexts: true
		},
		_options = {};
	var fontSize, textColor, padding, textPadding, fillColors = [],
		timer, order, texts, hr24, aft, lst = new Array();

	function init() {
		var _opt = _options || {};
		for (var i in _def) {
			if (_opt[i] == null) {
				_opt[i] = _def[i];
			}
		}
		ctx.lineWidth = Number(_opt.thickness);
		var bd = (_opt.boldFont == true) ? "bold " : "";
		fontSize = Number(_opt.fontSize);
		ctx.font = bd + fontSize + "px " + _opt.font;
		ctx.lineCap = (_opt.roundCap == true) ? "round" : "butt";
		textColor = _opt.textColor;
		padding = Number(_opt.padding);
		textPadding = Number(_opt.textPadding);
		if (fillColors.toString() != _opt.fillColors.toString()) {
			fillColors = _opt.fillColors;
			Gradint();
		}
		order = _opt.order;
		texts = _opt.texts;
		for (i = 0; i < order.length; i++) {
			if (!lst[i]) lst[i] = 0;
		}
		hr24 = _opt.twentyFourHours;
		aft = _opt.autoFlipTexts;
		_def = _opt;
	}
	var GetMonthDayCount = function (date) {
		switch (date.getMonth() + 1) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				return 31;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
		}
		return (date.getFullYear() / 4 == parseInt(date.getFullYear() / 4) && date.getFullYear() / 400 != parseInt(date.getFullYear() / 400)) ? 29 : 28;
	}
	var colorList = new Array();
	var Gradint = function () {
		gctx.save();
		var grd = gctx.createLinearGradient(0, 0, 360, 0);
		if (fillColors.length > 1) {
			for (i = 0; i < fillColors.length; i++) {
				grd.addColorStop(i / (fillColors.length - 1), fillColors[i]);
			}
		} else if (fillColors.length == 1) {
			grd.addColorStop(0, fillColors[0]);
		} else {
			return false;
		}
		gctx.fillStyle = grd;
		gctx.fillRect(0, 0, 360, 1);
		for (a = 0; a < 360; a++) {
			var i = a * 4;
			var pixels = gctx.getImageData(0, 0, 360, 1).data;
			colorList[a] = [pixels[i], pixels[i + 1], pixels[i + 2]];
		}
		gctx.clearRect(0, 0, 360, 1);
		gctx.restore();
	}
	var draw = function () {
		var canvasSize = Math.min(canvas.width, canvas.height) / 2;
		var nowDate = new Date();
		var date = {
			milliseconds: nowDate.getMilliseconds(),
			seconds: nowDate.getSeconds(),
			minutes: nowDate.getMinutes(),
			hours: nowDate.getHours(),
			day: nowDate.getDay(),
			date: nowDate.getDate(),
			month: nowDate.getMonth(),
			year: nowDate.getFullYear()
		}
		var sec = (date.seconds * 6) + (date.milliseconds * .006);
		var minute = (date.minutes * 6) + (sec / 60);
		var hr12 = (date.hours >= 12) ? date.hours - 12 : date.hours;
		var hr = (hr12 * 30) + (minute / 12);
		var hrr = (date.hours * 15) + (minute / 24);
		var dy = (date.day / 7 * 360) + (hrr / 7);
		var dt = ((date.date - 1) / GetMonthDayCount(nowDate) * 360) + (hrr / GetMonthDayCount(nowDate));
		var mon = (date.month * 30) + (dt / 12);
		var yr = Number(date.year.toString().substr(-1)) * 36 + (mon / 10);
		var angles = {
			SECONDS: sec,
			MINUTES: minute,
			HOURS: hr,
			DAY: dy,
			DATE: dt,
			MONTH: mon,
			YEAR: yr
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var hrt = date.hours;
		if (hr24 == false) {
			hrt = (hrt >= 12) ? hrt - 12 : hrt;
			hrt == 0 && (hrt = 12);
		}
		if (order.length * padding < canvasSize) {
			for (i = 0; i < order.length; i++) {
				var thisItem = order[i];
				thisItem = thisItem.toUpperCase();
				if (thisItem == "SECONDS" || thisItem == "MINUTES" || thisItem == "HOURS" || thisItem == "DAY" || thisItem == "DATE" || thisItem == "MONTH" || thisItem == "YEAR") {
					lst[i] += (angles[thisItem] - lst[i]) * .1;
					var angle = lst[i];
					var txt, suffix;
					switch (thisItem) {
						case "SECONDS":
							suffix = (date.seconds == 1) ? texts[0] : texts[1];
							txt = date.seconds + suffix;
							break;
						case "MINUTES":
							suffix = (date.minutes == 1) ? texts[2] : texts[3];
							txt = date.minutes + suffix;
							break;
						case "HOURS":
							suffix = (date.hours == 1 || date.hours == 13 && !hr24) ? texts[4] : texts[5];
							txt = hrt + suffix;
							break;
						case "DAY":
							txt = texts[date.day + 6];
							break;
						case "DATE":
							switch (date.date) {
								default: suffix = texts[13];
								break;
								case 1:
										case 21:
										case 31:
										suffix = texts[14];
									break;
								case 2:
										case 22:
										suffix = texts[15];
									break;
								case 3:
										case 23:
										suffix = texts[16];
									break;
							}
							txt = date.date + suffix;
							break;
						case "MONTH":
							txt = texts[date.month + 17];
							break;
						case "YEAR":
							txt = date.year + "";
							break;
					}
					var tw = ctx.measureText(txt).width;
					var tang = 0;
					var scw = ctx.measureText(" ").width;
					var tpang = (360 * scw / (canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding)) / 2 / Math.PI) * textPadding;
					tang += tpang;
					for (at = 0; at < txt.length; at++) {
						var tt = ctx.measureText(txt.charAt(at)).width;
						var tta = 360 * tt / (canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding)) / 2 / Math.PI;
						tang += tta;
					}
					angle < tang + tpang && (angle = tang + tpang);
					//ARCS
					ctx.save();
					angle > 359.9999 && (angle = 359.9999);
					(ctx.lineWidth + padding) * order.length > canvasSize && (ctx.lineWidth = canvasSize / order.length - padding);
					var cindex = Math.round(angle) % 360;
					var cl = colorList[cindex];
					ctx.strokeStyle = "rgb(" + cl[0] + "," + cl[1] + "," + cl[2] + ")";
					ctx.beginPath();
					ctx.arc(canvas.width / 2, canvas.height / 2, canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding), 1.5 * Math.PI, (angle - 90) * Math.PI / 180, false);
					ctx.stroke();
					ctx.closePath();
					ctx.restore();
					//TEXTS
					(ctx.lineWidth + padding) * order.length > canvasSize && (ctx.lineWidth = canvasSize / order.length - padding);
					if (angle > 90 + (tang + tpang) / 2 && angle < 270 + (tang + tpang) / 2 && aft == true) {
						var ntxt = "";
						for (at = txt.length - 1; at >= 0; at--) {
							ntxt += txt.charAt(at);
						}
						txt = ntxt;
					}
					ctx.save();
					ctx.fillStyle = textColor;
					ctx.translate(canvas.width / 2, canvas.height / 2);
					ctx.rotate((angle - tang) * Math.PI / 180);
					for (at = 0; at < txt.length; at++) {
						var tt = ctx.measureText(txt.charAt(at)).width;
						var tta = 360 * tt / (canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding)) / 2 / Math.PI;
						if (angle > 90 + (tang + tpang) / 2 && angle < 270 + (tang + tpang) / 2 && aft == true) {
							ctx.translate(tt / 2, -canvasSize + ctx.lineWidth / 2 + i * (ctx.lineWidth + padding));
							ctx.rotate(Math.PI);
							ctx.translate(-tt / 2, canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding));
						}
						ctx.fillText(txt.charAt(at), 0, -canvasSize + (ctx.lineWidth + fontSize) / 2 + i * (ctx.lineWidth + padding));
						if (angle > 90 + (tang + tpang) / 2 && angle < 270 + (tang + tpang) / 2 && aft == true) {
							ctx.translate(tt / 2, -canvasSize + ctx.lineWidth / 2 + i * (ctx.lineWidth + padding));
							ctx.rotate(-Math.PI);
							ctx.translate(-tt / 2, canvasSize - ctx.lineWidth / 2 - i * (ctx.lineWidth + padding));
						}
						ctx.rotate(tta * Math.PI / 180);
					}
					ctx.restore();
				}
			}
		}
		started == true && (timer = requestAnimationFrame(draw));
	}
	init();
	var start = function () {
		started = true;
		draw();
	}
	var destroy = function () {
		started = false;
		setTimeout(function () {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			for (i = 0; i < lst.length; i++) {
				lst[i] = 0;
			}
		}, 20);
	}
	var setStyle = function (options) {
		_options = options;
		init();
	}
	return {
		start: start,
		destroy: destroy,
		setStyles: setStyle
	}
}
