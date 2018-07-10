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

function tag(tag,text){
  return "<"+tag+">"+text+"</"+tag+">";
}

function tagOpen(tag,text,target){
  return "<"+tag+onclickify("window.open",target,"_top")+">"+text+"</"+tag+">";
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

function funImage(input,target){
  dur = Math.random()*5000;
  ang = Math.random()*360*2-360;
  // input.rotate({animateTo: ang,duration: dur});
  if (whichone==0) {whichone=1} else {whichone=0}
  setTimeout(function(){
    input.attr('src', target[whichone])
  },dur/4);
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
