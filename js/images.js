var createImage = function(src, title) {
  var img   = new Image();
  img.src   = src;
  img.alt   = title;
  img.title = title;
  return img; 
};

// array of images
var images = [];
var imgpath = "../img/people/";
$(function() {

$.get('../updates/people-list', function(data){
  lines = data.split("\n");
  var i;
  for (i = 0; i < lines.length; i++) {
    images.push(createImage(imgpath+lines[i], lines[i]));
  }
});
var inr=0;
$("img").hover(setInterval(
  function() {
    this.setAttribute('src', images[i].src);
    var w = images[i].width;
    var h = images[i].height;
    var r = w/h;
    var title = images[i].title;
    this.setAttribute('width',200);
    //this.setAttribute('height',w*r);
  }, function() {
    inr++;
  },100));
});
