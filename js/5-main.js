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
  if(!htmlTag)   htmlTag   = document.getElementsByTagName('html')[0];
  randomFont(htmlTag);  
  if(!bodyTag)   bodyTag   = document.getElementsByTagName('body')[0];
  if(!headerTag) headerTag = document.getElementsByTagName('header');
  if(!mainTag)   mainTag   = document.getElementsByTagName('main')[0];
  if(!footerTag) footerTag = document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');  

  if(!h1titlTag) h1titlTag = document.getElementsByTagName('h1')[0];
  h1titlTag.setAttribute('onclick',"display(\'init\');");
  
  var hH = headerTag[0].clientHeight;
  var hW = headerTag[0].clientWidth;
  var navMax = hW-(hH/2);
  var imgMax = hH/2;
  console.log("navmax: "+navmax+" imgmax: "+imgmax);

  if(!navigaTag) navigaTag = makeMenu(mitem, headerTag[0] , "display", navMax);
  if(!iframeTag) iframeTag = makeBackVideo("backvideo", bodyTag, featURL[pdRandom(2)]);
  if(!rotImgTag) rotImgTag = makeRot(rotImg, headerTag[0], imgMax);
  
  randomColor(color_preset["high"], [bodyTag, headerTag[0]] );

  setInterval( function(){ funImage(rotImg) }, t);

  if (!loading) 
    while (!loaded) { 
    if (!loaded) loaded = loadAll(allGS);
      else if (loaded) break; 
    }
}