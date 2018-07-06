
//////////////////////////////  /           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

var teachings=[], awards=[], collaborations=[], performances=[], unworks=[];

function getTeachings() {

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

      teachings.push("<li>"+type+" in "+clase+" at "+department+" of "+institution+" ("+term+" "+year+")</li>",
      	tag("p",tilde)
      );
    }
    teachings.push("</ul>");
    $("#teachings").append(teachings.join(""));
  });
}


function getAwards() {

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
        "<blockquote>"+desc+"<i> "+linkify(who,url,1)+"</i></blockquote>",
        "</li>",
        tag("p",tilde));
    }
    awards.push("</ul>");
    $("#awards").append(awards.join(""));
  });
}

function getCollabs() {

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
        "<li>"+category+" in "+where+" ("+year+")",
        tag("blockquote",desc),
        "</li>",
        tag("p",tilde));
    }
    collaborations.push("</ul>");
    $("#collaborations").append(collaborations.join(""));
  });

}

function getPerformances() {

  loadJSON(cvURL[3], function(response) {
    var stamp, what, when, desc, where, instrument, who;
   
    f = JSON.parse(response);
    entry = f.feed.entry;
    performances = ["<ul>"]; // empty array before refilling it
    
    for (i in entry) {
      e = entry[i];
      stamp        = e.gsx$timestamp.$t;
      what         = e.gsx$what.$t;
      when         = new Date(e.gsx$when.$t);
      desc         = e.gsx$how.$t;
      where        = e.gsx$where.$t;
      instrument   = e.gsx$instrument.$t;
      who          = e.gsx$with.$t;

      performances.push(
        "<li>"+instrument+" in "+what+" at "+where+", with "+who+" ("+when.toDateString()+")",
        tag("blockquote",desc),
        "</li>",
        tag("p",tilde));
    }
    performances.push("</ul>");
    $("#performances").append(performances.join(""));
  });
}


function getUnworks(){

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
        "<li>"+etitl,
        "<ul>",
        tag("li",edesc),
        tag("li",ecat),
        tag("li",eloca),
        tag("li",edate.toDateString()),
        tag("li",eperf),
        //tag("blockquote",edesc),
        "</ul>",
        "</li>",
        tag("p",tilde));
    }
    $("#unworks").append(unworks.join(""));
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

  $("main article").append([
  	"<section id=personal>"+tag("header",tag("h4","Personal Information"))+"</section>",
  	"<section id=teachings>"+tag("header",tag("h4","Teaching Experience"))+"</section>",
  	"<section id=awards>"+tag("header",tag("h4","Awards"))+"</section>",
  	"<section id=unworks>"+tag("header",tag("h4","List of unworks"))+"</section>",
  	"<section id=collaborations>"+tag("header",tag("h4","Collaborations"))+"</section>",
  	"<section id=performances>"+tag("header",tag("h4","Performances"))+"</section>"
  	])

  $("#personal").append(tag("ul",tag("li",personal.join("</li><li>"))));
    
  getTeachings();
  getAwards();
  getUnworks();
  getCollabs();
  getPerformances();

});