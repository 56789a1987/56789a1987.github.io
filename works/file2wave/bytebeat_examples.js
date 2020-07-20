var bytebeat_examples = [
	{
		title: "440 Hz sawtooth",
		value: "t/8000*255*440",
		khz: 8,
		quality: 6
	},
	{
		title: "t&t>>8",
		value: "t&t>>8",
		khz: 8,
		quality: 6
	},
	{
		title: "(t<<4)|(t>>5)",
		value: "(t<<4)|(t>>5)",
		khz: 8,
		quality: 6
	},
	{
		title: "t*(42&t>>10)",
		value: "t*(42&t>>10)",
		khz: 8,
		quality: 6
	},
	{
		title: 'xpansive 2011-09-29 "Lost in Space" pouet.net/topic.php?which=8357&page=2',
		value: "t&t>>13|t>>6",
		khz: 8,
		quality: 6
	},
	{
		title: "droid 2011-10-05 pouet.net/topic.php?which=8357&page=10",
		value: "t>>6&1?t>>5:-t>>4",
		khz: 8,
		quality: 6
	},
	{
		title: "Niklas_Roy 2011-10-14 countercomplex.blogspot.com",
		value: "t*(t>>9|t>>13)&16",
		khz: 8,
		quality: 6
	},
	{
		title: "xpansive 2012-02-25 pouet.net/topic.php?which=8357&page=21",
		value: "t%(t/(t>>9|t>>13))",
		khz: 8,
		quality: 6
	},
	{
		title: "yehar@xpansive 2012-02-27 pouet.net/topic.php?which=8357&page=21",
		value: "t*t/(t>>12&t>>8)<<7",
		khz: 8,
		quality: 6
	},
	{
		title: "varjohukka 2011-09-30 pouet.net/topic.php?which=8357&page=5",
		value: "(t>>5)|(t>>2)*(t>>5)",
		khz: 8,
		quality: 6
	},
	{
		title: "krcko 2011-10-04 rafforum.rs/index.php/topic,123.0.html",
		value: "(t&t>>12)*(t>>4|t>>8)",
		khz: 8,
		quality: 6
	},
	{
		title: "viznut 2011-10-10 youtube.com/watch?v=tCRPUv8V22o",
		value: "(t*5&t>>7)|(t*3&t>>10)",
		khz: 8,
		quality: 6
	},
	{
		title: "miiro 2011-09-30 youtube.com/watch?v=qlrs2Vorw2Y",
		value: "t*5&(t>>7)|t*3&(t*4>>10)",
		khz: 8,
		quality: 6
	},
	{
		title: "tejeez 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg",
		value: "(t*(t>>5|t>>8))>>(t>>16)",
		khz: 8,
		quality: 6
	},
	{
		title: "robert 2011-10-11 countercomplex.blogspot.com",
		value: "(t>>13|t%24)&(t>>7|t%19)",
		khz: 8,
		quality: 6
	},
	{
		title: "Niklas_Roy 2011-10-14 countercomplex.blogspot.com",
		value: "(t*((t>>9|t>>13)&15))&128",
		khz: 8,
		quality: 6
	},
	{
		title: "rrola 2011-09-30 pouet.net/topic.php?which=8357&page=9",
		value: "t*(4+(t>>9)%3)&t/3>>7&224",
		khz: 8,
		quality: 6
	},
	{
		title: "rrola/ryg 2011-10-04 pouet.net/topic.php?which=8357&page=9",
		value: "t*(0xCA98>>(t>>9&14)&15)|t>>8",
		khz: 8,
		quality: 6
	},
	{
		title: 'tonic 2011-10-01 "mr. arpeggiator playing a solo" pouet.net/topic.php?which=8357&page=5',
		value: "(t/8)>>(t>>9)*t/((t>>14&3)+4)",
		khz: 8,
		quality: 6
	},
	{
		title: "red 2011-09-30 youtube.com/watch?v=qlrs2Vorw2Y",
		value: "(t|(t>>9|t>>7))*t&(t>>11|t>>9)",
		khz: 8,
		quality: 6
	},
	{
		title: "droid 2011-10-04 pouet.net/topic.php?which=8357&page=9",
		value: "t&(Math.sin(t&t&3)*t>>5)/(t>>3&t>>6)",
		khz: 8,
		quality: 6
	},
	{
		title: "viznut 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg",
		value: "t*(((t>>12)|(t>>8))&(63&(t>>4)))",
		khz: 8,
		quality: 6
	},
	{
		title: "visy 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg",
		value: "t*(((t>>9)|(t>>13))&(25&(t>>6)))",
		khz: 8,
		quality: 6
	},
	{
		title: "216 2011-10-10 youtube.com/watch?v=tCRPUv8V22o",
		value: "t*(t^t+(t>>15|1)^(t-1280^t)>>10)",
		khz: 8,
		quality: 6
	},
	{
		title: "tejeez 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg",
		value: "t*(((t>>11)&(t>>8))&(123&(t>>3)))",
		khz: 8,
		quality: 6
	},
	{
		title: "viznut (xpansive+varjohukka) 2011-09-30 youtube.com/watch?v=qlrs2Vorw2Y",
		value: "(t>>7|t|t>>6)*10+4*(t&t>>13|t>>6)",
		khz: 8,
		quality: 6
	},
	{
		title: "viznut 2011-09-30 youtube.com/watch?v=qlrs2Vorw2Y",
		value: "(t>>6|t|t>>(t>>16))*10+((t>>11)&7)",
		khz: 8,
		quality: 6
	},
	{
		title: "stephth 2011-10-03 news.ycombinator.com/item?id=3063359",
		value: "(t*9&t>>4|t*5&t>>7|t*3&t/1024)-1",
		khz: 8,
		quality: 6
	},
	{
		title: 'visy "Space Invaders vs Pong" 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg',
		value: "t*(t>>((t>>9)|(t>>8))&(63&(t>>4)))",
		khz: 8,
		quality: 6
	},
	{
		title: "marmakoide 2011-10-04 pouet.net/topic.php?which=8357&page=8",
		value: "(t>>(t&7))|(t<<(t&42))|(t>>7)|(t<<5)",
		khz: 8,
		quality: 6
	},
	{
		title: "robert 2011-10-11 countercomplex.blogspot.com",
		value: "(t>>7|t%45)&(t>>8|t%35)&(t>>11|t%20)",
		khz: 8,
		quality: 6
	},
	{
		title: 'raer 2011-09-28 "Bird-techno" pouet.net/topic.php?which=8357&page=2',
		value: "t*((t>>11|t>>8)&92&t>>4)",
		khz: 8,
		quality: 6
	},
	{
		title: 'xpansive 2011-09-29 "Lost in Space (Remix)" pouet.net/topic.php?which=8357&page=2',
		value: "((t*(t>>8|t>>9)&46&t>>8))^(t&t>>13|t>>6)",
		khz: 8,
		quality: 6
	},
	{
		title: 'marmakoide 2011-10-03 "Lemmings March" pouet.net/topic.php?which=8357&page=7',
		value: "(t>>5)|(t<<4)|((t&1023)^1981)|((t-67)>>4)",
		khz: 8,
		quality: 6
	},
	{
		title: "droid 2011-10-04 pouet.net/topic.php?which=8357&page=9",
		value: "t>>4|t&(t>>5)/(t>>7-(t>>15)&-t>>7-(t>>15))",
		khz: 8,
		quality: 6
	},
	{
		title: 'viznut@jaffa 2011-10-06 "moon scanner generalization" countercomplex.blogspot.com',
		value: "((t>>5&t)-(t>>5)+(t>>5&t))+(t*((t>>14)&14))",
		khz: 8,
		quality: 6
	},
	{
		title: "viznut 2011-10-04 pouet.net/topic.php?which=8357&page=9",
		value: "(t*((3+(1^t>>10&5))*(5+(3&t>>14))))>>(t>>8&3)",
		khz: 8,
		quality: 6
	},
	{
		title: "bst 2011-10-10 youtube.com/watch?v=tCRPUv8V22o",
		value: "(t/1e7*t*t+t)%127|t>>4|t>>5|t%127+(t>>16)|t",
		khz: 8,
		quality: 6
	},
	{
		title: "tangent128 2011-10-09 0xa.kuri.mu/2011/10/09/bitop-videos/",
		value: "t*(((t>>9)&10)|((t>>11)&24)^((t>>10)&15&(t>>15)))",
		khz: 8,
		quality: 6
	},
	{
		title: "tejeez 2011-10-05 countercomplex.blogspot.com",
		value: "(~t>>2)*((127&t*(7&t>>10))<(245&t*(2+(5&t>>14))))",
		khz: 8,
		quality: 6
	},
	{
		title: "visy 2011-09-18 youtube.com/watch?v=GtQdIYUtAHg",
		value: "t*(t>>8*((t>>15)|(t>>8))&(20|(t>>19)*5>>t|(t>>3)))",
		khz: 8,
		quality: 6
	},
	{
		title: "jounim 2011-10-04",
		value: "((t&((t>>5)))+(t|((t>>7))))&(t>>6)|(t>>5)&(t*(t>>7))",
		khz: 8,
		quality: 6
	},
	{
		title: "yehar 2012-02-24 pouet.net/topic.php?which=8357&page=20",
		value: "8*t*t*(t>>(t>>10)%3+15)/(3+(t>>10&(t>>15&3|4)))|t/16",
		khz: 8,
		quality: 6
	},
	{
		title: "skurk 2011-10-04 pouet.net/topic.php?which=8357&page=8",
		value: "t*(t>>((t&4096)?((t*t)/4096):(t/4096)))|(t<<(t/256))|(t>>4)",
		khz: 8,
		quality: 6
	},
	{
		title: "skurk+raer 2011-09-30 youtube.com/watch?v=qlrs2Vorw2Y",
		value: "((t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t<<2:t))",
		khz: 8,
		quality: 6
	},
	{
		title: "pinsel 2012-10-21 pouet.net/topic.php?which=8357&page=22",
		value: "u=((t+0x3900)&0x2fff),(u*((u>>8)&4)*(((u>>13)&3)+((u>>10)&3))>>1)",
		khz: 8,
		quality: 6
	},
	{
		title: "bst 2011-10-11 pouet.net/topic.php?which=8357&page=18",
		value: "t>>16|((t>>4)%16)|((t>>4)%192)|(t*t%64)|(t*t%96)|(t>>16)*(t|t>>5)",
		khz: 8,
		quality: 6
	},
	{
		title: "bst 2011-10-05 pouet.net/topic.php?which=8357&page=12",
		value: "(t>>5)|(t>>4)|((t%42)*(t>>4)|(0x15483113)-(t>>4))/(t>>16)^(t|(t>>4))",
		khz: 8,
		quality: 6
	},
	{
		title: "ultrageranium 2011-10-12 0xa.kuri.mu/2011/10/09/bitop-videos/",
		value: "(t*t/256)&(t>>((t/1024)%16))^t%64*(0xC0D3DE4D69>>(t>>9&30)&t%32)*t>>18",
		khz: 8,
		quality: 6
	},
	{
		title: "yehar 2012-02-25 pouet.net/topic.php?which=8357&page=21",
		value: "t>>4+!(-t>>13&7)+2*!(t>>17)|t*t*(t>>(t>>12^t>>11)%3+10)/(7+(t>>10&t>>14&3))*!(t&512)<<3+(t>>14&1)",
		khz: 8,
		quality: 6
	},
	{
		title: "varjohukka 2011-09-30 pouet.net/topic.php?which=8357&page=4",
		value: "(((t&8192)?((t&4096)?((t&1024)?t*2:t*4):((t&512)?t*4:t*4.2)):((t&4096)?((t&1024)?t*2:t*10):((t&512)?t*2:t*8))>>2)*((t&16384)?3:2))|t*((t&16384)?1/8:1/(.01*t))",
		khz: 8,
		quality: 6
	},
	{
		title: "raer@varjohukka 2011-09-30 pouet.net/topic.php?which=8357&page=4",
		value: "((t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t<<2:t))^((((t&8192)?((t&4096)?((t&1024)?t*2:t*4):((t&512)?t*4:t*4.2)):((t&4096)?((t&1024)?t*2:t*10):((t&512)?t*2:t*8))>>2)*((t&16384)?3:2))|t*((t&16384)?1/8:1/(.01*t))>>1)",
		khz: 8,
		quality: 6
	},
	{
		title: "rez/ryg 2011-10-05 pouet.net/topic.php?which=8357&page=11 JS",
		value: 't*(1+"4451"[t>>13&3]/10)&t>>9+(t*0.003&3)',
		khz: 8,
		quality: 6
	},
	{
		title: "gasman 2011-10-05 pouet.net/topic.php?which=8357&page=12 JS",
		value: "(t<<3)*[8/9,1,9/8,6/5,4/3,3/2,0][[0xd2d2c8,0xce4088,0xca32c8,0x8e4009][t>>14&3]>>(0x3dbe4688>>((t>>10&15)>9?18:t>>10&15)*3&7)*3&7]",
		khz: 8,
		quality: 6
	},
	{
		title: "a1k0n news.ycombinator.com/item?id=3063359 JS",
		value: 'SS=function(s,o,r,p){var c=s.charCodeAt((t>>r)%p);return c==32?0:31&t*Math.pow(2,c/12-o)},SS("0 0     7 7     037:<<",6,10,32)+(t&4096?SS("037",4,8,3)*(4096-(t&4095))>>12:0)',
		khz: 8,
		quality: 6
	},
	{
		title: "blueberry 2011-10-05 pouet.net/topic.php?which=8357&page=12",
		value: "t*(((t>>9)^((t>>9)-1)^1)%13)",
		khz: 11,
		quality: 4
	},
	{
		title: "raer 2011-10-07 pouet.net/topic.php?which=8357&page=16",
		value: "((t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t<<2:t))+t*(((t>>9)^((t>>9)-1)^1)%13)",
		khz: 11,
		quality: 4
	},
	{
		title: "rez 2011-10-03 pouet.net/topic.php?which=8357&page=7",
		value: "t*4+t*(12*Math.cos(t>>10&t>>12)%1)+t*(12*Math.cos(t>>10&t>>12)%1)+t*(12*Math.cos(t>>12+t))",
		khz: 11,
		quality: 4
	},
	{
		title: "xeron 2011-10-05 pouet.net/topic.php?which=8357&page=12 JS",
		value: "Math.sin((t&0x1fff)*(([0.1491,0.2234,0.13283,0.19903,0.26567,0.18786][((t>>13)&7)!=7?t>>13&3:(t>>12&1)+4])+Math.cos((t&0x1fff)*0.0035)*0.0004))*63-128",
		khz: 11,
		quality: 4
	},
	{
		title: "Frost 2011-10-06 pouet.net/topic.php?which=8357&page=13",
		value: "t*((t>>10|t>>8)+Math.sin(t)>>3)",
		khz: 22,
		quality: 2
	},
	{
		title: 'ham 2011-10-06 "Robot Laboratory" pouet.net/topic.php?which=8357&page=13',
		value: '(y=(t*"263626372679"[t>>12&11]/22)&120)+((y*(0xF331>>(t>>15&23))|y^t&127)>>5)',
		khz: 22,
		quality: 2
	},
	{
		title: "mu6k youtube.com/watch?v=tCRPUv8V22o JS",
		value: '(3e3/(y=t&16383)&1)*35+(x=t*"6689"[t>>16&3]/24&127)*y/4e4+((t>>8^t>>10|t>>14|x)&63)',
		khz: 32,
		quality: 1
	},
	{
		title: "LJ 2016-12-15 pouet.net/topic.php?which=8357&page=26 JS",
		value: "((Math.abs(t*(.02+(t*.0001&0x4)*.01)*(1+((t*.0001)%4)<<5)%0xFF-0x80))&0xFF)+(t%100)*.3*Math.abs(Math.sin(t*.00005)*.25+.5)+Math.min(Math.max((t>>16)-2,0)*.5,1)*(t*.1&0xF)*(t*.01&0xFF)/0x70",
		khz: 32,
		quality: 1
	},
	{
		title: "kb 2011-10-04 pouet.net/topic.php?which=8357&page=8",
		value: "((t/2*(15&(0x234568a0>>(t>>8&28))))|t/2>>(t>>11)^t>>12)+(t/16&t&24)",
		khz: 44,
		quality: 1
	},
	{
		title: "ryg 2011-10-10 youtube.com/watch?v=tCRPUv8V22o",
		value: '((t*("36364689"[t>>13&7]&15))/12&128)+(((((t>>12)^(t>>12)-2)%11*t)/4|t>>13)&127)',
		khz: 44,
		quality: 1
	},
	{
		title: "The Nyan Song",
		value: 's="NNPPIKKGJIGGGGIIJJJIGIKNPKNIKGIGKKNNPKNIKGJKJIGIJJGIKNIKIGIIGGIINNPPIKKGJIGGGGIIJJJIGIKNPKNIKGIGKKNNPKNIKGJKJIGIJJGIKNIKIGIIGGIIGGBDGGBDGIKGLKLNGGGGBDGBLKIGB?@BGGBDGGBDGGIKGBDBGGGFGBDGLKLNGGFFGGBDGGBDGIKGLKLNGGGGBDGBLKIGB?@BGGBDGGBDGGIKGBDBGGGFGBDGLKLNGGII",t*Math.pow(2,s.charCodeAt((t>>12)%s.length)/12-4)',
		khz: 44,
		quality: 1
	},
];