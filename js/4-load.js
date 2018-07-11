function loadAll(sheets) {
  loading = 1;
  //works
  loadJSON(sheets[0], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$title.$t;
      var nwid  = "id-"+makeID(title);
      allUnworks[nwid]={};
      allUnworks[nwid]["awTitl"] = title;
      allUnworks[nwid]["awTime"] = e.gsx$timestamp.$t;
      allUnworks[nwid]["awDate"] = new Date(e.gsx$date.$t);
      allUnworks[nwid]["awPerf"] = e.gsx$performers.$t;
      allUnworks[nwid]["awCate"] = e.gsx$category.$t;
      allUnworks[nwid]["awDesc"] = e.gsx$description.$t;
      allUnworks[nwid]["awProg"] = e.gsx$programnotes.$t;
      allUnworks[nwid]["awIurl"] = e.gsx$imageurl.$t;
      allUnworks[nwid]["awVurl"] = e.gsx$videourl.$t;
      allUnworks[nwid]["awAurl"] = e.gsx$audiourl.$t;
      allUnworks[nwid]["awSurl"] = e.gsx$scoreurl.$t;
      allUnworks[nwid]["awLoca"] = e.gsx$location.$t;
      allUnworks[nwid]["awDura"] = e.gsx$duration.$t;
    }
  });
  //papers
  loadJSON(sheets[1], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry; 
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$title.$t;
      var npid = "id-"+makeID(title);
      allPapers[npid]={};
      allPapers[npid]["apTitl"] = title;
      allPapers[npid]["apTime"] = e.gsx$timestamp.$t;
      allPapers[npid]["apDesc"] = e.gsx$description.$t;
      allPapers[npid]["apLink"] = e.gsx$link.$t;
      allPapers[npid]["apPubl"] = e.gsx$published.$t;
      allPapers[npid]["apDown"] = e.gsx$download.$t;
    }//end loop
  });
  //events
  loadJSON(sheets[2], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$what.$t;
      var neid = "id-"+makeID(title);
      allEvents[neid]={};
      allEvents[neid]["aeWhat"] = title;
      allEvents[neid]["aeTime"] = e.gsx$timestamp.$t;
      allEvents[neid]["aeWhen"] = new Date(e.gsx$when.$t);
      allEvents[neid]["aeWher"] = e.gsx$where.$t;
      allEvents[neid]["aeDesc"] = e.gsx$description.$t;
    }
  });
  //people
  loadJSON(sheets[3], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    for (i in entry) {
      e = entry[i];
      var name = e.gsx$name.$t;
      var nPid = "id-"+makeID(name);
      allPeople[nPid]={};
      allPeople[nPid]["aPName"] = name;
      allPeople[nPid]["aPTime"] = e.gsx$timestamp.$t;
      allPeople[nPid]["aPSurn"] = e.gsx$surname.$t;
      allPeople[nPid]["aPWebs"] = e.gsx$website.$t;
    }
  });
  loading = 0;
  loaded = 1; //set it as loaded if it is loaded asynchronously
  window.alert(Object.keys(allPeople));
  return 1; //actually not checking if stuf loaded...
}

loadAll(allGS); // load asynchronously (if available)