function mathematical_alphanumeric_symbols(txt, l_style, n_style) {
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", numbers = "0123456789";
	var a = txt, b = "";
	var char = {
		A: "\ud835\udc00 \ud835\udc34 \ud835\udc68 \ud835\udc9c \ud835\udcd0 \ud835\udd04 \ud835\udd38 \ud835\udd6c \ud835\udda0 \ud835\uddd4 \ud835\ude08 \ud835\ude3c \ud835\ude70",
		B: "\ud835\udc01 \ud835\udc35 \ud835\udc69 \u0042 \ud835\udcd1 \ud835\udd05 \ud835\udd39 \ud835\udd6d \ud835\udda1 \ud835\uddd5 \ud835\ude09 \ud835\ude3d \ud835\ude71",
		C: "\ud835\udc02 \ud835\udc36 \ud835\udc6a \ud835\udc9e \ud835\udcd2 \u0043 \u0043 \ud835\udd6e \ud835\udda2 \ud835\uddd6 \ud835\ude0a \ud835\ude3e \ud835\ude72",
		D: "\ud835\udc03 \ud835\udc37 \ud835\udc6b \ud835\udc9f \ud835\udcd3 \ud835\udd07 \ud835\udd3b \ud835\udd6f \ud835\udda3 \ud835\uddd7 \ud835\ude0b \ud835\ude3f \ud835\ude73",
		E: "\ud835\udc04 \ud835\udc38 \ud835\udc6c \u0045 \ud835\udcd4 \ud835\udd08 \ud835\udd3c \ud835\udd70 \ud835\udda4 \ud835\uddd8 \ud835\ude0c \ud835\ude40 \ud835\ude74",
		F: "\ud835\udc05 \ud835\udc39 \ud835\udc6d \u0046 \ud835\udcd5 \ud835\udd09 \ud835\udd3d \ud835\udd71 \ud835\udda5 \ud835\uddd9 \ud835\ude0d \ud835\ude41 \ud835\ude75",
		G: "\ud835\udc06 \ud835\udc3a \ud835\udc6e \ud835\udca2 \ud835\udcd6 \ud835\udd0a \ud835\udd3e \ud835\udd72 \ud835\udda6 \ud835\uddda \ud835\ude0e \ud835\ude42 \ud835\ude76",
		H: "\ud835\udc07 \ud835\udc3b \ud835\udc6f \u0048 \ud835\udcd7 \u0048 \u0048 \ud835\udd73 \ud835\udda7 \ud835\udddb \ud835\ude0f \ud835\ude43 \ud835\ude77",
		I: "\ud835\udc08 \ud835\udc3c \ud835\udc70 \u0049 \ud835\udcd8 \u0049 \ud835\udd40 \ud835\udd74 \ud835\udda8 \ud835\udddc \ud835\ude10 \ud835\ude44 \ud835\ude78",
		J: "\ud835\udc09 \ud835\udc3d \ud835\udc71 \ud835\udca5 \ud835\udcd9 \ud835\udd0d \ud835\udd41 \ud835\udd75 \ud835\udda9 \ud835\udddd \ud835\ude11 \ud835\ude45 \ud835\ude79",
		K: "\ud835\udc0a \ud835\udc3e \ud835\udc72 \ud835\udca6 \ud835\udcda \ud835\udd0e \ud835\udd42 \ud835\udd76 \ud835\uddaa \ud835\uddde \ud835\ude12 \ud835\ude46 \ud835\ude7a",
		L: "\ud835\udc0b \ud835\udc3f \ud835\udc73 \u004c \ud835\udcdb \ud835\udd0f \ud835\udd43 \ud835\udd77 \ud835\uddab \ud835\udddf \ud835\ude13 \ud835\ude47 \ud835\ude7b",
		M: "\ud835\udc0c \ud835\udc40 \ud835\udc74 \u004d \ud835\udcdc \ud835\udd10 \ud835\udd44 \ud835\udd78 \ud835\uddac \ud835\udde0 \ud835\ude14 \ud835\ude48 \ud835\ude7c",
		N: "\ud835\udc0d \ud835\udc41 \ud835\udc75 \ud835\udca9 \ud835\udcdd \ud835\udd11 \u004e \ud835\udd79 \ud835\uddad \ud835\udde1 \ud835\ude15 \ud835\ude49 \ud835\ude7d",
		O: "\ud835\udc0e \ud835\udc42 \ud835\udc76 \ud835\udcaa \ud835\udcde \ud835\udd12 \ud835\udd46 \ud835\udd7a \ud835\uddae \ud835\udde2 \ud835\ude16 \ud835\ude4a \ud835\ude7e",
		P: "\ud835\udc0f \ud835\udc43 \ud835\udc77 \ud835\udcab \ud835\udcdf \ud835\udd13 \u0050 \ud835\udd7b \ud835\uddaf \ud835\udde3 \ud835\ude17 \ud835\ude4b \ud835\ude7f",
		Q: "\ud835\udc10 \ud835\udc44 \ud835\udc78 \ud835\udcac \ud835\udce0 \ud835\udd14 \u0051 \ud835\udd7c \ud835\uddb0 \ud835\udde4 \ud835\ude18 \ud835\ude4c \ud835\ude80",
		R: "\ud835\udc11 \ud835\udc45 \ud835\udc79 \u0052 \ud835\udce1 \u0052 \u0052 \ud835\udd7d \ud835\uddb1 \ud835\udde5 \ud835\ude19 \ud835\ude4d \ud835\ude81",
		S: "\ud835\udc12 \ud835\udc46 \ud835\udc7a \ud835\udcae \ud835\udce2 \ud835\udd16 \ud835\udd4a \ud835\udd7e \ud835\uddb2 \ud835\udde6 \ud835\ude1a \ud835\ude4e \ud835\ude82",
		T: "\ud835\udc13 \ud835\udc47 \ud835\udc7b \ud835\udcaf \ud835\udce3 \ud835\udd17 \ud835\udd4b \ud835\udd7f \ud835\uddb3 \ud835\udde7 \ud835\ude1b \ud835\ude4f \ud835\ude83",
		U: "\ud835\udc14 \ud835\udc48 \ud835\udc7c \ud835\udcb0 \ud835\udce4 \ud835\udd18 \ud835\udd4c \ud835\udd80 \ud835\uddb4 \ud835\udde8 \ud835\ude1c \ud835\ude50 \ud835\ude84",
		V: "\ud835\udc15 \ud835\udc49 \ud835\udc7d \ud835\udcb1 \ud835\udce5 \ud835\udd19 \ud835\udd4d \ud835\udd81 \ud835\uddb5 \ud835\udde9 \ud835\ude1d \ud835\ude51 \ud835\ude85",
		W: "\ud835\udc16 \ud835\udc4a \ud835\udc7e \ud835\udcb2 \ud835\udce6 \ud835\udd1a \ud835\udd4e \ud835\udd82 \ud835\uddb6 \ud835\uddea \ud835\ude1e \ud835\ude52 \ud835\ude86",
		X: "\ud835\udc17 \ud835\udc4b \ud835\udc7f \ud835\udcb3 \ud835\udce7 \ud835\udd1b \ud835\udd4f \ud835\udd83 \ud835\uddb7 \ud835\uddeb \ud835\ude1f \ud835\ude53 \ud835\ude87",
		Y: "\ud835\udc18 \ud835\udc4c \ud835\udc80 \ud835\udcb4 \ud835\udce8 \ud835\udd1c \ud835\udd50 \ud835\udd84 \ud835\uddb8 \ud835\uddec \ud835\ude20 \ud835\ude54 \ud835\ude88",
		Z: "\ud835\udc19 \ud835\udc4d \ud835\udc81 \ud835\udcb5 \ud835\udce9 \u005a \u005a \ud835\udd85 \ud835\uddb9 \ud835\udded \ud835\ude21 \ud835\ude55 \ud835\ude89",
		a: "\ud835\udc1a \ud835\udc4e \ud835\udc82 \ud835\udcb6 \ud835\udcea \ud835\udd1e \ud835\udd52 \ud835\udd86 \ud835\uddba \ud835\uddee \ud835\ude22 \ud835\ude56 \ud835\ude8a",
		b: "\ud835\udc1b \ud835\udc4f \ud835\udc83 \ud835\udcb7 \ud835\udceb \ud835\udd1f \ud835\udd53 \ud835\udd87 \ud835\uddbb \ud835\uddef \ud835\ude23 \ud835\ude57 \ud835\ude8b",
		c: "\ud835\udc1c \ud835\udc50 \ud835\udc84 \ud835\udcb8 \ud835\udcec \ud835\udd20 \ud835\udd54 \ud835\udd88 \ud835\uddbc \ud835\uddf0 \ud835\ude24 \ud835\ude58 \ud835\ude8c",
		d: "\ud835\udc1d \ud835\udc51 \ud835\udc85 \ud835\udcb9 \ud835\udced \ud835\udd21 \ud835\udd55 \ud835\udd89 \ud835\uddbd \ud835\uddf1 \ud835\ude25 \ud835\ude59 \ud835\ude8d",
		e: "\ud835\udc1e \ud835\udc52 \ud835\udc86 \u0065 \ud835\udcee \ud835\udd22 \ud835\udd56 \ud835\udd8a \ud835\uddbe \ud835\uddf2 \ud835\ude26 \ud835\ude5a \ud835\ude8e",
		f: "\ud835\udc1f \ud835\udc53 \ud835\udc87 \ud835\udcbb \ud835\udcef \ud835\udd23 \ud835\udd57 \ud835\udd8b \ud835\uddbf \ud835\uddf3 \ud835\ude27 \ud835\ude5b \ud835\ude8f",
		g: "\ud835\udc20 \ud835\udc54 \ud835\udc88 \u0067 \ud835\udcf0 \ud835\udd24 \ud835\udd58 \ud835\udd8c \ud835\uddc0 \ud835\uddf4 \ud835\ude28 \ud835\ude5c \ud835\ude90",
		h: "\ud835\udc21 \u0068 \ud835\udc89 \ud835\udcbd \ud835\udcf1 \ud835\udd25 \ud835\udd59 \ud835\udd8d \ud835\uddc1 \ud835\uddf5 \ud835\ude29 \ud835\ude5d \ud835\ude91",
		i: "\ud835\udc22 \ud835\udc56 \ud835\udc8a \ud835\udcbe \ud835\udcf2 \ud835\udd26 \ud835\udd5a \ud835\udd8e \ud835\uddc2 \ud835\uddf6 \ud835\ude2a \ud835\ude5e \ud835\ude92",
		j: "\ud835\udc23 \ud835\udc57 \ud835\udc8b \ud835\udcbf \ud835\udcf3 \ud835\udd27 \ud835\udd5b \ud835\udd8f \ud835\uddc3 \ud835\uddf7 \ud835\ude2b \ud835\ude5f \ud835\ude93",
		k: "\ud835\udc24 \ud835\udc58 \ud835\udc8c \ud835\udcc0 \ud835\udcf4 \ud835\udd28 \ud835\udd5c \ud835\udd90 \ud835\uddc4 \ud835\uddf8 \ud835\ude2c \ud835\ude60 \ud835\ude94",
		l: "\ud835\udc25 \ud835\udc59 \ud835\udc8d \ud835\udcc1 \ud835\udcf5 \ud835\udd29 \ud835\udd5d \ud835\udd91 \ud835\uddc5 \ud835\uddf9 \ud835\ude2d \ud835\ude61 \ud835\ude95",
		m: "\ud835\udc26 \ud835\udc5a \ud835\udc8e \ud835\udcc2 \ud835\udcf6 \ud835\udd2a \ud835\udd5e \ud835\udd92 \ud835\uddc6 \ud835\uddfa \ud835\ude2e \ud835\ude62 \ud835\ude96",
		n: "\ud835\udc27 \ud835\udc5b \ud835\udc8f \ud835\udcc3 \ud835\udcf7 \ud835\udd2b \ud835\udd5f \ud835\udd93 \ud835\uddc7 \ud835\uddfb \ud835\ude2f \ud835\ude63 \ud835\ude97",
		o: "\ud835\udc28 \ud835\udc5c \ud835\udc90 \u006f \ud835\udcf8 \ud835\udd2c \ud835\udd60 \ud835\udd94 \ud835\uddc8 \ud835\uddfc \ud835\ude30 \ud835\ude64 \ud835\ude98",
		p: "\ud835\udc29 \ud835\udc5d \ud835\udc91 \ud835\udcc5 \ud835\udcf9 \ud835\udd2d \ud835\udd61 \ud835\udd95 \ud835\uddc9 \ud835\uddfd \ud835\ude31 \ud835\ude65 \ud835\ude99",
		q: "\ud835\udc2a \ud835\udc5e \ud835\udc92 \ud835\udcc6 \ud835\udcfa \ud835\udd2e \ud835\udd62 \ud835\udd96 \ud835\uddca \ud835\uddfe \ud835\ude32 \ud835\ude66 \ud835\ude9a",
		r: "\ud835\udc2b \ud835\udc5f \ud835\udc93 \ud835\udcc7 \ud835\udcfb \ud835\udd2f \ud835\udd63 \ud835\udd97 \ud835\uddcb \ud835\uddff \ud835\ude33 \ud835\ude67 \ud835\ude9b",
		s: "\ud835\udc2c \ud835\udc60 \ud835\udc94 \ud835\udcc8 \ud835\udcfc \ud835\udd30 \ud835\udd64 \ud835\udd98 \ud835\uddcc \ud835\ude00 \ud835\ude34 \ud835\ude68 \ud835\ude9c",
		t: "\ud835\udc2d \ud835\udc61 \ud835\udc95 \ud835\udcc9 \ud835\udcfd \ud835\udd31 \ud835\udd65 \ud835\udd99 \ud835\uddcd \ud835\ude01 \ud835\ude35 \ud835\ude69 \ud835\ude9d",
		u: "\ud835\udc2e \ud835\udc62 \ud835\udc96 \ud835\udcca \ud835\udcfe \ud835\udd32 \ud835\udd66 \ud835\udd9a \ud835\uddce \ud835\ude02 \ud835\ude36 \ud835\ude6a \ud835\ude9e",
		v: "\ud835\udc2f \ud835\udc63 \ud835\udc97 \ud835\udccb \ud835\udcff \ud835\udd33 \ud835\udd67 \ud835\udd9b \ud835\uddcf \ud835\ude03 \ud835\ude37 \ud835\ude6b \ud835\ude9f",
		w: "\ud835\udc30 \ud835\udc64 \ud835\udc98 \ud835\udccc \ud835\udd00 \ud835\udd34 \ud835\udd68 \ud835\udd9c \ud835\uddd0 \ud835\ude04 \ud835\ude38 \ud835\ude6c \ud835\udea0",
		x: "\ud835\udc31 \ud835\udc65 \ud835\udc99 \ud835\udccd \ud835\udd01 \ud835\udd35 \ud835\udd69 \ud835\udd9d \ud835\uddd1 \ud835\ude05 \ud835\ude39 \ud835\ude6d \ud835\udea1",
		y: "\ud835\udc32 \ud835\udc66 \ud835\udc9a \ud835\udcce \ud835\udd02 \ud835\udd36 \ud835\udd6a \ud835\udd9e \ud835\uddd2 \ud835\ude06 \ud835\ude3a \ud835\ude6e \ud835\udea2",
		z: "\ud835\udc33 \ud835\udc67 \ud835\udc9b \ud835\udccf \ud835\udd03 \ud835\udd37 \ud835\udd6b \ud835\udd9f \ud835\uddd3 \ud835\ude07 \ud835\ude3b \ud835\ude6f \ud835\udea3",
		0: "\ud835\udfce \ud835\udfd8 \ud835\udfe2 \ud835\udfec \ud835\udff6",
		1: "\ud835\udfcf \ud835\udfd9 \ud835\udfe3 \ud835\udfed \ud835\udff7",
		2: "\ud835\udfd0 \ud835\udfda \ud835\udfe4 \ud835\udfee \ud835\udff8",
		3: "\ud835\udfd1 \ud835\udfdb \ud835\udfe5 \ud835\udfef \ud835\udff9",
		4: "\ud835\udfd2 \ud835\udfdc \ud835\udfe6 \ud835\udff0 \ud835\udffa",
		5: "\ud835\udfd3 \ud835\udfdd \ud835\udfe7 \ud835\udff1 \ud835\udffb",
		6: "\ud835\udfd4 \ud835\udfde \ud835\udfe8 \ud835\udff2 \ud835\udffc",
		7: "\ud835\udfd5 \ud835\udfdf \ud835\udfe9 \ud835\udff3 \ud835\udffd",
		8: "\ud835\udfd6 \ud835\udfe0 \ud835\udfea \ud835\udff4 \ud835\udffe",
		9: "\ud835\udfd7 \ud835\udfe1 \ud835\udfeb \ud835\udff5 \ud835\udfff"
	}
	var ls = Number(l_style) || 0, ns = Number(n_style) || 0, rl = ls === -1, rn = ns === -1;
	for(var i = 0; i < a.length; i++) {
		var c = a.charAt(i);
		if(rl) ls = parseInt(Math.random() * 13) + 1;
		if(rn) ns = parseInt(Math.random() * 5) + 1;
		if(ls > 0 && letters.indexOf(c) > -1) b += char[c].split(" ")[ls - 1];
		else if(ns > 0 && numbers.indexOf(c) > -1) b += char[c].split(" ")[ns - 1];
		else b += c;
	}
	return b;
}

function reverse_text(txt) {
	var a = txt.split("").reverse().join(""), b = "";
	var char = {
		A: "\ua4ef",
		B: "\ua4ed",
		C: "\ua4db",
		D: "\ua4f7",
		E: "\ua4f1",
		F: "\ua4de",
		G: "\ua4e8",
		H: "H",
		I: "I",
		J: "\u148b",
		K: "\ua4d8",
		L: "\ua4f6",
		M: "W",
		N: "N",
		O: "O",
		P: "\ua4d2",
		Q: "\u00d2",
		R: "\ua4e4",
		S: "S",
		T: "\ua4d5",
		U: "\ua4f5",
		V: "\ua4e5",
		W: "M",
		X: "X",
		Y: "\u2144",
		Z: "Z",
		a: "\u0250",
		b: "q",
		c: "\u0254",
		d: "p",
		e: "\u0259",
		f: "\u0284",
		g: "\u0253",
		h: "\u0265",
		i: "\u1d09",
		j: "\u027e",
		k: "\u029e",
		l: "l",
		m: "\u026f",
		n: "u",
		o: "o",
		p: "d",
		q: "b",
		r: "\u0279",
		s: "s",
		t: "\u0287",
		u: "n",
		v: "\u028c",
		w: "\u028d",
		x: "x",
		y: "\u028e",
		z: "z",
		1: "1",
		2: "\u0a9f",
		3: "\u2107",
		4: "\u1213",
		5: "\u0295",
		6: "9",
		7: "\u2220",
		8: "8",
		9: "6",
		0: "0",
		"!": "\u00a1",
		"\"": "\u02f6",
		"#": "#",
		"$": "$",
		"%": "%",
		"&": "\u214b",
		"'": "\u02cc",
		"(": ")",
		")": "(",
		"*": "*",
		"+": "+",
		",": "\u02bb",
		"-": "-",
		".": "\u02d9",
		"/": "/",
		":": ":",
		";": ";",
		"<": ">",
		"=": "=",
		">": "<",
		"?": "\u00bf",
		"@": "@",
		"[": "]",
		"\\": "\\",
		"]": "[",
		"^": "v",
		"_": "\u203e",
		"`": "\u02cf",
		"{": "}",
		"|": "|",
		"}": "{",
		"~": "~"
	}
	for(var i = 0; i < a.length; i++) {
		var c = a.charAt(i);
		if(c in char) b += char[c];
		else b += c;
	}
	return b;
}

function glitch_text(txt, density, add_u, add_d, add_t) {
	var a = txt, b = "",
	char_u = "\u0300\u0301\u0302\u0303\u0304\u0305\u0306\u0307\u0308\u0309\u030a\u030b\u030c\u030d\u030e\u030f\u0310\u0311\u0313\u0314\u031a\u033d\u033e\u033f\u0340\u0341\u0342\u0343\u0344\u0346\u034a\u034b\u034c\u0350\u0351\u0352\u0357\u035b\u035d\u035e\u0360\u0361\u0363\u0364\u0365\u0366\u0367\u0368\u0369\u036a\u036b\u036c\u036d\u036e\u036f",
	char_d = "\u0316\u0317\u0318\u0319\u031c\u031d\u031e\u031f\u0320\u0323\u0324\u0325\u0326\u0327\u0328\u0329\u032a\u032b\u032c\u032d\u032e\u032f\u0330\u0331\u0332\u0333\u0339\u033a\u033b\u033c\u0347\u0348\u0349\u034d\u034e\u0353\u0354\u0355\u0356\u0359\u035a\u035c\u035f\u0362",
	char_t = "\u0334\u0335\u0336\u0337\u0338",
	exclude = " 　\n\r,.'\"`_";
	var de = Math.max(typeof density == "undefined" ? 10 : density, 0),
		u = typeof add_u == "undefined" ? true : add_u,
		d = typeof add_d == "undefined" ? true : add_d,
		t = typeof add_t == "undefined" ? true : add_t;
	for(var i = 0; i < a.length; i ++) {
		var c = a.charAt(i), l = ("" + (u ? char_u : "") + (d ? char_d : "")).split(""), lt = [""].concat(char_t.split(""));
		b += c;
		if(exclude.indexOf(c) === -1) {
			if(t) b += lt[parseInt(Math.random() * lt.length)];
			if(de > 0 && l.length > 0) for(var j = 0; j < de; j ++) b += l[parseInt(Math.random() * l.length)];
		}
	}
	return b;
}