var w, h, t = 4333;
var mitem = ["bio", "unwork", "papers", "events", "social", "games", "contact"];

var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var raw = "https://raw.githubusercontent.com/fdch/";
var blog = "http://ffddcchh.tumblr.com/";
var scloud = "https://soundcloud.com/ffddcchh";
var video = "https://vimeo.com/fdch";
var nyuid = "fch226((at))nyu.edu";
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var tilde = " ~ ";

var color_preset = {
	mid  : [55,200,100,20],
	high : [30,200,50,100],
	rand : [255,0,255,0]
};

var title = "fdch";
var subtitle = "Fede Cámara Halac";
var bioImage = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/15032050_10211430901748916_6498585033629064846_n.jpg?_nc_cat=0&oh=9e8629831420574084cff15ba1ec6d87&oe=5BACC900";
var unclink = "http://artes.unc.edu.ar/";
var nyulink = "http://gsas.nyu.edu/";
var unc = linkify("La Universidad Nacional de Córdoba (Argentina)",unclink,1);
var nyuTitle = "Music Composition & Theory";
var uncTitle = "Licenciatura en Composición Musical";
var nyu = linkify("New York University (GSAS)",nyulink,1)
var advisors = ["Jaime Oliver La Rosa","Elizabeth Hoffman"];
var status = ["PhD Candidate", "Candidato de PhD"];

var bioEnglish = "<p>"+subtitle+" studied "+uncTitle+" at "+unc+".\
 He is a "+status[0]+" in "+nyuTitle+" at "+nyu+" with "+advisors.join(" and ")+".\
 His research focuses on Database Multimedia Composition.\
 His work is available at "+url+"</p>";

var bioSpanish = "<p>"+subtitle+" estudió "+uncTitle+" en "+unc+".\
 Es "+status[1]+" de "+nyuTitle+" en "+nyu+" con "+advisors.join(" y ")+".\
 Su investigación se centra en la Composición Multimedial con Base de Datos.\
 Su trabajo se encuentra disponible en "+url+"</p>";

var personal = {
"Full Name": "Federico Nicolás Cámara Halac",
"Date of Birth" : new Date(1988, 5, 8),
"Country of Birth" : "Argentina"
"Mailing Address" : "24 Waverly Place r.268. New York, NY 10003. USA",
"Phone Number" : "(1) 347-302-0982",
"E-mail" : email,
"Graduate" : status[0]+ " in "+nyuTitle+" at "+nyu+" (2013-2019)",
"Undergraduate" : uncTitle + " at the " +unc+ "(2006-12)",
}

var footer = [
	linkify("blog",blog,1),
	linkify("code",repo,1),
	linkify("video",video,1),
	linkify("audio",scloud,1)
]

var contactGif = "img/zissou.gif";

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
var socialURL = spreadsheets+sheetID+"3"+altjson;
var writingsURL = spreadsheets+sheetID+"4"+altjson;

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

var contactMessage = [
 "<h3>contact</h3>",
 "<p>Send me an email at "+nyuid+" and I will get in touch with you (as fast as nonhumanly possible :)</p>",
 "<p>Mandá(me) una correa electrónica a "+nyuid+" así me pongo en contacto lo más rápido que pueda (dentro de lo nohumánamente posible ;)</p>",
 imgify(contactGif,200),
]

///make this better:

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



// Github : repo,
// Twitter:http://www.twitter.com/fedecamarahalac,
// Facebook: facebookUrl,
// SoundCloud:http://www.soundcloud.com/fedecamarahalac,
// Vimeo: video,
// Vine:http://www.vine.co/fedecamarahalac,
// YouTube:https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA,
// Tumblr: blog,
// Flickr:http://www.flickr.com/federicocamarahalac,
// Linkedin:http://linkedin.com/in/fedecamarahalac,




