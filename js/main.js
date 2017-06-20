
//establishes the language menu behavior
function languagesMenu() {
	//default to english
	$(".spa").css("display","none");
	//toggle behavior
	$("#english").mouseover(function() {
		$(".spa").hide(), $(".eng").show()
	});
	$("#spanish").mouseover(function() {
		$(".eng").hide(), $(".spa").show()
	});
}
//reset the layout
function layoutSetup() {
	var w = $(window).width();
	var h = $(window).height();
	if (w >= 600) {
		w = w*0.5;
	}
	$("article").width(w);
	$("article img").width(w);
	
	languagesMenu();
}
//loads the id of the element passed on the content div 
function fdLoadID(x) {
	myID = x.id;
	$("#content").load(myID,layoutSetup());
}

function fdLoad(x) {
	$("#content").load(x, layoutSetup());
}





//TODO for work
$(".duotri").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .orchestra, .inprogress").fadeOut(300);
$(".duotrio").fadeIn(300);
});
$(".inprogresso").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .orchestra, .duotrio").fadeOut(300);
$(".inprogress").fadeIn(300);
});
$(".multimedi").click(function() {
$(".ensemble, .solo, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".multimedia").fadeIn(300);
});
$(".videoar").click(function() {
$(".multimedia, .ensemble, .solo, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".videoart").fadeIn(300);
});
$(".sol").click(function() {
$(".multimedia, .ensemble, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".solo").fadeIn(300);
});
$(".ensembl").click(function() {
$(".multimedia, .solo, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".ensemble").fadeIn(300);
});
$(".orchestr").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .duotrio, .inprogress").fadeOut(300);
$(".orchestra").fadeIn(300);
});

////////////
//// Please be extra careful when you edit this file
////////////
var w, h;
////////////
//// The menu (keep items <= 6 chars long)
////////////
var mitem = ["bio", "work", "social", "games", "blog", "video", "code", "contact"];
var lang = "<div id=languages><span class=menulink-left><span id=english ><spa class=eng>[</spa>en<spa class=eng>]</spa></span>&nbsp;|&nbsp;<span id=spanish ><spa class=spa >[</spa>es<spa class=spa >]</span></span></div>"
//<img class=fd src="img/fd.png" title=fd/></img>
function makeMenu(m, len, mitem, type) {
  var i,j;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"loader(" + mitem[i] + ")\"></"+type+">");
  }
  m.append("</nav>");
}

function loader(x) {
  switch (x) {
    case "blog" : window.open(blogurl);
    break;
    case "video" : window.open(videourl);;
    break;
    case "code" : window.open(repo); ;
    break;
    default:
     document.getElementById('content').load(x);
  }
}

$(function(){
	$("head").append(meta);
	$("body").append([lang,titleData,analytics]);
	makeMenu($("#menu"), mitem.length, mitem, "span");
	//$(".fd").css("opacity", "0");
	$("#content").load("featured", function() {
	  $(this).delay(30).animate({opacity: 1}, 100);
	  $("iframe").load(function() {
	    $(this).width(w*0.98);
	    $(this).height(h*0.98);
	});
	});
	
	$("#languages").load("lang");
});
