
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

  $("main article").append([
  	"<section id=personal>"       + tag("header",tag("h4","Personal Information"))+"</section>",
  	"<section id=teachings>"      + tag("header",tag("h4","Teaching Experience")) +"</section>",
  	"<section id=awards>"         + tag("header",tag("h4","Awards"))              +"</section>",
  	"<section id=unworks>"        + tag("header",tag("h4","List of Unworks~"))     +"</section>",
  	"<section id=collaborations>" + tag("header",tag("h4","Collaborations"))      +"</section>",
  	"<section id=performances>"   + tag("header",tag("h4","Performances"))        +"</section>"
  	])

  getPersonal();
  getTeachings();
  getAwards();
  getUnworks();
  getCollabs();
  getPerformances();

  toggleIt($("#personal header h4"),$("#personal ul"));
  toggleIt($("#teachings header h4"),$("#teachings ul"));
  toggleIt($("#awards header h4"),$("#awards ul"));
  toggleIt($("#unworks header h4"),$("#unworks ul"));
  toggleIt($("#collaborations header h4"),$("#collaborations ul"));
  toggleIt($("#performances header h4"),$("#performances ul"));

  $("footer").append(linkify("back~", url));
});