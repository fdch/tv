function makeMenu(input, target) {

  var navTag = document.createElement('nav');
  
  for (var i=1; i < input.length; i++) {
    let item = input[i].replace(/_/g," ").replace(/-/g," ");
    let btn = document.createElement('button'); 
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', input[i]);
    if(1==i) btn.setAttribute('autofocus','');
    btn.setAttribute('onclick', "menuClick(this,event);")
    btn.setAttribute('ontouchstart', "menuTouchStart(this,event);");
    let btnTxt = document.createTextNode(item);
    btn.appendChild(btnTxt);
    navTag.appendChild(btn);
  }
  navTag.setAttribute('onclick',"navClicker();");

  target.appendChild(navTag);

  return navTag;
}
function makeRot(input, target){ 
  var imgTag = document.createElement('img');

  imgTag.setAttribute('src', input[0]);
  imgTag.setAttribute('id', input[3]);
  imgTag.setAttribute('width', "30");
  imgTag.setAttribute('style', input[2]);
  imgTag.setAttribute('title', input[4]);
  imgTag.setAttribute('onclick', input[5]);
  
  target.insertAdjacentElement('afterbegin', imgTag);

  return imgTag;
}
function makeBackVideo(id, target, source, loading) {
  iframeTag = document.createElement('iframe');
  iframeTag.setAttribute('id', id);
  iframeTag.setAttribute('src', source);
  iframeTag.style.background = loading;
  target.appendChild(iframeTag);
  return iframeTag;
}
function makeDropdowns(id,target,list) {
  let labelTag = document.createElement('label');
  labelTag.setAttribute('for',id);
  let labelText = document.createTextNode(id+": ");
  labelTag.appendChild(labelText);

  let selectTag = document.createElement('select');
  selectTag.setAttribute('id',id);
  selectTag.setAttribute('name',id);
  selectTag.setAttribute('onchange', 'getValue(this)');

  var thelist = shuffleArray(list);
  
  for (let i in thelist) {
    let val = thelist[i];
    let elemTxt = document.createTextNode(val);
    let elemTag = document.createElement('option');
    elemTag.setAttribute('value', val);
    elemTag.appendChild(elemTxt);
    selectTag.appendChild(elemTag);
  }
  target.appendChild(labelTag);
  target.appendChild(selectTag);
}