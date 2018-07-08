
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
  
  $("h1, h2").click(function() {window.open(cv, "_top")});

  $("main").html("").append("<article></article>");
  $("article, #menubg").width(articleWidth(maxWidth));

  $.each(allCVsections, function(index,value){
    var theid = makeID(value);
    var target = theid+"-ul";
    var section = [
      "<section id=\""+theid+"\" >",
      "<header onclick=\"toggleIt($(\'#"+target+"\'))\">",
      tag("h3",value),
      "</header>",
      "</section>"
    ]
    $("main article").append(section.join(""));
    cvLoader(index,target);
  });
  $("footer").hide();// $("footer").append(linkify("back~", url));
});