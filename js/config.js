var w, h, t = 4333;
var mitem = ["bio", "work", "events", "social", "games", "contact", "blog", "video", "fdch"];

var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var raw = "https://raw.githubusercontent.com/fdch/";
var blog = "http://ffddcchh.tumblr.com/";
var video = "https://vimeo.com/fedecamarahalac";
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";

var color_preset = {
	mid  : [55,200,100,20],
	high : [30,200,50,100],
	rand : [255,0,255,0]
};

var title = "fdch";
var subtitle = "Fede Camara Halac";

var bioImage = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/15032050_10211430901748916_6498585033629064846_n.jpg?_nc_cat=0&oh=9e8629831420574084cff15ba1ec6d87&oe=5BACC900";
var bioCV = "cv/txt/bio-english.txt";

var featWork = "Lorenz Variations";

var vimeo = [
"https://player.vimeo.com/video/",
"?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"
];

var youtube = [
"https://www.youtube.com/embed/",
"?rel=0&amp;controls=0&amp;showinfo=0"
];

var featURL = [
youtube[0] + "hXONutQ_vYc" + youtube[1],
youtube[0] + "GA0_ieFjpuM" + youtube[1],
youtube[0] + "gErNVvwsOdI" + youtube[1],
youtube[0] + "HpPNVJsn3XQ" + youtube[1],
vimeo[0]   + "168692629"   + vimeo[1]  ,
vimeo[0]   + "189384117"   + vimeo[1]  ,
vimeo[0]   + "137084409"   + vimeo[1]  ,
vimeo[0]   + "135750747"   + vimeo[1]  ,
vimeo[0]   + "189537568"   + vimeo[1]  ,
vimeo[0]   + "189548950"   + vimeo[1]  ,
vimeo[0]   + "128082938"   + vimeo[1]  ,
vimeo[0]   + "128763368"   + vimeo[1]  ,
vimeo[0]   + "103288412"   + vimeo[1]  ,
vimeo[0]   + "93202065"    + vimeo[1]   
];

var spreadsheets = "https://spreadsheets.google.com/feeds/list/";
var sheetID = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ/";
var altjson = "/public/values?alt=json";
var sheetURL = spreadsheets+sheetID+"1"+altjson;
var eventsURL = spreadsheets+sheetID+"2"+altjson;

var contact = "\
<article>\
<h3>contact</h3>\
<p>Send me an email at \
<a href=\"mailto:"+email+"\">"+email+"</a> \
and I will get in touch with you as fast as humanly possible. \
You can also follow me on social networks</p>\
<img src=\"img/zissou.gif\" width=200/>\
</article>";

var gameDraw = [
"draw/",
"img/draw.png",
"Draw concentrical polygons as they get smaller. Print page when you are done.",
repo + "misc/tree/master/pong",
raw  + "misc/master/pong/screen1.jpg",
"A Pd Vanilla + Gem version of the pong game."
];

var gameType = [
"<button onclick=\"window.open(\'"+gameDraw[0]+"\')\" >draw</button>\
	<p>"+gameDraw[2]+"</p>\
	<img onclick=\"window.open(\'"+gameDraw[0]+"\')\" src=\""+gameDraw[1]+"\" width=200/>",
"<button onclick=\"window.open(\'"+gameDraw[3]+"\')\" >PONG</button>\
	<p>"+gameDraw[5]+"</p>\
	<img onclick=\"window.open(\'"+gameDraw[3]+"\')\" src=\""+gameDraw[4]+"\" width=200/>"
];
var games = "<article>"+gameType.join()+"</article>";


var fonts = [
"\'Courier\'",
"\'Arial\'",
"\'Helvetica\'",
"\'Times New Roman\'",
"\'Courier New\'",
"\'Times\'",
"\'Verdana\'",
"\'Georgia\'",
"\'Palatino\'"
];



var imgArray = ["img/imgone.png","img/imgtwo.png"];
var favicon = imgArray[0];
  
var titleData = "\
<div id='menubg'>\
<div id='rot' style='float:right'>\
	<img src='"+imgArray[0]+"' width='30'/></div>\
<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1>\
<h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2>\
<div id=menu></div>\
</div>\
<div id=submenu></div>\
<div id=content></div>";

var bioEnglish = "";

$.get('cv/txt/bio-english.txt', function(data){ bioEnglish = data });
 


var keywords = "fdch, fedecamara, camarafede, fedecamarahalac,\
federico, camara, halac, camarahalac, puredata, lilypond,\
electronics, live-video, instrumental, new-music, abstract";
var fbappid = 123442671081764;
var viewport = "width=device-width, initial-scale=1.0";
var site_name =  title + " | " + subtitle; 
var robots  = "index,follow"

var meta = "\
<title>"+site_name+"</title>\
<link rel=\"icon\"  type=\"image/png\" href=\""+favicon+"\">\
<meta property=og:image          content='" + imgArray[0] +"'/>\
<meta name=keywords              content='" + keywords    +"' />\
<meta name=description           content='" + bioEnglish  + "'\
<meta name=robots                content='" + robots      + "' />\
<meta name=author                content='" + repo        +"' />\
<meta name=viewport              content='" + viewport    + "'>\
<meta property=fb:app_id         content='" + fbappid     + "'/>\
<meta property=og:url            content='" + url         +     "' />\
<meta property=og:title          content='" + title       + "' />\
<meta property=og:site_name      content='" + site_name   + "'/>";

var social = [ {
"Soc":"Social",
"Github" : repo,
"Twitter":"http://www.twitter.com/fedecamarahalac",
"Facebook": facebookUrl,
"SoundCloud":"http://www.soundcloud.com/fedecamarahalac",
"Vimeo": video,
"Vine":"http://www.vine.co/fedecamarahalac",
"YouTube":"https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA",
"Tumblr": blog,
"Flickr":"http://www.flickr.com/federicocamarahalac",
"Linkedin":"http://linkedin.com/in/fedecamarahalac",
"Pep":"People",
"Judy Klein":"https://en.wikipedia.org/wiki/Judy_Klein",
"Jaime Oliver La Rosa":"http://www.jaimeoliver.pe",
"Elizabeth Hoffman":"https://soundcloud.com/eliz-hoffman",
"Jose Halac":"https://soundcloud.com/josehalac",
"Bernardo Barros":"http://www.bernardobarros.com",
"Pablo Behm":"http://www.pablobehm.com.ar",
"Federico Ragessi":"http://www.federagessi.com.ar",
"Adele Fournet":"http://www.adelefournet.com",
"Viola Yip":"http://www.violayip.com",
"Ioannis Angelakis":"http://www.ioannisangelakis.com",
"Joe Snape":"http://joesna.pe",
"Ens":"Ensembles",
"loadbang":"http://www.loadbang.com",
"Rage Thormbones":"http://ragethormbones.rocks",
"Tak":"http://www.takensemble.com",
"Momenta Quartet":"http://www.momentaquartet.com",
"Talea Ensemble":"http://taleaensemble.org/",
"Ensemble Mise-En":"http://www.miseen.org",
"Proyecto[Red]Ensamble":"http://www.proyectoredensamble.com.ar",
"Sapegoat":"http://www.scapegoat.fr",
"Org":"Organizations",
"Waverly Project":"http://www.waverlyproject.org",
"Bienal Composicion Cordoba":"http://www.cordobabienal.com",
"Puredata":"http://msp.ucsd.edu/",
"@ayesavid":"http://www.instagram.com/ayesavid"
} ];

var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-60190278-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->";