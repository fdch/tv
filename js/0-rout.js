function removeChilds(x) {
  while (x.firstChild) 
    x.removeChild(x.firstChild);
}
function toggle(id) {
  x = document.getElementById(id);
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function getFile(x){
  $.get(x, function(data){
  return data ;
  });
}
function makeID(x){
  return x.replace(/ /g,'_').toLowerCase().slice(0,7);
}
function onclickify(func,src,arg) {
  if (arg) {
    return " onclick=\""+func+"(\'"+src+"\',\'"+arg+"\');\" ";
  } else {
    return " onclick=\""+func+"(\'"+src+"\');\" ";
  }   
}
function linkify(x,y,blank){
  var target;
  var thelink;
  if (blank) {
    target="_blank";
  } else {
    target="_top";
  }
  var title = y.length>44?y.slice(0, 44)+"...":y;
  thelink = "<a target=\""+target+"\" href=\""+y+"\" alt=\""+x+"\" title=\""+title+"\" rel=\"nofollow\"  >"+x+"</a>";
  
  return thelink;
}
function tag(tag,text){
  return "<"+tag+">"+text+"</"+tag+">";
}
function tagOpen(tag,text,target){
  return "<"+tag+onclickify("window.open",target,"_top")+">"+text+"</"+tag+">";
}
function imgify(src,width){
  return "<img src=\""+ src +"\" width=\""+ width +"\" "+ onclickify("window.open",src,"_top") + "/>";
}
function width(){
   return window.innerWidth 
       || document.documentElement.clientWidth 
       || document.body.clientWidth 
       || 0;
}
function height(){
   return window.innerHeight 
       || document.documentElement.clientHeight 
       || document.body.clientHeight 
       || 0;
}
function articleWidth(maxW){
  var pw  = width();
  var f = widthFactor;
  if (pw >= maxW) {return maxW*f;} else {return pw*f;}
}
function resizeHeader(){

  // headerTag[0].style.width = w+"px";
  
   var hH = headerTag[0].clientHeight;
  // var hW = headerTag[0].clientWidth;

  // var iH = Math.floor(hW*0.15);
  // var hHmax = Math.floor(hH*0.8);

  // var i = iH>=hHmax?hHmax:iH;
  // var iPad = i*0.25;
  // var n = w-i-60; //a button box is about 55px wide...
   // headerTag[0].style.width = w+"px";
  
  // if(navigaTag) navigaTag.style.width = n+"px";
  
  


  if(rotImgTag) {
    rotImgTag.setAttribute('width', hH*0.98);
    rotImgTag.setAttribute('height', hH*0.98);
    rotImgTag.style.padding= hH*0.01+"px";
  }




  // if(mainTag)   mainTag.style.marginTop = hH+"px";
//return [n,i];
}
function resized(){
  w = width();
  h = height();
  resizeHeader();
}
function loadJSON(x,callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', x, true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}
function randomVideo() {
  let len = featURL.length;
  iframeTag.setAttribute('src',featURL[Math.floor(Math.random()*len)]);
}
function pdRandom(range,offset){
  offset = offset || 0;
  return Math.floor(Math.random() * range) + offset;
}
function randomColor(preset, target){
  var lran = preset[0];
  var loff = preset[1];
  var dran = preset[2];
  var doff = preset[3];
  var light = "rgb("+pdRandom(lran,loff)+","+pdRandom(lran,loff)+","+pdRandom(lran,loff)+")";
  var darky = "rgb("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+")";
  var menuy = "rgba("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+hAlpha+")";

  target[0].setAttribute('style', "background-color:" + darky +"; color:"+light+";");
  target[1].setAttribute('style', "background-color:" + menuy +";");
}
var whichone = 0;
// var flipped = 1;
function funImage(input){
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
    
  $(String("#"+input[3])).rotate({animateTo: ang,duration: dur});
  
  if (whichone==0) {whichone=1} else {whichone=0};
  // flipped = flipped==1?(-1):1;
    
  // var flipper = [
  //   "-moz-transform: scaleX("+flipped+");",
  //   "-o-transform: scaleX("+flipped+");",
  //   "-webkit-transform: scaleX("+flipped+");",
  //   "transform: scaleX("+flipped+");",
  //   "filter: FlipH;",
  //   "-ms-filter: \'FlipH\';",
  // ];
       
  setTimeout(function(){
    rotImgTag.setAttribute('src', input[whichone]);
  },dur/4);

  // setTimeout(function(){
  //   rotImgTag.setAttribute('style',flipper.concat(rotImgStyle).join(""));
  // },dur/5);
}
function randomizeStuff(){
  funImage(rotImg);
  let times = pdRandom(25,5);
  while (times) {
    setTimeout(function(){
    randomColor(color_preset['high'],[bodyTag,headerTag[0]]);
    },pdRandom(60*times,30));

    times--;
  }
}
function navClicker() {

  randomColor(color_preset['high'],[bodyTag,headerTag[0]]);

}
function imgClicker(x) {
  if (!currpage) randomVideo();
  randomizeStuff();  
}
function makeCateg(x){
  var cats=new Array();
  var word=new String();
  for (let i in x){
    let letter = new String(x[i]);
    if(!(",".localeCompare(letter))){
      cats.push(word.replace(/\W/g," ").toLowerCase());
      word="";
      continue;
    }
    if(!(" ".localeCompare(letter))){ 
      //word+="_";
      continue;
    }
    word+=letter;
  }
  // console.log(cats.join(tilde));
  return cats;
}
function getUniqueCategories(x){
  var cats = new Array();
  for (var i in x){
    let st = new String(x[i]);
    cats.push(st.replace(/\W/g,' '));
  }
  return unique(unique(cats));
}
function getValue(x) {
  var name = x.name;
  var valu = x.value;
  var onoff;
  for (let i in allWorkId){
    let wid = document.getElementById(allWorkId[i]);
    switch(name) {
    case "title":
      if(valu!==wid)
        onoff = "none;";
      else
        onoff = "initial;";
      break;
    case "categories":
      if(!(wid.classList.contains(valu||valu.replace(/W/g,''))))
        onoff = "none;";
      else
        onoff = "initial;";
      break;
    default:
      display(valu);
      break;
    }
    wid.setAttribute('style', "display:"+onoff);
  }
 // console.log(name + ": " + valu);
}
function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
//Randomize array element order in-place. Using Durstenfeld shuffle algorithm
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function getSubmit(target) {
  var exists;
  var page = formLinks[target];
  if (!exists) var n = window.open("", "asdfyj", submit[4]);
  else n.focus();
  if (n != null) exists = 1;
  else exists = 0;
  n.document.documentElement.innerHTML = submit[2];
  n.document.getElementById("authOK").onclick = function () {
    if ( n.document.getElementById("krl").value != submit[3] )
    {
      n.alert("\n"+submit[0]+"\n\n Try again.");
    } else {
      n.resizeTo(articleWidth(maxWidth), height());
      n.moveBy(articleWidth(maxWidth)*0.3, 0);
      open(page, "asdfyj");
    }
  }
}
function menuClick(x,e) {
  let id = x.title;
  if (e.shiftKey) {
    getSubmit(id);
  } else {
    display(id);
  }
}
function menuTouchStart(x,e) {
  let id = x.title;
  if (e.touches.length > 1) {
    getSubmit(id);
  } else {
    display(id);
  }
}

function randomFont(target) {
  target.setAttribute('style',"font-family:"+fonts[pdRandom(fonts.length)]+";");
}
function anchor(link,text,target){
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('alt' ,link.length>44?link.slice(0, 44)+ " ...":link);
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target?target:"_top");

  tag.appendChild(document.createTextNode(text?text:''));

  return tag;
}
function element(tag,text,id,onclick,width) {
  let elem = document.createElement(tag);
  let node = document.createTextNode(text?text:'');
  elem.setAttribute('id',id?id:'');
  elem.setAttribute('onclick',onclick?onclick:'');
  // elem.setAttribute('width',width?width:'inherit');
  elem.setAttribute('style',"width:"+(width?width+"px;":'inherit;'));
  elem.appendChild(node);
  return elem;
}
function img(src,width,titl,id) {
  let tag = document.createElement('img');
  let div = document.createElement('div');
  let anc = anchor(src);
  if (id)    tag.setAttribute('id',id);
  if (src)   tag.setAttribute('src', src);
  if (width) tag.setAttribute('width', width);
  if (titl)  tag.setAttribute('title', titl);
  div.setAttribute('style',"width:inherit;overflow:hidden;border-radius:15px;");
  anc.appendChild(tag);
  div.appendChild(anc);
  return div;      
}