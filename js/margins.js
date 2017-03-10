//Get a random number to be margin
function getRandomMargin() {
	var margen = (5 * Math.random()) + 3;
	return margen;
}
///Make Random Margins 
function randomMargenMotionR() {
	$(".menulink").delay(4333).animate({
		marginRight: getRandomMargin()
	}, 4333);
}

//SetRandom Margens going every 3000

setInterval(function() {
	randomMargenMotionR();
}, 4333);

//Every 5000, change the opacity of the fd image
setInterval(function() {
	var op = Math.random();
	var timeop = (op * 4000) + 0;
	$(".fd").delay(timeop).animate({opacity: op}, timeop);
}, 5000);


//fun with codeback in social
$(".makenew").css("cursor","pointer").mouseenter(function() {
var rwi = Math.floor(content * Math.random() * 0.5);
var rhi = Math.floor(content * Math.random() * 0.5);
var lim = Math.floor(Math.random()*16) + 1;
for ( i = 0 ; i < lim; i++)
{
 $("#content").append(document.createTextNode("<span class=makenew style=cursor:pointer><img width=" + rwi + " height=" + rhi + " src=img/codeback.png /></span>" ))
}
});
$(".makenew").click(function() {
var rwi = Math.floor(content * Math.random() * 0.5);
var rhi = Math.floor(content * Math.random() * 0.5);
var lim = Math.floor(Math.random()*16) + 1;
for ( i = 0 ; i < lim; i++)
{
 $("#content").append(document.createTextNode("<span class=makenew style=cursor:pointer><img width=" + rwi + " height=" + rhi + " src=img/codeback.png /></span>" ))
}
});