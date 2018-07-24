function createAudioContext() {
	return new (window.AudioContext || 
	window.webkitAudioContext)();
}
// create Oscillator node
function fd_osc(fr,ph) {
	fr = fr || 0;
	ph = ph || 0;
	let g = aCtx.createOscillator();
	g.frequency.value = fr;
	// g.phase.value = ph;
	return g;
}
function fd_gain(val) {
	val = val || 0;
	let g = aCtx.createGain();
	g.gain.value = val;
	return g;
}
function fd_connect(s,t) {
	s.connect(t);
}

function myOsc(context,fr,type){
	var ctx = context;
	this.o = ctx.createOscillator();
	this.g = ctx.createGain();
	
	this.o.connect(this.g);
	var that = this;
	this.gain = function(rms){
		that.g.gain.linearRampToValueAtTime(rms, ctx.currentTime + 0.01);
		// console.log(rms);
	}
	this.gaindB = function(db){
		let rms = dbtorms(db);
		that.g.gain.linearRampToValueAtTime(rms, ctx.currentTime + 0.01);
	}
	this.type = function(wave){
		that.o.type = wave;
	}
	this.freq = function(f){
		that.o.frequency.linearRampToValueAtTime(f, ctx.currentTime + 0.01);
	}

	if(fr)this.freq(fr);
	if(type)this.type(type);

	this.o.start();

	return this;
}


// var cos_table=[];
// function cos_maketable(COSTABSIZE) {
// 	COSTABSIZE = COSTABSIZE || 512;
//     var i;
//     var fp, phase, phsinc = (2. * 3.14159) / COSTABSIZE;

//     if (cos_table) return;

//     cos_table = new Float32Array(COSTABSIZE+1);
//     for (i = COSTABSIZE + 1, fp = 0, phase = 0; i--;
//         fp++, phase += phsinc)
//             cos_table[fp] = cos(phase);
// }