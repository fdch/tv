function removeChilds(x) {
  while (x.firstChild) 
    x.removeChild(x.firstChild);
}
var prev,somestring;
var vis = function(x) {
  var y = document.getElementById(x);
  if (prev != null) prev.style.display = 'none';
  if (y != null) y.style.display = 'block', prev=y;
}
function toggleIt(x) {
    x.toggle();
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
  var hH = headerTag[0].clientHeight;
  var hW = headerTag[0].clientWidth;

  var iH = Math.floor(hW*0.15);
  var hHmax = Math.floor(hH*0.8)-2;

  var i = iH>=hHmax?hHmax:iH;
  var n = w-i-60; //a button box is about 55px wide...
 
  if(navigaTag) navigaTag.setAttribute('style', "width:"+n+"px;");
  if(rotImgTag) rotImgTag.setAttribute('width', i);
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
function getContent(x, arr) {
  jQuery.get(x, function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      arr.push(elem);
    });
  });
}
function randomVideo() {
  iframeTag.setAttribute('src',featURL[Math.floor(Math.random()*featURL.length)]);
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
  var menuy = "rgba("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+",0.3)";

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
  randomColor(color_preset['high'],[bodyTag,headerTag[0]]);
  funImage(rotImg);
}
function imgClicker(x) {
  if (!currpage) randomVideo();
  randomizeStuff();  
}

function makeCateg(x){
  // var cats= new Array();
  // for (let i in x){
  //   var sub= new Array();
  //   sub = x[i];//.split(", ");
  //   console.log("----sub-------- :"+sub);
  //   for (let j in sub) {
  //     let ids = makeID(sub[j]);
  //     cats.push(ids);
  //   console.log("-id- :"+ids);
  //   }
  // }
  // return cats;
  var cats=new Array();
  var word=new String();
  for (let i in x){
    let letter = new String(x[i]);
    if(!(",".localeCompare(letter))){
      cats.push(word);
      word="";
      continue;
    }
    if(!(" ".localeCompare(letter))){ 
      word+="_";
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
    cats.push(st.replace(/_/g,' '));
  }
  // var categories = new Array();
  // jQuery.each(x, function(i,v){
  //   var subcat = new Array(v.split(", "));
  //   jQuery.each(subcat, function(ii,vv){
  //     categories.push(vv);
  //   });
  // });
  // var cats = new Array();
  // jQuery.each(categories, function(i,v){
  //   jQuery.each(v, function(ii,vv){
  //     cats.push(vv);
  //   });
  // });
  
  return unique(cats);
}
function getValue(x) {
  var name = x.name;
  var valu = x.value;
  switch (name) {
    case "title":
      for (let i in allWorkId) {
        var onoff;
        var current = allWorkId[i];
        var wid = document.getElementById(current);
        if(valu!==current) onoff = "none";
        else onoff = "initial";
        wid.setAttribute('style', "display:"+onoff);
      }
      break;
    case "category":
      var clas = document.getElementsByClassName(valu);
      for (let i in allWorkId)
        document.getElementById(allWorkId[i]).setAttribute('style', 'display:none');
      for (let j in clas){
        var classes=[];
        if(classes=clas[j])
          for (let k in classes)
            classes[k].setAttribute('style', "display:initial");
        
      }
      break;
    default:
      break;
  }
  
  console.log(name + ": " + valu);
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
function img(src,width,titl ) {
  let tag = document.createElement('img');
  let anc = anchor(src);
  tag.setAttribute('src', src);
  tag.setAttribute('width', width);
  tag.setAttribute('title', titl?titl:"Click me");
  anc.appendChild(tag);
  return anc;      
}