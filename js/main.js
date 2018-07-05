/////////////////////////////////////// main
$(function(){
  $("html").css("font-family",fonts[pdRandom(fonts.length,0)]);
  
  $("body").append("<iframe id=backvideo src=\'"+featURL[pdRandom(3,0)]+"\'></iframe>");
  
  makeMenu(
    $("#menu"),
    mitem.length,
    mitem,
    "span"
  );
  
  $.get(repo+'cv/txt/bio-english.txt', function(data){ bioEnglish = data });
  $.get(repo+'cv/txt/bio-spanish.txt', function(data){ bioSpanish = data });

  randomColor(color_preset["high"]);
  
  setInterval(
    function(){
      funImage()
    }, t);
  
  $("#menu").click(function() { 
    randomColor( color_preset["high"] );
    funImage();
  });

  $("#rot" ).click(function() { 
    randomVideo();
    funImage();
  });
  $("footer").append([
    linkify("blog",blog,1),
    linkify("code",repo,1),
    linkify("video",video,1)
    ]);
});
/////////////////////////////////////// main