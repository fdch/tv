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

  var footer = [
    linkify("blog",blog,1),
    linkify("code",repo,1),
    linkify("video",video,1),
    linkify("audio",scloud,1)
  ]

  $("footer").append(footer.join(" ~ "));
});
/////////////////////////////////////// main