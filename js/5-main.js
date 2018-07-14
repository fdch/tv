///////////////////////////\\\\\\\\\  ////////////////////  \\\\\\\\\\    ///
//////           //////////        \\ //////////            //////////    ///
//////           //////////         \\//////////            //////////    ///
//////////////   //////////         ////////////            /////////////////
//////           //////////        // //////////            //////////    ///
//////           //////////       //  //////////            //////////    /// 
//////           //////////////////   ////////////////////  //////////    ///
function main() {
  userLang = navigator.language || navigator.userLanguage; 
  //console.log("The language is: " + userLang);
  if(!htmlTag)  htmlTag  =document.getElementsByTagName('html')[0];
  htmlTag.style.fontFamily = fonts[2];
  if(!headerTag)headerTag=document.getElementsByTagName('header');
  resized();
  if(!mainTag)  mainTag  =document.getElementsByTagName('main')[0];
  mainTag.style.background = backImg;

  if(!bodyTag)  bodyTag  =document.getElementsByTagName('body')[0];
  bodyTag.setAttribute('onresize', 'resized()');
  if(!iframeTag){
    iframeTag=makeBackVideo("bkvid",bodyTag,featURL[pdRandom(2)],backImg);
  }
  randomColor(color_preset["high"], [bodyTag, headerTag[0]] );
  setInterval( function(){ funImage(rotImg) }, t);
  if(!h1titlTag)h1titlTag=document.getElementsByTagName('h1')[0];
  h1titlTag.setAttribute('onclick',"display(\'init\');");
  
  if(!navigaTag) {
    navigaTag = document.getElementById('navtag');
   // headerTag[0].appendChild(navigaTag);
    navSelTag = makeDropdowns("navseltag", navigaTag, mitem, 'display(this)');
    navSelTag.autofocus = true;
  }
  //if(!navigaTag)navigaTag=makeMenu(mitem, headerTag[0] , "display");
  imgDivTag = document.getElementById('imgdiv');
  if(!rotImgTag)rotImgTag=makeRot(rotImg, imgDivTag);

  loadAll(allGS);
  if(!footerTag)footerTag=document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');
  resized();
  iframeTag.style.background = '';  
}