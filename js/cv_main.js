
//////////////////////////////  /           ///////////
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

  if(!h1titlTag) h1titlTag = document.getElementsByTagName('h1')[0];
  h1titlTag.setAttribute('onclick',"display(\'cv\');");
      
  randomColor(color_preset["mid"], [bodyTag, headerTag[0]] );

  if (!loading) 
    while (!loaded) { 
    if (!loaded) loaded = loadAll(allGS);
      else if (loaded) break; 
    }
  var article = resetDisplayCV(x);
  for (var i in allCVsections) displayCV(allCVsections[i], article);
}