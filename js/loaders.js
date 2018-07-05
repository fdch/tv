function makeMenu(m, len, mitem, type) {
  var i;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"loader(\'" + mitem[i] + "\')\">" + mitem[i].replace(/_/g," ").replace(/-/g," ") + "</"+type+">");
  }
  m.append("</nav>");
}

function getContent(x, arr) {
  jQuery.get(x, function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      arr.push(elem);
    });
  });
}

function getWork() {
  loadJSON(sheetURL, function(response) {
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
        nwork += imgify(eiurl,width());
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



      if(key === "Pep") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Soc") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Org") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      if(key === "Ens") {$("#loadS").append("<h4>"+value+"</h4>"); continue;}
      $("#loadS").append(linkify("<h5>"+key+"</h5>",value,1));
    }
  }
}

function loadBio(x) {
  $("#content p").load(x);
}

function getBio() {
    $("#content")
    .append("<article>" + linkify(imgify(bioImage,width()*0.4),bioImage,1))
    .append("<span "+onclickify(loadBio,bioSpanish)+">ES</span> ~ ")
    .append("<span "+onclickify(loadBio,bioEnglish)+">EN</span>")
    .append("<p></p>")
    .append("<h4>" + linkify("cv","cv/",1) + " ~ " + linkify(bio,bioEnglish,1) + "</h4>")
    .append("</article>");
    
}
//<a href=\"mailto:"+email+"\">"+email+"</a>
function loader(x) {
  $("#content").html("");
  $("#backvideo").hide();
  $('article').width(width()).height(height());
  switch (x) {
    case "games" :
      $("#content").append(games);
      break;
    case "contact" :
      $("#content").append("\
        <article><h3>contact</h3>\
        <p>Send me an email at "+linkify("email",email,1)+" \
        and I will get in touch with you (as fast as nonhumanly possible :)</p>\
        <p>Mandá(me) una correa electrónica a "+linkify("email",email,1)+" \
        y me pongo en contacto lo más rápido que pueda (dentro de lo nohumánomente posible ;)</p>\
        "+imgify(contactGif,200)+"</article>");
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
