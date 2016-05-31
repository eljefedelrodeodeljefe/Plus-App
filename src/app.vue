
<template>
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
      authenticating: false
    }
  },
	methods: {

	},
	ready () {

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
