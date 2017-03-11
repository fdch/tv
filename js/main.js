//main function on startup
$(function() {
	var w = $(window).width();
	var h = $(window).height();
	languagesMenu();
	layoutSetup(w, h);
});

//loads the id of the element passed on the content div 
function fdLoadID(x) {
	myID = x.id;
	$("#content").load(myID, languagesMenu());
}

function fdLoad(x) {
	$("#content").load(x);
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
	if (w > 500) {
		$("article").width(w*0.8).css("left",(w*0.1));
	} else {
		$("article").width(w);
	}
	$("img").width(w * 0.4);
	$("object, audio, video, iframe").attr("width",w).css("width",w).width(w);
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
