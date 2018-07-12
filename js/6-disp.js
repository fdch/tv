function display(x) {
  currpage = mitem.findIndex(item => item === x);
  //console.log(currpage);
  article = resetDisplay(x);
  switch (x) {
    case "games" :
      article.innerHTML = gameType.join("<br/>");
      break;
    case "touch" :
      article.innerHTML = contactMessage.join("");
      break;
    case "bio"   :
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
    case "init"  :
      main();
      iframeTag.setAttribute('src',featURL[pdRandom(featURL.length)]);
      break
    default:
    break;
  }
}
function resetDisplay(x){
  
  //remove previous stuff
  removeChilds(mainTag);

  if(!currpage) return; 

  iframeTag.setAttribute('src','');
  // $("main").css('background-image', 'url(' + loadingUrl + ')');

  //the header
  var headerTag = element('header');

  let submitX = "getSubmit(\'"+x+"\');";
  let htitleTag = element("h2", x,'', submitX);
  headerTag.appendChild(htitleTag);

  if('unwork'===x) {
    var formTag = element('form','','workFilters');
    makeDropdowns('category', formTag, uniqueCategories);
    //makeDropdowns('title', formTag, allTitles);
    headerTag.appendChild(formTag);
  }

  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article','', x);
  mainTag.appendChild(articlTag);
  articlTag.setAttribute('style', "width:"+articleWidth(maxWidth)+"px;");
  return articlTag;
}
function displayBiogra(target) {
  let sectTag = element('section');
  target.appendChild(sectTag);

  let headTag = element('header');
  let artiTag = element('article');
  sectTag.appendChild(headTag);
  sectTag.appendChild(artiTag);

  let curTag = element("h3","Curriculum Vitae",'', "window.open(\'"+cv+"\', '_top');");      
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
    let titl = source[x]["awTitl"]; ////////////
    let time = source[x]["awTime"];
    let date = source[x]["awDate"]; ////////////
    let perf = source[x]["awPerf"]; ////////////
    let cate = source[x]["awCate"]; ////////////
    let desc = source[x]["awDesc"]; ////////////
    let prog = source[x]["awProg"]; ////////////
    let iurl = source[x]["awIurl"]; ////////////
    let vurl = source[x]["awVurl"]; ////////////
    let aurl = source[x]["awAurl"]; ////////////
    let surl = source[x]["awSurl"]; ////////////
    let loca = source[x]["awLoca"]; ////////////
    let dura = source[x]["awDura"]; 

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    sectTag.setAttribute('class', cate);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl);
    let hstitl = element("h4",desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var perfMessage = "Premiered by "+perf+" on "+date.toDateString()+", at "+loca;

    let progra = element('p',prog);
    let perfor = element("h5",perfMessage);
    var aaa = [progra,perfor];

    if (iurl) aaa.push(img(iurl, articleWidth(maxWidth),titl));
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
    let titl = source[x]["apTitl"];
    let desc = source[x]["apDesc"];
    let publ = source[x]["apPubl"];
    let down = source[x]["apDown"];
    let time = source[x]["apTime"];
    let link = source[x]["apLink"];
    let date = source[x]["apDate"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl+" ("+date+")",'',"window.open(\'"+link+"\',\'_top\');");
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
    var titl = source[x]["aeWhat"];
    var desc = source[x]["aeDesc"];
    var when = source[x]["aeWhen"];
    var wher = source[x]["aeWher"];
    var time = source[x]["aeTime"];
    //console.log(x + ": "+ titl + " "+ desc + " "+ when + " "+ wher + " "+ time);

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl);
    let hsubti = element("h4",wher);
    let hssubt = element("h5",when);
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
    let titl = source[x]["aPName"];
    let last = source[x]["aPSurn"];
    let time = source[x]["aPTime"];
    let webs = source[x]["aPWebs"];

    let sectTag = element('section','', x);
    target.appendChild(sectTag);

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    switch (last) {
      case "Ensemble":
      case "Organization":
        var name = titl;
        break
      default:
        var name = titl + " " + last;
        break;
    }

    let htitle = element("h5",name,'',"window.open(\'"+webs+"\', \'_top\');");
    headTag.appendChild(htitle);
    // let footer = element('h6',time);
    // footTag.appendChild(footer);
   }
}
function displayCV(x) {
  var headerTag = element('header');
  let htitleTag = element("h2", x);
  headerTag.appendChild(htitleTag);
  mainTag.appendChild(headerTag);
  //the article
  var articlTag = element('article','', x);
  mainTag.appendChild(articlTag);
  articlTag.setAttribute('style', "width:"+articleWidth(maxWidth)+"px;");
  switch (x) {
    case "Personal" :
      articlTag.innerHTML = "<ul>"+tag("li",personal.join("</li><li>"))+"</li></ul>";
      break;
    case "Teachings" :
      displayCVTeachi(articlTag,allTeachi);
      break;
    case "Awards"   :
      displayCVAwards(articlTag,allAwards);
      break;
    case "Unworks":
      displayCVUnwork(articlTag,allUnwork);
      break;
    case "Collaborations":
      displayCVCollab(articlTag,allCollab);
      break;
    case "Performances":
      displayCVPerfor(articlTag,allPerfor);
      break
    default:
      removeChilds(mainTag);
      mainCV();
    break;
  }
}
function displayCVTeachi(target,source){
  var sectTag = element('section','',"teachings");
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aTTime"];
    var type = source[x]["aTType"];///
    var clas = source[x]["aTClas"];///
    var inst = source[x]["aTInst"];///
    var dept = source[x]["aTDept"];///
    var term = source[x]["aTTerm"];///
    var year = source[x]["aTYear"];///
    
    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let titl = year+tilde+type + ". (" + term + ")";
    let htitle = element("h3",titl);
    headTag.appendChild(htitle);

    let job = clas + " at " + dept + " of " + inst;
    let descrip = element("blockquote",job);

    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
    // window.alert(job);
  }
}
function displayCVAwards(target,source){
  var sectTag = element('section','',"awards");
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aATime"];
    var type = source[x]["aAType"];
    var titl = source[x]["aATitl"];
    var dura = source[x]["aADura"];
    var wher = source[x]["aAWher"];
    var whoo = source[x]["aAWhoo"];
    var desc = source[x]["aADesc"];
    var urll = source[x]["aAUrll"];
    

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let awar = titl+" for "+dura+" in "+wher+" ("+type+")";
    let htitle = element("h3",awar);
    headTag.appendChild(htitle);

    let descrip = element("blockquote",desc);
    let refer = element("i", whoo, "", "window.open("+urll+",\'_top\')");
    descrip.appendChild(refer);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayCVUnwork(target,source){
  var sectTag = element('section','',"unwork");
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  console.log(keys);
  for (var i in keys) {
    let x = keys[i];
    let titl = source[x]["awTitl"]; ////////////
    let time = source[x]["awTime"];
    let date = source[x]["awDate"]; ////////////
    let perf = source[x]["awPerf"]; ////////////
    let cate = source[x]["awCate"]; ////////////
    let desc = source[x]["awDesc"]; ////////////
    let prog = source[x]["awProg"]; ////////////
    let iurl = source[x]["awIurl"]; ////////////
    let vurl = source[x]["awVurl"]; ////////////
    let aurl = source[x]["awAurl"]; ////////////
    let surl = source[x]["awSurl"]; ////////////
    let loca = source[x]["awLoca"]; ////////////
    let dura = source[x]["awDura"]; 

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let htitle = element("h3",titl);
    let hstitl = element("h4",desc);
    headTag.appendChild(htitle);
    headTag.appendChild(hstitl);

    var lis = [
      "Duration: "+dura+" minutes.",
      "Premiered by: "+perf,
      "Date: "+date.toDateString(),
      "Place: "+loca,
      "Keywords: "+cate
    ];

    let ulTag = element("ul");
    for (let j in lis){
      let liTag = element("li", lis[j]);
      ulTag.appendChild(liTag);
    }

    artiTag.appendChild(ulTag);
     
    let timest = element('h6',time);
    footTag.appendChild(timest);
  }
}
function displayCVCollab(target,source){
  var sectTag = element('section','',"collaborations");
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aCTime"];
    var cate = source[x]["aCCate"];
    var year = source[x]["aCYear"];
    var wher = source[x]["aCWher"];
    var desc = source[x]["aCDesc"];

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let colla = year+tilde+cate+" in "+wher;
    let htitle = element("h3",colla);
    headTag.appendChild(htitle);

    let descrip = element("blockquote",desc);
    artiTag.appendChild(descrip);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}
function displayCVPerfor(target,source){
  var sectTag = element('section','',"performances");
  target.appendChild(sectTag);

  var keys = Object.keys(source);
  console.log(keys);
  for (var i in keys) {
    var x = keys[i];
    var time = source[x]["aPTime"];
    var what = source[x]["aPWhat"];
    var when = source[x]["aPWhen"];
    var howw = source[x]["aPHoww"];
    var wher = source[x]["aPWher"];
    var inst = source[x]["aPInst"];
    var witt = source[x]["aPWith"];

    let headTag = element('header');
    sectTag.appendChild(headTag);
    let artiTag = element('article');
    sectTag.appendChild(artiTag);
    let footTag = element('footer');
    sectTag.appendChild(footTag);

    let event = when.toDateString()+tilde+what +" at "+wher+", with "+witt;
    let htitle = element("h3",event);
    headTag.appendChild(htitle);

    let descrip = element("blockquote",howw);
    let perfor = element("i", "Performed: "+inst+".");
    artiTag.appendChild(descrip);
    descrip.appendChild(perfor);

    let footer = element('h6',time);
    footTag.appendChild(footer);
  }
}