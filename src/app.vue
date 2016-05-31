
<template>
	<nav class="sidemenu initial"
		v-touch:pan="handleSwipe"
	 	v-touch-options:pan="{ direction: 'horizontal' }">
		<nav class="menu-items subehader top-nav">
			<div class="first header">
					Plus
			</div>
			<div v-for="menu in menu_items" class="main-menu-wrapper">
				<a class="main-menu-container" v-link="{ path: menu.url }">
					<div class="">
						<div class="visibleicon" v-html="menu.icon"></div>
						<div class="main-menu-wrapper text">{{ menu.title }}</div>
					</div>
				</a>
			</div>
		</nav>
	</nav>
	<section id="container" >
		<header id="header"></header>
		<section class="content" >
			<router-view keep-alive></router-view>
		</section>
		<!-- <footer id="footer" >This is a footer</footer> -->
	</section>
</template>

<script>

export default {
  data () {
    return {
      authenticating: false,
			menu_items: [
				{title: 'Home', url: '/', icon:`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 9L13 6V2H11v2L8 1 0 9h2l1 5c0 0.55 0.45 1 1 1h8c0.55 0 1-0.45 1-1l1-5h2zM12 14H9V10H7v4H4l-1.19-6.31 5.19-5.19 5.19 5.19-1.19 6.31z" /></svg>`},
				{title: 'Artists', url: '/artists', icon:`<svg height="16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11 6H1c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h10c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1zM2 9H1V7h1v2z m2 0h-1V7h1v2z m2 0h-1V7h1v2z m2 0h-1V7h1v2zM11 1H1C0.45 1 0 1.45 0 2v2c0 0.55 0.45 1 1 1h10c0.55 0 1-0.45 1-1V2c0-0.55-0.45-1-1-1zM2 4H1V2h1v2z m2 0h-1V2h1v2z m2 0h-1V2h1v2z m2 0h-1V2h1v2z m3-1h-1v-1h1v1z m0 8H1c-0.55 0-1 0.45-1 1v2c0 0.55 0.45 1 1 1h10c0.55 0 1-0.45 1-1V12c0-0.55-0.45-1-1-1zM2 14H1V12h1v2z m2 0h-1V12h1v2z m2 0h-1V12h1v2z m2 0h-1V12h1v2z" /></svg>`},
				{title: 'Organize', url: '/organize', icon:`<svg height="16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z" /></svg>`},
				{title: 'Settings', url: '/settings', icon:`<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15.67 7.06l-1.08-1.34c-0.17-0.22-0.28-0.48-0.31-0.77l-0.19-1.7c-0.08-0.7-0.63-1.25-1.33-1.33l-1.7-0.19c-0.3-0.03-0.56-0.16-0.78-0.33l-1.34-1.08c-0.55-0.44-1.33-0.44-1.88 0l-1.34 1.08c-0.22 0.17-0.48 0.28-0.77 0.31l-1.7 0.19c-0.7 0.08-1.25 0.63-1.33 1.33l-0.19 1.7c-0.03 0.3-0.16 0.56-0.33 0.78l-1.08 1.34c-0.44 0.55-0.44 1.33 0 1.88l1.08 1.34c0.17 0.22 0.28 0.48 0.31 0.77l0.19 1.7c0.08 0.7 0.63 1.25 1.33 1.33l1.7 0.19c0.3 0.03 0.56 0.16 0.78 0.33l1.34 1.08c0.55 0.44 1.33 0.44 1.88 0l1.34-1.08c0.22-0.17 0.48-0.28 0.77-0.31l1.7-0.19c0.7-0.08 1.25-0.63 1.33-1.33l0.19-1.7c0.03-0.3 0.16-0.56 0.33-0.78l1.08-1.34c0.44-0.55 0.44-1.33 0-1.88zM6.5 12L3 8.5l1.5-1.5 2 2 5-5 1.5 1.55-6.5 6.45z" /></svg>`}
			],
			menu: null,
			lastPos: 0,
			maxDrag: 1000
    }
  },
	methods: {
		handleSwipe: function (e) {
			var pos = this.lastPos + e.deltaX
			if (pos > this.maxDrag) {
				this.lastPos = this.maxDrag
			} else {
				this.menu.style['transform'] = `translate3d(${pos}px, 0, 0)`
				if (e.isFinal) {
					this.lastPos += e.deltaX
				}
			}
		}
	},
	ready () {
		this.menu = document.querySelector('nav.sidemenu')
		// REVIEW(eljefedelrodeodeljefe): somewhat underterministic, not always same max
		this.maxDrag = parseInt(window.getComputedStyle(this.menu, null).width, 10) * 0.8
	}
}
</script>


<style>
html, body {
  height: 100%;
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
	font-family: sans-serif;
}
#container {
  display: -webkit-flex;
  -webkit-flex-direction: column;
  height: 100%;

  width: 100%;
  background-color: rgb(242, 242, 242);
}

#container header {
    background-color: gray;
}
section.content {
    -webkit-flex: 1 1 100%;
    min-height: 0px;
  display: flex;
}

nav.content {
  flex: 1 20em;
	overflow-y: scroll;
}

article {
  flex: 2 100%;
   overflow-y: scroll;
}
#container footer {
    background-color: gray;
}



nav.sidemenu {
	position: absolute;
	background-color: rgba(0, 0, 0, 0);;
	height: 100%;
	width: 14em;
	z-index: 50;
}

nav.sidemenu.initial {
	left: -13.8em; /* parent *0.95  + 0.1em line + 0.15 + 0.5 */
}

nav.sidemenu > nav.menu-items {
	border-radius: 0.2em;
	border-width: 0.15em	;
	border-style: solid;
	border-color: rgba(214, 214, 214, 1);
	background-color: rgba(231, 231, 223, 1);
	padding-right: 0.5em;
	height: 100%;
	width: 95%;
}

div.main-menu-wrapper {
	width: 100%;
}

div.first.header {
	padding-left: 2em;
	line-height: 3em;
	font-size: 2em;
	height: 3em;
}

a.main-menu-container > div {
	margin-top: 0.2em;
	box-shadow: 0 0 0 0.1em rgba(159, 159, 159, 0.5) inset;
	display: flex;
	flex-direction: row;
	color: white;
	width: 100%;
	background-color: rgba(159, 141, 230, 1);
	border-radius: 0.4em;
	border-width: 0.15em;
	border-style: solid;
	border-color: rrgba(29, 77, 92, 1);
	max-height: 3em;
	font-size: 1.2em;
	line-height: 3em;
}

a.main-menu-container > div > div.visibleicon {
	line-height: 3em;
	margin-left: 1em;
	width: 2em;
}

a.main-menu-container > div > div.visibleicon > svg {

}

header#header {
	height: 2.5em;
	background-color: rgba(245, 245, 245, 1);
	border-color: rgba(215, 215, 215, 1);
	border-width: thin;
	border-style: solid;
	border-radius: 0.1em;
	margin-bottom: 0.2em;
	box-shadow: 0 0.1em 0.1em 0 rgba(0,0,0,0.07);
}

</style>
