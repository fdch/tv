
//////////////////////////////  /           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

var teachings=[], awards=[], collaborations=[], performances=[], unworks=[], info=[];

function getCV() {
	var pk = Object.keys(personal);
	info=[];
	info.push("<ul>");
	for (var k in pk) {
		info.push(
			tag("li",k),
			tag("li",personal.k)
		);
	}
	info.push("</ul>");

    loadJSON(cvURL[0], function(response) {
    var f, e, i, entry;
    var stamp, type, clase, institution, dept, term, year;
   
    f = JSON.parse(response);
    entry = f.feed.entry;
    teachings = ["<ul>"]; // empty array before refilling it
    
    for (i in entry) {
      e = entry[i];
      stamp        = e.gsx$timestamp.$t;
      type         = e.gsx$type.$t;
      clase        = e.gsx$class.$t;
      institution  = e.gsx$institution.$t;
      department   = e.gsx$department.$t;
      term         = e.gsx$term.$t;
      year         = e.gsx$year.$t;

      teachings.push("<li>"+type+" in "+clase+" at "+department+" of "+institution+" ("+term+" "+year+")</li>");
    }
    teachings.push("</ul>");
  });
  loadJSON(cvURL[1], function(response) {
   var f, e, i, entry;
    var stamp, type, title, duration, where, who, desc, url;
   
    f = JSON.parse(response);
    entry = f.feed.entry;
    awards = ["<ul>"]; // empty array before refilling it
    
    for (i in entry) {
      e = entry[i];
      stamp        = e.gsx$timestamp.$t;
      type         = e.gsx$type.$t;
      title        = e.gsx$title.$t;
      duration     = e.gsx$duration.$t;
      where        = e.gsx$where.$t;
      who          = e.gsx$who.$t;
      desc         = e.gsx$description.$t;
      url          = e.gsx$url.$t;

      awards.push(
        "<li>"+title+" for "+duration+" in "+where+" ("+type+")",
        "<blockquote>"+desc+"<i>"+linkify(who,url,1)+"</i></blockquote>",
        "</li>");
    }
    awards.push("</ul>");
  });
  loadJSON(cvURL[2], function(response) {
   var f, e, i, entry;
    var stamp, category, year, desc, where;
   
    f = JSON.parse(response);
    entry = f.feed.entry;
    collaborations = ["<ul>"]; // empty array before refilling it
    
    for (i in entry) {
      e = entry[i];
      stamp        = e.gsx$timestamp.$t;
      category     = e.gsx$category.$t;
      year         = e.gsx$year.$t;
      where        = e.gsx$where.$t;
      desc         = e.gsx$description.$t;

      collaborations.push(
        "<li>"+type+" in "+where+" ("+year+")",
        tag("blockquote",desc),
        "</li>");
    }
    collaborations.push("</ul>");
  });
  loadJSON(cvURL[3], function(response) {
    var stamp, what, when, desc, where, instrument, who;
   
    f = JSON.parse(response);
    entry = f.feed.entry;
    performances = ["<ul>"]; // empty array before refilling it
    
    for (i in entry) {
      e = entry[i];
      stamp        = e.gsx$timestamp.$t;
      what         = e.gsx$what.$t;
      when         = e.gsx$when.$t;
      desc         = e.gsx$how.$t;
      where        = e.gsx$where.$t;
      instrument   = e.gsx$instrument.$t;
      who          = e.gsx$with.$t;

      performances.push(
        "<li>"+instrument+" in "+what+" at "+where+", with "+who+" ("+when.toDateString()+")",
        tag("blockquote",desc),
        "</li>");
    }
    performances.push("</ul>");
  });

  //get work (sheet from Works)
  loadJSON(sheetURL, function(response) {
    var f, e, i, entry, estam, etitl, edate, eperf, ecat, edesc, eprog;
    var eiurl, evurl, eaurl, esurl, eloca, nwid, nwork, wmitem;

    f = JSON.parse(response);
    entry = f.feed.entry;

    unworks = ["<ul>"]; // empty array before refilling it

    for (i in entry) {
      e = entry[i];
      estam = e.gsx$timestamp.$t;
      etitl = e.gsx$title.$t;
      edate = new Date(e.gsx$date.$t);
      eperf = e.gsx$performers.$t;
      ecat = e.gsx$category.$t;
      edesc = e.gsx$description.$t;
      // eprog = e.gsx$programnotes.$t;
      eiurl = e.gsx$imageurl.$t;
      evurl = e.gsx$videourl.$t;
      eaurl = e.gsx$audiourl.$t;
      esurl = e.gsx$scoreurl.$t;
      eloca = e.gsx$location.$t;

      unworks.push(
        "<li>"+ecat,
        "<ul>",
        tag("li",linkify(etitl,eaurl|evurl|esurl|cv,1)),
        tag("li",edesc),
        tag("li",where),
        tag("li",edate.toDateString()),
        tag("li",who),
        tag("blockquote",edesc),
        "</ul>",
        "</li>");
    }

  });
}

$(function(){
  $("html").css("font-family",fonts[2]); 
  
  randomColor(color_preset["mid"]); 
  
  $("h1, h2").click(function() {
    window.open(cvurl, "_top")
  });

  $("main").html("").append("<article></article>");
  $("article").width(width()).height(height());

  getCV();

  $("main article").append([
    "<section id=info>",
    info.join(""), 
    "</section>",
    "<section id=teachings>",
    teachings.join(""), 
    "</section>",
    "<section id=awards>",
    awards.join(""), 
    "</section>",
    "<section id=collaborations>",
    collaborations.join(""), 
    "</section>",
    "<section id=performances>",
    performances.join(""), 
    "</section>"
  ]);
});