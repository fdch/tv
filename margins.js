//Get a random number to be margin
function getRandomMargin() {
var margen = (5 * Math.random()) + 3;
return margen;
}
///Make Random Margins 
function randomMargenMotionL() {
$(".menulink-left").delay(4333).animate({
marginLeft: (getRandomMargin() * -0.5) //up to half of the right margin
}, 4333);
}
function randomMargenMotionR() {
$(".menulink").delay(4333).animate({
marginRight: getRandomMargin()
}, 4333);
}
function randomMargenWorks() {
$(".nums").delay(4333).animate({
marginRight: getRandomMargin()*0.5
}, 4333*1.3);
}
//SetRandom Margens going every 3000
setInterval(function() {
randomMargenMotionL();
}, 4333);
setInterval(function() {
randomMargenMotionR();
}, 4333);
setInterval(function() {
randomMargenWorks();
}, 4333);