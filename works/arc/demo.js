window.onload = function(){
	var myArcClock = newArcClock(document.getElementById("myCanvas"));
	myArcClock.start();
	$(window).resize(function(){
		var c = $("#myCanvas");
		if($(window).innerHeight() > c.outerHeight()){
			c.css("top", ($(window).innerHeight() / 2 - c.outerHeight() / 2) + "px");
		}
		else{
			c.css("top", "0px");
		}
		if($(window).innerWidth() > c.outerWidth()){
			c.css("left", ($(window).innerWidth() / 2 - c.outerWidth() / 2) + "px");
		}
		else{
			c.css("left", "0px");
		}
	});
	$(window).resize();
	var ss = {
		thickness : 35,
		fontSize : 16,
		roundCap : false,
		boldFont : true,
		textColor : "#000000",
		padding : 4,
		textPadding : 0.5,
		fillColors : "Rainbow",
		"Edit Items" : function(){
			$(".od_win").fadeIn(200);
		},
		Language : "English",
		twentyFourHours : true,
		autoFlipTexts : true
	}
	$(".od_win .close").click(function(){
		$(".od_win").fadeOut(200);
	});
	var gui = new dat.GUI();
	var th = gui.add(ss, 'thickness', 10, 50),
	pd = gui.add(ss, 'padding', 0, 10),
	rc = gui.add(ss, 'roundCap'),
	bf = gui.add(ss, 'boldFont'),
	fs = gui.add(ss, 'fontSize', 8, 24),
	tp = gui.add(ss, 'textPadding', 0, 2),
	aft = gui.add(ss, 'autoFlipTexts'),
	tc = gui.addColor(ss, 'textColor'),
	tfh = gui.add(ss, 'twentyFourHours'),
	fc = gui.add(ss, 'fillColors', ["Rainbow", "Enthusiasm", "Cold", "Grayscale", "White"]),
	od = gui.add(ss, 'Edit Items'),
	lng = gui.add(ss, 'Language', ["English", "Chinese-Simplified", "Russian", "Greek", "French"])
	th.onChange(function(){
		myArcClock.setStyles({
			thickness : ss.thickness
		});
	});
	pd.onChange(function(){
		myArcClock.setStyles({
			padding : ss.padding
		});
	});
	rc.onChange(function(){
		myArcClock.setStyles({
			roundCap : ss.roundCap
		});
	});
	bf.onChange(function(){
		myArcClock.setStyles({
			boldFont : ss.boldFont
		});
	});
	fs.onChange(function(){
		myArcClock.setStyles({
			fontSize : ss.fontSize
		});
	});
	tp.onChange(function(){
		myArcClock.setStyles({
			textPadding : ss.textPadding
		});
	});
	aft.onChange(function(){
		myArcClock.setStyles({
			autoFlipTexts : ss.autoFlipTexts
		});
	});
	tc.onChange(function(){
		myArcClock.setStyles({
			textColor : ss.textColor
		});
	});
	tfh.onChange(function(){
		myArcClock.setStyles({
			twentyFourHours : ss.twentyFourHours
		});
	});
	fc.onChange(function(){
		var colors;
		switch(ss.fillColors){
			case "Rainbow":
				colors = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#FF0000'];
			break;
			case "Enthusiasm":
				colors = ['#FFCC00', '#FF0000', '#FFCC00'];
			break;
			case "Cold":
				colors = ['#00CCFF', '#0000FF', '#00CCFF'];
			break;
			case "Grayscale":
				colors = ['#333333', '#CCCCCC', '#333333'];
			break;
			case "White":
				colors = ['#FFFFFF'];
			break;
		}
		myArcClock.setStyles({
			fillColors : colors
		});
	});
	lng.onChange(function(){
		var txts;
		switch(ss.Language){
			case "English":
				txts = [" second", " seconds", " minute", " minutes", " hour", " hours", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "th", "st", "nd", "rd", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			break;
			case "Chinese-Simplified":
				txts = [' 秒', ' 秒', ' 分', ' 分', ' 时', ' 时', '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', ' 日', ' 日', ' 日', ' 日', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
			break;
			case "Russian":
				txts = [" секунда", " секунд", " минута", " минут", " час", " часов", "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "", "", "", "", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
			break;
			case "Greek":
				txts = [" δευτερόλεπτο", " δευτερόλεπτο", " λεπτό", " λεπτό", " ώρες", " ώρες", "Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο", "", "", "", "", "Ιανουάριο", "Φεβρουάριο", "Μάρτιο", "Απρίλιο", "Μάιο", "Ιούνιο", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"];
			break;
			case "French":
				txts = [" seconde", " secondes", " minute", " minutes", " heure", " heures", "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "", "", "", "", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
			break;
		}
		myArcClock.setStyles({
			texts : txts
		});
	});
	var initsort = function(){
		$(function(){
			$("#order, #noorder").sortable({
				connectWith: ".odlist",
				placeholder: "placeholder",
				axis: "y",
				containment: ".od_win",
				cursor: "move",
				stop: function(){
					var od = new Array();
					for(var i = 0; i < $("#order li").length; i ++){
						$("#order li").eq(i).attr("data-value") && od.push($("#order li").eq(i).attr("data-value"));
					}
					myArcClock.setStyles({
						order : od
					});
				}
			}).disableSelection();
		});
	}
	initsort();
}
