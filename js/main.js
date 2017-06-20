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
    m.append("<"+type+" class=menuitem onClick=\"loader(\"" + mitem[i] + "\")\"> " + mitem[i] + " </"+type+">");
  }
  m.append("</nav>");
}

function loader(x) {
  switch (x) {
    case "blog" : 
    {
      window.open(blogurl);
    }
    break;
    case "video" :
    {
      window.open(videourl);
    }
    break;
    case "code" :
    {
      window.open(repo);
    }
    break;
    default: 
    {
      $('content').load(x);
      $('article').width(w).height(h);
    };
  }
}

$(function(){
    w = Math.max( $(window).width(), window.innerWidth);
	h = Math.max( $(window).height(), window.innerHeight);
	$("head").append(meta);
	$("body").append([lang,titleData,analytics]);
	makeMenu($("#menu"), mitem.length, mitem, "span");
	//$(".fd").css("opacity", "0");
	loader("featured");
});
