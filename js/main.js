////////////////    ///// \\            ///    ////       // 
/////////          /////  \\         ///       ////       //
////////          /////   \\      ///          ////       //
///////          /////    \\   ///             ////       //
///////////     /////    //   \\\              /////////////
/////          /////   //       \\\            ////       //
////          /////  //           \\\          ////       //
///          ////////               \\\        ////       //
//          ///////                   \\\      ////       //
$(function(){

  $("html").css("font-family",fonts[pdRandom(fonts.length,0)]);
  
  var header = document.getElementsByTagName('header');

  makeRot("menu", header[0], rotImg);

  makeMenu(header[0],mitem.length,mitem,"loader");
  
  randomColor(color_preset["high"]);
  
  setInterval( function(){ funImage() }, t);
  
  $("h1").click(function() {
    window.open(url, "_top")
  });

  $("#menu").click(function() { 
    randomColor( color_preset["high"] );
    funImage();
  });

  $("#menu > img" ).click(function() { 
    randomVideo();
    randomColor(color_preset["high"]);
    funImage();
  });

  $("footer").hide()//.append(footer.join(tilde));
  
  makeBackVideo("backvideo", "body");

});