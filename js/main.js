////////////
//// Please be extra careful when you edit this file
////////////
var w;
var h;
var t = 4333;
////////////
//// The menu (keep items <= 6 chars long)
////////////
var mitem = ["bio", "work", "social", "games", "blog", "video", "code", "contact", "wk"];
var lang = "<div id=languages><span class=menulink-left><span id=english ><spa class=eng>[</spa>en<spa class=eng>]</spa></span>  <span id=spanish ><spa class=spa >[</spa>es<spa class=spa >]</span></span></div>";
//<img class=fd src="img/fd.png" title=fd/></img>
function makeMenu(m, len, mitem, type) {
  var i;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"loader(\'content/" + mitem[i] + "\')\"> " + mitem[i].replace(/_/g," ").replace(/-/g," ") + " </"+type+">");
  }
  m.append("</nav>");
}
var workMenu = new Array();
var bioArray = new Array();

function getContent(x, arr) {
  jQuery.get(x, function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      arr.push(elem);
    });
  });
}


function loadJSON(x,callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', x, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

/*
"gsx$timestamp": date + time
"gsx$title"
"gsx$category": (csv)
"gsx$performers"
"gsx$date"
"gsx$description"
"gsx$programnotes"
"gsx$imageurl"
"gsx$videourl"
"gsx$audiourl"
"gsx$scoreurl"
*/


function getNworks() {
  loadJSON(sheetURL, function(response) {
    $("#content").append("<article></article>");
    var f = JSON.parse(response);
    var entry = f.feed.entry;
    for (var i in entry) {
      var e = entry[i];
      var estam = e.gsx$timestamp.$t;
      var etitl = e.gsx$title.$t;
      var edate = e.gsx$date.$t;
      var eperf = e.gsx$performers.$t;
      var ecat = e.gsx$category.$t;
      var edesc = e.gsx$description.$t;
      var eprog = e.gsx$programnotes.$t;
      var eiurl = e.gsx$imageurl.$t;
      var evurl = e.gsx$videourl.$t;
      var eaurl = e.gsx$audiourl.$t;
      var esurl = e.gsx$scoreurl.$t;
      var nwork = "<div class=\""+ecat.replace(/,/g,'').toLowerCase()+"\"><h2>"+etitl+"</h2><h3>"+edesc+"</h3><h4>"+eperf+"</h4><h5>"+edate+"</h5><p>"+eprog+"</p>";
      var dimen = "width="+w+" height="+w*0.66;
      var openif = "<iframe"+dimen+" src=\"";
      var closei = "\"></iframe>";
      var onclck = "onclick=\"window.open(\'"+eiurl+"\');\"";
      if (eiurl) nwork += "<img "+dimen+" src=\""+eiurl+"\" "+onclck+" />";
      if (evurl) nwork += openif.concat(evurl,closei);
      if (eaurl) nwork += openif.concat(eaurl,closei);
      if (esurl) nwork += openif.concat(esurl,closei);
      nwork += "<h6>Entry created on:"+estam+"</h6></div>";
      $("#content article").prepend(nwork);
    }
  });
}

function loader(x) {
  switch (x) {
    case "content/blog": 
      window.open(blogurl);
      break;
    case "content/video":
      window.open(videourl);
      break;
    case "content/code":
      window.open(repo);
      break;
    case "content/work":
      $("#submenu").html("");
      $("#backvideo").hide();
      $("#content").html("");
      makeMenu($('#submenu'), workMenu.length, workMenu, "span");
      break;
    case "content/bio":
      $("#backvideo").hide();
      $("#submenu").html("");
      $("#content").html("").append([bioOpen, "<p>"+bioArray.join("")+"</p>", bioClose]);
      break;
    case "content/wk":
       $("#backvideo").hide();
      $("#submenu").html("");
      $("#content").html("");
      getNworks();
      break;
    case "content/social":
    case "content/games" :
    case "content/contact" :
      $("#backvideo").hide();
      $("#submenu").html("");
    default:
      $('#content').load(x);
      $('article').width(w).height(h);
      break;
  }
}

function randomMargin(t) {
  $(".menuitem").animate({marginRigh:5 * Math.random() + 3},t);
}

function randomVideo() {
var len = featURL.length;
var which = Math.floor(Math.random() * len);
var video = "<iframe id=backvideo src=\'"+featURL[which]+"\'></iframe>";
return video;
}

$(function(){
  w = Math.max( $(window).width(), window.innerWidth);
  h = Math.max( $(window).height(), window.innerHeight);
  $("head").append(meta);
  var vid = randomVideo();
  $("body").append([lang,titleData,analytics, vid]);
  makeMenu($("#menu"), mitem.length, mitem, "span");
  getContent("worklist", workMenu);
  getContent("cv/txt/bio-english.txt", bioArray);
  setInterval(randomMargin(t),t);
});
