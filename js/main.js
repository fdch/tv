function makeMenu(m, len, mitem, type) {
  var i;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"loader(\'" + mitem[i] + "\')\">" + mitem[i].replace(/_/g," ").replace(/-/g," ") + "</"+type+">");
  }
  m.append("</nav>");
}
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
Work info is accessed by:
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

function getWork() {
  loadJSON(sheetURL, function(response) {
    function onclck(x) { return "onclick=\"window.open(\'"+x+"\');\""; }
    var f, e, i, entry, estam, etitl, edate, eperf, ecat, edesc, eprog;
    var eiurl, evurl, eaurl, esurl, eloca, nwid, nwork, wmitem;
    var wmitems = [];
    f = JSON.parse(response);
    entry = f.feed.entry;
    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitl = e.gsx$title.$t;
      edate = new Date(e.gsx$date.$t);
      eperf = e.gsx$performers.$t;
      ecat = e.gsx$category.$t;
      edesc = e.gsx$description.$t;
      eprog = e.gsx$programnotes.$t;
      eiurl = e.gsx$imageurl.$t;
      evurl = e.gsx$videourl.$t;
      eaurl = e.gsx$audiourl.$t;
      esurl = e.gsx$scoreurl.$t;
      eloca = e.gsx$location.$t;
      nwid = "id-"+etitl.replace(/ /g,"_").toLowerCase();
      nwork = "<div \
      id="+nwid+" \
      class=\""+ecat.replace(/,/g,'').toLowerCase()+"\" \
      style=\"display:none\">\
      <h3>"+etitl+"</h3>\
      <h4>"+edesc+"</h4>";
      if (eiurl) {
        nwork += "<img width="+w+" src=\""+eiurl+"\"\
        "+onclck(eiurl)+" />";
      }
      nwork += "<h5>Performed by "+eperf+" at "+eloca+" on \
      "+edate.toDateString()+"</h5>";
      if (evurl) nwork += "<button "+onclck(evurl)+" >Video</button>";
      if (eaurl) nwork += "<button "+onclck(eaurl)+" >Audio</button>";
      if (esurl) nwork += "<button "+onclck(esurl)+" >Score</button>";
      nwork += "<p>"+eprog+"</p><h6>fdch: "+estam+"</h6></div>";
      wmitem = "<span class=menuitem onclick=\"vis(\'"+nwid+"\')\">"+etitl+"</span>";
      wmitems.push(wmitem);
      $("#content article").prepend(nwork);
    }
    $("#workM").append(wmitems.sort().join(" "));
    vis("id-"+featWork.replace(/ /g,"_").toLowerCase());
  });
}
function getEvents() {
  loadJSON(eventsURL, function(response) {
    function onclck(x) { return "onclick=\"window.open(\'"+x+"\');\""; }
    var f, e, i, entry, estam, etitl, edate, ewher, edesc;
    var nwid, nwork, wmitem;
    var wmitems = [];
    f = JSON.parse(response);
    entry = f.feed.entry;
    $("#content article").append("<blockquote><ul>");
    var today = new Date().toDateString();
    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitl = e.gsx$what.$t;
      edate = new Date(e.gsx$when.$t);
      ewher= e.gsx$where.$t;
      edesc = e.gsx$description.$t;
      // = "id-"+etitl.replace(/ /g,"_").toLowerCase();
      
      

      nwork = "<li><div><h3>"+etitl+" ("+ewher+")</h3>\
      <h4>"+edate.toDateString()+"</h4>\
      <blockquote>"+edesc+"</blockquote></div></li>";
      if (today < edate) {
        $("#content article").append(nwork);
      } else {
        $("#content article").prepend(nwork);
      }
    }
    $("#content article").append("</ul></blockquote>");
  });
}
function getSocial() {
  var i, obj, key, value, skey, sobj;
  for (i = 0; i < social.length; i++) {
    obj = social[i];
    for (key in obj) {
      value = obj[key];
      if(key === "Pep") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Soc") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Org") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Ens") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      $("#loadS").append("<a href=\""+value+"\" target=_blank><h5>"+key+"</h5></a>");
    }
  }
}
function getBio() {
    $("#content")
    .append("<article><a href=\""+bioImage+"\"><img src=\""+bioImage+"\" width=200></a>")
    .append("<p></p>")
    .append("<h4>CV (<a href=\"cv/\" target=\"_blank\">html</a> - <a href=\""+bioCV+"\" target=\"_blank\">txt</a>)</h4>")
    .append("</article>");
    $("#content p").load("cv/txt/bio-english.txt");
}
function loader(x) {
  $("#content").html("");
  $("#backvideo").hide();
  $('article').width(w).height(h);
  switch (x) {
    case "blog": 
    window.open(blog);
      break;
    case "video":
    window.open(video);
      break;
    case "fdch":
      window.open(repo);
      break;
    case "games" :
      $("#content").append(games);
      break;
    case "contact" :
      $("#content").append(contact);
      break;
    case "events" :
      $("#content").append("<article></article>");
      getEvents();
      break;
    case "work":
      $("#content").append("<nav id=workM></nav><article></article>");
      getWork();
      break;
    case "bio":
      getBio();
      break;
    case "social":
      $("#content").append("<article><div id=loadS></div></article>");
      getSocial();
      break;
    default:
    break;
  }
}
function randomVideo() {
  var choose = Math.floor(Math.random() * featURL.length);
  $("#backvideo").attr('src',featURL[choose]);
}

// function randomColor(t) {
//   var len = CSS_COLOR_NAMES.length;
//   var choose = Math.floor(Math.random() * len);
//   var chooseC = Math.floor( (choose + len * 0.5 ) % len);
//   $("body").css(
//     {
//       backgroundColor: CSS_COLOR_NAMES[choose],
//       color: CSS_COLOR_NAMES[chooseC]
//     });
//   // console.log(choose + ": " + CSS_COLOR_NAMES[choose]);
//   // console.log(chooseC + ": " + CSS_COLOR_NAMES[chooseC]);
// }

function pdRandom(range,offset){
  return Math.floor(Math.random() * range) + offset;
}

function randomColor(preset){
  var lran = preset[0];
  var loff = preset[1];
  var dran = preset[2];
  var doff = preset[3];
  console.log(preset[1]);
  var light = "rgb("+pdRandom(lran,loff)+","+pdRandom(lran,loff)+","+pdRandom(lran,loff)+")";
  var darky = "rgb("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+")";
  $("body").css(
    {
      backgroundColor: darky,
      color: light
    });
}




var whichone = 0;

function funImage(){
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
  $("#rot img").rotate({animateTo: ang,duration: dur});
  if (whichone==0) {whichone=1} else {whichone=0}
  setTimeout(function(){$("#rot img").attr('src', imgArray[whichone])},dur/4);
}


$(function(){
  w = Math.max( $(window).width(), window.innerWidth);
  h = Math.max( $(window).height(), window.innerHeight);
  $("head").append(meta);
  var vid = "<iframe id=backvideo src=\'"+featURL[1]+"\'></iframe>";
  // var vid = randomVideo();
  $("body").append([titleData,analytics, vid]);
  makeMenu($("#menu"), mitem.length, mitem, "span");
  var t = 5000;
  randomColor(color_preset[0]);
  //setInterval(function(){randomColor(t)}, t);
    setInterval(function(){funImage()},t);


    // console.log(color_preset[0])

  $("#menu").click(function() { randomColor(color_preset[0]);funImage(); } );
  // $("#menu").click(function() { ;funImage(); } );

  $("#rot").click(function(){randomVideo();funImage();});
  //setInterval(randomMargin(t),t);
});