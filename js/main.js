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
  htmlTag = document.getElementsByTagName('html')[0];

  var htmlStyle = document.createAttribute('style');
  htmlStyle.value = "font-family:"+fonts[pdRandom(fonts.length,0)];
  htmlTag.setAttributeNode(htmlStyle);
  
  bodyTag = document.getElementsByTagName('body')[0];
  headerTag = document.getElementsByTagName('header')[0];
  var h1Tag = document.getElementsByTagName('h1')[0];
  footerTag = document.getElementsByTagName('footer')[0];

  var rotImgTagFunc = function() {
    randomVideo();
    randomColor(color_preset["high"]);
    funImage(rotImgTag, rotImg);
  }


  var rotImgTag = makeRot(rotImg, bodyTag, rotImgTagFunc);
  var navTag = makeMenu(mitem, headerTag , "loader");

  randomColor(color_preset["high"]);
  
  setInterval( function(){ funImage(rotImgTag, rotImg) }, t);
  

  var h1Click = document.createAttribute('onclick');
  h1Click.value = "window.open("+url+", \'_top\')";
  h1Tag.setAttributeNode(h1Click);

  navTag.click(function() { 
    randomColor( color_preset["high"] );
    funImage(rotImgTag, rotImg);
  });

  rotImgTag.click(function() { 
    
  });

  var footerDisplay = document.createAttribute('style');
  footerDisplay.value = "display:none";
  footerTag.setAttributeNode(footerDisplay);

  makeBackVideo("backvideo", bodyTag, featURL[pdRandom(2)]);
});