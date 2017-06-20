////////////
//// Please be extra careful when you edit this file
////////////
var w, h;
////////////
//// The menu (keep items <= 6 chars long)
////////////
var mitem = ["bio", "work", "social", "games", "blog", "video", "code", "contact"];
var lang = "<div id=languages><span class=menulink-left><span id=english ><spa class=eng>[</spa>en<spa class=eng>]</spa></span>  <span id=spanish ><spa class=spa >[</spa>es<spa class=spa >]</span></span></div>";
//<img class=fd src="img/fd.png" title=fd/></img>
function makeMenu(m, len, mitem, type) {
  var i;
  m.append("<nav>");
  for (i = 0;i < len; i++) {
    m.append("<"+type+" class=menuitem onClick=\"loader(\'content/" + mitem[i] + "\')\"> " + mitem[i] + " </"+type+">");
  }
  m.append("</nav>");
}
var aMenu = new Array();

function getContent(x) {
  jQuery.get(x, function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      aMenu.push(elem);
    });
  });
  if (aMenu.length > 0) return 1;
  else return 0;
}

function loader(x) {
  switch (x) {
    case "content/blog": 
      window.open(blogurl);
      break;
    case "content/video":
      window.open(videourl);
      break;
    case "content/code":
      window.open(repo);
      break;
    case "content/work":
      if(getContent("content/worklist")) {
        $('#content').html("<div id=worklist></div><div id=workload></div>");
        makeMenu($('#worklist'), aMenu.length, aMenu, "li");
        aMenu = [];
      }
      break;
    default:
      $('#content').load(x);
      $('article').width(w).height(h);
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
