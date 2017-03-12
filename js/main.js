//loads the id of the element passed on the content div 
function fdLoadID(x) {
	myID = x.id;
	$("#content").load(myID);
	languagesMenu();
	layoutSetup();
	adjustIframes();
}

function fdLoad(x) {
	$("#content").load(x);
	languagesMenu();
	layoutSetup();
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
function layoutSetup() {
	var w = $(window).width();
	var h = $(window).height();
	if (w >= 600) {
		w = w*0.5;
	}
	$("article").width(w);
	$("article img").width(w);
}
function adjustIframes()
{
  $('iframe').each(function(){
    var
    $this       = $(this),
    proportion  = $this.data( 'proportion' ),
    w           = $this.attr('width'),
    actual_w    = $this.width();
    
    if ( ! proportion )
    {
        proportion = $this.attr('height') / w;
        $this.data( 'proportion', proportion );
    }
  
    if ( actual_w != w )
    {
        $this.css( 'height', Math.round( actual_w * proportion ) + 'px' );
    }
  });
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
