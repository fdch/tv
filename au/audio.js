var gainTag,pitchTag,toggleTag;
var audioSwitch=0;

// create web audio api context
var audioCtx = new (window.AudioContext || 
	window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.type = 'square';
oscillator.connect(gainNode);
gainNode.gain.value = 0;
gainNode.connect(audioCtx.destination);

oscillator.start();

function main() {
	mainTag = document.getElementsByTagName('main')[0];
	// waveTag = makeInput(mainTag, 'option',{
	// 	type:"",
	// 	name:"wave",
	// 	oninput:"gui(this)",
	// });
	pitchTag = makeInput(mainTag,'input',{
		type:"range",
		name:"pitch",
		oninput:"gui(this)",
		value: 0,
		min:0,
		max:128
	});
	gainTag = makeInput(mainTag,'input',{
		type:"range",
		name:"volume",
		oninput:"gui(this)",
		value: 0,
		min:0,
		max:120
	});
	toggleTag = makeInput(mainTag,'input',{
		type:"button",
		name:"mute",
		oninput:"gui(this)",
		value: "mute: "+!audioSwitch
	});
	mainTag.style.marginTop = 40 + "px";
}

function makeInput(target,tag,obj) {
	// console.log(tgt);
	var t = document.createElement(tag);
	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			t.setAttribute(key, obj[key]);
			// console.log (key+": "+obj[key]); 
		}
	}
	target.appendChild(t);
	return t;
}
function gui(x) {
	// console.log(x);
	var valu = x.value;
	var name = x.name;
	switch(name) {
		case "mute":
			x.value = toggleAudio();
			console.log(x.value);
			break;
		case "pitch":
			changePitch(valu);
			break;
		case "volume" :
			changeGain(valu);
			break;
		default:
			console.log(x);
			break;
	}
}
function toggleAudio() {
	if(audioSwitch) gainNode.gain.value = 0, audioSwitch=0;
	else gainNode.gain.value = 1, audioSwitch=1;
	return "mute: "+ !audioSwitch;
}
function changePitch(x) {
	let ptch = mtof(x);
	oscillator.frequency.setValueAtTime(ptch, audioCtx.currentTime); 
	console.log("pitch:"+ ptch);
}
function changeGain(x) {
	let val = dbtorms(x);
	gainNode.gain.value = val;
	console.log("vol:"+ val);
}