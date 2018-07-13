var htmlTag, bodyTag, headerTag, mainTag, footerTag;
var h1titlTag, navigaTag, iframeTag, rotImgTag;
var mainBack;

var allUnwork={};
var allPapers={};
var allEvents={};
var allPeople={};
var allPerfor={};
var allAwards={};
var allCollab={};
var allTeachi={};

var allCategories=[], allTitles=[],allWorkId=[],uniqueCategories=[];

var mitem = ["init", "bio", "unwork", "papers", "events", "people", "touch"];
var currpage=0;

var loaded=0, loading=0;


var w, h;
var t = 4333;
var maxWidth = 810;
var widthFactor = 0.9;

var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var cv = url+"/cv/";
var raw = "https://raw.githubusercontent.com/fdch/";
var blog = "http://ffddcchh.tumblr.com/";
var scloud = "https://soundcloud.com/ffddcchh";
var video = "https://vimeo.com/fdch";
var nyuid = "fch226((at))nyu.edu";
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var twitter = "http://www.twitter.com/ffddcchh";
var yt = "https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA";
var flickr = "http://www.flickr.com/federicocamarahalac";
var linkedin = "http://linkedin.com/in/fedecamarahalac";
var instagram = "https://instagram.com/ffddcchh";


var contactGif = "img/zissou.gif";
var loadingUrl = "img/fdch.gif";

var backImg = "background-image:url(\'"+loadingUrl+"\');";
var bioImage = "\
https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/\
15032050_10211430901748916_6498585033629064846_n.jpg?\
_nc_cat=0&oh=9e8629831420574084cff15ba1ec6d87&oe=5BACC900";


var rotImgStyle= [
	"position:absolute;",
	"right:12px;",
	"top:12px;",
	"clip-path:circle(50% at center);",
	"-webkit-clip-path:circle(50% at center);"
];
var rotImg = [
	raw+"tv/master/img/imgone-76.png",
	raw+"tv/master/img/imgone-76-i.png",
	rotImgStyle.join(""),
	"rotImgId",
	"fdch~",
	"imgClicker(this);"
];

var tilde = " ~ ";
var hide = "style=\"display:none\"";
var today = new Date();

var color_preset = {
	mid  : [55,200,100,20],
	high : [30,200,50,100],
	rand : [255,0,255,0]
};

var title = "fdch";
var subtitle = "Fede Cámara Halac";
var unclink = "http://artes.unc.edu.ar/";
var nyulink = "http://gsas.nyu.edu/";
var unc = "La Universidad Nacional de Córdoba (Argentina)";
var nyuTitle = "Music Composition & Theory";
var uncTitle = "Licenciatura en Composición Musical";
var nyu = "New York University (GSAS)";
var advisors = ["Jaime Oliver La Rosa","Elizabeth Hoffman"];
var currently = ["PhD Candidate","Candidato de PhD"];
var tesis = ["Database Multimedia Composition","Composición Multimedial con Base de Datos"]
var bday = new Date(1988, 5, 8, 12, 1, 13, 128);

var bioEnglish = subtitle+" studied "+uncTitle+" at "+unc+".\
 He is a "+currently[0]+" in "+nyuTitle+" at "+nyu+" with "+advisors.join(" and ")+".\
 His research focuses on "+tesis[0]+".\
 His work is available at "+url;

var bioSpanish = subtitle+" estudió "+uncTitle+" en "+unc+".\
 Es "+currently[1]+" de "+nyuTitle+" en "+nyu+" con "+advisors.join(" y ")+".\
 Su investigación se centra en la "+tesis[1]+".\
 Su trabajo se encuentra disponible en "+url;

var personal = [
"Full Name: Federico Nicolás Cámara Halac",
"Date of Birth : "+ linkify(bday,"https://en.wikipedia.org/wiki/May_8",1),
"Country of Birth : Argentina",
"Mailing Address : 24 Waverly Place r.268. New York, NY 10003. USA",
"Phone Number : (1) 347-302-0982",
"E-mail : "+ email,
"Website : "+ linkify(url,url),
"Graduate Education : "+ currently[0] + " in "+nyuTitle+" at "+nyu+" (2013-2019)",
"Undergraduate : " +uncTitle + " at the " +unc+ " (2006-12)",
];

var footer = [
	"I still have "          	+linkify("Tumblr",blog,1)+" because I'm old",
 	"Currently, my code is on "	+linkify("Github",repo,1)+" ...but I'll change this soon, because EvilCorp just bought it..",
	"Most videos are on "     	+linkify("Vimeo",video,1)+" ...and on: "+linkify("Youtube",yt,1),
	"Some music is on "       	+linkify("SoundCloud",scloud,1),
	"I post pictures on "   	+linkify("Instagram", instagram,1),
	"Oddly enough, I still have some pics on "+linkify("Flickr",flickr,1),
	"When I get like "+tag("i","professional")+" and all, I go to "+linkify("LinkedIn", linkedin,1),
	"I rarely use "             +linkify("Twitter",twitter,1)+", but I post things on occasions",
	"Finally, you can become my friend on "+linkify("Facebook",facebookUrl,1)
];


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
var cvID = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw/";
var altjson = "/public/values?alt=json";

var allGS = [
	spreadsheets+sheetID+"1"+altjson,
	spreadsheets+sheetID+"2"+altjson,
	spreadsheets+sheetID+"3"+altjson,
	spreadsheets+sheetID+"4"+altjson,
	spreadsheets+cvID   +"1"+altjson,
	spreadsheets+cvID   +"2"+altjson,
	spreadsheets+cvID   +"3"+altjson,
	spreadsheets+cvID   +"4"+altjson
];


var allCVsections = [
	"Personal",
	"Teachings",
	"Awards",
	"Unworks",
	"Collaborations",
	"Performances"
];

var webSections = [
	"People",
	"Events",
	"Papers"
]

var formD = [articleWidth(maxWidth),height()];

var formL = [
	"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform"
]
var formE = [
	"<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLS",
	"/viewform?embedded=true\" width=\""+formD[0]+"\" height=\""+formD[1]+"\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"
]
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

var disableEnter = [
	"<script>",
	"$(document).keypress(",
	"    function(event){",
	"    if (event.which == '13') {",
	"       event.preventDefault();",
	"     }",
	"});",
	"</s" + "cript>",
];


var submit = [
	"\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\"",
	"\"I no longer limit myself.\"",
	"<head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=stylesheet href=\""+repo+"/css/style.css\"></style>"+disableEnter.join("")+"<link rel='shortcut icon' href=\""+repo+"/img/imgone.png\"></link><title>Submit Form</title></head><body><h2>Submit Form</h2><div id=maindiv><form><h3>Enter password:</h3><input type=password id=krl size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></div></body>","kontakte",
	"width=200, height=200, location=0, toolbar=0, resizable=0, scrollbars=0"
];

var forms = {
	[allCVsections[1]]:"els-Lj6MXZOFfUvyxLHp8uhdkNzADgh3KGjWV0-CJPUiGnkA",//
	[allCVsections[2]]:"cCNndRyaJTIqOI4KDnDxu3OSdLeVAMAAYI1p_D-ymTLi9Y7g",//
	[allCVsections[3]]:"fVU3VMgZvkY3kGnG-OezP02MgqOvhwS6Z6APOflTE-ShvQVg",//
	[allCVsections[4]]:"d51ZlszfuGuvMA9WXpY56mlottnn-26JZ_whsfaG-hX_uZFw",//
	[allCVsections[5]]:"cr_d39dnsctc4jfCZ-Tn9g6MyUsXZB0wzOPssV80KITISLfA",//
	[webSections[0]]  :"cnzdRLIMTy2arVYeIYOIJS_SPdedxngAhs8qbp8gnoJpIOhw",//
	[webSections[1]]  :"cYgPrlbPXm3B9FDQghaaey8d5X6DpZhsOqMLP36DfrpRsOJA",//
	[webSections[2]]  :"ftCkAv9TzkzlgAi8dcJNofLYYWc_k8WtSet3SQTf2ObOuyMA",//
}
var formLinks = {
	[allCVsections[1]]: formL[0] + forms[allCVsections[1]] + formL[1],
	[allCVsections[2]]: formL[0] + forms[allCVsections[2]] + formL[1],
	[mitem[1]]        : formL[0] + forms[allCVsections[3]] + formL[1],
	[allCVsections[4]]: formL[0] + forms[allCVsections[4]] + formL[1],
	[allCVsections[5]]: formL[0] + forms[allCVsections[5]] + formL[1],
	[mitem[4]]        : formL[0] + forms[webSections[0]]   + formL[1],
	[mitem[3]]        : formL[0] + forms[webSections[1]]   + formL[1],
	[mitem[2]]        : formL[0] + forms[webSections[2]]   + formL[1],
	"games"           :"",
	[mitem[5]]        :"",
	[mitem[0]]        :""

};

var contactMessage = [
 "<h3>contact</h3>",
 "<p>Send me an email at "+nyuid+" and I will get in touch with you (as fast as nonhumanly possible :)</p>",
 "<p>Mandá(me) una correa electrónica a "+nyuid+" así me pongo en contacto lo más rápido que pueda (dentro de lo nohumánamente posible ;)</p>",
 imgify(contactGif,200),
 "</br>",
 "</br>",
 tag("p",tag("i","Yes, I'm in social media.....")),
 tag("address",tag("blockquote",footer.join(". "))),
 "</br></br>",
 tag("span","And... I have some")+tag("b","<span "+onclickify("loader","games")+">fun</span>")+tag("span","every now and then..."),
 "</br></br></br></br>",
 // formMenu[allCVsections[1]],
 // formMenu[allCVsections[2]],
 // formMenu[allCVsections[4]],
 // formMenu[allCVsections[5]],
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



