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
      if (evurl) nwork += "<button "+onclickify("window.open",evurl)+" >Video</button>";
      if (eaurl) nwork += "<button "+onclickify("window.open",eaurl)+" >Audio</button>";
      if (esurl) nwork += "<button "+onclickify("window.open",esurl)+" >Score</button>";
      nwork += "<p>"+eprog+"</p><h6>fdch: "+estam+"</h6></div>";
      wmitem = "<span class=menuitem onclick=\"vis(\'"+nwid+"\')\">"+etitl+"</span>";
      wmitems.push(wmitem);
      $("#content article").prepend(nwork);
    }
    $("#workM").append(wmitems.sort().join(" "));
    vis("id-"+featWork.replace(/ /g,"_").toLowerCase());
  });
}

function getWritings() {
  loadJSON(writingsURL, function(response) {
    var f, e, i, entry, estam, etitle, edesc, elink, epublished, edownload;
    f = JSON.parse(response);
    entry = f.feed.entry;
    
    $("#content article").append("<blockquote>");

    for (i in entry) {
      var papers=[];
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitle = e.gsx$title.$t;
      edesc = e.gsx$description.$t;
      elink = e.gsx$link.$t;
      epublished = e.gsx$published.$t;
      edownload = e.gsx$download.$t;

      papers.push(linkify("<h4>"+etitle+"</h4>", elink));
      papers.push("<p>"+edesc+"</p>");

      if (epublished){
        papers.push("<p class='sidenote'>"+epublished+"</p>");
      }
      if (edownload) {
        var myButtons = "<button style='float:right' "+onclickify("window.open",edownload)+" >Get it</button>";
        papers.push(myButtons);
      } 
      $("#content article").append(papers.join(""));

    }

    $("#content article").append("</blockquote>");
  });
}

function getEvents() {
  loadJSON(eventsURL, function(response) {
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

function getSocial() {
  loadJSON(socialURL, function(response) {
    var f, e, i, entry, estam, ename, esurname, elink, npeople;
    var people=[];
    var organizations=[];
    var ensembles=[];
    f = JSON.parse(response);
    entry = f.feed.entry;

    //everything happens as a blockquote
    $("#content article").append("<blockquote>");

    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      ename = e.gsx$name.$t;
      esurname= e.gsx$surname.$t;
      elink = e.gsx$website.$t;

      if ("Ensemble".toLowerCase() === esurname.toLowerCase()) {
          //is ensemble
          ensembles.push(linkify(ename,elink,1));
      } else if ("Organization".toLowerCase() === esurname.toLowerCase()) {
        //is organization
        organizations.push(linkify(ename,elink,1));
      } else {
        //is people
        people.push(linkify(ename+" "+esurname, elink));
      } 
    }

    $("#content article").append([
      "<h4>People</h4>",
      people.join(tilde),
      "<h4>Ensembles</h4>",
      ensembles.join(tilde),
      "<h4>Organizations</h4>",
      organizations.join(tilde),
      "</blockquote>"]);
  });
}


function getBio() {
    $("#content").append([
      "<article>",
      imgify(bioImage,width()*0.4),
      "<h5>"+ linkify("curriculum vitae","cv/",1) +"</h5>",
      bioEnglish,
      "<br/>",
      bioSpanish,
      "</article>"
    ]);
}

function loader(x) {
  $("#content").html("");
  $("#backvideo").hide().attr('src','');
  $('article').width(width()).height(height());
  switch (x) {
    case "games" :
      $("#content").append(games);
      break;
    case "contact" :
      $("#content").append([
        "<article>",
        "<h3>contact</h3>",
        "<p>Send me an email at "+nyuid+"((at))nyu.edu and I will get in touch with you (as fast as nonhumanly possible :)</p>",
        "<p>Mandá(me) una correa electrónica a "+nyuid+"((at))nyu.edu así me pongo en contacto lo más rápido que pueda (dentro de lo nohumánamente posible ;)</p>",
        imgify(contactGif,200),
        "</article>"
        ]);
      break;
    case "events" :
      $("#content").append("<article></article>");
      getEvents();
      break;
    case "unwork":
      $("#content").append("<nav id=workM></nav><article></article>");
      getWork();
      break;
    case "bio":
      getBio();
      break;
    case "social":
      $("#content").append("<article></article>");
      getSocial();
      break;
    case "papers":
      $("#content").append("<article></article>");
      getWritings();
      break;
    default:
    break;
  }
}
