function loadAll(sheets) {
  loading = 1;
  //works
  loadJSON(sheets[0], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    allUnwork={};
    allCategories=[], allTitles=[],allWorkId=[];
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
      allWorkId.push(nwid);
    }
    uniqueCategories = getUniqueCategories(allCategories);
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
      allPapers[npid]["apDate"] = e.gsx$date.$t;
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
  //teachings
  loadJSON(sheets[4], function(response) {
    var f, e, i, entry;
    f = JSON.parse(response);
    entry = f.feed.entry;
    allTeachi={};
    for (i in entry) {
      e = entry[i];
      var clas = e.gsx$class.$t;
      var year = e.gsx$year.$t;
      var nTid = String("id-"+makeID(clas+year));
      allTeachi[nTid]={};
      allTeachi[nTid]["aTTime"] = e.gsx$timestamp.$t;
      allTeachi[nTid]["aTType"] = e.gsx$type.$t;
      allTeachi[nTid]["aTClas"] = clas;
      allTeachi[nTid]["aTInst"] = e.gsx$institution.$
      allTeachi[nTid]["aTDept"] = e.gsx$department.$t
      allTeachi[nTid]["aTTerm"] = e.gsx$term.$t;
      allTeachi[nTid]["aTYear"] = year;
    }
    // window.alert(Object.keys(allTeachi));
  });
  //awards
  loadJSON(sheets[5], function(response) {
    var f, e, i, entry;   
    f = JSON.parse(response);
    entry = f.feed.entry;
    allAwards={};    
    for (i in entry) {
      e = entry[i];
      var titl = e.gsx$title.$t;
      var wher = e.gsx$where.$t;
      var nAid = String("id-"+makeID(titl+wher));
      allAwards[nAid]["aATime"] = e.gsx$timestamp.$t;
      allAwards[nAid]["aAType"] = e.gsx$type.$t;
      allAwards[nAid]["aATitl"] = titl;
      allAwards[nAid]["aADura"] = e.gsx$duration.$t;
      allAwards[nAid]["aAWher"] = wher;
      allAwards[nAid]["aAWhoo"] = e.gsx$who.$t;
      allAwards[nAid]["aADesc"] = e.gsx$description.$t;
      allAwards[nAid]["aAUrll"] = e.gsx$url.$t;
    }
    // window.alert(Object.keys(allAwards));
  });
  //collabs
  loadJSON(sheets[6], function(response) {
   var f, e, i, entry;   
    f = JSON.parse(response);
    entry = f.feed.entry;
    allCollab={};  
    for (i in entry) {
      e = entry[i];
      var year = e.gsx$year.$t;
      var cate = e.gsx$category.$t;
      var nCid = String("id-"+makeID(year+cate));
      allCollab[nCid]["aCTime"] = e.gsx$timestamp.$t;
      allCollab[nCid]["aCCate"] = cate;
      allCollab[nCid]["aCYear"] = year;
      allCollab[nCid]["aCWher"] = e.gsx$where.$t;
      allCollab[nCid]["aCDesc"] = e.gsx$description.$t;
    }
  });
  //perfor
  loadJSON(sheets[7], function(response) {
    var f, e, i, entry; 
    f = JSON.parse(response);
    entry = f.feed.entry;
    allPerfor={};   
    for (i in entry) {
      e = entry[i];
      var what = e.gsx$what.$t;
      var when = e.gsx$when.$t;
      var nPid = String("id-"+makeID(what+when));
      allPerfor[nPid]["aPTime"] = e.gsx$timestamp.$t;
      allPerfor[nPid]["aPWhat"] = what;
      allPerfor[nPid]["aPWhen"] = new Date(when);
      allPerfor[nPid]["aPHoww"] = e.gsx$how.$t;
      allPerfor[nPid]["aPWher"] = e.gsx$where.$t;
      allPerfor[nPid]["aPInst"] = e.gsx$instrument.$t;
      allPerfor[nPid]["aPWith"] = e.gsx$with.$t;
    }
  });
  loading = 0;
  loaded = 1; //set it as loaded if it is loaded asynchronously
  return 1; //actually not checking if stuf loaded...
}

loadAll(allGS); // load asynchronously (if available)