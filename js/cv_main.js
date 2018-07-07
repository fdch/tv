
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
    var target = theid+"-ul";
    var section = [
      "<section id=\""+theid+"\" >",
      "<header onclick=\"toggleIt($(\'#"+target+"\'))\">",
      tag("h3",value),
      "</header>",
      "</section>"
    ]
    
    $("main article").append(section.join(""));

    switch(index){
      case 0:
        getPersonal(target);
        break;
      case 1:
        getTeachings(target);
        break;
      case 2:
        getAwards(target);
        break;
      case 3:
        getUnworks(target);
        break;
      case 4:
        getCollaborations(target);
        break;
      case 5:
        getPerformances(target);
        break;
      default:
      break;
    }
  });
  $("footer").hide();// $("footer").append(linkify("back~", url));
});