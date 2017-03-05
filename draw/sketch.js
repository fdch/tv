var canvas, x, y, z, xup, yup, zup;
var xdiffn, ydiffn, zdiffn;
var a, b, c;
var i, f;
var dist, velo;
var lmove,xmove;
var pos,col;
var R, G, B;
var text;
var k;
var dim;
var sx,sy,angle,radius,click;
function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	frameRate(30);
}
function draw() {
	col = map(mouseY, 0, height, 255, 0);
	num = map(mouseX, 0, width, 1, 30);
	hexagon(col,num);
}
function hexagon(col,num,i) {
	i = frameCount * 0.1;
	translate(width/2,height/2);
	rotate(i);
	angle = TWO_PI / num;
	if (radius < 0) {
		radius = 0;
		noLoop();
	} else { 
	radius = height/2 - i;
	}
	fill(col);
	beginShape();
	for (a = 0; a < TWO_PI; a += angle) {
		sx = cos(a) * radius + (Math.random()*2);
		sy = sin(a) * radius + (Math.random()*2);
		vertex(sx, sy);
	}
	endShape(CLOSE);
}