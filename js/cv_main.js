
/////////////////////////////////           ///////////
//////////                       /         ///////////
//////////                        /       ///////////
//////////  this is the CV script  /     ///////////
//////////                          /   ///////////
//////////                           / ///////////
//////////////////////////////        ///////////

function mainCV() {
  if(!htmlTag)   htmlTag   = document.getElementsByTagName('html')[0];
  htmlTag.setAttribute('style', "font-family:"+fonts[2]+";");

  if(!bodyTag)   bodyTag   = document.getElementsByTagName('body')[0];
  if(!headerTag) headerTag = document.getElementsByTagName('header');
  if(!mainTag)   mainTag   = document.getElementsByTagName('main')[0];
  if(!footerTag) footerTag = document.getElementsByTagName('footer')[0];
  footerTag.setAttribute('style', 'display:none');  
  headerTag[0].setAttribute('onclick',"displayCV(\'reset\');");
  mainBack = document.createAttribute('style');
  mainBack.value = "background-image:url(\'"+loadingUrl+"\'');";
  mainTag.setAttributeNode(mainBack);
      
  randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );

  var check = 0;
  if (check=loadAll(allGS)) {
    setTimeout(function(){
      loadCV();
    }, 3000);
  }
  // loadAll(allGS,loadCV);
}

function loadCV() {
  mainBack.value='';
  for (var i in allCVsections)
    displayCV(allCVsections[i]);
}