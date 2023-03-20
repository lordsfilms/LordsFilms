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
<style>
	html, body {
	height: 100%;
}

body {
	margin: 0px;
	padding: 0px;
	background: #222222;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 12pt;
	font-weight: 400;
	color: rgba(0,0,0,.8);
}

h1, h2, h3 {
	margin: 0;
	padding: 0;
	text-transform: uppercase;
	font-weight: 300;
	color: #2D2D2D;
}

h2 {
	padding: 0px 0px 30px 0px;
	font-size: 2.50em;
}

p, ol, ul {
	margin-top: 0px;
}

p {
	line-height: 180%;
}

strong {
}

a {
	color: rgba(0,0,0,.8);
}

a:hover {
	text-decoration: none;
}

a img {
	border: none;
}

/*********************************************************************************/
/* Image Style                                                                   */
/*********************************************************************************/

	.image
	{
		display: inline-block;
		border: 1px solid rgba(0,0,0,.1);
	}
	
	.image img
	{
		display: block;
		width: 100%;
	}
	
	.image-full
	{
		display: block;
		width: 100%;
		margin: 0 0 3em 0;
	}
	
	.image-left
	{
		float: left;
		margin: 0 2em 2em 0;
	}
	
	.image-centered
	{
		display: block;
		margin: 0 0 2em 0;
	}
	
	.image-centered img
	{
		margin: 0 auto;
		width: auto;
	}


hr {
	display: none;
}

/** WRAPPER */

#wrapper {
	background: #0d0d0d;
	margin: 0px 20px;
}

.container {
	width: 1200px;
	margin: 0px auto;
}

.clearfix {
	clear: both;
}

/** HEADER */

#header-wrapper
{
	background: url(images/bg.jpg) no-repeat center top;
	background-size: cover;
}

#header {
	position: relative;
	overflow: hidden;
	height: 600px;
}

#social
{
	position: absolute;
	top: 4em;
	right: 0;
}

/** LOGO */

#logo {
	position: absolute;
	top: 3em;
	left: 0;
}

#logo h1, #logo p {
	margin: 0;
	padding: 0;
}

#logo h1 {
	background: #ff304d;
	letter-spacing: -1px;
	text-align: center;
	text-transform: lowercase;
	font-size: 3.5em;
	color: #FFF;
}

#logo p {
	padding: 0.1em 1em;
	background: #23221f;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	font-size: 0.9em;
	color: #FFF;
}

#logo p a {
	color: #FFF;
}

#logo a {
	border: none;
	background: none;
	text-decoration: none;
	color: #FFF;
}

/** MENU */

#menu {
	overflow: hidden;
	background: #101010;
}

#menu ul {
	margin: 0px 0px 0px 0px;
	padding: 0px 0px;
	list-style: none;
	line-height: normal;
	text-align: center;
}

#menu li {
	display: inline-block;
}

#menu a {
	display: block;
	padding: 0px 40px 0px 40px;
	line-height: 70px;
	text-decoration: none;
	text-transform: uppercase;
	text-align: center;
	font-size: 16px;
	font-weight: 200;
	color: rgba(255,255,255,0.5);
	border: none;
}

#menu a:hover, #menu .current_page_item a {
	text-decoration: none;
	color: rgba(255,255,255,0.8);
	border-top: 2px solid #ff304d;
}

#menu .current_page_item a {
}

#menu .last {
	border-right: none;
}

/** PAGE */

	#page {
		overflow: hidden;
		padding: 5em 0em;
		color: rgba(255,255,255,0.4);
		text-align: center;
	}

	#page img
	{
		margin-bottom: 1em;
	}

	#page .title
	{
		margin-bottom: 2em;
	}

	#page .title h2
	{
		font-size: 1.5em;
		font-weight: 400;
		color: rgba(255,255,255,0.8);
	}
	
	#page .title .byline
	{
		display: block;
		padding-bottom: 1em;
		font-size: 0.90em;
		color: rgba(255,255,255,0.4);
	}

/** CONTENT */

#content {
	float: left;
	width: 800px;
	padding-right: 50px;
	border-right: 1px solid #E6E7DC;
}

#content .post-title
{
	margin-bottom: 2em;
}

#content .post-title h2
{
	margin: 0;
	padding: 0;
}


#content .post
{
	margin-bottom: 4em;
	padding-bottom: 4em;
	border-bottom: 1px solid #E6E7DC;
}

/** SIDEBAR 1 */

#sidebar1 {
	float: right;
	width: 250px;
	margin-right: 50px;
}

#sidebar1 #box1 {
	margin-bottom: 4em;
}

#sidebar1 h2,
#sidebar2 h2
{
	font-size: 1.5em;
	font-weight: 400;
}

/** SIDEBAR 2 */

#sidebar2 {
	float: right;
	width: 250px;
}

/* Footer */

#footer {
	overflow: hidden;
	padding: 50px 0px 30px 0px;
}

#footer p {
	text-align: center;
	color: rgba(255,255,255,0.1);
}

#footer a {
	color: rgba(255,255,255,0.2);
}

/* List style 1 */

ul.style1 {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

ul.style1 li {
	padding: 10px 0px 15px 0px;
	border-top: 1px solid #E6E7DC;
}

ul.style1 .first {
	padding-top: 0px;
	border-top: none;
}

/* List style 2 */

ul.style2 {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

ul.style2 li {
	padding: 25px 0px 15px 0px;
	border-top: 1px solid #E6E7DC;
}

ul.style2 .first {
	padding-top: 0px;
	border-top: none;
}

ul.style2 h3 {
	padding: 0px 0px 10px 0px;
	font-size: 1.10em;
}

ul.style2 h3 a {
	color: #101010;
}

ul.style2 a {
	text-decoration: none;
}

ul.style2 a:hover {
	text-decoration: underline;
}


/* List style 3 */

ul.style3 {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

ul.style3 li {
	padding: 20px 0px 20px 0px;
	border-top: 1px solid #E6E7DC;
}

ul.style3 p {
	margin: 0px;
	padding: 0px;
}

ul.style3 img {
	float: left;
	margin-top: 3px;
	margin-right: 20px;
}

ul.style3 .posted {
	padding: 10px 0px 10px 0px;
	font-size: 8pt;
	color: #A2A2A2;
}

ul.style3 .first {
	padding-top: 0px;
	border-top: none;
}

.link-style {
	display: inline-block;
	margin-top: 20px;
	padding: 7px 20px;
	background: #0C73D4;
	border-radius: 5px;
	text-decoration: none;
	text-transform: uppercase;
	color: #FFFFFF;
}


/*********************************************************************************/
/* Portfolio                                                                     */
/*********************************************************************************/

	#portfolio-wrapper
	{
		overflow: hidden;
		padding: 5em 0em;
		background: #eeeeee;
		background-repeat: repeat;
		border-top: 1px solid rgba(0,0,0,.05);
	}
	
	#portfolio
	{
		text-align: center;
	}

	#portfolio .box
	{
		color: rgba(0,0,0,0.5);
	}
	
	#portfolio h3
	{
		display: block;
		padding-bottom: 1em;
		text-transform: uppercase;
		font-size: 1.2em;
		font-weight: 400;
		color: rgba(0,0,0,0.7);
	}

	#portfolio .title
	{
	}

	#portfolio .title h2
	{
		color: rgba(0,0,0,0.8);
	}
	
	#portfolio .title .byline
	{
		display: block;
		padding-bottom: 2em;
		color: rgba(0,0,0,0.7);
	}

	.column1,
	.column2,
	.column3,
	.column4
	{
		width: 282px;
	}
	
	.column1,
	.column2,
	.column3
	{
		float: left;
		margin-right: 24px;
	}
	
	.column4
	{
		float: right;
	}

/*********************************************************************************/
/* Heading Titles                                                                */
/*********************************************************************************/

	.title
	{
		margin-bottom: 3em;
	}
	
	.title h2
	{
		margin: 0;
		padding: 0;
		font-size: 2.8em;
		color: rgba(255,255,255,0.9);
	}
	
	.title .byline
	{
		padding-top: 0.50em;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1.1em;
		color: #6F6F6F;
	}

/*********************************************************************************/
/* Button Style                                                                  */
/*********************************************************************************/

	.button
	{
		display: inline-block;
		margin-top: 2em;
		padding: 0em 2em;
		background: #ff304d;
		letter-spacing: 0.10em;
		line-height: 3em;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1em;
		color: #FFF;
	}
	
/*********************************************************************************/
/* Social Icon Styles                                                            */
/*********************************************************************************/

	ul.contact
	{
		background: #ff304d;
		margin: 0;
		padding: 0.5em 1em;
		border-radius: 30px;
		list-style: none;
	}
	
	ul.contact li
	{
		display: inline-block;
		padding: 0em 0.10em;
		font-size: 1em;
	}
	
	ul.contact li span
	{
		display: none;
		margin: 0;
		padding: 0;
	}
	
	ul.contact li a
	{
	}
	
	ul.contact li a:before
	{
		display: inline-block;
		background: none;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: rgba(255,255,255,1);
	}
	

	#welcome-wrapper
	{
		padding: 5em 6em 4em 6em;
		background: #ff304d;
		font-size: 1.2em;
		color: rgba(255,255,255,0.7);
	}
	
	#welcome
	{
		text-align: center;
	}
	
	#welcome a,
	#welcome strong
	{
		color: rgba(255,255,255,1);
	}
</style>
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

