function makeMenu(m, len, mitem, type) {
  var i,item;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    item = mitem[i].replace(/_/g," ").replace(/-/g," ");
    m.append("<span class=menuitem "+ onclickify(type,mitem[i]) +">"+item+"</span>");
  }
  m.append("</nav>");
}

function getWork() {
  loadJSON(sheetURL, function(response) {
    var f, e, i, entry, estam, etitl, edate, eperf, ecat, edesc, eprog;
    var eiurl, evurl, eaurl, esurl, eloca, nwid, wmitem;
    var nwork = [];
    var wmitems = [];
    f = JSON.parse(response);
    entry = f.feed.entry;
    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitl = e.gsx$title.$t;
      edate = new Date(e.gsx$date.$t);
      eperf = e.gsx$performers.$t;
      ecat  = e.gsx$category.$t;
      edesc = e.gsx$description.$t;
      eprog = e.gsx$programnotes.$t;
      eiurl = e.gsx$imageurl.$t;
      evurl = e.gsx$videourl.$t;
      eaurl = e.gsx$audiourl.$t;
      esurl = e.gsx$scoreurl.$t;
      eloca = e.gsx$location.$t;
      nwid  = "id-"+makeID(etitl);

      nwork.push(
        "<div id="+nwid+" class=\""+makeID(ecat)+"\" "+hide+">",
        tag("h3",etitl),
        tag("h4",edesc)
      );

      if (eiurl) {
        nwork.push(imgify(eiurl,width()));
      }

      nwork.push(tag("h5","Performed by "+eperf+" at "+eloca+" on "+edate.toDateString()));

      if (evurl) nwork.push(tagOpen("button", "Video", evurl));
      if (eaurl) nwork.push(tagOpen("button", "Audio", eaurl));
      if (esurl) nwork.push(tagOpen("button", "Score", esurl)); 

      nwork.push(
        tag("p",eprog),
        tag("h6","fdch:"+estam),
        "</div>"
      );

      wmitem = "<span class=menuitem "+onclickify("vis",nwid)+">"+etitl+"</span>";

      wmitems.push(wmitem);
    }
    $("main article").append(nwork.join(""));
    $("main nav").append(wmitems.sort().join(tilde));

    vis("id-"+makeID(featWork));

  });
}

function getWritings() {
  loadJSON(writingsURL, function(response) {
    var f, e, i, entry, estam, etitle, edesc, elink, epublished, edownload;
    f = JSON.parse(response);
    entry = f.feed.entry;
    
    //$("main article");//.append("<blockquote>");

    for (i in entry) {
      var papers=[];
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitle = e.gsx$title.$t;
      edesc = e.gsx$description.$t;
      elink = e.gsx$link.$t;
      epublished = e.gsx$published.$t;
      edownload = e.gsx$download.$t;

      papers.push(
        "<section>",
        "<header>",
        linkify(tag("h4",etitle), elink),
      );

      if (epublished){
        papers.push(
          "<blockquote>",
          tag("i",epublished)
          );
        if (edownload) {
          papers.push(linkify("Get it here", edownload));
        } 
        papers.push("</blockquote>");
      }

      papers.push(
        "</header>",
        tag("p",edesc),
        "</section>"
      );

      $("main article").append(papers.join(""));

    }

    //$("main article").append("</blockquote>");
  });
}

function getEvents() {
  loadJSON(eventsURL, function(response) {
    var f, e, i, entry, estam, etitl, edate, ewher, edesc;
    var nwid, wmitem;
    var nwork = [];
    var wmitems = [];
    f = JSON.parse(response);
    entry = f.feed.entry;

    $("main article").append("<blockquote><ul>");

    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitl = e.gsx$what.$t;
      edate = new Date(e.gsx$when.$t);
      ewher= e.gsx$where.$t;
      edesc = e.gsx$description.$t;

      nwork.push(
        "<li><div>",
        tag("h3",etitl+" ("+ewher+")"),
        tag("h4",edate.toDateString()),
        tag("blockquote",edesc),
        "</div></li>"
      );

      if (today < edate) {
        $("main article").append(nwork.join(""));
      } else {
        $("main article").prepend(nwork.join(""));
      }
    }
    $("main article").append("</ul></blockquote>");
  });
}

function getSocial() {
  loadJSON(socialURL, function(response) {
    var f, e, i, entry, estam, ename, esurname, elink, npeople;
    var people=[], organizations=[], ensembles=[];

    f = JSON.parse(response);
    entry = f.feed.entry;

    //everything happens as a blockquote
    $("main article").append("<blockquote>");

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

    $("main article").append([
      tag("h4","People"),
      people.join(tilde),
      tag("h4","Ensembles"),
      ensembles.join(tilde),
      tag("h4","Organizations"),
      organizations.join(tilde),
      "</blockquote>"]);
  });
}

function getBio() {
    $("main").append([
      "<article>",
      imgify(bioImage,width()*0.4),
      tag("h5",linkify("curriculum vitae",cv,0)),
      bioEnglish,
      "<br/>",
      bioSpanish,
      "</article>"
    ]);
}

function loader(x) {
  $("main").html("");
  $("#backvideo").hide().attr('src','');
  $('article').width(articleWidth(maxWidth));

  switch (x) {
    case "games" :
      $("main").append(tag("article",gameType.join("<br/>")));
      break;
    case "contact" :
      $("main").append(tag("article",contactMessage.join("")));
      break;
    case "events" :
      $("main").append(tag("article",""));
      getEvents();
      break;
    case "unwork":
      $("main").append([tag("nav",""),tag("article","")]);
      getWork();
      break;
    case "bio":
      getBio();
      break;
    case "social":
      $("main").append(tag("article",""));
      getSocial();
      break;
    case "papers":
      $("main").append(tag("article",""));
      getWritings();
      break;
    default:
    break;
  }
}
