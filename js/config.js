////////////
//// Below are some editable variables
////////////
var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var blog = "https://fedecamarahalac.tumblr.com";
var video = "https://vimeo.com/fedecamarahalac";
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var title = "Multimedianautics";
var subtitle = "Fede Camara Halac";
var logoimage = "img/fdch.jpg";
var featURL = ["https://player.vimeo.com/video/168692629?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://www.youtube.com/embed/hXONutQ_vYc?rel=0&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/GA0_ieFjpuM?list=PL6f_f6nYVx1dLCGwSP5BQNN78SgNT2L2G&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/gErNVvwsOdI?rel=0&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/HpPNVJsn3XQ?rel=0&amp;controls=0&amp;showinfo=0", "https://player.vimeo.com/video/189384117?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0", "https://player.vimeo.com/video/137084409?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/135750747?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/189537568?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/189548950?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/128082938?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/128763368?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/103288412?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/93202065?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"];
var bioOpen = "<article><a href=\"img/fdch.jpg\"><img src=\"img/fdch.jpg\" title=\"[ph] aye savid\"width=200></a><h4>curriculum vitae (<a href=\"cv/\" target=\"_blank\">html</a>, <a href=\"cv/pdf/cv.pdf\" target=\"_blank\">pdf</a>)</h4>";
var bioClose = "</article>";
var sheetID = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ";
var magicNumber = "1";
var sheetURL = "https://spreadsheets.google.com/feeds/list/"+sheetID+"/"+magicNumber+"/public/values?alt=json";
var contact = "<article><h3>contact</h3><p>Send me an email at <a hred=\"mailto:"+email+"\">"+email+"</a> and I will get in touch with you as fast as humanly possible. You can also follow me on social networks</p><img src=\"img/zissou.gif\" width=200/></article>";
var gameDraw = ["draw/", "img/draw.png", "Draw concentrical polygons as they get smaller. Print page when you are done."];
var gameType = ["<button onclick=\"window.open(\'"+gameDraw[0]+"\')\" >draw</button><p>"+gameDraw[2]+"</p><img onclick=\"window.open(\'"+gameDraw[0]+"\')\" src=\""+gameDraw[1]+"\"/>",""];
var games = "<article>"+gameType[0]+"</article>";

////////////
////Title
////////////
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=menu></div><div id=submenu></div><div id=content></div>";
////////////
//// Meta properties
////////////
var keywords = "fedecamara, camarafede, fedecamarahalac, federico, camara, halac, camarahalac, puredata, lilypond, electronics, live video, instrumental, new music, abstract";
var fbappid = 123442671081764;
var meta = "<meta property=og:image content='fdch.github.io/wp/"+logoimage+"'/><meta name=keywords content='"+keywords+"' /><meta name=description content='" + url + "'<meta name=robots content='index, follow' /><meta name=author content='http://githug.io/fdch' /><meta property=fb:app_id content="+fbappid+"/><meta property=og:url content='" + url + "' /><meta property=og:title content='" + title + "' /><meta property=og:site_name content='" + keywords + "'/><title>" + title + " | " + subtitle + "</title>";
var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-60190278-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->";

var social = [ {
"Twitter":"http://www.twitter.com/fedecamarahalac",
"Facebook":"http://www.facebook.com/fedecamarahalac",
"SoundCloud":"http://www.soundcloud.com/fedecamarahalac",
"Vimeo":"http://www.vimeo.com/fedecamarahalac",
"Vine":"http://www.vine.co/fedecamarahalac",
"YouTube":"https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA",
"Tumblr":"http://fedecamarahalac.tumblr.com",
"Flickr":"http://www.flickr.com/federicocamarahalac",
"Linkedin":"http://linkedin.com/in/fedecamarahalac",
"Judy Klein":"https://en.wikipedia.org/wiki/Judy_Klein",
"Jaime Oliver La Rosa":"http://www.jaimeoliver.pe",
"Elizabeth Hoffman":"https://soundcloud.com/eliz-hoffman",
"Jose Halac":"https://soundcloud.com/josehalac",
"Bernardo Barros":"http://www.bernardobarros.com",
"Pablo Behm":"http://www.pablobehm.com.ar",
"Federico Ragessi":"http://www.federagessi.com.ar",
"Adele Fournet":"http://www.adelefournet.com",
"Viola Yip":"http://www.violayip.com",
"Ioannis Angelakis":"http://www.ioannisangelakis.com",
"Joe Snape":"http://joesna.pe",
"loadbang":"http://www.loadbang.com",
"Tak":"http://www.takensemble.com",
"Momenta Quartet":"http://www.momentaquartet.com",
"Talea Ensemble":"http://taleaensemble.org/",
"Ensemble Mise-En":"http://www.miseen.org",
"Proyecto[Red]Ensamble":"http://www.proyectoredensamble.com.ar",
"Sapegoat":"http://www.scapegoat.fr",
"Waverly Project":"http://www.waverlyproject.org",
"Bienal Composicion Cordoba":"http://www.cordobabienal.com",
"Puredata":"http://msp.ucsd.edu/",
"@ayesavid":"http://www.instagram.com/ayesavid"
} ];