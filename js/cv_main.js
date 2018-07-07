
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
  
  $("h1, h2").click(function() {window.open(cvurl, "_top")});

  $("main").html("").append("<article></article>");
  $("article, #menubg").width(articleWidth(maxWidth));

  var allsections = [
    "Personal",
    "Teachings",
    "Awards",
    "Unworks",
    "Collaborations",
    "Performances"
  ];
  
  $.each(allsections, function(index,value){
    var theid = makeID(value);
    $("main article").append([
      "<section id="+theid+">",
      "<header onclick=\"function(){$(\'#"+theid+" > ul\').toggle()}\">",
      tag("h4",value),
      "</header></section>"
    ]);
  });
  
  getPersonal();
  getTeachings();
  getAwards();
  getUnworks();
  getCollaborations();
  getPerformances();

  $("footer").append(linkify("back~", url));});