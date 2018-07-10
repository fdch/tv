////////////////     ///// \\           ///   ////       /// 
/////////           /////  \\        ///      ////       ///
////////           /////   \\     ///         ////       ///
///////           /////    \\  ///            ////       ///
///////////      /////    //  \\\             //////////////
/////           /////   //      \\\           ////       ///
////           /////  //          \\\         ////       ///
///           ////////              \\\       ////       ///
//           ///////                  \\\     ////       ///
$(function(){
  htmlTag = document.getElementsByTagName('html')[0];
  randomFont(htmlTag);  
  bodyTag = document.getElementsByTagName('body')[0];
  makeBackVideo("backvideo", bodyTag, featURL[pdRandom(2)]);
  headerTag = document.getElementsByTagName('header');
  var h1Tag = document.getElementsByTagName('h1')[0];
  footerTag = document.getElementsByTagName('footer')[0];
  var rotImgTag = makeRot(rotImg, bodyTag);
  navTag = makeMenu(mitem, headerTag[0] , "layout");
  randomColor(color_preset["high"], [bodyTag,headerTag[0]]);
  var footerDisplay = document.createAttribute('style');
  footerDisplay.value = "display:none";
  footerTag.setAttributeNode(footerDisplay);  
  setInterval( function(){ funImage(rotImg) }, t);
  var h1Click = document.createAttribute('onclick');
  h1Click.value = "window.open(\'"+url+"\', \'_top\');";
  h1Tag.setAttributeNode(h1Click);
  mainTag = document.getElementsByTagName('main')[0];
  if (!loading) 
    while (!loaded) { 
    if (loaded==0) loaded = loadAll(allGS);
      else if (loaded==1) break; 
    }





});