var w, h, t = 4333;
var mitem = ["bio", "work", "events", "social", "games", "contact", "blog", "video", "fdch"];

var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var raw = "https://raw.githubusercontent.com/fdch/";
var blog = "http://ffddcchh.tumblr.com/";
var scloud = "https://soundcloud.com/ffddcchh";
var video = "https://vimeo.com/ffddcchh";
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

var contactGif = "\"img/zissou.gif\" width=200";


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
var games = "<article>"+gameType.join("<br/>")+"</article>";


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

var bioEnglish = "";
var bioSpanish = "";

var footer = "<p>blog(<a href="+blog+">ffddcchh</a>) ~ code(<a href="+repo+">fdch</a>) ~ video(<a href="+video+">fdch</a>)</p>";
