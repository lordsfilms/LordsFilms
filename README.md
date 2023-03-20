<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="eng","rus">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link rel="manifest" href="{% static "manifest/manifest.json" %}"/>
<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900" rel="stylesheet" />
<link href="default.css" rel="stylesheet" type="text/css" media="all" />
<link href="fonts.css" rel="stylesheet" type="text/css" media="all" />
<!--[if IE 6]>
<link href="default_ie6.css" rel="stylesheet" type="text/css" />
<![endif]-->
</head>
<body>
<div id="root"></div>
   <script src="/static/build/app.js"></script>

   <script>
       if ('serviceWorker' in navigator) {
           window.addEventListener('load', function() {
               navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                   // Registration was successful
               console.log('ServiceWorker registration successful with scope: ', registration.scope);
             }, function(err) {
               // registration failed :(
               console.log('ServiceWorker registration failed: ', err);
             }).catch(function(err) {
               console.log(err)
             });
           });
         } else {
           console.log('service worker is not supported');
         }
   </script>
<div id="wrapper">
	<div id="header-wrapper">
		<div id="header" class="container">
			<div id="logo">
				<h1><a href="#">Lords Films TM</a></h1>
				<p>Design by <a href="" rel="nofollow">TM LORDS</a></p>
			</div>
			<div id="social">
				<ul class="contact">
					<li><a href="#" class="icon icon-instagram"><span>Instagram</span></a></li>
					<li><a href="#" class="icon icon-youtube"><span>Youtube</span></a></li>
					<li><a href="#" class="icon icon-twitter"><span>Twitter</span></a></li>
					<li><a href="#" class="icon icon-pinterest"><span>Pinterest</span></a></li>
					<li><a href="#" class="icon icon-telegram"><span>Telegram</span></a></li>
				</ul>
			</div>
		</div>
		<div id="menu" class="container">
			<ul>
				<li class="current_page_item"><a href="#" accesskey="1" title="">Главная</a></li>
				<li><a href="#" accesskey="1" title="">Services</a></li>
				<li><a href="#" accesskey="2" title="">Our Clients</a></li>
				<li><a href="#" accesskey="3" title="">About Us</a></li>
				<li><a href="#" accesskey="4" title="">Careers</a></li>
				<li><a href="#" accesskey="5" title="">Contact Us</a></li>
			</ul>
		</div>
	</div>
	<div id="welcome-wrapper">
		<div id="welcome">
			<p>This is <strong>LadyTulip</strong>, a free, fully standards-compliant CSS template designed by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. The photos in this template are from <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is released under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so you're pretty much free to do whatever you want with it (even use it commercially) provided you give us credit for it. Have fun :) </p>
		</div>
	</div>
	<div id="page" class="container">
		<div class="column1">
			<div class="title">
				<h2>Fusce ultrices</h2>
				<span class="byline">Integer sit amet pede vel arcu aliquet pretium</span>
			</div>
			<img src="images/pic01.jpg" width="282" height="150" alt="" />
			<p>Donec nonummy magna quis risus. Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus.</p>
			<a href="#" class="button">Learn More</a>
		</div>
		<div class="column2">
			<div class="title">
				<h2>Fusce ultrices</h2>
				<span class="byline">Maecenas vitae orci vitae tellus feugiat eleifend</span>
			</div>
			<img src="images/pic02.jpg" width="282" height="150" alt="" />
			<p>Donec nonummy magna quis risus. Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus.</p>
			<a href="#" class="button">Learn More</a>
		</div>
		<div class="column3">
			<div class="title">
				<h2>Mauris vulputate</h2>
				<span class="byline">Phasellus nec erat sit amet nibh pellentesque congue</span>
			</div>
			<img src="images/pic03.jpg" width="282" height="150" alt="" />
			<p>Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris nec lorem.</p>
			<a href="#" class="button">Learn More</a>
		</div>
		<div class="column4">
			<div class="title">
				<h2>Praesent scelerisque</h2>
				<span class="byline">Pellentesque quis elit non lectus gravida blandit</span>
			</div>
			<img src="images/pic04.jpg" width="282" height="150" alt="" />
			<p>Quisque eleifend. Phasellus tempor vehicula justo. Aliquam lacinia metus ut elit. Suspendisse iaculis mauris.</p>
			<a href="#" class="button">Learn More</a>
		</div>
	</div>
	<div id="portfolio-wrapper">
		<div id="portfolio" class="container">
			<div class="title">
				<h2>Aenean elementum</h2>
				<span class="byline">Integer sit amet pede vel arcu aliquet pretium</span> </div>
			<div class="column1">
				<div class="box">
					<h3>Vestibulum venenatis</h3>
					<p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
					<a href="#" class="button">Learn More</a> </div>
			</div>
			<div class="column2">
				<div class="box">
					<h3>Praesent scelerisque</h3>
					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
					<a href="#" class="button">Learn More</a> </div>
			</div>
			<div class="column3">
				<div class="box">
					<h3>Donec dictum metus</h3>
					<p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
					<a href="#" class="button">Learn More</a> </div>
			</div>
			<div class="column4">
				<div class="box">
					<h3>Mauris vulputate dolor</h3>
					<p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
					<a href="#" class="button">Learn More</a> </div>
			</div>
		</div>
	</div>
</div>
<div id="footer">
	<p>&copy; Untitled. All rights reserved. Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. Photos by <a href="http://fotogrph.com/">Fotogrph</a>.</p>
</div>
</body>
</html>

