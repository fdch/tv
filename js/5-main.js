///////////////////////////\\\\\\\\\    ////////////////////  \\\\\\\\\\    //
//////           //////////        \\   //////////            //////////    //
//////           //////////         \\  //////////            //////////    //
//////////////   //////////         //  //////////            ////////////////
//////           //////////        //   //////////            //////////    //
//////           //////////       //    //////////            //////////    // 
//////           //////////////////     ////////////////////  //////////    //
function main() {
  if(!htmlTag)  htmlTag  =document.getElementsByTagName('html')[0];
  randomFont(htmlTag);
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
    navigaTag = element('nav');
    headerTag[0].appendChild(navigaTag);
    navSelTag = makeDropdowns("navtag", navigaTag, mitem);
  }
  //if(!navigaTag)navigaTag=makeMenu(mitem, headerTag[0] , "display");
  if(!rotImgTag)rotImgTag=makeRot(rotImg, headerTag[0]);
  
  loadAll(allGS);

  if(!footerTag)footerTag=document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');
  resized();
  iframeTag.style.background = '';  
}