<template>
  <div>
    <section class="section is-medium">
      <div class="container">
        <h2 class="title">最新映画情報</h2>
        <ul>
          <li v-for="result in results" :key="result.id">
            <div>
              <img :src="`https://image.tmdb.org/t/p/w185/${result.backdrop_path}`" >
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
      console.dir(data);
			return {
        results
			}
		}
	}
</script>

<style>
.container {
  min-height: 20vh;
  padding: 16px;
}

h3{
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}
ul{
  margin-top: 45px;
}
li{
    border-radius: 10px;
    border: solid 3px #ffb3b3;
    padding: 15px;
    word-break: break-all;
}
li + li {
  margin-top: 60px;
}

p {
  margin: 8px 0;
}

a{
  word-break: break-all;
}
</style>

