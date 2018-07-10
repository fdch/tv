function makeMenu(m, len, mitem, type) {

  var navTag = document.createElement('nav');
  m.appendChild(navTag);

  for (var i = 0;i < len; i++) {
    var item = mitem[i].replace(/_/g," ").replace(/-/g," ");
    var spanTag = document.createElement('span'); 
    navTag.appendChild(spanTag);
    var spanClass = document.createAttribute('class');
    spanClass.value = "menuitem";
    var spanOnclick = document.createAttribute('onclick');
    spanOnclick.value = type+"\'"+mitem[i]+"\'";
    var spanText = document.createTextNode(item);
    var attNodes = [spanClass,spanOnclick];
    for (var k in attNodes) { spanTag.setAttributeNode(attNodes[k]); };
    spanTag.appendChild(spanText);
  }
  
  m.append("</nav>");
}

function makeRot(input, target, image){
  var divTag = document.createElement('div');
  var divId = document.createAttribute('id');
  divId.value = input;
  
  target.appendChild(divTag);
  divTag.setAttributeNode(divId);

  var imgTag = document.createElement('img');
  var imgSrc = document.createAttribute('src');
  imgSrc.value = repo+image[0];
  var imgWidth = document.createAttribute('width');
  imgWidth.value = image[2];

  divTag.appendChild(imgTag);
  imgTag.setAttributeNode(imgWidth);
  imgTag.setAttributeNode(imgSrc);

  return imgTag;
}

function makeBackVideo(input, target) {
  var body = document.getElementsByTagName(target);
  var iframeTag = document.createElement('iframe');
  var iframeId = document.createAttribute('id');
  var iframeSrc = document.createAttribute('src');
  iframeId.value = input;
  iframeSrc.value = featURL[pdRandom(2,0)];

  body[0].appendChild(iframeTag);
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


function makeValue(input,target) {
  var etext = input[0];
  var element = input[1];
  var attribute = input[2];

  var elemTxt = document.createTextNode(etext);
  var elemTag = document.createElement(element);
  var elemAtt = document.createAttribute(attribute);
  elemAtt.value = etext;
 
  target.appendChild(elemTag);
  elemTag.setAttributeNode(elemAtt);
  elemTag.appendChild(elemTxt);
}

function makeWorksForm(formID) {
  var formTag = document.createElement('form');
  var formAttId = document.createAttribute('id');
  formAttId.value = formID;
  var header = document.getElementsByTagName("header");
  header[0].appendChild(formTag);
  
  formTag.setAttributeNode(formAttId);
  return formTag;
}

function makeWorksSubmenu(selectID,formTag,ucats) {
  var labelTag = document.createElement('label');
  var labelAtt = document.createAttribute('for');
  labelAtt.value = selectID;

  var labelText = document.createTextNode(selectID+": ");



  var selectTag = document.createElement('select');
  var selectAtt = document.createAttribute('id');
  var selectNam = document.createAttribute('name');
  selectNam.value = selectID;
  selectAtt.value = selectID;
  var selectClk = document.createAttribute('onclick');
  selectClk.value = "getValue(this)";


  formTag.appendChild(labelTag);
  formTag.appendChild(selectTag);
  selectTag.setAttributeNode(selectAtt);
  selectTag.setAttributeNode(selectClk);
  labelTag.appendChild(labelText);
  labelTag.setAttributeNode(labelAtt);

  var thelist = shuffleArray(ucats);
  jQuery.each(thelist, function(i,v){
    makeValue([v,"option", "value"],selectTag);
  });
}


