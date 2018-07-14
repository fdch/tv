
/////////////////////////////////           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

function mainCV() {
  if(!htmlTag)   htmlTag   = document.getElementsByTagName('html')[0];
  htmlTag.style.fontFamily = fonts[2];

  if(!bodyTag)   bodyTag   = document.getElementsByTagName('body')[0];
  if(!headerTag) headerTag = document.getElementsByTagName('header');
  if(!mainTag)   mainTag   = document.getElementsByTagName('main')[0];
  if(!footerTag) footerTag = document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');  
  headerTag[0].setAttribute('onclick',"displayCV(\'reset\');");
  resized();
  mainBack = document.createAttribute('style');
  mainBack.value = backImg+"width:"+w+"px;height:"+h+"px;";
  mainTag.setAttributeNode(mainBack);
      
  randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );

  var check = 0;
  if (check=loadAll(allGS)) {
    setTimeout(function(){
      loadCV();
    }, 3000);
  }
}