function makeMenu(input, target, funcName) {

  var navTag = document.createElement('nav');
  target.appendChild(navTag);

  for (var i = 0;i < input.length; i++) {
    var item = input[i].replace(/_/g," ").replace(/-/g," ");
    var spanTag = document.createElement('span'); 
    navTag.appendChild(spanTag);
    var spanClass = document.createAttribute('class');
    spanClass.value = "menuitem";
    var spanOnclick = document.createAttribute('onclick');
    spanOnclick.value = funcName+"(\'"+input[i]+"\')";
    var spanText = document.createTextNode(item);
    var attNodes = [spanClass,spanOnclick];
    for (var k in attNodes) { spanTag.setAttributeNode(attNodes[k]); };
    spanTag.appendChild(spanText);
  }

  var navClick = document.createAttribute('onclick');
  navClick.value = "(function(){randomColor(color_preset['high'],[bodyTag,headerTag[0]]),funImage(rotImg);})()";
  navTag.setAttributeNode(navClick);

  return navTag;
}

function makeRot(input, target){ 
  var imgTag = document.createElement('img');

  var imgSrc = document.createAttribute('src');
  imgSrc.value = input[0];

  var imgId = document.createAttribute('id');
  imgId.value = input[4];

  var imgWidth = document.createAttribute('width');
  imgWidth.value = input[2];

  var imgStyle = document.createAttribute('style');
  imgStyle.value = input[3];

  var imgClick = document.createAttribute('onclick');
  imgClick.value = "imgClicker(this);";

  var attributes = [imgSrc, imgWidth, imgStyle, imgClick, imgId];
   
  target.appendChild(imgTag);

  for (var i in attributes) {
    imgTag.setAttributeNode(attributes[i]);
  }

  return imgTag;
}

function makeBackVideo(input, target, source) {
  iframeTag = document.createElement('iframe');
  var iframeId = document.createAttribute('id');
  iframeSrc = document.createAttribute('src');
  iframeId.value = input;
  iframeSrc.value = source;

  target.appendChild(iframeTag);
  iframeTag.setAttributeNode(iframeId);
  iframeTag.setAttributeNode(iframeSrc);
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
  selectTag.setAttribute('onclick', 'getValue(this)');

  var thelist = shuffleArray(list);
  for (let i in thelist) {
    //makeValue([thelist[i], 'option', 'value'],selectTag);
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


