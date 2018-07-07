
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

  var pageW = width(;
  var maxWidth=700;
  var articleW;

  if (pageW >= maxWidth) {
    articleW = maxWidth
  } else {
    articleW = pageW;
  }

  $("article").width(articleW).height(height());

  $("main article").append([
  	"<section id=personal>"       + tag("header",tag("h4","Personal Information"))+"</section>",
  	"<section id=teachings>"      + tag("header",tag("h4","Teaching Experience")) +"</section>",
  	"<section id=awards>"         + tag("header",tag("h4","Awards"))              +"</section>",
  	"<section id=unworks>"        + tag("header",tag("h4","List of unworks"))     +"</section>",
  	"<section id=collaborations>" + tag("header",tag("h4","Collaborations"))      +"</section>",
  	"<section id=performances>"   + tag("header",tag("h4","Performances"))        +"</section>"
  	])

  $("#personal").append(tag("ul",tag("li",personal.join("</li><li>"))));
    
  getTeachings();
  getAwards();
  getUnworks();
  getCollabs();
  getPerformances();

  $("footer").append(linkify("back~", url));
});