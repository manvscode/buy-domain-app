<template>
	<div id="app" class="container">
		<div id="header" class="row">
			<div class="col-md-12">
			</div>
		</div>
		<div id="content">
			<router-view/>
		</div>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@300;400&display=swap');

h1, h2, h3, h4, h5, h6 {
	font-family: 'Oswald', sans-serif;
	color: #5a70a6;
}
a { color: #25327a; font-weight: bold; }
a:hover { color: #c272ad; }
.btn { background-color: #25327a; border: none; }
.btn:hover { background-color: #c272ad; }

body, html {
	font-family: 'Open Sans', sans-serif;
	height: 100%
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

#header {
	margin-top: 1em;
}


#header #title {
	font-size: 300%;
	font-family: 'Oswald', sans-serif;
	color: #5a70a6;
	/*
	*/
	background-position: 0px center;
	background-size: 42px 42px;
	background-repeat: no-repeat;
	margin: 0px auto 0px auto;
	width: 320px;
}

#main-links {
	font-family: 'Oswald', sans-serif;
	text-transform: uppercase;
}

#content {
	padding-top: 1em;
}
#push { height: 10em; }

#footer {
	clear: both;
	padding-top: 4em;
	text-align: center;
	color: #74b3c4;
	font-weight: bold;
}

</style>
