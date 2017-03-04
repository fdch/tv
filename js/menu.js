function fdLoad(x) {
          document.getElementById('content').innerHTML = loadPage('content/' + x + '.html');
}
function loadPage(href) {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", href, false);
          xmlhttp.send();
          return xmlhttp.responseText;
}


$(".tst").mouseover(function() {
$("#content")load( "content/tst.html");
});
$(".bio").mouseover(function() {
$("#content").load( "bio.html");
});
$(".works").mouseover(function() {
$("#content").load( "works.html");
});
$(".code, .blog").click(function() {
$("#main").fadeOut(300);
});
$(".video").mouseover(function() {
$("#content").load( "video.html");
});
$(".games").mouseover(function() {
$("#content").load( "games.html");
});
$(".social").mouseover(function() {
$("#content").load( "social.html");
});
$(".contacto").mouseover(function() {
$("#content").load( "contacto.html");
});
$("#english").mouseover(function() {
$(".spa").hide(), $(".eng").show()
});
$("#spanish").mouseover(function() {
$(".eng").hide(), $(".spa").show()
}); 
