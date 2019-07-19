<template>
	 <section class="l-section -is-medium">
		 <div class="container">
			<h2 class="c-articleTitle">	{{data.title}}</h2>
			<div class="p-item">
				<div class="c-descHasPoster">
					<div class="c-descHasPoster_poster">
						<img :src="`https://image.tmdb.org/t/p/w780/${data.poster_path}`" alt='poster' >
					</div>
					<div class="c-descHasPoster_desc">
						<p>{{ data.overview }}</p>
					</div>
				</div>
			</div>
		 </div>
	 </section>
</template>

<script>
	export default {
		async asyncData({ route,app }){
			const id = route.params.id;
			const data = await app.$axios.$get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=ja-JA`);
			console.log(data);
			return { data };
		}
	}
</script>