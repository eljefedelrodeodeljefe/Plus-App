
<template>
	<div class="body-container" >
		<!-- <header id="header"></header> -->
		<section class="content" >
			<router-view keep-alive></router-view>
		</section>
		<!-- <footer id="footer" >This is a footer</footer> -->
	</div>
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
  width: 100%;
  padding: 0;
  margin: 0;
	font-family: sans-serif;
	overflow-x: hidden;
}
</style>
