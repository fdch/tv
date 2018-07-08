var w, h, t = 4333;
var mitem = ["bio", "unwork", "papers", "events", "people", "games", "contact"];
var maxWidth = 810;


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
var bioImage = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/15032050_10211430901748916_6498585033629064846_n.jpg?_nc_cat=0&oh=9e8629831420574084cff15ba1ec6d87&oe=5BACC900";
var unclink = "http://artes.unc.edu.ar/";
var nyulink = "http://gsas.nyu.edu/";
var unc = linkify("La Universidad Nacional de Córdoba (Argentina)",unclink,1);
var nyuTitle = "Music Composition & Theory";
var uncTitle = "Licenciatura en Composición Musical";
var nyu = linkify("New York University (GSAS)",nyulink,1)
var advisors = ["Jaime Oliver La Rosa","Elizabeth Hoffman"];
var currently = ["PhD Candidate","Candidato de PhD"];
var tesis = ["Database Multimedia Composition","Composición Multimedial con Base de Datos"]
var bday = new Date(1988, 5, 8, 12, 1, 13, 128);

var bioEnglish = "<p>"+subtitle+" studied "+uncTitle+" at "+unc+".\
 He is a "+currently[0]+" in "+nyuTitle+" at "+nyu+" with "+advisors.join(" and ")+".\
 His research focuses on "+tesis[0]+".\
 His work is available at "+url+"</p>";

var bioSpanish = "<p>"+subtitle+" estudió "+uncTitle+" en "+unc+".\
 Es "+currently[1]+" de "+nyuTitle+" en "+nyu+" con "+advisors.join(" y ")+".\
 Su investigación se centra en la "+tesis[1]+".\
 Su trabajo se encuentra disponible en "+url+"</p>";

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
	linkify("Tumblr",blog,1),
	linkify("Github",repo,1),
	linkify("Vimeo",video,1),
	linkify("SoundCloud",scloud,1),
	linkify("Twitter",twitter,1),
	linkify("Facebook",facebookUrl,1),
	linkify("Youtube",yt,1),
	linkify("Flickr",flickr,1),
	linkify("LinkedIn", linkedin,1)
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
var cvID = "1vViMWDsMRnbGUgP44XNDlQrLQ3MsdgO9W91mM4MxJtw/";
var altjson = "/public/values?alt=json";
var sheetURL = spreadsheets+sheetID+"1"+altjson;
var eventsURL = spreadsheets+sheetID+"2"+altjson;
var peopleURL = spreadsheets+sheetID+"3"+altjson;
var papersURL = spreadsheets+sheetID+"4"+altjson;

var cvURL = [
	spreadsheets+cvID+"1"+altjson,
	spreadsheets+cvID+"2"+altjson,
	spreadsheets+cvID+"3"+altjson,
	spreadsheets+cvID+"4"+altjson
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

var submit = [
	"\"No, what is important is neither linearity or non-linearity, but the change, the degree of change from something that doesn't move to other events with different tempos in particular.\"",
	"\"I no longer limit myself.\"",
	"<head><link rel=stylesheet href=\""+repo+"/css/style.css\"></style><link rel='shortcut icon' href=\""+repo+"/img/imgone.png\"></link><title>Submit Form</title></head><body><h2>Submit Form</h2><div id=maindiv><form><h3>Enter password:</h3><input type=password id=krl size=12/><p>Click Submit when done</p><input type=button value=Submit id=authOK /></form></div></body>","kontakte",
	"width="+articleWidth(maxWidth)+", height="+height()+", location=0, toolbar=0, resizable=0, scrollbars=0"
];

var forms = {
	[allCVsections[1]]:"els-Lj6MXZOFfUvyxLHp8uhdkNzADgh3KGjWV0-CJPUiGnkA",//teaching
	[allCVsections[2]]:"cCNndRyaJTIqOI4KDnDxu3OSdLeVAMAAYI1p_D-ymTLi9Y7g",//awards
	[allCVsections[3]]:"fVU3VMgZvkY3kGnG-OezP02MgqOvhwS6Z6APOflTE-ShvQVg",//unworks
	[allCVsections[4]]:"d51ZlszfuGuvMA9WXpY56mlottnn-26JZ_whsfaG-hX_uZFw",//collaborations
	[allCVsections[5]]:"cr_d39dnsctc4jfCZ-Tn9g6MyUsXZB0wzOPssV80KITISLfA",//performances
	[webSections[0]]  :"cnzdRLIMTy2arVYeIYOIJS_SPdedxngAhs8qbp8gnoJpIOhw",//people
	[webSections[1]]  :"cYgPrlbPXm3B9FDQghaaey8d5X6DpZhsOqMLP36DfrpRsOJA",//events
	[webSections[2]]  :"ftCkAv9TzkzlgAi8dcJNofLYYWc_k8WtSet3SQTf2ObOuyMA",//papers
}
var formLinks = [
	"\'"+formL[0]+forms[allCVsections[1]]+formL[1]+"\'",
	"\'"+formL[0]+forms[allCVsections[2]]+formL[1]+"\'",
	"\'"+formL[0]+forms[allCVsections[3]]+formL[1]+"\'",
	"\'"+formL[0]+forms[allCVsections[4]]+formL[1]+"\'",
	"\'"+formL[0]+forms[allCVsections[5]]+formL[1]+"\'",
	"\'"+formL[0]+forms[webSections[0]]  +formL[1]+"\'",
	"\'"+formL[0]+forms[webSections[1]]  +formL[1]+"\'",
	"\'"+formL[0]+forms[webSections[2]]  +formL[1]+"\'"
];
var formMenu = {
	teachings     :"<span class=formlink  "+onclickify("getSumbit"+formLinks[0])+">"+allCVsections[1]+"</span>",//0
	awards        :"<span class=formlink  "+onclickify("getSumbit"+formLinks[1])+">"+allCVsections[2]+"</span>",//1
	unwork        :"<h3 "                  +onclickify("getSumbit"+formLinks[2])+">"+allCVsections[3]+"</h3>  ",//2
	collaborations:"<span class=formlink  "+onclickify("getSumbit"+formLinks[3])+">"+allCVsections[4]+"</span>",//3
	performances  :"<span class=formlink  "+onclickify("getSumbit"+formLinks[4])+">"+allCVsections[5]+"</span>",//4
	people        :"<h3 "                  +onclickify("getSumbit"+formLinks[5])+">"+webSections[0]  +"</h3>  ",//5
	events        :"<h3 "                  +onclickify("getSumbit"+formLinks[6])+">"+webSections[1]  +"</h3>  ",//6
	papers        :"<h3 "                  +onclickify("getSumbit"+formLinks[7])+">"+webSections[2]  +"</h3>  " //7
};


var contactMessage = [
 "<h3>contact</h3>",
 "<p>Send me an email at "+nyuid+" and I will get in touch with you (as fast as nonhumanly possible :)</p>",
 "<p>Mandá(me) una correa electrónica a "+nyuid+" así me pongo en contacto lo más rápido que pueda (dentro de lo nohumánamente posible ;)</p>",
 imgify(contactGif,200),
 "</br>",
 "</br>",
 tag("p",tag("i","Yes, I'm in social media.....")),
 tag("address",footer.join(tilde)),
 "</br></br></br></br>",
 formMenu[0],formMenu[1],formMenu[3],formMenu[4],
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





