////////////
//// Please be extra careful when you edit this file
////////////
var w;
var h;
var t = 4333;
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
    m.append("<"+type+" class=menuitem onClick=\"loader(\'content/" + mitem[i] + "\')\"> " + mitem[i].replace(/_/g," ").replace(/-/g," ") + " </"+type+">");
  }
  m.append("</nav>");
}
var workMenu = new Array();
var bioArray = new Array();

function getContent(x, arr) {
  jQuery.get(x, function(data){
    lines = data.split("\n");
    $.each(lines, function(n, elem) {
      arr.push(elem);
    });
  });
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
      $("#submenu").html("");
      makeMenu($('#submenu'), workMenu.length, workMenu, "span");
      break;
    case "content/bio":
      $("#submenu").html("");;
      $("#content").html("").append([bioOpen, "<p>"+bioArray.join("")+"</p>", bioClose]);
      break;
    default:
      $("#submenu").html("");
      $('#content').load(x);
      $('article').width(w).height(h);
  }
}

function randomMargin(t) {
  $(".menuitem").animate({marginRigh:5 * Math.random() + 3},t);
}
var vstyle = "style={position: fixed\;top: 50%\;left: 50%\;min-width: 100%\;min-height: 100%\;width: auto\;height: auto\;z-index: -100\;transform: translate(-50%, -50%)\;}"
var video = "<video "+vstyle+" src=\'"+featURL+"\' autoplay />";


$(function(){
    w = Math.max( $(window).width(), window.innerWidth);
  h = Math.max( $(window).height(), window.innerHeight);
  $("head").append(meta);
  $("body").append([lang,titleData,analytics, video]);
  makeMenu($("#menu"), mitem.length, mitem, "span");
  getContent("worklist", workMenu);
  getContent("cv/txt/bio-english.txt", bioArray);
  
  $("#content").append(featured);
  setInterval(randomMargin(t),t);
});
