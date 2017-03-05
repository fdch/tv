var canvas;
var x, y, z;
var xup, yup, zup;
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
	//background(0);
//	hexagon();
}

function draw() {

	
	/*
	var alter = frameCount % 2;
	if (alter === 0) {
		col = 220;
	} else {
		col = 255;
	}
	*/
	col = map(mouseY, 0, height, 255, 0);
	num = map(mouseX, 0, width, 0, 100);
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
		//stroke(255);	
		
		
		
		beginShape();
		for (a = 0; a < TWO_PI; a += angle) {
			sx = cos(a) * radius;
			sy = sin(a) * radius;
			vertex(sx, sy);
		}
		endShape(CLOSE);
	
	
	
}

/*
function anyKey() {
	if (key === 'q' || key === 'w' || key === 'e' || key === 'r' || key === 't' || key === 'y' || key === 'u' || key === 'i' || key === 'o' || key === 'p' || key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'g' || key === 'h' || key === 'j' || key === 'k' || key === 'l' || key === 'z' || key === 'x' || key === 'c' || key === 'v' || key === 'b' || key === 'n' || key === 'm') {
		R = floor(random(255));
		G = floor(random(255));
		B = floor(random(255));
	}
}


function hitKeys() {
	if (key === 'q' || key === 'w' || key === 'e' || key === 'r' || key === 't' || key === 'y' || key === 'u' || key === 'i' || key === 'o' || key === 'p') {
		R = floor(random(255));
	} else if (key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'g' || key === 'h' || key === 'j' || key === 'k' || key === 'l') {
		G = floor(random(255)); 
	} else if (key === 'z' || key === 'x' || key === 'c' || key === 'v' || key === 'b' || key === 'n' || key === 'm') {
		B = floor(random(255));
	}
}
*/
	
/*

//initializations
x = 0.1;
y = 0;
z = 0;
a = 10.0;
b = 28.0;
c = 8/3;
function drawRect(xmove, lmove) {
	translate(lmove*3,lmove*3);
	ellipse(width/2+xmove, height/3, 20+lmove*4, 20+lmove*4);
}


*/
/*
function backFill(col) {
	for (x = 0; x < width; x += 100) {
	radius = random(-height,height)/height*1000;
	randWidth = random(-width, width)/width*255;
	randHeight = random(-height, height)/height*255;
	}
}
*/

/*
function drawLorenz() {
   for (f = 0; f < 10000; f++) {
     x0 = x;
     y0 = y;
     z0 = z;
     x1 = x0 + h * a * (y0 - x0);
     y1 = y0 + h * (x0 * (b - z0) - y0);
     z1 = z0 + h * (x0 * y0 - c * z0);
     x = x1;
     y = y1;
     z = z1;
     if (f > 100) {
     xpoint = map(x, -40, 40, -width, width);
     ypoint = map(y, -40, 40, -height, height);
     zpoint = map(z, 0, 50, -1000, 400);
     translate(xpoint, ypoint, zpoint);
  	 sphere(4);
    }
  }
}
*/
 /*
void keyReleased() {
  if (key == 'a') {
    background(255);  
    a++;
    print(a);
    drawLorenz();
  }
  if (key == 'b') {
    background(255);  
    b++;
    print(b);
    drawLorenz();
  }
  if (key == 'r') {
    background(255);  
     a = 10.0;
     b = 28.0;
     c = 8/3;
    drawLorenz();
  }
   if (key == 'p') {
    drawLorenz();
  }
}
*/

/*


	var x0, y0, z0, x1, y1, z1;
	var h = 0.01;
	x0 = x;
    y0 = y;
    z0 = z;
    x1 = x0 + h * a * (y0 - x0);
    y1 = y0 + h * (x0 * (b - z0) - y0);
    z1 = z0 + h * (x0 * y0 - c * z0);
    x = x1;
    y = y1;
    z = z1;

	var xpoint, ypoint, zpoint;
    xpoint = map(x, -40, 40, -width, width);
    ypoint = map(y, -40, 40, -height, height);
    zpoint = map(z, 0, 50, -1000, 400);

	
	//GET ABSOLUTE VALUE
  	xdiffn = x1 - x0;
    ydiffn = y1 - y0;
    zdiffn = z1 - z0;
  
    //PITHAGOREAN DISTANCE
    dist = sqrt((x1-x0)*(x1-x0)+(y1-y0)*(y1-y0)+(z1-z0)*(z1-z0));
  
    //VELOCITY (D/T)
    velo = dist/frameCount;
  
    //IS SLOPE POSITIVE?
    xup = (xdiffn >= 0 ) ? 1 : 0;
    yup = (ydiffn >= 0 ) ? 1 : 0;
    zup = (zdiffn >= 0 ) ? 1 : 0;
    
  	R = floor(map(xpoint, -width,width,20,255));
	G = floor(map(ypoint, -height,height,20,255));
	B = floor(map(zpoint, -1000,400,20,255));
	
	fill(0);
	background(255);
	text("mouseY " + mouseY + " | " + "mouseX " + mouseX, 5, 60);
	text("R " + R + " | " + " G " + G + " | " + " B " + B, 5, 90);
	text("XUP " + xup + " | " + "YUP " +  yup + " | " + "ZUP " + zup, 5, 120);
	text("dist " + dist, 5, 150);
	text("frameCount " + frameCount + " | " + "velo " + velo, 5, 180);
	
	var amount = 10;
	for (i = 0; i < amount; i++) {
		fill(random(255),0,0);
		drawRect(0,x-i);
	}
	for (i = 0; i < amount; i++) {
		fill(0,random(255),0);
		drawRect(100,y-i);
	}
	for (i = 0; i < amount; i++) {
		fill(0,0,random(255));
		drawRect(200,z-i);
	}
	for (i = 0; i < amount; i++) {
		fill(random(255));
		drawRect(300,dist-i);
	}
*/