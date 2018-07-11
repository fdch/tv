function loadAll(sheets) {
  loading = 1;
  //works
  loadJSON(sheets[0], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    allUnwork={};
    allCategories=[], allTitles=[];
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$title.$t;
      var categ = e.gsx$category.$t;
      var nwid  = String("id-"+makeID(title));
      allUnwork[nwid]={};
      allUnwork[nwid]["awTitl"] = title;
      allUnwork[nwid]["awTime"] = e.gsx$timestamp.$t;
      allUnwork[nwid]["awDate"] = new Date(e.gsx$date.$t);
      allUnwork[nwid]["awPerf"] = e.gsx$performers.$t;
      allUnwork[nwid]["awCate"] = categ;
      allUnwork[nwid]["awDesc"] = e.gsx$description.$t;
      allUnwork[nwid]["awProg"] = e.gsx$programnotes.$t;
      allUnwork[nwid]["awIurl"] = e.gsx$imageurl.$t;
      allUnwork[nwid]["awVurl"] = e.gsx$videourl.$t;
      allUnwork[nwid]["awAurl"] = e.gsx$audiourl.$t;
      allUnwork[nwid]["awSurl"] = e.gsx$scoreurl.$t;
      allUnwork[nwid]["awLoca"] = e.gsx$location.$t;
      allUnwork[nwid]["awDura"] = e.gsx$duration.$t;

      allCategories.push(categ);
      allTitles.push(title);
    }
  });
  //papers
  loadJSON(sheets[1], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry; 
    allPapers={};
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$title.$t;
      var npid = String("id-"+makeID(title));
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
    allEvents={};
    for (i in entry) {
      e = entry[i];
      var title = e.gsx$what.$t;
      var neid = String("id-"+makeID(title));
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
    allPeople={};
    for (i in entry) {
      e = entry[i];
      var name = e.gsx$name.$t;
      var nPid = String("id-"+makeID(name));
      allPeople[nPid]={};
      allPeople[nPid]["aPName"] = name;
      allPeople[nPid]["aPTime"] = e.gsx$timestamp.$t;
      allPeople[nPid]["aPSurn"] = e.gsx$surname.$t;
      allPeople[nPid]["aPWebs"] = e.gsx$website.$t;
    }
    // window.alert(Object.keys(allPeople));
  });
  loading = 0;
  loaded = 1; //set it as loaded if it is loaded asynchronously
  return 1; //actually not checking if stuf loaded...
}

loadAll(allGS); // load asynchronously (if available)