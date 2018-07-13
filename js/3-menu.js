function makeMenu(input, target, funcName) {

  var navTag = document.createElement('nav');
  
  for (var i=1; i < input.length; i++) {
    let item = input[i].replace(/_/g," ").replace(/-/g," ");
    let btn = document.createElement('button'); 
    btn.setAttribute('type', 'button');
    btn.setAttribute('title', input[i]);
    if(1==i) btn.setAttribute('autofocus','');
    btn.setAttribute('onclick', funcName+"(\'"+input[i]+"\')" );
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
function makeBackVideo(id, target, source, st) {
  iframeTag = document.createElement('iframe');
  iframeTag.setAttribute('id', id);
  iframeTag.setAttribute('src', source);
  iframeTag.setAttributeNode(st);
  target.appendChild(iframeTag);
  return iframeTag;
}
function makeInput(input,target) {
  //makeInput([uniqueID, checkbox], parentNode);
  var name = input[0];
  var type = input[1];

  var labelText = document.createTextNode(name);
  
  var inputTag = document.createElement('input');
  var inputType = document.createAttribute('type');
  inputType.value = type;
  var inputId = document.createAttribute('id');
  var inputAtt = document.createAttribute('name');
  inputAtt.value = name;
  inputId.value = name;
  var labelTag = document.createElement('label');
  var labelAtt = document.createAttribute('for');
  labelAtt.value = name;

  target.appendChild(inputTag);
  target.appendChild(labelTag);
  inputTag.setAttributeNode(inputType);
  inputTag.setAttributeNode(inputId);
  labelTag.appendChild(labelText);
  labelTag.setAttributeNode(labelAtt);
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