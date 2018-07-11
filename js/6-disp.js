function display(x) {
  articlTag = resetDisplay(x);
  switch (x) {
    case "games" :
      articlTag.innerHTML = gameType.join("<br/>");
      break;
    case "touch" :
      articlTag.innerHTML = contactMessage.join("");
      break;
    case "bio":
      displayBio(articlTag);
      break;
    case "unwork":
      displayUnworks(articlTag),Object.keys(allUnworks);
      break;
    case "papers":
      displayPapers(articlTag,Object.keys(allPapers));
      break;
    case "events":
      displayEvents(articlTag,Object.keys(allEvents))
      break;
    case "people":
      displayPeople(articleTag,Object.keys(allPeople));
      break;
    default:
    break;
  }
}
function resetDisplay(x){
  let submitX = "getSubmit(\'"+x+"\');";
  //remove previous stuff
  removeChilds(mainTag);
  iframeSrc.value = "";
  // $("main").css('background-image', 'url(' + loadingUrl + ')');
  //the header
  var headerTag = element('header');
  let htitleTag = h(2, x, submitX);
  headerTag.appendChild(htitleTag);

  if('unwork'===x) {
    var formTag = element('form',"workFilters");
    makeDropdowns("category", formTag, getUniqueCategories(allCategories));
    makeDropdowns("title", formTag, getUniqueCategories(allTitles));
    headerTag.appendChild(formTag);
  }

  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article','', x);
  mainTag.appendChild(articlTag);
  articlTag.setAttribute('width', articleWidth(maxWidth));
  return articlTag;
}
function displayBio(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  artiTag.setAttribute('width', articleWidth(maxWidth));
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let curTag = h(3,"Curriculum Vitae", "window.open(\'"+cv+"\', '_top');");      
  headTag.appendChild(curTag);

  let imgTag = img(bioImage, articleWidth(maxWidth),"Fede Camara Halac");
  let spTag = element('p',bioSpanish,'bio-spa');
  let enTag = element('p',bioEnglish,'bio-eng');

  let alltags = [imgTag,enTag,spTag];

  for (let i in alltags){
    artiTag.appendChild(alltags[i]);
  }
}
function displayUnworks(target,source) {
  for (var i in source) {
    let x = source[i];
    let titl = allUnworks[x]["awTitl"]; ////////////
    let time = allUnworks[x]["awTime"];
    let date = allUnworks[x]["awDate"]; ////////////
    let perf = allUnworks[x]["awPerf"]; ////////////
    let cate = allUnworks[x]["awCate"]; ////////////
    let desc = allUnworks[x]["awDesc"]; ////////////
    let prog = allUnworks[x]["awProg"]; ////////////
    let iurl = allUnworks[x]["awIurl"]; ////////////
    let vurl = allUnworks[x]["awVurl"]; ////////////
    let aurl = allUnworks[x]["awAurl"]; ////////////
    let surl = allUnworks[x]["awSurl"]; ////////////
    let loca = allUnworks[x]["awLoca"]; ////////////
    let dura = allUnworks[x]["awDura"]; 

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    sectTag.setAttribute('class', cate.join(" "));

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    artiTag.setAttribute('width', articleWidth(maxWidth));
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,titl);
    let hstitl = h(4,desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var perfMessage = "Premiered by "+perf+" on "+date.toDateString()+", in "+loca;

    let progra = element('p',prog);
    let perfor = h(5,perfMessage);
    var aaa = [progra,perfor];

    if (iurl) aaa.push(img(iurl, articleWidth(maxWidth),title));
    if (aurl) aaa.push(element('button','Audio',x+'-aurl',"windo.open(\'"+aurl+"\',\'_top\');"));
    if (vurl) aaa.push(element('button','Video',x+'-vurl',"windo.open(\'"+vurl+"\',\'_top\');"));
    if (surl) aaa.push(element('button','Score',x+'-surl',"windo.open(\'"+surl+"\',\'_top\');"));
      
    let timest = element('h6',time);
    footTag.appendChild(timest);
  }
}
function displayPapers(target,source) {
  for (var i in source) {
    let x = source[i];
    let titl = allPapers[x]["apTitl"];
    let desc = allPapers[x]["apDesc"];
    let publ = allPapers[x]["apPubl"];
    let down = allPapers[x]["apDown"];
    let time = allPapers[x]["apTime"];
    let link = allPapers[x]["apLink"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    artiTag.setAttribute('width', articleWidth(maxWidth));
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,titl,"windo.open(\'"+link+"\',\'_top\'");
    headTag.appendChild(htitle);

    let desrip = element('p',desc);
    artiTag.appendChild(descrip);

    let footer = element('p',publ);
    let downlo = anchor(down,title);
    let timest = element('h6',time);
    var aaa = [footer,downlo,timest];
    for (let j in aaa) footTag.appendChild(aaa[j]);
  }
}
function displayEvents(source) {
  for (var i in source) {
    var x = source[i];
    var titl = allEvents[x]["aeWhat"];
    var desc = allEvents[x]["aeDesc"];
    var when = allEvents[x]["aeWhen"];
    var wher = allEvents[x]["aeWher"];
    var time = allEvents[x]["aeTime"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    artiTag.setAttribute('width', articleWidth(maxWidth));
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,titl);
    let hsubti = h(4,wher);
    let hssubt = h(5,when);
    var aaa = [htitle,hsubti,hssubt];
    for (let j in aaa) headTag.appendChild(aaa[j]);
    
    let descrip = element('p',desc);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayPeople(source) {
  for (var i in source) {
    let x = source[i];
    let titl = allPeople[x]["aPName"];
    let last = allPeople[nPid]["aPSurn"];
    let time = allPeople[x]["aPTime"];
    let webs = allPeople[nPid]["aPWebs"];

    let name = titl + " " + last;

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    artiTag.setAttribute('width', articleWidth(maxWidth));
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,name,"window.open(\'"+webs+"\', \'_top\');");
    headTag.appendChild(htitle);
    let footer = element('h6',time);
    footTag.appendChild(footer);
   }
}