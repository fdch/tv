////////////
//// Below are some editable variables
////////////
var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var blogurl = "https://fedecamarahalac.tumblr.com"
var videourl = "https://vimeo.com/fedecamarahalac"
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var title = "Multimedianautics";
var subtitle = "Fede Camara Halac";
var logoimage = ["img/fdch.jpg", 200];
var featURL = "https://player.vimeo.com/video/168692629"
var featured = "<article><iframe src=\""+featURL+"\"></iframe></article>"
var bio = "";


//<p>download: <a href="cv/txt/bio-english.txt" target="_blank">bio</a>, <a //href="cv/txt/resume-english.txt"target="_blank">resume</a>, <a //href="cv/pdf/cv.pdf"target="_blank">cv</a></p>
////////////
////Title
////////////
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=logo><img src=\"" + logoimage[0] + "\" height="+ logoimage[1] +"/></div><div id=menu></div><div id=content></div>";
////////////
//// Meta properties
////////////
var keywords = "fedecamara, camarafede, fedecamarahalac, federico, camara, halac, camarahalac, puredata, lilypond, electronics, live video, instrumental, new music, abstract";
var fbappid = 123442671081764;
var meta = "<meta property=og:image content='fdch.github.io/wp/"+logoimage[0]+"'/><meta name=keywords content='"+keywords+"' /><meta name=description content='" + url + "'<meta name=robots content='index, follow' /><meta name=author content='http://githug.io/fdch' /><meta property=fb:app_id content="+fbappid+"/><meta property=og:url content='" + url + "' /><meta property=og:title content='" + title + "' /><meta property=og:site_name content='" + keywords + "'/><title>" + title + " | " + subtitle + "</title>";
var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-60190278-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->";

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
