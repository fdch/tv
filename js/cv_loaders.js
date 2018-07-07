var teachings=[], awards=[], collaborations=[], performances=[], unworks=[];

function getPersonal(){
  $("#personal").append(tag("ul",tag("li",personal.join("</li><li>"))));
}

function getTeachings() {

    loadJSON(cvURL[0], function(response) {
    var f, e, i, entry;
    var stamp, type, clase, institution, dept, term, year;
    var title, job;
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

      title = year+tilde+type;
      job = tag("b",clase) + " at " + department + " of " + institution + " (" + term + ")";
      teachings.push(
        tag("li",title),
        tag("blockquote",job)
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
      );
    }
    awards.push("</ul>");
    $("#awards").append(awards.join(""));
  });
}

function getCollaborations() {

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
        "<li>"+year+tilde+tag("b",category)+" in "+where+" ",
        tag("blockquote",desc),
        "</li>"
      );
    }
    collaborations.push("</ul>");
    $("#collaborations").append(collaborations.join(""));
  });

}

function getPerformances() {

  loadJSON(cvURL[3], function(response) {
    var stamp, what, when, desc, where, instrument, who;
    var event, description;
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

      event = tag("i",what)+" at "+where+", with "+who;
      description = desc+"<br/>Performed: "+instrument+". ";
      performances.push(
        "<li>"+when.toDateString()+tilde,
        event,
        tag("blockquote",description),
        "</li>",
      );
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
      edura = e.gsx$duration.$t;

      unworks.push(
        "<li>"+tag("i",etitl)+". "+edesc,
        "<ul style='margin-top:0.5%'>",
          tag("li","Duration: "+edura+" minutes."),
          tag("li","Premiered by: "+eperf),
          tag("li","Date: "+edate.toDateString()),
          tag("li","Place: "+eloca),
          tag("li","Keywords: "+tag("i",ecat)),
        "</ul>",
        "</li>",
      );
    }
    $("#unworks").append(unworks.join(""));
  });

}
