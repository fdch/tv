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

  var rotImgTag = makeRot("menu", header[0], rotImg);

  makeMenu(mitem,header[0],"loader");
  
  randomColor(color_preset["high"]);
  
  setInterval( function(){ funImage(rotImgTag, rotImg) }, t);
  
  $("h1").click(function() {
    window.open(url, "_top")
  });

  $("#menu").click(function() { 
    randomColor( color_preset["high"] );
    funImage(rotImgTag, rotImg);
  });

  $("#menu > img" ).click(function() { 
    randomVideo();
    randomColor(color_preset["high"]);
    funImage(rotImgTag, rotImg);
  });

  $("footer").hide()//.append(footer.join(tilde));
  
  makeBackVideo("backvideo", "body");

});