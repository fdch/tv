////////////////     ///// \\           ///   ////       /// 
/////////           /////  \\        ///      ////       ///
////////           /////   \\     ///         ////       ///
///////           /////    \\  ///            ////       ///
///////////      /////    //  \\\             //////////////
/////           /////   //      \\\           ////       ///
////           /////  //          \\\         ////       ///
///           ////////              \\\       ////       ///
//           ///////                  \\\     ////       ///
function main() {
  if(! (htmlTag = document.getElementsByTagName('html')[0]) );
  randomFont(htmlTag);  
  
  if(! (mainTag = document.getElementsByTagName('main')[0]) );
  if(! (bodyTag = document.getElementsByTagName('body')[0]) );
  if(! (headerTag = document.getElementsByTagName('header')) );
  if(! (footerTag = document.getElementsByTagName('footer')[0]) );
  footerTag.setAttribute('style', 'display:none');  

  if(! (h1titlTag = document.getElementsByTagName('h1')[0]) );
  h1titlTag.setAttribute('onclick',"display(\'init\');");
  
  if(! (navigaTag = makeMenu(mitem, headerTag[0] , "display")) );
  if(! (iframeTag = makeBackVideo("backvideo", bodyTag, featURL[pdRandom(2)])) );
  if(! (rotImgTag = makeRot(rotImg, bodyTag)) );
  
  randomColor(color_preset["high"], [bodyTag,headerTag[0]]);

  setInterval( function(){ funImage(rotImg) }, t);
 
  if (!loading) 
    while (!loaded) { 
    if (!loaded) loaded = loadAll(allGS);
      else if (loaded) break; 
    }
}