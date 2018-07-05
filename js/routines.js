var prev;

var vis = function(x) {
  var y = document.getElementById(x);
  if (prev != null) prev.style.display = 'none';
  if (y != null) y.style.display = 'block', prev=y;
};

function getFile(x){
  $.get(x, function(data){
  return data 
  });
}


function onclickify(func,src) {
  return "onclick=\""+func+"(\'"+src+"\');\""
}


function linkify(x,y,blank){
  var target;

  if (blank) {
    target="_blank";
  } else {
    target="_top";
  }
  return "<a target=\""+target+"\" href=\""+y+"\" alt=\""+x+"\" title=\""+y.slice(0, 47);+"\">"+x+"</a>";
}

function imgify(src,width){
  return "<img src=\"" + src + "\" width=\"" + width +"\" "+ onclickify("window.open",src) + ">"
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
  var choose = Math.floor(Math.random() * featURL.length);
  $("#backvideo").attr('src',featURL[choose]);
}

function pdRandom(range,offset){
  return Math.floor(Math.random() * range) + offset;
}

function randomColor(preset){
  var lran = preset[0];
  var loff = preset[1];
  var dran = preset[2];
  var doff = preset[3];
  var light = "rgb("+pdRandom(lran,loff)+","+pdRandom(lran,loff)+","+pdRandom(lran,loff)+")";
  var darky = "rgb("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+")";
  var menuy = "rgba("+pdRandom(dran,doff)+","+pdRandom(dran,doff)+","+pdRandom(dran,doff)+",0.3)";
  $("body").css(
    {
      backgroundColor: darky,
      color: light
    });
  $("#menubg").css(
  {
    backgroundColor: menuy 
  });
}


var whichone = 0;

function funImage(){
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
  $("#rot img").rotate({animateTo: ang,duration: dur});
  if (whichone==0) {whichone=1} else {whichone=0}
  setTimeout(function(){$("#rot img").attr('src', imgArray[whichone])},dur/4);
}

