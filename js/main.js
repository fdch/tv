//main function on startup
$(function() {
	var w = $(window).width();
	var h = $(window).height();
	var content = w * 0.95;
	
	languagesMenu();
	layoutSetup(w, h);
	
});

//loads the id of the element passed on the content div 
function fdLoad(x) {
	myID = x.id;
	$("#content").load(myID)
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