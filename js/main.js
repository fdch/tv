////////////
//// Please be extra careful when you edit this file
////////////
var w;
var h;
var t = 4333;
////////////
//// The menu (keep items <= 6 chars long)
////////////
var mitem = ["bio", "work", "social", "games", "blog", "video", "code", "contact"];
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
function getEvents(x) {
loadJSON("https://spreadsheets.google.com/feeds/list/1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ/o1nbw6e/public/values?alt=json", function(response) {
    $("#loadEvents").append("<article></article>");
    var today = new Date();
    var eclass = "new";
    var f = JSON.parse(response);
    var entry = f.feed.entry;
    for (var i in entry) {
      var e = entry[i];
      var estam = e.gsx$timestamp.$t;
      var edate = new Date(e.gsx$dateandtime.$t);
      var etime = edate.toTimeString();
      var etitl = e.gsx$title.$t;
      var eauth = e.gsx$author.$t;
      var edesc = e.gsx$description.$t;
      var eloca = e.gsx$location.$t;
      var eiurl = e.gsx$imageurl.$t;
      if (today.getTime() > edate.getTime()) {
        eclass = "old";
      } else {
        eclass = "new";
      }
      var nevent = "<div class="+eclass+">\
  <h2>"+etitl+"</h2>\
  <h3>"+eauth+"</h3>\
  <h4>"+edate.toDateString()+"</h4>\
  <a href=\""+eiurl+"\"><img src=\""+eiurl+"\" title=\""+eauth+"\"/></a>\
  <p>"+edesc+"</p>\
  <h5>"+eloca+"</h5>\
  <h6>"+etime+"</h6>\
  <span>Event created on: "+estam+"</>\
  </div>";
      $("#loadEvents article").prepend(nevent);
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
      $("#submenu").html("");;
      $("#content").html("").append([bioOpen, "<p>"+bioArray.join("")+"</p>", bioClose]);
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
