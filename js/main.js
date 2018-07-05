/////////////////////////////////////// main
$(function(){
  $("html").css("font-family",fonts[pdRandom(fonts.length,0)]);
  
  $("body").append([
    titleData,
    analytics, 
    "<iframe id=backvideo src=\'"+featURL[pdRandom(3,0)]+"\'></iframe>"
  ]);
  
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
});
/////////////////////////////////////// main