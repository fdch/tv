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
$("#content").load( "bio");
});
$(".works").mouseover(function() {
$("#content").load( "work");
});
$(".code, .blog").click(function() {
$("#main").fadeOut(300);
});
$(".video").mouseover(function() {
$("#content").load( "video");
});
$(".games").mouseover(function() {
$("#content").load( "games");
});
$(".social").mouseover(function() {
$("#content").load( "social");
});
$(".contacto").mouseover(function() {
$("#content").load( "contact");
});
$("#english").mouseover(function() {
$(".spa").hide(), $(".eng").show()
});
$("#spanish").mouseover(function() {
$(".eng").hide(), $(".spa").show()
}); 
