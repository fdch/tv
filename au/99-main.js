
var anOsc=[];
var types = [
  "sine",
  "square",
  "sawtooth",
  "triangle",
  "custom"
];

var dotits=40;
var dots = [];


function setup() {
	var canvas = createCanvas(windowWidth,windowHeight);
	for (let i=0;i<=dotits;i++) {
		dots.push(new dot());
	}
	canvas.background(0);
	frameRate(30);
}

var pitches=128,sizes=30;
function draw() {
	background(0);
	for (let i=0;i<dots.length-1;i++){
		dots[i].display(pdRandom(windowWidth),pdRandom(windowHeight));
	}
	pitches=(mouseX/windowWidth)*128;
	sizes = (mouseY/windowHeight)*1000;
	// console.log(pitches);
}

function dot() {
	this.display = function(x,y) {
		fill(pdRandom(255),pdRandom(255),pdRandom(255),pdRandom(255));
		this.y = y;
		this.x = x;
		ellipse(this.x,this.y,pdRandom(sizes),pdRandom(sizes));
	}
}



function main() {
	mainTag = document.getElementsByTagName('main')[0];
	// mainTag.style.marginTop = 40 + "px";

	aCtx = createAudioContext();

	makeRig(aCtx,pdRandom(40,5),0);
	// anOsc[0].
	var nexttime=10;
	setInterval(function(){
	var now = aCtx.currentTime;
		for (var i in anOsc) {
			var freq = Math.random(0,1)*pitches;
			var dura = Math.random(0,1)*10;
			anOsc[i].o.frequency.linearRampToValueAtTime(mtof(freq),now+dura);
		}
		nexttime = Math.random(0,1)*1000;
	},nexttime);
	// var osc = fd_osc();
	// var vol = fd_gain();
	// osc.connect(vol);
	
	// // vol.connect(aCtx.destination);

	// // osc.start();

	// ag.push(osc,vol);

	


	

	// fd_connect(anOsc.o, aCtx.destination);

	// anOsc.gain(0.001);

	// var ff=440;

	// setInterval(function(){
	// 	if (ff==550) {
	// 		anOsc.freq(440);
	// 		ff=440;
	// 	} else {
	// 		anOsc.freq(550);
	// 		ff=550;
	// 	}

		
	// },1000);



	
	// var wForm = makeInput(mainTag, 'form', {
	// 	action:"false"
	// });

	// // for (let i in types) {
	// // 	waveTag = makeInput(wForm, 'input',{
	// // 		type:"radio",
	// // 		name:"osctypes",
	// // 		id:types[i],
	// // 		onclick:"typeOsc(this,ag[0])",
	// // 		label:types[i]
	// // 	});		
	// // }
	// cos_maketable(8192);
	// var wave = aCtx.createPeriodicWave(cos_table)

	// var valueBox = makeInput(mainTag, 'p')
	// pitchTag = makeInput(mainTag,'input',{
	// 	type:"range",
	// 	name:"pitch",
	// 	// oninput:"changePitch(ag[0],mtof(this.value))",
	// 	oninput:"pitch(this,ag[0])",
	// 	value: 0,
	// 	min:0,
	// 	max:128,
	// 	label:"pitch"

	// });
	// gainTag = makeInput(mainTag,'input',{
	// 	type:"range",
	// 	name:"volume",
	// 	// oninput:"changeGain(ag[ag.length],dbtorms(this.value))",
	// 	oninput:"gain(this,ag[ag.length-1])",
	// 	value: prevol,
	// 	min:0,
	// 	max:120,
	// 	label:"vol"
	// });
	// muteTag = makeInput(mainTag,'input',{
	// 	type:"button",
	// 	name:"mute",
	// 	onclick:"mute(this,ag[ag.length-1])",
	// 	value: !aSwitch,
	// 	label: "mute"
	// });
	// buttontag = makeInput(mainTag,'input',{
	// 	type:"button",
	// 	name:"makeWave",
	// 	onclick:"makeWave(sliderVals,ag[0]);",
	// 	value:"makeWave",
	// 	label:"makeWave"
	// });
	// tempoTag = makeInput(mainTag,'input',{
	// 	type:"range",
	// 	name:"tempo",
	// 	// oninput:"changeGain(ag[ag.length],dbtorms(this.value))",
	// 	oninput:"tempo(this, ag[ag.length-1])",
	// 	value: prevol,
	// 	min:0,
	// 	max:540,
	// 	label:"tempo"
	// });
	// buttontag = makeInput(mainTag,'input',{
	// 	type:"button",
	// 	name:"crazy",
	// 	onclick:"crazy();",
	// 	value:"crazy",
	// 	label:"crazy"
	// });


	// var del = 400;

	// setInterval(function(){
	// 	// del = pdRandom(4000)+10;
	// 	for (var i in anOsc) {
	// 		anOsc[i].g.gain.linearRampToValueAtTime(1, aCtx.currentTime + 0.1);
	// 	}
	// 	setTimeout(function(){
	// 		for (var x in anOsc) {
	// 			anOsc[x].g.gain.linearRampToValueAtTime(0, aCtx.currentTime + del*0.1);
	// 		}
	// 	},100)
		
	// 	// console.log(del);
	// },del);







	// for (var i=0;i<=anOsc.length-1;i++) {
	// 	anOsc[i].gain(0);
	// }




















	// var sliders = 10;
	// var partials = makeInput(mainTag, 'form', {
	// 	action:"false",
	// 	text:"Partials"
	// });

	// while (sliders) {
	// 	makeInput(partials, 'input', {
	// 		type:"range",
	// 		name:"part"+sliders,
	// 		oninput:"partials(this,ag[0])",
	// 		value:0,
	// 		min:0,
	// 		max:128,
	// 		label:0,
	// 		style:"display:block"
	// 	});
	// 	sliders--;

	// }

}
var partials = 20;
var cw = 300, ch = 150, cm = 0;
var partStep = cw/partials;
var cIw = cw-cm*2, cIh = ch-cm*2;

var sliders = [];
var sliderVals=[];












// function setup() {
// 	var canvas = createCanvas(cw, ch);
// 	for (let i=0;i<=partials;i++) {
// 		sliders.push(new slider(i));
// 	}
// 	canvas.background(0);
// 	frameRate(30);
// }
// function draw() {
// 	if (mouseX < cw-cm && 
// 		mouseY < ch-cm && 
// 		mouseX > cm && 
// 		mouseY > cm)
// 	{ 	
// 		background(0);
// 		var xpos = mouseX;
// 		var ypos = ch-mouseY;
// 		for (let i=0;i<sliders.length-1;i++){
// 			sliders[i].display(mouseX,mouseY);
// 		}
// 	}
// }

function slider(x) {
	var xstep = x*partStep;
	fill(200);
	this.display = function(xx,h) {
		if(xx < xstep) this.h = h;
		ellipse(xstep,this.h,partStep,partStep);
		sliderVals[x] = this.h;
	}
}
function makeWave(array, node) {
	var real = new Float32Array(array.length+1);
	var imag = new Float32Array(array.length+1);
	for (let i=0,j=0; i<=array.length-1;i++,j++) {
		real[j] = Math.fround(array[i]>=0?array[i]:0);
		imag[j] = 0.0;
	}
	// console.log(real.join(" "));
	var wave = aCtx.createPeriodicWave(real, imag);
	node.setPeriodicWave(wave);
}

function pdRandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var onoff=0;
function crazy(){
	var ff=440,orient=1, tm=1000;
	if(onoff==1) {
		var cra = setInterval(function(){
			for (var i=0;i<=anOsc.length-1;i++) {
				if (orient) {
					orient = pdRandom(1);
					ff += pdRandom(200);			
				} else {
					orient = 1;
					ff -= pdRandom(200);	
				}
				while (ff >= 16000) ff -= pdRandom(200);
				anOsc[i].freq(pdRandom(ff/2,ff/2));
				anOsc[i].gaindB(pdRandom(100));
			}
			
		},100);
		onoff=0;
	} else {
		if(cra)clearInterval(cra);
		onoff=1;
	}
	console.log(onoff);
}



function makeRig(context,num,controls) {
	var ctx = context;
	var width = document.body.clientWidth-30;

	for (var i=0;i<=num;i++){
		var freq = 100+i*pdRandom(200);
		anOsc.push(new myOsc(ctx,freq,types[pdRandom(types.length-2)]));
		anOsc[i].g.connect(ctx.destination);
		if(controls){
			makeInput(mainTag,'input',{
				type:"range",
				name:"p"+i,
				oninput:"anOsc["+i+"].freq(mtof(this.value));",
				value:ftom(freq),
				min:0,
				max:128,
				width:width+"px",
				// label:"p"+i,
				style:"display:block;width:"+width+"px;"
			});
		}
	}
}



// function ramp(target,duration){
// 	var t = 0;
// 	//var tgt = target * 0.001;

// 	var start=0, end=target, range = end-start;
// 	var dur;
// 	if (duration) {grain = range/duration} else {grain=0.001};

// 	while(target>t) //while not there yet
// 		setInterval(function() { t+=grain; }, dur );



// }






