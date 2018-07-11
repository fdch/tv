function display(x) {
  article = resetDisplay(x);
  switch (x) {
    case "games" :
      article.innerHTML = gameType.join("<br/>");
      break;
    case "touch" :
      article.innerHTML = contactMessage.join("");
      break;
    case "bio":
      displayBiogra(article);
      break;
    case "unwork":
      displayUnwork(article,allUnwork);
      break;
    case "papers":
      displayPapers(article,allPapers);
      break;
    case "events":
      displayEvents(article,allEvents);
      break;
    case "people":
      displayPeople(article,allPeople);
      break;
    default:
    break;
  }
}
function resetDisplay(x){
  let submitX = "getSubmit(\'"+x+"\');";
  //remove previous stuff
  removeChilds(mainTag);
  iframeSrc.value = '';
  // $("main").css('background-image', 'url(' + loadingUrl + ')');
  //the header
  var headerTag = element('header');
  let htitleTag = h(2, x, submitX);
  headerTag.appendChild(htitleTag);

  if('unwork'===x) {
    var formTag = element('form','','workFilters');
    makeDropdowns('category', formTag, getUniqueCategories(allCategories));
    makeDropdowns('title', formTag, getUniqueCategories(allTitles));
    headerTag.appendChild(formTag);
  }

  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article','', x);
  mainTag.appendChild(articlTag);
  articlTag.setAttribute('width', articleWidth(maxWidth));
  return articlTag;
}
function displayBiogra(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
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
function displayUnwork(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = allUnwork[x]["awTitl"]; ////////////
    let time = allUnwork[x]["awTime"];
    let date = allUnwork[x]["awDate"]; ////////////
    let perf = allUnwork[x]["awPerf"]; ////////////
    let cate = allUnwork[x]["awCate"]; ////////////
    let desc = allUnwork[x]["awDesc"]; ////////////
    let prog = allUnwork[x]["awProg"]; ////////////
    let iurl = allUnwork[x]["awIurl"]; ////////////
    let vurl = allUnwork[x]["awVurl"]; ////////////
    let aurl = allUnwork[x]["awAurl"]; ////////////
    let surl = allUnwork[x]["awSurl"]; ////////////
    let loca = allUnwork[x]["awLoca"]; ////////////
    let dura = allUnwork[x]["awDura"]; 

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    sectTag.setAttribute('class', cate);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
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
    if (aurl) aaa.push(element('button','Audio',x+'-aurl',"window.open(\'"+aurl+"\',\'_top\');"));
    if (vurl) aaa.push(element('button','Video',x+'-vurl',"window.open(\'"+vurl+"\',\'_top\');"));
    if (surl) aaa.push(element('button','Score',x+'-surl',"window.open(\'"+surl+"\',\'_top\');"));

    for (let i in aaa) artiTag.appendChild(aaa[i]);
     
    let timest = element('h6',time);
    footTag.appendChild(timest);
  }
}
function displayPapers(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
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
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,titl,"window.open(\'"+link+"\',\'_top\');");
    headTag.appendChild(htitle);

    let descrip = element('p',desc);
    artiTag.appendChild(descrip);

    var aaa = [];
    
    if(publ) aaa.push(element('p',publ));
    if(down) aaa.push(anchor(down,down));
    aaa.push(element('h6',time));
             
    for (let j in aaa) {footTag.appendChild(aaa[j]);}
  }
}
function displayEvents(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    var x = keys[i];
    var titl = allEvents[x]["aeWhat"];
    var desc = allEvents[x]["aeDesc"];
    var when = allEvents[x]["aeWhen"];
    var wher = allEvents[x]["aeWher"];
    var time = allEvents[x]["aeTime"];
    console.log(x + ": "+ titl + " "+ desc + " "+ when + " "+ wher + " "+ time);

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
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
function displayPeople(target,source) {
  var keys = Object.keys(source);
  for (var i in keys) {
    let x = keys[i];
    let titl = allPeople[x]["aPName"];
    let last = allPeople[x]["aPSurn"];
    let time = allPeople[x]["aPTime"];
    let webs = allPeople[x]["aPWebs"];

    let name = titl + " " + last;

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = h(3,name,"window.open(\'"+webs+"\', \'_top\');");
    headTag.appendChild(htitle);
    let footer = element('h6',time);
    footTag.appendChild(footer);
   }
}