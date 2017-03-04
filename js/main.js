//main function on startup
$(function() {
	var w = $(window).width();
	var h = $(window).height();
	var content = w * 0.9;
	
	languagesMenu();
	layoutSetup(w, h);
	
});

//loads the id of the element passed on the content div 
function fdLoad(x) {
	var isAnchor = x.element.is("a");
	if(isAnchor) {
		var anchorID = x.getElementByTagName("a");
		$("#content").load("content/" + anchorID + ".html");
	} else {
		myID = x.id;
		$("#content").load(myID);
	}
}

//establishes the language menu behavior
function languagesMenu() {
	//default to english
	$(".spa").css("display","none");
	//toggle behavior
	$("#english").mouseover(function() {
		$(".spa").hide(), $(".eng").show()
	});
	$("#spanish").mouseover(function() {
		$(".eng").hide(), $(".spa").show()
	});
}


//reset the layout
function layoutSetup(w, h) {
	$("#content").width(content);
	//$(".score-object").width(content).height(content * 0.7);
	//$(".audio-object").width(content);
	$("#content img").width(w * 0.25).css("margin", 0);
	//$(".video-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.4);
	//$(".audio-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.15);
	//$(".soundcloud").width(content);
	$(".image-window img").width(w * 0.2);
}


//TODO for work
$(".duotri").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .orchestra, .inprogress").fadeOut(300);
$(".duotrio").fadeIn(300);
});
$(".inprogresso").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .orchestra, .duotrio").fadeOut(300);
$(".inprogress").fadeIn(300);
});
$(".multimedi").click(function() {
$(".ensemble, .solo, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".multimedia").fadeIn(300);
});
$(".videoar").click(function() {
$(".multimedia, .ensemble, .solo, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".videoart").fadeIn(300);
});
$(".sol").click(function() {
$(".multimedia, .ensemble, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".solo").fadeIn(300);
});
$(".ensembl").click(function() {
$(".multimedia, .solo, .videoart, .orchestra, .duotrio, .inprogress").fadeOut(300);
$(".ensemble").fadeIn(300);
});
$(".orchestr").click(function() {
$(".multimedia, .ensemble, .solo, .videoart, .duotrio, .inprogress").fadeOut(300);
$(".orchestra").fadeIn(300);
});
