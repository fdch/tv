
function removeChilds(x) {
  while (x.firstChild) 
    x.removeChild(x.firstChild);
}


var prev;

var vis = function(x) {
  var y = document.getElementById(x);
  if (prev != null) prev.style.display = 'none';
  if (y != null) y.style.display = 'block', prev=y;
};

function toggleIt(x){
    x.toggle();
}

function getFile(x){
  $.get(x, function(data){
  return data ;
  });
}

function makeID(x){
  return x.replace(/ /g,'_').toLowerCase();
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
  var title = y.slice(0, 44)+"...";
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
  var choose = Math.floor(Math.random() * featURL.length);
  $("#backvideo").attr('src',featURL[choose]);
}

function pdRandom(range,offset){
  return Math.floor(Math.random() * range) + offset?offset:0;
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

function funImage(input){
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
  theid = String("#"+input[4]);
  $(theid).rotate({animateTo: ang,duration: dur});
  if (whichone==0) {whichone=1} else {whichone=0}
  setTimeout(function(){
    $(theid).attr('src', input[whichone])
  },dur/4);
}

function imgClicker(x) {
  randomVideo();
  randomColor(color_preset["high"]);
  funImage(x.id, rotImg);
}



function getUniqueCategories(allCategories){

  var categories = new Array();
  jQuery.each(allCategories, function(i,v){
    var subcat = new Array(v.split(", "));
    jQuery.each(subcat, function(ii,vv){
      categories.push(vv);
    });
  });
  var cats = new Array();
  jQuery.each(categories, function(i,v){
    jQuery.each(v, function(ii,vv){
      cats.push(vv);
    });
  });
  
  return unique(cats);
}

function getValue(x) {
  var value = x.value;
  console.log(value);
}

function unique(array) {
    return $.grep(array, function(el, index) {
        return index == $.inArray(el, array);
    });
}
/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
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
  if (!exists) var n = window.open("", "editForm", submit[4]);
  else n.focus();
  if (n != null) exists = 1;
  else exists = 0;
  n.document.documentElement.innerHTML = submit[2];
  n.document.getElementById("authOK").onclick = function () {
    if ( n.document.getElementById("krl").value != submit[3] )
    {
      n.alert("\n"+submit[0]+"\n\n Try again.");
    } else {
      n.alert("\nSucess!\n\n"+submit[1]+"\n\n Karlheinz.");
      n.resizeTo(articleWidth(maxWidth), height());
      n.moveBy(articleWidth(maxWidth)*0.3, 0);
      open(String(target), "editForm");
    }
  }
}

function randomFont(target) {
  targetStyle = document.createAttribute('style');
  targetStyle.value = "font-family:"+fonts[pdRandom(fonts.length)];
  target.setAttributeNode(targetStyle);
}



function anchor(link,text,target){
  let tag = document.createElement('a');

  tag.setAttribute('href',link);
  tag.setAttribute('alt' ,link.slice(0, 44)+ " ...");
  tag.setAttribute('rel', 'nofollow');
  tag.setAttribute('target', target?target:"_top");

  tag.appendChild(document.createTextNode(text));

  return tag;
}

function h(kind,text,onclick){
  let tag = document.createElement('h'+kind);
  let node = document.createTextNode(text?text:'');
  tag.setAttribute('onclick', onclick?onclick:'');
  tag.setAttribute('style', onclick?'cursor:pointer;':'');
  tag.setAttribute('title', onclick?onclick:node.nodeValue);
  tag.appendChild(node);
  return tag;
}

function element(tag,text,id) {
  let elem = document.createElement(tag);
  let node = document.createTextNode(text?text:'');
  elem.setAttribute('id',id?id:'');
  elem.appendChild(node);
  return elem;
}

function img(src,width,title ) {
  let tag = document.createElement('img');
  let anc = anchor(src);
  tag.setAttribute('src', src);
  tag.setAttribute('width', width);
  tag.setAttribute('title', title?title:"Click me");
  anc.appendChild(tag);
  return anc;      
}

// var wid={};//the new empty object of objects

// var worknames = ["one", "two", "three", "four"];
// //some substrings
// var keyse = ["oo","tt","trtr","ff"];


// for (var i in worknames) {
//   //make each workname a new key for a new object
//    nkey = String(worknames[i]);
//    wid[nkey]={};//the new object
//   for (var k in keyse) {
//     //make each substring a new key in each new object
//         nsubkey = String(keyse[k]);
//         wid[nkey][nsubkey]= "somevalue ";
//     }
// }
// var demo = document.getElementById("demo");
// var mkeys = Object.keys(wid);

// for (var i in mkeys) {
//   var par = document.createElement('p');
//   demo.appendChild(par);
//   var skeys = Object.keys(wid[mkeys[i]]); //find object sub keys
//   for (var k in skeys) {
//       var thestuff = wid[mkeys[i]][skeys[k]]; ///this is how to access each property
//       var txt = document.createTextNode(thestuff);
//       par.appendChild(txt);
//     }
// }
















// var person = {some:"XXXXX", less:"YYYYY"};

// var satus=1;
// //var form = document.getElementById("myform");

// function allCats(form) { 
//   status==1?status=0:status=1; 
//   for(var i=0; i < form.elements.length; i++) {
//       var e = form.elements[i].name;
//         $("#"+e).prop('checked', status==1?true:false);
//      }

// }


// var btnOnclick = ["allCats()", "myValues()"];
// var btnTexts   = ["all", "apply"];

// for (var i in btnOnclick) {
//   var btn = document.createElement('button');
//   var btnTxt = document.createTextNode(btnTexts[i]);
//   var btnAtt = document.createAttribute('onclick');
//   btnAtt.value = btnOnclick[i];
//   document.body.appendChild(btn);
//   btn.appendChild(btnTxt);
// }

// function myValues(form, target) {
//   target.html("");// $("#target").html("");
//   var check=0;
//   for(var i=0; i < form.elements.length; i++) {
//     var e = form.elements[i];
//     if (e.checked) {
//       target.append(person[e.name]);
//       check++;
//     }
//   } 
//   if (!check) status=0, allCats(), myValues();
// }
