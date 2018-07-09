function makeMenu(m, len, mitem, type) {
  var i,item;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    item = mitem[i].replace(/_/g," ").replace(/-/g," ");
    m.append("<span class=menuitem "+ onclickify(type,mitem[i]) +">"+item+"</span>");
  }
  m.append("</nav>");
}

// var btnOnclick = ["allCats()", "myValues()"];
// var btnTexts   = ["all", "apply"];

// for (var i in btnOnclick) {
//   var btn = document.createElement('button');
//   var btnTxt = document.createTextNode(btnTexts[i]);
//   var btnAtt = document.createAttribute('onclick');
//   btnAtt.value = btnOnclick[i];
//   document.body.appendChild(btn);
//   btn.appendChild(btnTxt);
// }

var person = {some:"XXXXX", less:"YYYYY"};

var satus=1;
//var form = document.getElementById("myform");

function allCats(form) { 
  status==1?status=0:status=1; 
  for(var i=0; i < form.elements.length; i++) {
      var e = form.elements[i].name;
        $("#"+e).prop('checked', status==1?true:false);
     }

}

function myValues(form, target) {
  target.html("");// $("#target").html("");
  var check=0;
  for(var i=0; i < form.elements.length; i++) {
    var e = form.elements[i];
    if (e.checked) {
      target.append(person[e.name]);
      check++;
    }
  } 
  if (!check) status=0, allCats(), myValues();
}

function getUnworks() {
  loadJSON(sheetURL, function(response) {
    var f, e, i, entry, estam, etitl, edate, eperf, ecat, edesc, eprog;
    var eiurl, evurl, eaurl, esurl, eloca, nwid, wmitem;
    var nwork = [];
    var wmitems = [];
    var allCategories = [], uniqueCats=[];
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
        nwork.push(imgify(eiurl,articleWidth(maxWidth)));
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
      allCategories.push(ecat);

    }//end loop

    $("main article").append(nwork.join(""));

    var formID = "formID";
    var formTag = document.createElement('form');
    var formAttId = document.createAttribute('id');
    formAttId.value = formID;

    document.getElementById("submenu").appendChild(formTag);
    formTag.setAttributeNode(formAttId);

    var categories=[];
    for (var i in allCategories){
      for (var j in allCategories[i]){
        var word=[];
        var chara=allCategories[i][j];

        console.log("chara:"+ chara);
        // switch (chara) {
        //   case ",":
        //     categories.push(word), word=[];
        //     break;
        //   case " ":
        //     break;
        //   default:
        //     word.push(makeID(chara));
        //     break;
        // }
      }
    }
    // console.log(categories);
    var ucat = $.uniqueSort(categories);

    var buttons = ["all", "apply"];

    for (var i in ucat) {
     // console.log(ucat[i]);
      makeInput([ucat[i],"checkbox"],formTag);
    };
    for (var i in buttons) {
      makeInput([buttons[i], "button"], formTag);
    }

    $("main nav").width(articleWidth(maxWidth)).append(wmitems.sort().join(tilde));

    vis("id-"+makeID(featWork));

  });
}

function getPapers() {
  loadJSON(papersURL, function(response) {
    var f, e, i, entry, estam, etitle, edesc, elink, epublished, edownload;
    f = JSON.parse(response);
    entry = f.feed.entry;
    
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
    }//end loop
  });
}

function getEvents() {
  loadJSON(eventsURL, function(response) {
    var f, e, i, entry, estam, etitl, edate, ewher, edesc;
    var nwid, wmitem;
    var nwork = [];
    var event = [];
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

      event = [
        "<li><div>", 
        tag("h3",etitl+" ("+ewher+")"),
        tag("h4",edate.toDateString()),
        tag("blockquote",edesc),
        "</div></li>"      
      ];

      nwork.push(event.join(""));
    }//end loop

    $("main article").append([
      nwork.join(""),
      "</ul></blockquote>"
      ]);
  });
}

function getPeople() {
  loadJSON(peopleURL, function(response) {
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
    }//end loop

    $("main article").append([
      tag("h5","People"),
      people.join(tilde),
      tag("h5","Ensembles"),
      ensembles.join(tilde),
      tag("h5","Organizations"),
      organizations.join(tilde),
      "</blockquote>"
      ]);
  });
}

function getBio() {
    $("main article").append([
      imgify(bioImage,articleWidth(maxWidth)),
      tag("h5",linkify("curriculum vitae",cv,0)),
      bioEnglish,
      "<br/>",
      bioSpanish
    ]);
}
function getSubmit(target) {
  var exists;
  if (!exists) var n = window.open("", "WPEventForm", submit[4]);
  else n.focus();
  if (n != null) exists = 1;
  else exists = 0;
  n.document.documentElement.innerHTML = submit[2];
  n.document.getElementById("authOK").onclick = function () {
    if ( n.document.getElementById("krl").value != submit[3] )
    {
      n.alert("\n"+submit[0]+"\n\n Try again.");
    } else {
      n.alert("\nSucess!\n\n"+submit[1]+"\n\n Karlheinz.");
      n.resizeTo(articleWidth(maxWidth), height());
      n.moveBy(articleWidth(maxWidth)*0.3, 0);
      open(target, "WPEventForm");
    }
  }
}
function loader(x) {
  $("main").html("");
  $("#backvideo").hide().attr('src','');
  $("main").css('background-image', 'url(' + loadingUrl + ')');
  switch (x) {
    case "games" :
      $("main").append(tag("article",gameType.join("<br/>")));
      break;
    case "touch" :
      $("main").append([tag("article",contactMessage.join(""))]);
      break;
    case "events" :
      $("main").append([tag("header",formMenu[x]),tag("article","")]);
      getEvents();
      break;
    case "unwork":
      $("main").append([tag("header",formMenu[x]),tag("nav",""),tag("article","")]);
      getUnworks();
      break;
    case "bio":
      $("main").append([tag("header",tag("h3","Bio")),tag("article","")]);
      getBio();
      break;
    case "people":
      $("main").append([tag("header",formMenu[x]),tag("article","")]);
      getPeople();
      break;
    case "papers":
      $("main").append([tag("header",formMenu[x]),tag("article","")]);
      getPapers();
      break;
    default:
    break;
  }
  $('article').width(articleWidth(maxWidth));
  $("main").css('background-image', 'url()');
}