var w, h, t = 4333;
var mitem = ["bio", "work", "next", "social", "games", "blog", "video", "code", "contact"];
var lang = "<div id=languages><span class=menulink-left><span id=english ><spa class=eng>[</spa>en<spa class=eng>]</spa></span>  <span id=spanish ><spa class=spa >[</spa>es<spa class=spa >]</span></span></div>";
var url = "https://fdch.github.io/tv";
var repo = "https://github.com/fdch/";
var blog = "https://fedecamarahalac.tumblr.com";
var video = "https://vimeo.com/fedecamarahalac";
var email = "fch226@nyu.edu";
var facebookUrl = "https://www.facebook.com/fedecamarahalac/";
var title = "Multimedianautics";
var subtitle = "Fede Camara Halac";
var logoimage = "img/fdch.jpg";
var bioFile = "cv/txt/bio-english.txt";
var featWork = "a.le.a";
var featURL = ["https://player.vimeo.com/video/168692629?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://www.youtube.com/embed/hXONutQ_vYc?rel=0&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/GA0_ieFjpuM?list=PL6f_f6nYVx1dLCGwSP5BQNN78SgNT2L2G&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/gErNVvwsOdI?rel=0&amp;controls=0&amp;showinfo=0","https://www.youtube.com/embed/HpPNVJsn3XQ?rel=0&amp;controls=0&amp;showinfo=0", "https://player.vimeo.com/video/189384117?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0", "https://player.vimeo.com/video/137084409?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/135750747?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/189537568?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/189548950?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/128082938?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/128763368?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/103288412?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0","https://player.vimeo.com/video/93202065?title=0&byline=0&portrait=0&likes=0&watchlater=0&share=0"];
var bioOpen = "<article><a href=\"img/fdch.jpg\"><img src=\"img/fdch.jpg\" title=\"[ph] aye savid\"width=200></a><h4>curriculum vitae (<a href=\"cv/\" target=\"_blank\">html</a>, <a href=\"cv/pdf/cv.pdf\" target=\"_blank\">pdf</a>)</h4>";
var bioClose = "</article>";
var sheetID = "1e5dh1sZX1QuFFioC-1ofcPIPhwU9i-lvUzOzn4_3SLQ";
var magicNumber = "1";
var sheetURL = "https://spreadsheets.google.com/feeds/list/"+sheetID+"/"+magicNumber+"/public/values?alt=json";
var next = "<article><h3>next</h3><p>I'm delighted to be part of this year's Viginia Tech Cube Fest (<a href=\"https://www.icat.vt.edu/content/cube-fest-2017\" target=_blank>info here</a>). I will take part of the Workshop at the Cube and will write a piece to be performed there on August 3rd. More info soon...</p></article>";
var contact = "<article><h3>contact</h3><p>Send me an email at <a href=\"mailto:"+email+"\">"+email+"</a> and I will get in touch with you as fast as humanly possible. You can also follow me on social networks</p><img src=\"img/zissou.gif\" width=200/></article>";
var gameDraw = ["draw/", "img/draw.png", "Draw concentrical polygons as they get smaller. Print page when you are done."];
var gameType = ["<button onclick=\"window.open(\'"+gameDraw[0]+"\')\" >draw</button><p>"+gameDraw[2]+"</p><img onclick=\"window.open(\'"+gameDraw[0]+"\')\" src=\""+gameDraw[1]+"\"/>",""];
var games = "<article>"+gameType[0]+"</article>";
var titleData = "<h1 onclick=\"location.href='"+ url + "'\">"+ title +"</h1><h2 onclick=\"location.href='" + url + "'\">" + subtitle + "</h2><div id=menu></div><div id=submenu></div><div id=content></div>";
var keywords = "fedecamara, camarafede, fedecamarahalac, federico, camara, halac, camarahalac, puredata, lilypond, electronics, live video, instrumental, new music, abstract";
var fbappid = 123442671081764;
var meta = "<meta property=og:image content='fdch.github.io/wp/"+logoimage+"'/><meta name=keywords content='"+keywords+"' /><meta name=description content='" + url + "'<meta name=robots content='index, follow' /><meta name=author content='http://githug.io/fdch' /><meta property=fb:app_id content="+fbappid+"/><meta property=og:url content='" + url + "' /><meta property=og:title content='" + title + "' /><meta property=og:site_name content='" + keywords + "'/><title>" + title + " | " + subtitle + "</title>";
var analytics = "<!--Google Analytics--><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-60190278-1', 'auto');ga('send', 'pageview');</script><!--End Google Analytics-->";
var social = [ {
"Soc":"Social",
"Github" : repo,
"Twitter":"http://www.twitter.com/fedecamarahalac",
"Facebook": facebookUrl,
"SoundCloud":"http://www.soundcloud.com/fedecamarahalac",
"Vimeo": video,
"Vine":"http://www.vine.co/fedecamarahalac",
"YouTube":"https://www.youtube.com/channel/UCzOx-iKaNx9ruddNI6ykTIA",
"Tumblr": blog,
"Flickr":"http://www.flickr.com/federicocamarahalac",
"Linkedin":"http://linkedin.com/in/fedecamarahalac",
"Pep":"People",
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
"Ens":"Ensembles",
"loadbang":"http://www.loadbang.com",
"Tak":"http://www.takensemble.com",
"Momenta Quartet":"http://www.momentaquartet.com",
"Talea Ensemble":"http://taleaensemble.org/",
"Ensemble Mise-En":"http://www.miseen.org",
"Proyecto[Red]Ensamble":"http://www.proyectoredensamble.com.ar",
"Sapegoat":"http://www.scapegoat.fr",
"Org":"Organizations",
"Waverly Project":"http://www.waverlyproject.org",
"Bienal Composicion Cordoba":"http://www.cordobabienal.com",
"Puredata":"http://msp.ucsd.edu/",
"@ayesavid":"http://www.instagram.com/ayesavid"
} ];
var prev;
var vis = function(x) {
  var y = document.getElementById(x);
  if (prev != null) prev.style.display = 'none';
  if (y != null) y.style.display = 'block', prev=y;
};