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
var prev;
var vis = function(x) {
  var y = document.getElementById(x);
  if (prev != null) prev.style.display = 'none';
  if (y !=null) { y.style.display = 'block'; prev=y;}
};

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
    $("#content").append("<nav id=workmenu></nav><article></article>");
    function onclck(x) {
      return "onclick=\"window.open(\'"+x+"\');\"";
    }
    var f = JSON.parse(response);
    var entry = f.feed.entry;
    for (var i in entry) {
      var e = entry[i];
      var estam = e.gsx$timestamp.$t;
      var etitl = e.gsx$title.$t;
      var edate = new Date(e.gsx$date.$t);
      var eperf = e.gsx$performers.$t;
      var ecat = e.gsx$category.$t;
      var edesc = e.gsx$description.$t;
      var eprog = e.gsx$programnotes.$t;
      var eiurl = e.gsx$imageurl.$t;
      var evurl = e.gsx$videourl.$t;
      var eaurl = e.gsx$audiourl.$t;
      var esurl = e.gsx$scoreurl.$t;
      var eloca = e.gsx$location.$t;
      var nwid = "id-"+etitl.replace(/ /g,"_").toLowerCase();
      var nwork = "<div \
      id="+nwid+" \
      class=\""+ecat.replace(/,/g,'').toLowerCase()+"\" \
      style=\"display:none\">\
      <h3>"+etitl+"</h3>\
      <h4>"+edesc+"</h4>";
      if (eiurl) nwork += "<img width="+w+" src=\""+eiurl+"\" "+onclck(eiurl)+" />";
      nwprk += "<h5>Performed by: "+eperf+"</h5><h6>Performed at "+eloca+" on "+edate.toDateString()+"</h6>";
      if (evurl) nwork += "<button "+onclck(evurl)+" >Video</button>";
      if (eaurl) nwork += "<button "+onclck(eaurl)+" >Audio</button>";
      if (esurl) nwork += "<button "+onclck(esurl)+" >Score</button>";
      
      nwork += "<p>"+eprog+"</p></div>";
      var wmitem = "<span class=menuitem onclick=\"vis(\'"+nwid+"\')\"> "+etitl+" </span>";
      $("#workmenu").prepend(wmitem);
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
