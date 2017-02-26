//Get a random number to be margin
function getRandomMargin() {
  var margen = (5 * Math.random()) + 3;
  return margen;
}


///Make Random Margins 
function randomMargenMotionL() {
  $(".menulink-left").delay(4333).animate({
    marginLeft: (getRandomMargin() * -0.5) //up to half of the right margin
  }, 4333);
}

function randomMargenMotionR() {
  $(".menulink").delay(4333).animate({
    marginRight: getRandomMargin()
  }, 4333);
}
function randomMargenWorks() {
  $(".nums").delay(4333).animate({
    marginRight: getRandomMargin()*0.5
  }, 4333*1.3);
}

//Set  Random Margens going every 3000
setInterval(function() {
  randomMargenMotionL();
}, 4333);
setInterval(function() {
  randomMargenMotionR();
}, 4333);
setInterval(function() {
  randomMargenWorks();
}, 4333);
/*
setInterval(bkgColor, 15000)
function bkgColor(e)
	{
	var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	$("html, .blog").animate({
                backgroundColor: col
            }, 15000);
    return true;
	}

//setInterval(function() {
//	$(".intro").get(0).play();
//}, 15000);
///THIS IS EVERY PAGE REFRESH (I guess...)


///Get a Random color
function getRandomColor() {
  var letters = '567567567BBBBBB'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
*/

$(function() {
	
  var w = $(window).width();
  var h = $(window).height();
  var content = w * 0.9;
 
  $( "#props" ).load( "headproperties.html");
  $( "#tail" ).load( "tailproperties.html");
  //$("a").css("color", getRandomColor());
  $("#content").width(content).delay(500).animate({
  	opacity: 1
  	}, 500);
  $(".makenew").css("cursor","pointer").mouseenter(function() {
  		var rwi = Math.floor(content * Math.random() * 0.5);
  		var rhi = Math.floor(content * Math.random() * 0.5);
  		var lim = Math.floor(Math.random()*16) + 1;
  		
    
  		for ( i = 0 ; i < lim; i++){
  		 $("#content").append(document.createTextNode("<span class=makenew style=cursor:pointer><img width=" + rwi + " height=" + rhi + " src=images/codeback.png /></span>" ))
  		 }
  		});
  $(".makenew").click(function() {
  		var rwi = Math.floor(content * Math.random() * 0.5);
  		var rhi = Math.floor(content * Math.random() * 0.5);
  		var lim = Math.floor(Math.random()*16) + 1;
  		
    
  		for ( i = 0 ; i < lim; i++){
  		 $("#content").append(document.createTextNode("<span class=makenew style=cursor:pointer><img width=" + rwi + " height=" + rhi + " src=images/codeback.png /></span>" ))
  		 }
  		});
  $(".score-object").width(content).height(content * 0.7);
  $(".audio-object").width(content);
  $("#content img").width(w * 0.25).css("margin", 0);
  $(".video-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.4);
  $(".audio-iframe").width(content).css("margin", 0).css("padding", 0).height(content * 0.15);
  $(".soundcloud").width(content);
  $("html").click(function() {
  	$("a").animate({
  		color : getRandomColor()
  		}, 2000);
  });
  $(".blog").width(content).height(content);
  $(".image-window img").width(w * 0.2);
  $("#english").click(function() {
    $(".spa").hide(), $(".eng").show()
  });
  $("#spanish").click(function() {
    $(".eng").hide(), $(".spa").show()
  });
  $(".num").css("font-size", "0.8em").css("color", getRandomColor());


/* ====== THIS IS FOR ALL WORK CATEGORIES IN WORKS.PHP ======*/
 		$(".allworks").click(function() {
				$("#content-wrap").fadeOut(300);
				$("#content").load( "all-works.html");
				$("#content-wrap").fadeIn(300);
			});
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
/* ====== end ALL WORK CATEGORIES IN WORKS.PHP ======*/

});
