function display(x) {

  window.alert(mainTag.nodeValue);
  removeChilds(mainTag);

  iframeSrc.value = "";
  
  // $("main").css('background-image', 'url(' + loadingUrl + ')');
  

  var headerTag = element('header');
  var htitleTag = h(2,x,formMenu[x]);
  headerTag.appendChild(htitleTag);

  mainTag.appendChild(headerTag);
  

  var articlTag = element('article', x);
  mainTag.appendChild(articlTag);
  
  

  



  

  switch (x) {
    case "games" :

      $("main").append(tag("article",gameType.join("<br/>")));
      break;
    case "touch" :
      $("main").append([tag("article",contactMessage.join(""))]);
      break;
    case "bio":
      $("main").append([tag("header",tag("h2","Bio")),tag("article","")]);
      getBio();
      break;
    case "unwork":
      var formTag = makeForm("workFilters", subheaderTag);
      makeDropdowns("category", formTag, getUniqueCategories(awCate));
      makeDropdowns("title", formTag, getUniqueCategories(awTitl));

     // articleTag.appendChild()
      break;
    case "papers":
      var pKeys = Object.keys(allPapers);
      for (var i in pKeys) {
        var nPid = pKeys[i];


        var titlTag = document.createTextNode(allPapers[nPid]["apTitl"]);
        var descTag = document.createTextNode(allPapers[nPid]["apDesc"]);
        var publTag = document.createTextNode(allPapers[nPid]["apPubl"]);
        var downTag = document.createTextNode(allPapers[nPid]["apDown"]);
        var timeTag = document.createTextNode(allPapers[nPid]["apTime"]);
        var linkTag = anchor(allPapers[nPid]["apLink"],titlTag);
        

        var sTag = section(nPid);

        var h3Tag = document.createElement('h3');
        var pTag = document.createElement('p');
        
      

        articlTag.appendChild(sTag);
        

        var hTag = document.createElement('header');
        sTag.appendChild(hTag);
        hTag.appendChild(h3Tag);

        h3Tag.appendChild(linkTag);

        var artTag = document.createElement('article');
        sTag.appendchild(artTag);
        artTag.appendChild(pTag);
        pTag.appendChild(descTag);
        var fTag = document.createElement('footer');
        sTag.appendChild(fTag);
        fTag.appendChild(apPubl);
        fTag.appendChild(apDown);
        fTag.appendChild(timeTag);
      }
      break;
    case "events":
      var eKeys = Object.keys(allEvents);
      for (var i in eKeys) {
        var neid = eKeys[i];
        var titlTag = document.createTextNode(allEvents[neid]["aeWhat"]);
        var descTag = document.createTextNode(allEvents[neid]["aeDesc"]);
        var whenTag = document.createTextNode(allEvents[neid]["aeWhen"]);
        var wherTag = document.createTextNode(allEvents[neid]["aeWher"]);
        var timeTag = document.createTextNode(allEvents[neid]["aeTime"]);
        
        // var aTag = document.createElement('a');
        // var aHref = document.createAttribute('href');
        // aHref.value = allEvents[pKeys[i]]["apLink"];
        var h3Tag = document.createElement('h3');
        var h4Tag = document.createElement('h4');
        var h5Tag = document.createElement('h5');
        var pTag = document.createElement('p');
        
        var sTag = document.createElement('section');
        var sId = document.createAttribute('id');
        sId.value = nPid; 
        articleTag.appendChild(sTag);
        sTag.setAttributeNode(sId);

        var hTag = document.createElement('header');
        sTag.appendChild(hTag);
        hTag.appendChild(h3Tag);
        hTag.appendChild(h4Tag);
        hTag.appendChild(h5Tag);
        h3Tag.appendChild(titlTag);
        h4Tag.appendChild(whenTag);
        h5Tag.appendChild(wherTag);
        
        // aTag.appendChild(h3Tag);
        var artTag = document.createElement('article');
        sTag.appendchild(artTag);
        artTag.appendChild(pTag);
        pTag.appendChild(descTag);
        var fTag = document.createElement('footer');
        sTag.appendChild(fTag);
        // fTag.appendChild(apPubl);
        // fTag.appendChild(apDown);
        fTag.appendChild(timeTag);
      }
      break;
    case "people":
      var pKeys = Object.keys(allPeople);
      for (var i in pKeys) {
        var nPid = pKeys[i];
        var titlTag = document.createTextNode(allPeople[nPid]["aPName"]+" "+allPeople[nPid]["aPSurn"]);
        // var descTag = document.createTextNode();
        // var linkTag = document.createTextNode(allPeople[nPid]["aPWebs"]);
        // var wherTag = document.createTextNode(allPeople[nPid]["aPWher"]);
        var timeTag = document.createTextNode(allPeople[nPid]["aPTime"]);
        
        var aTag = document.createElement('a');
        var aHref = document.createAttribute('href');
        var aTarget = document.createAttribute('target');
        aTarget.value = "_top";
        var aRel = document.createAttribute('rel');
        aRel.value = "nofollow";
        aHref.value = allPeople[nPid]["aPWebs"];
        // var h3Tag = document.createElement('h3');
        // var h4Tag = document.createElement('h4');
        // var h5Tag = document.createElement('h5');
        var pTag = document.createElement('p');
        
        var sTag = document.createElement('section');
        var sId = document.createAttribute('id');
        sId.value = nPid; 
        articleTag.appendChild(sTag);
        sTag.setAttributeNode(sId);

        // var hTag = document.createElement('header');
        // sTag.appendChild(hTag);
        // hTag.appendChild(h3Tag);
        // hTag.appendChild(h4Tag);
        // hTag.appendChild(h5Tag);
        // h3Tag.appendChild(titlTag);
        // h4Tag.appendChild(whenTag);
        // h5Tag.appendChild(wherTag);
        
        // aTag.appendChild(h3Tag);
        var artTag = document.createElement('article');
        sTag.appendchild(artTag);
        artTag.appendChild(pTag);
        pTag.appendChild(aTag);
        aTag.appendChild(titlTag)
        aTag.setAttributeNode(aHref);
        aTag.setAttributeNode(aTarget);
        aTag.setAttributeNode(aRel);
        var fTag = document.createElement('footer');
        sTag.appendChild(fTag);
        // fTag.appendChild(apPubl);
        // fTag.appendChild(apDown);
        fTag.appendChild(timeTag);
      }
      break;
    default:
    break;
  }
  // $('article').width(articleWidth(maxWidth));
  // $("main").css('background-image', 'url()');
}