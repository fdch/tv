
//////////////////////////////  /           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////
$(function(){
  $("html").css("font-family",fonts[2]); 
  
  randomColor(color_preset["mid"]); 
  
  $("h1, h2").click(function() {
    window.open(cvurl, "_top")
  });

  $("main").html("").append("<article></article>");

  $("article, #menubg").width(articleWidth(maxWidth));

  var allsections = ["Personal", "Teachings", "Awards", "Unworks", "Collaborations", "Performances"];

  for (var i in allsections) {
    window["get"+allsections[i]];
    var theid = allsections[i].toLowerCaps();
    $("main article").append(
      "<section id="+theid+
      "<header onclick=\"function(){$(\"#"+theid+" > ul\").toggle()}\""+
      "</section>");
  }

  $("footer").append(linkify("back~", url));
});