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
  mainTag = document.getElementsByTagName('main')[0];
  bodyTag = document.getElementsByTagName('body')[0];
  headerTag = document.getElementsByTagName('header');
  footerTag = document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');  

  var h1Tag = document.getElementsByTagName('h1')[0];
  h1Tag.setAttribute('onclick',"display(\'init\');");
  
  navigaTag = makeMenu(mitem, headerTag[0] , "display");
  iframeTag = makeBackVideo("backvideo", bodyTag, featURL[pdRandom(2)]);
  rotImgTag = makeRot(rotImg, bodyTag);
  
  randomColor(color_preset["high"], [bodyTag,headerTag[0]]);

  setInterval( function(){ funImage(rotImg) }, t);
 
  if (!loading) 
    while (!loaded) { 
    if (loaded==0) loaded = loadAll(allGS);
      else if (loaded==1) break; 
    }
});