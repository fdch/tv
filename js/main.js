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
    $("#workM").append(wmitems.join(" "));
    vis("id-"+featWork.replace(/ /g,"_").toLowerCase());
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
    case "code":
      window.open(repo);
      break;
    case "games" :
      $("#content").append(games);
      break;
    case "contact" :
      $("#content").append(contact);
      break;
    case "work":
      $("#content").append("<nav id=workM></nav><article></article>");
      getWork();
      break;
    case "bio":
      $("#content").append([bioOpen, "<p>"+bioArray.join("")+"</p>", bioClose]);
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
  return "<iframe id=backvideo src=\'"+featURL[choose]+"\'></iframe>";
}
$(function(){
  w = Math.max( $(window).width(), window.innerWidth);
  h = Math.max( $(window).height(), window.innerHeight);
  $("head").append(meta);
  var vid = randomVideo();
  $("body").append([titleData,analytics, vid]);
  makeMenu($("#menu"), mitem.length, mitem, "span");
  getContent(bioFile, bioArray);
  setInterval(randomMargin(t),t);
});