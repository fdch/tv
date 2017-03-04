void function fdLoad(x) {
var innerContent = loadPage(x);
$("#content").html("");
$("#content").html("'" + innerContent + "'");
}
function loadPage(href) {
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", href, false);
          xmlhttp.send();
          return xmlhttp.responseText;
}
//main function on startup
void function fdMain() {

	var w = $(window).width();
	var h = $(window).height();
	var content = w * 0.9;

	$("#english").mouseover(function() {
		$(".spa").hide(), $(".eng").show()
	});
	$("#spanish").mouseover(function() {
		$(".eng").hide(), $(".spa").show()
	}); 


//adjusting margins
	$("#content").width(content);
	$(".score-object").width(content).height(content * 0.7);
	$(".audio-object").width(content);
	$("#content img").width(w * 0.25).css("margin", 0);
	$(".video-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.4);
	$(".audio-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.15);
	$(".soundcloud").width(content);
	$(".image-window img").width(w * 0.2);
	
	
});
