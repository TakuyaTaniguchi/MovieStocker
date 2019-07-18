<template>
  <div>
    <section class="l-section -is-medium">
      <div class="container">
        <h2 class="title">最新映画情報</h2>
        <ul class="c-card">
          <li v-for="result in results" :key="result.id" class="c-card_item">
            <div class="c-card_inner">
              <!-- <h3>{{result.title}}</h3> -->
              <img :src="`https://image.tmdb.org/t/p/w780/${result.backdrop_path}`" >
              <!-- <p>{{ result.overview}}</p> -->
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
	export default {
    async asyncData({app}){
      const data = await app.$axios.$get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.TMDB_KEY}&language=ja-JA`);
      const results = data.results;
			return {
        results
			}
		}
	}
</script>

<style>

</style>

