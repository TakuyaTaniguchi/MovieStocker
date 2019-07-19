<template>
	 <section class="l-section -is-medium">
		 <div class="container">
			<h2 class="c-articleTitle">	{{data}}</h2>
		 </div>
	 </section>
</template>

<script>
	export default {
		async asyncData({ route,app }){
			const data = route.params.id;
			console.log(data);
			return {data};
		}
	}
</script>