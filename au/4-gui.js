function typeOsc(x,node) {
	if(x.checked) {
		if(!x.id.localeCompare("custom")){
			makeWave(sliderVals,node);
		}else {
			node.type = x.id; 
			console.log("type:"+ x.id);
		}
	}
}

function tempo(x, node) {
	var val = x.max-x.value;
	var msec = 60000/val<=60000?60000/val:0;
	var id = setInterval(beat, msec);

	console.log(msec+" "+val);

	function beat() {
    	if (!x.value) {
      		clearInterval(id);
    	} else {
    	//do the beat
    		node.gain.linearRampToValueAtTime(prevol, aCtx.currentTime + 0.01);
    		setTimeout(function(){
    			node.gain.linearRampToValueAtTime(0, aCtx.currentTime + msec);
    		},0.01);
    }
  }
} 



function pitch(x,node) {
	let ptch = mtof(x.value);
	node.frequency.linearRampToValueAtTime(ptch, aCtx.currentTime + 0.01);; 
	// console.log("pitch:"+ ptch);
}
function gain(x,node) {
	let rms = dbtorms(x.value);
	// node.gain.value = rms;
	node.gain.linearRampToValueAtTime(rms, aCtx.currentTime + 0.01);
	if(rms) prevol=rms, aSwitch=1, muteTag.value=false;
	console.log("vol:"+ rms);
}
function mute(x,node) {
	if(aSwitch) {
		node.gain.linearRampToValueAtTime(0, aCtx.currentTime + 0.01);
		gainTag.value=0;
		aSwitch=0; 
	} else {
		node.gain.linearRampToValueAtTime(prevol, aCtx.currentTime + 0.01);
		gainTag.value=rmstodb(prevol);
		aSwitch=1
	}
	x.value=!aSwitch;
	console.log(x.value)
}

function partials(x,node) {
	let ptch = mtof(x.value);
	// node.frequency.linearRampToValueAtTime(ptch, aCtx.currentTime + 0.01);; 
	console.log(x.name+ ", pitch:"+ ptch);
}




// function gui(x) {
// 	// console.log(x);
// 	var valu = x.value;
// 	var name = x.name;
// 	switch(name) {
// 		case "mute":
// 			x.value = toggleAudio();
// 			console.log(x.value);
// 			break;
// 		case "pitch":
// 			changePitch(valu);
// 			break;
// 		case "volume" :
// 			changeGain(valu);
// 			break;
// 		default:
// 			console.log(x);
// 			break;
// 	}
// }